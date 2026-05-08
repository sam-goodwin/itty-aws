// ==========================================================================
// Content API for Shopping (content v2.1)
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
  name: "content",
  version: "v2.1",
  rootUrl: "https://shoppingcontent.googleapis.com/",
  servicePath: "content/v2.1/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ProductstatusesCustomBatchRequestEntry {
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The ID of the product whose status to get. */
  productId?: string;
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: ReadonlyArray<string>;
  /** The method of the batch entry. Acceptable values are: - "`get`" */
  method?: string;
  /** Deprecated: Setting this field has no effect and attributes are never included. */
  includeAttributes?: boolean;
  /** The ID of the managing account. */
  merchantId?: string;
}

export const ProductstatusesCustomBatchRequestEntry: Schema.Schema<ProductstatusesCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    productId: Schema.optional(Schema.String),
    destinations: Schema.optional(Schema.Array(Schema.String)),
    method: Schema.optional(Schema.String),
    includeAttributes: Schema.optional(Schema.Boolean),
    merchantId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductstatusesCustomBatchRequestEntry" });

export interface PaymentServiceProviderLinkInfo {
  /** The id used by the third party service provider to identify the merchant. */
  externalAccountId?: string;
  /** The business country of the merchant account as identified by the third party service provider. */
  externalAccountBusinessCountry?: string;
}

export const PaymentServiceProviderLinkInfo: Schema.Schema<PaymentServiceProviderLinkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalAccountId: Schema.optional(Schema.String),
    externalAccountBusinessCountry: Schema.optional(Schema.String),
  }).annotate({ identifier: "PaymentServiceProviderLinkInfo" });

export interface Content_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Content_Date: Schema.Schema<Content_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Content_Date" });

export interface RecommendationCreative {
  /** URL of the creative. */
  uri?: string;
  /** Type of the creative. */
  type?: "CREATIVE_TYPE_UNSPECIFIED" | "VIDEO" | "PHOTO" | (string & {});
}

export const RecommendationCreative: Schema.Schema<RecommendationCreative> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecommendationCreative" });

export interface AccountTaxTaxRule {
  /** Country code in which tax is applicable. */
  country?: string;
  /** Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID). */
  locationId?: string;
  /** Whether the tax rate is taken from a global tax table or specified explicitly. */
  useGlobalRate?: boolean;
  /** If true, shipping charges are also taxed. */
  shippingTaxed?: boolean;
  /** Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative. */
  ratePercent?: string;
}

export const AccountTaxTaxRule: Schema.Schema<AccountTaxTaxRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    useGlobalRate: Schema.optional(Schema.Boolean),
    shippingTaxed: Schema.optional(Schema.Boolean),
    ratePercent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountTaxTaxRule" });

export interface AccountGoogleMyBusinessLink {
  /** The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API. */
  gmbAccountId?: string;
  /** The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile. */
  gmbEmail?: string;
  /** Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`" */
  status?: string;
}

export const AccountGoogleMyBusinessLink: Schema.Schema<AccountGoogleMyBusinessLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gmbAccountId: Schema.optional(Schema.String),
    gmbEmail: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountGoogleMyBusinessLink" });

export interface AccountCustomerService {
  /** Customer service phone number. */
  phoneNumber?: string;
  /** Customer service URL. */
  url?: string;
  /** Customer service email. */
  email?: string;
}

export const AccountCustomerService: Schema.Schema<AccountCustomerService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountCustomerService" });

export interface AccountAddress {
  /** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
  locality?: string;
  /** Street-level part of the address. Use `\n` to add a second line. */
  streetAddress?: string;
  /** Postal code or ZIP (for example, "94043"). */
  postalCode?: string;
  /** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
  region?: string;
  /** CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts. */
  country?: string;
}

export const AccountAddress: Schema.Schema<AccountAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locality: Schema.optional(Schema.String),
    streetAddress: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountAddress" });

export interface AccountBusinessInformation {
  /** The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. */
  koreanBusinessRegistrationNumber?: string;
  /** The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`. */
  phoneNumber?: string;
  /** The customer service information of the business. */
  customerService?: AccountCustomerService;
  /** The address of the business. Use `\n` to add a second address line. */
  address?: AccountAddress;
  /** Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`" */
  phoneVerificationStatus?: string;
}

export const AccountBusinessInformation: Schema.Schema<AccountBusinessInformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    koreanBusinessRegistrationNumber: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    customerService: Schema.optional(AccountCustomerService),
    address: Schema.optional(AccountAddress),
    phoneVerificationStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountBusinessInformation" });

export interface AccountShippingImprovements {
  /** Enables automatic shipping improvements. */
  allowShippingImprovements?: boolean;
}

export const AccountShippingImprovements: Schema.Schema<AccountShippingImprovements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowShippingImprovements: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountShippingImprovements" });

export interface AccountImageImprovementsSettings {
  /** Enables automatic image improvements. */
  allowAutomaticImageImprovements?: boolean;
}

export const AccountImageImprovementsSettings: Schema.Schema<AccountImageImprovementsSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowAutomaticImageImprovements: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountImageImprovementsSettings" });

export interface AccountImageImprovements {
  /** Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
  effectiveAllowAutomaticImageImprovements?: boolean;
  /** Determines how the images should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator. */
  accountImageImprovementsSettings?: AccountImageImprovementsSettings;
}

export const AccountImageImprovements: Schema.Schema<AccountImageImprovements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveAllowAutomaticImageImprovements: Schema.optional(Schema.Boolean),
    accountImageImprovementsSettings: Schema.optional(
      AccountImageImprovementsSettings,
    ),
  }).annotate({ identifier: "AccountImageImprovements" });

export interface AccountItemUpdatesSettings {
  /** If price updates are enabled, Google always updates the active price with the crawled information. */
  allowPriceUpdates?: boolean;
  /** If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product. */
  allowConditionUpdates?: boolean;
  /** If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page. */
  allowAvailabilityUpdates?: boolean;
  /** If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also allow availability updates. */
  allowStrictAvailabilityUpdates?: boolean;
}

export const AccountItemUpdatesSettings: Schema.Schema<AccountItemUpdatesSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPriceUpdates: Schema.optional(Schema.Boolean),
    allowConditionUpdates: Schema.optional(Schema.Boolean),
    allowAvailabilityUpdates: Schema.optional(Schema.Boolean),
    allowStrictAvailabilityUpdates: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountItemUpdatesSettings" });

export interface AccountItemUpdates {
  /** Determines which attributes of the items should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator. */
  accountItemUpdatesSettings?: AccountItemUpdatesSettings;
  /** Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
  effectiveAllowPriceUpdates?: boolean;
  /** Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
  effectiveAllowStrictAvailabilityUpdates?: boolean;
  /** Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
  effectiveAllowAvailabilityUpdates?: boolean;
  /** Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
  effectiveAllowConditionUpdates?: boolean;
}

export const AccountItemUpdates: Schema.Schema<AccountItemUpdates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountItemUpdatesSettings: Schema.optional(AccountItemUpdatesSettings),
    effectiveAllowPriceUpdates: Schema.optional(Schema.Boolean),
    effectiveAllowStrictAvailabilityUpdates: Schema.optional(Schema.Boolean),
    effectiveAllowAvailabilityUpdates: Schema.optional(Schema.Boolean),
    effectiveAllowConditionUpdates: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountItemUpdates" });

export interface AccountAutomaticImprovements {
  /** Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: - Delivery address of an order - Current handling time and shipping time settings - Estimated weekdays or business days - Parcel tracking data This field is only updated (cleared) if provided. */
  shippingImprovements?: AccountShippingImprovements;
  /** This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) This field is only updated (cleared) if provided. */
  imageImprovements?: AccountImageImprovements;
  /** Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. This field is only updated (cleared) if provided. */
  itemUpdates?: AccountItemUpdates;
}

export const AccountAutomaticImprovements: Schema.Schema<AccountAutomaticImprovements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shippingImprovements: Schema.optional(AccountShippingImprovements),
    imageImprovements: Schema.optional(AccountImageImprovements),
    itemUpdates: Schema.optional(AccountItemUpdates),
  }).annotate({ identifier: "AccountAutomaticImprovements" });

export interface AccountUser {
  /** Whether user is an admin. */
  admin?: boolean;
  /** This role is deprecated and can no longer be assigned. Any value set will be ignored. */
  paymentsManager?: boolean;
  /** User's email address. */
  emailAddress?: string;
  /** This role is deprecated and can no longer be assigned. Any value set will be ignored. */
  paymentsAnalyst?: boolean;
  /** Whether user is a reporting manager. This role is equivalent to the Performance and insights role in Merchant Center. */
  reportingManager?: boolean;
  /** Optional. Whether user has standard read-only access. */
  readOnly?: boolean;
  /** This role is deprecated and can no longer be assigned. Any value set will be ignored. */
  orderManager?: boolean;
}

export const AccountUser: Schema.Schema<AccountUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    admin: Schema.optional(Schema.Boolean),
    paymentsManager: Schema.optional(Schema.Boolean),
    emailAddress: Schema.optional(Schema.String),
    paymentsAnalyst: Schema.optional(Schema.Boolean),
    reportingManager: Schema.optional(Schema.Boolean),
    readOnly: Schema.optional(Schema.Boolean),
    orderManager: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountUser" });

export interface AccountYouTubeChannelLink {
  /** Channel ID. */
  channelId?: string;
  /** Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. */
  status?: string;
}

export const AccountYouTubeChannelLink: Schema.Schema<AccountYouTubeChannelLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountYouTubeChannelLink" });

export interface AccountConversionSettings {
  /** When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659). */
  freeListingsAutoTaggingEnabled?: boolean;
}

export const AccountConversionSettings: Schema.Schema<AccountConversionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeListingsAutoTaggingEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountConversionSettings" });

export interface AccountAdsLink {
  /** Customer ID of the Ads account. */
  adsId?: string;
  /** Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" */
  status?: string;
}

export const AccountAdsLink: Schema.Schema<AccountAdsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adsId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountAdsLink" });

export interface AccountIdentityType {
  /** Optional. Indicates that the business identifies itself with a given identity type. Setting this field does not automatically mean eligibility for promotions. */
  selfIdentified?: boolean;
}

export const AccountIdentityType: Schema.Schema<AccountIdentityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfIdentified: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountIdentityType" });

export interface AccountBusinessIdentity {
  /** Specifies whether the business identifies itself as a small business. This optional field is only available for merchants with a business country set to "US". It is also not allowed for marketplaces, but it is allowed to marketplace sellers. */
  smallBusiness?: AccountIdentityType;
  /** Specifies whether the business identifies itself as being black-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers. */
  blackOwned?: AccountIdentityType;
  /** Specifies whether the business identifies itself as being women-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers. */
  womenOwned?: AccountIdentityType;
  /** Specifies whether the business identifies itself as being latino-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers. */
  latinoOwned?: AccountIdentityType;
  /** Required. By setting this field, your business may be included in promotions for all the selected attributes. If you clear this option, it won't affect your identification with any of the attributes. For this field to be set, the merchant must self identify with at least one of the `AccountIdentityType`. If none are included, the request will be considered invalid. */
  includeForPromotions?: boolean;
  /** Specifies whether the business identifies itself as being veteran-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers. */
  veteranOwned?: AccountIdentityType;
}

export const AccountBusinessIdentity: Schema.Schema<AccountBusinessIdentity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smallBusiness: Schema.optional(AccountIdentityType),
    blackOwned: Schema.optional(AccountIdentityType),
    womenOwned: Schema.optional(AccountIdentityType),
    latinoOwned: Schema.optional(AccountIdentityType),
    includeForPromotions: Schema.optional(Schema.Boolean),
    veteranOwned: Schema.optional(AccountIdentityType),
  }).annotate({ identifier: "AccountBusinessIdentity" });

export interface Account {
  /** The Business Profile which is linked or in the process of being linked with the Merchant Center account. */
  googleMyBusinessLink?: AccountGoogleMyBusinessLink;
  /** Automatically created label IDs that are assigned to the account by CSS Center. */
  automaticLabelIds?: ReadonlyArray<string>;
  /** Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
  accountManagement?: string;
  /** Indicates whether the merchant sells adult content. */
  adultContent?: boolean;
  /** The business information of the account. */
  businessInformation?: AccountBusinessInformation;
  /** The automatic improvements of the account can be used to automatically update items, improve images and shipping. Each section inside AutomaticImprovements is updated separately. */
  automaticImprovements?: AccountAutomaticImprovements;
  /** Users with access to the account. Every account (except for subaccounts) must have at least one admin user. */
  users?: ReadonlyArray<AccountUser>;
  /** Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. */
  youtubeChannelLinks?: ReadonlyArray<AccountYouTubeChannelLink>;
  /** Settings for conversion tracking. */
  conversionSettings?: AccountConversionSettings;
  /** Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list. */
  adsLinks?: ReadonlyArray<AccountAdsLink>;
  /** Required. Display name for the account. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#account`". */
  kind?: string;
  /** The merchant's website. */
  websiteUrl?: string;
  /** Required. 64-bit Merchant Center account ID. */
  id?: string;
  /** Client-specific, locally-unique, internal ID for the child account. */
  sellerId?: string;
  /** The business identity attributes can be used to self-declare attributes that let customers know more about your business. */
  businessIdentity?: AccountBusinessIdentity;
  /** Manually created label IDs that are assigned to the account by CSS. */
  labelIds?: ReadonlyArray<string>;
  /** ID of CSS the account belongs to. */
  cssId?: string;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleMyBusinessLink: Schema.optional(AccountGoogleMyBusinessLink),
    automaticLabelIds: Schema.optional(Schema.Array(Schema.String)),
    accountManagement: Schema.optional(Schema.String),
    adultContent: Schema.optional(Schema.Boolean),
    businessInformation: Schema.optional(AccountBusinessInformation),
    automaticImprovements: Schema.optional(AccountAutomaticImprovements),
    users: Schema.optional(Schema.Array(AccountUser)),
    youtubeChannelLinks: Schema.optional(
      Schema.Array(AccountYouTubeChannelLink),
    ),
    conversionSettings: Schema.optional(AccountConversionSettings),
    adsLinks: Schema.optional(Schema.Array(AccountAdsLink)),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    websiteUrl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    sellerId: Schema.optional(Schema.String),
    businessIdentity: Schema.optional(AccountBusinessIdentity),
    labelIds: Schema.optional(Schema.Array(Schema.String)),
    cssId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Account" });

export interface AccountsCustomBatchRequestEntryLinkRequest {
  /** Provided services. Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" - "`localProductManagement`" */
  services?: ReadonlyArray<string>;
  /** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
  action?: string;
  /** The ID of the linked account. */
  linkedAccountId?: string;
  /** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" - "`localProductManager`" */
  linkType?: string;
}

export const AccountsCustomBatchRequestEntryLinkRequest: Schema.Schema<AccountsCustomBatchRequestEntryLinkRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
    linkedAccountId: Schema.optional(Schema.String),
    linkType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsCustomBatchRequestEntryLinkRequest" });

export interface AccountsCustomBatchRequestEntry {
  /** The account to create or update. Only defined if the method is `insert` or `update`. */
  account?: Account;
  /** Label IDs for the 'updatelabels' request. */
  labelIds?: ReadonlyArray<string>;
  /** The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`" */
  method?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** Details about the `link` request. */
  linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;
  /** The ID of the managing account. */
  merchantId?: string;
  /** Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict. */
  overwrite?: boolean;
  /** Controls which fields are visible. Only applicable if the method is 'get'. */
  view?: string;
  /** The ID of the targeted account. Only defined if the method is not `insert`. */
  accountId?: string;
  /** Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`. */
  force?: boolean;
}

export const AccountsCustomBatchRequestEntry: Schema.Schema<AccountsCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(Account),
    labelIds: Schema.optional(Schema.Array(Schema.String)),
    method: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    linkRequest: Schema.optional(AccountsCustomBatchRequestEntryLinkRequest),
    merchantId: Schema.optional(Schema.String),
    overwrite: Schema.optional(Schema.Boolean),
    view: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountsCustomBatchRequestEntry" });

export interface AccountsCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<AccountsCustomBatchRequestEntry>;
}

export const AccountsCustomBatchRequest: Schema.Schema<AccountsCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(AccountsCustomBatchRequestEntry)),
  }).annotate({ identifier: "AccountsCustomBatchRequest" });

export interface CollectionStatusDestinationStatus {
  /** The status for the specified destination in the collections target country. */
  status?: string;
  /** Country codes (ISO 3166-1 alpha-2) where the collection is disapproved. */
  disapprovedCountries?: ReadonlyArray<string>;
  /** The name of the destination */
  destination?: string;
  /** Country codes (ISO 3166-1 alpha-2) where the collection is approved. */
  approvedCountries?: ReadonlyArray<string>;
  /** Country codes (ISO 3166-1 alpha-2) where the collection is pending approval. */
  pendingCountries?: ReadonlyArray<string>;
}

export const CollectionStatusDestinationStatus: Schema.Schema<CollectionStatusDestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    disapprovedCountries: Schema.optional(Schema.Array(Schema.String)),
    destination: Schema.optional(Schema.String),
    approvedCountries: Schema.optional(Schema.Array(Schema.String)),
    pendingCountries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CollectionStatusDestinationStatus" });

export interface CollectionStatusItemLevelIssue {
  /** Country codes (ISO 3166-1 alpha-2) where issue applies to the offer. */
  applicableCountries?: ReadonlyArray<string>;
  /** The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** The destination the issue applies to. */
  destination?: string;
  /** A detailed issue description in English. */
  detail?: string;
  /** Whether the issue can be resolved by the merchant. */
  resolution?: string;
  /** A short issue description in English. */
  description?: string;
  /** The error code of the issue. */
  code?: string;
  /** The attribute's name, if the issue is caused by a single attribute. */
  attributeName?: string;
  /** How this issue affects the serving of the collection. */
  servability?: string;
}

export const CollectionStatusItemLevelIssue: Schema.Schema<CollectionStatusItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicableCountries: Schema.optional(Schema.Array(Schema.String)),
    documentation: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
    servability: Schema.optional(Schema.String),
  }).annotate({ identifier: "CollectionStatusItemLevelIssue" });

export interface CollectionStatus {
  /** Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
  creationDate?: string;
  /** Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
  lastUpdateDate?: string;
  /** The intended destinations for the collection. */
  destinationStatuses?: ReadonlyArray<CollectionStatusDestinationStatus>;
  /** Required. The ID of the collection for which status is reported. */
  id?: string;
  /** A list of all issues associated with the collection. */
  collectionLevelIssuses?: ReadonlyArray<CollectionStatusItemLevelIssue>;
}

export const CollectionStatus: Schema.Schema<CollectionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creationDate: Schema.optional(Schema.String),
    lastUpdateDate: Schema.optional(Schema.String),
    destinationStatuses: Schema.optional(
      Schema.Array(CollectionStatusDestinationStatus),
    ),
    id: Schema.optional(Schema.String),
    collectionLevelIssuses: Schema.optional(
      Schema.Array(CollectionStatusItemLevelIssue),
    ),
  }).annotate({ identifier: "CollectionStatus" });

export interface AttributionSettingsConversionType {
  /** Output only. Conversion event name, as it'll be reported by the client. */
  name?: string;
  /** Output only. Option indicating if the type should be included in Merchant Center reporting. */
  includeInReporting?: boolean;
}

export const AttributionSettingsConversionType: Schema.Schema<AttributionSettingsConversionType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    includeInReporting: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AttributionSettingsConversionType" });

export interface AccountTax {
  /** Required. The ID of the account to which these account tax settings belong. */
  accountId?: string;
  /** Tax rules. Updating the tax rules will enable "US" taxes (not reversible). Defining no rules is equivalent to not charging tax at all. */
  rules?: ReadonlyArray<AccountTaxTaxRule>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`". */
  kind?: string;
}

export const AccountTax: Schema.Schema<AccountTax> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(AccountTaxTaxRule)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountTax" });

export interface Content_Error {
  /** The domain of the error. */
  domain?: string;
  /** The error code. */
  reason?: string;
  /** A description of the error. */
  message?: string;
}

export const Content_Error: Schema.Schema<Content_Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Content_Error" });

export interface Errors {
  /** The HTTP status of the first error in `errors`. */
  code?: number;
  /** The message of the first error in `errors`. */
  message?: string;
  /** A list of errors. */
  errors?: ReadonlyArray<Content_Error>;
}

export const Errors: Schema.Schema<Errors> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Content_Error)),
  }).annotate({ identifier: "Errors" });

export interface AccounttaxCustomBatchResponseEntry {
  /** The retrieved or updated account tax settings. */
  accountTax?: AccountTax;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`" */
  kind?: string;
}

export const AccounttaxCustomBatchResponseEntry: Schema.Schema<AccounttaxCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountTax: Schema.optional(AccountTax),
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccounttaxCustomBatchResponseEntry" });

export interface RegionPostalCodeAreaPostalCodeRange {
  /** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*". */
  begin?: string;
  /** Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin. */
  end?: string;
}

export const RegionPostalCodeAreaPostalCodeRange: Schema.Schema<RegionPostalCodeAreaPostalCodeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    begin: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionPostalCodeAreaPostalCodeRange" });

export interface RegionPostalCodeArea {
  /** Required. A range of postal codes. */
  postalCodes?: ReadonlyArray<RegionPostalCodeAreaPostalCodeRange>;
  /** Required. CLDR territory code or the country the postal code group applies to. */
  regionCode?: string;
}

export const RegionPostalCodeArea: Schema.Schema<RegionPostalCodeArea> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postalCodes: Schema.optional(
      Schema.Array(RegionPostalCodeAreaPostalCodeRange),
    ),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionPostalCodeArea" });

export interface RegionGeoTargetArea {
  /** Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state). */
  geotargetCriteriaIds?: ReadonlyArray<string>;
}

export const RegionGeoTargetArea: Schema.Schema<RegionGeoTargetArea> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    geotargetCriteriaIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegionGeoTargetArea" });

export interface Region {
  /** Output only. Immutable. The ID uniquely identifying each region. */
  regionId?: string;
  /** A list of postal codes that defines the region area. */
  postalCodeArea?: RegionPostalCodeArea;
  /** Output only. Indicates if the region is eligible to use in the Shipping Services configuration. */
  shippingEligible?: boolean;
  /** Output only. Immutable. Merchant that owns the region. */
  merchantId?: string;
  /** The display name of the region. */
  displayName?: string;
  /** A list of geotargets that defines the region area. */
  geotargetArea?: RegionGeoTargetArea;
  /** Output only. Indicates if the region is eligible to use in the Regional Inventory configuration. */
  regionalInventoryEligible?: boolean;
}

export const Region: Schema.Schema<Region> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionId: Schema.optional(Schema.String),
    postalCodeArea: Schema.optional(RegionPostalCodeArea),
    shippingEligible: Schema.optional(Schema.Boolean),
    merchantId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    geotargetArea: Schema.optional(RegionGeoTargetArea),
    regionalInventoryEligible: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Region" });

export interface ProductDeliveryTimeAreaDeliveryTimeDeliveryTime {
  /** Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
  maxHandlingTimeDays?: number;
  /** Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered. */
  minTransitTimeDays?: number;
  /** Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered. */
  maxTransitTimeDays?: number;
  /** Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
  minHandlingTimeDays?: number;
}

export const ProductDeliveryTimeAreaDeliveryTimeDeliveryTime: Schema.Schema<ProductDeliveryTimeAreaDeliveryTimeDeliveryTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxHandlingTimeDays: Schema.optional(Schema.Number),
    minTransitTimeDays: Schema.optional(Schema.Number),
    maxTransitTimeDays: Schema.optional(Schema.Number),
    minHandlingTimeDays: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "ProductDeliveryTimeAreaDeliveryTimeDeliveryTime",
  });

export interface BreakdownRegion {
  /** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) */
  code?: string;
  /** The localized name of the region. For region with code='001' the value is 'All countries' or the equivalent in other languages. */
  name?: string;
}

export const BreakdownRegion: Schema.Schema<BreakdownRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "BreakdownRegion" });

export interface Breakdown {
  /** Lists of regions. Should be rendered as a title for this group of details. The full list should be shown to merchant. If the list is too long, it is recommended to make it expandable. */
  regions?: ReadonlyArray<BreakdownRegion>;
  /** Human readable, localized description of issue's effect on different targets. Should be rendered as a list. For example: * "Products not showing in ads" * "Products not showing organically" */
  details?: ReadonlyArray<string>;
}

export const Breakdown: Schema.Schema<Breakdown> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(BreakdownRegion)),
    details: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Breakdown" });

export interface ProductIssueImpact {
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
  /** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Limits visibility in France" */
  message?: string;
  /** Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details. */
  breakdowns?: ReadonlyArray<Breakdown>;
}

export const ProductIssueImpact: Schema.Schema<ProductIssueImpact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    breakdowns: Schema.optional(Schema.Array(Breakdown)),
  }).annotate({ identifier: "ProductIssueImpact" });

export interface ProductCluster {
  /** Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account. */
  brandInventoryStatus?:
    | "INVENTORY_STATUS_UNSPECIFIED"
    | "IN_STOCK"
    | "OUT_OF_STOCK"
    | "NOT_IN_INVENTORY"
    | (string & {});
  /** Product category (3rd level) of the product cluster, represented in Google's product taxonomy. */
  categoryL3?: string;
  /** GTINs of example variants of the product cluster. */
  variantGtins?: ReadonlyArray<string>;
  /** Title of the product cluster. */
  title?: string;
  /** Brand of the product cluster. */
  brand?: string;
  /** Product category (1st level) of the product cluster, represented in Google's product taxonomy. */
  categoryL1?: string;
  /** Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account. */
  inventoryStatus?:
    | "INVENTORY_STATUS_UNSPECIFIED"
    | "IN_STOCK"
    | "OUT_OF_STOCK"
    | "NOT_IN_INVENTORY"
    | (string & {});
  /** Product category (2nd level) of the product cluster, represented in Google's product taxonomy. */
  categoryL2?: string;
  /** Product category (4th level) of the product cluster, represented in Google's product taxonomy. */
  categoryL4?: string;
  /** Product category (5th level) of the product cluster, represented in Google's product taxonomy. */
  categoryL5?: string;
}

export const ProductCluster: Schema.Schema<ProductCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brandInventoryStatus: Schema.optional(Schema.String),
    categoryL3: Schema.optional(Schema.String),
    variantGtins: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    categoryL1: Schema.optional(Schema.String),
    inventoryStatus: Schema.optional(Schema.String),
    categoryL2: Schema.optional(Schema.String),
    categoryL4: Schema.optional(Schema.String),
    categoryL5: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductCluster" });

export interface Price {
  /** The price represented as a number. */
  value?: string;
  /** The currency of the price. */
  currency?: string;
}

export const Price: Schema.Schema<Price> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
  }).annotate({ identifier: "Price" });

export interface MinimumOrderValueTableStoreCodeSetWithMov {
  /** A list of unique store codes or empty for the catch all. */
  storeCodes?: ReadonlyArray<string>;
  /** The minimum order value for the given stores. */
  value?: Price;
}

export const MinimumOrderValueTableStoreCodeSetWithMov: Schema.Schema<MinimumOrderValueTableStoreCodeSetWithMov> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storeCodes: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.optional(Price),
  }).annotate({ identifier: "MinimumOrderValueTableStoreCodeSetWithMov" });

export interface MinimumOrderValueTable {
  storeCodeSetWithMovs?: ReadonlyArray<MinimumOrderValueTableStoreCodeSetWithMov>;
}

export const MinimumOrderValueTable: Schema.Schema<MinimumOrderValueTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storeCodeSetWithMovs: Schema.optional(
      Schema.Array(MinimumOrderValueTableStoreCodeSetWithMov),
    ),
  }).annotate({ identifier: "MinimumOrderValueTable" });

export interface CompetitiveVisibility {
  /** Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
  yourDomainVisibilityTrend?: number;
  /** The country where impression appeared. Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.country_code` is required in the query. */
  countryCode?: string;
  /** [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cadsfree-ratio) shows how often a merchant receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  adsOrganicRatio?: number;
  /** Relative visibility shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Available only in `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  relativeVisibility?: number;
  /** Date of this row. Available only in `CompetitiveVisibilityBenchmarkView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityMarketBenchmarkView`. */
  date?: Content_Date;
  /** True if this row contains data for your domain. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  isYourDomain?: boolean;
  /** Domain of your competitor or your domain, if 'is_your_domain' is true. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  domain?: string;
  /** Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
  categoryBenchmarkVisibilityTrend?: number;
  /** Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.category_id` is required in the query. */
  categoryId?: string;
  /** Position of the domain in the top merchants ranking for the selected keys (`date`, `category_id`, `country_code`, `listing_type`) based on impressions. 1 is the highest. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  rank?: string;
  /** Page overlap rate describes how frequently competing retailers’ offers are shown together with your offers on the same page. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  pageOverlapRate?: number;
  /** Type of impression listing. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause. */
  trafficSource?: "UNKNOWN" | "ORGANIC" | "ADS" | "ALL" | (string & {});
  /** Higher position rate shows how often a competitor’s offer got placed in a higher position on the page than your offer. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
  higherPositionRate?: number;
}

export const CompetitiveVisibility: Schema.Schema<CompetitiveVisibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yourDomainVisibilityTrend: Schema.optional(Schema.Number),
    countryCode: Schema.optional(Schema.String),
    adsOrganicRatio: Schema.optional(Schema.Number),
    relativeVisibility: Schema.optional(Schema.Number),
    date: Schema.optional(Content_Date),
    isYourDomain: Schema.optional(Schema.Boolean),
    domain: Schema.optional(Schema.String),
    categoryBenchmarkVisibilityTrend: Schema.optional(Schema.Number),
    categoryId: Schema.optional(Schema.String),
    rank: Schema.optional(Schema.String),
    pageOverlapRate: Schema.optional(Schema.Number),
    trafficSource: Schema.optional(Schema.String),
    higherPositionRate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CompetitiveVisibility" });

export interface PosSale {
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The relative change of the available quantity. Negative for items returned. */
  quantity?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posSale`" */
  kind?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** A unique ID to group items from the same sale event. */
  saleId?: string;
  /** Required. The price of the item. */
  price?: Price;
}

export const PosSale: Schema.Schema<PosSale> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    saleId: Schema.optional(Schema.String),
    price: Schema.optional(Price),
  }).annotate({ identifier: "PosSale" });

export interface Weight {
  /** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
  value?: string;
  /** Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" */
  unit?: string;
}

export const Weight: Schema.Schema<Weight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "Weight" });

export interface LocationIdSet {
  /** A non-empty list of location IDs. They must all be of the same location type (for example, state). */
  locationIds?: ReadonlyArray<string>;
}

export const LocationIdSet: Schema.Schema<LocationIdSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationIdSet" });

export interface Headers {
  /** A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set if all other fields are not set. */
  numberOfItems?: ReadonlyArray<string>;
  /** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set. */
  postalCodeGroupNames?: ReadonlyArray<string>;
  /** A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<= 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set. */
  weights?: ReadonlyArray<Weight>;
  /** A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set. */
  locations?: ReadonlyArray<LocationIdSet>;
  /** A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set. */
  prices?: ReadonlyArray<Price>;
}

export const Headers: Schema.Schema<Headers> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfItems: Schema.optional(Schema.Array(Schema.String)),
    postalCodeGroupNames: Schema.optional(Schema.Array(Schema.String)),
    weights: Schema.optional(Schema.Array(Weight)),
    locations: Schema.optional(Schema.Array(LocationIdSet)),
    prices: Schema.optional(Schema.Array(Price)),
  }).annotate({ identifier: "Headers" });

export interface RecommendationCallToAction {
  /** Output only. Localized text of the CTA. Optional. */
  localizedText?: string;
  /** Output only. Intent of the action. This value describes the intent (for example, `OPEN_CREATE_EMAIL_CAMPAIGN_FLOW`) and can vary from recommendation to recommendation. This value can change over time for the same recommendation. Currently available intent values: - OPEN_CREATE_EMAIL_CAMPAIGN_FLOW: Opens a user journey where they can create a marketing email campaign. (No default URL) - OPEN_CREATE_COLLECTION_TAB: Opens a user journey where they can [create a collection](https://support.google.com/merchants/answer/9703228) for their Merchant account. (No default URL) */
  intent?: string;
  /** Optional. URL of the CTA. This field will only be set for some recommendations where there is a suggested landing URL. Otherwise it will be set to an empty string. We recommend developers to use their own custom landing page according to the description of the intent field above when this uri field is empty. */
  uri?: string;
}

export const RecommendationCallToAction: Schema.Schema<RecommendationCallToAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedText: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecommendationCallToAction" });

export interface PubsubNotificationSettings {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`" */
  kind?: string;
  /** List of event types. Acceptable values are: - "`orderPendingShipment`" */
  registeredEvents?: ReadonlyArray<string>;
  /** Cloud pub/sub topic to which notifications are sent (read-only). */
  cloudTopicName?: string;
}

export const PubsubNotificationSettings: Schema.Schema<PubsubNotificationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    registeredEvents: Schema.optional(Schema.Array(Schema.String)),
    cloudTopicName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PubsubNotificationSettings" });

export interface AccountStatusAccountLevelIssue {
  /** Short description of the issue. */
  title?: string;
  /** Country for which this issue is reported. */
  country?: string;
  /** Additional details about the issue. */
  detail?: string;
  /** The destination the issue applies to. If this field is empty then the issue applies to all available destinations. */
  destination?: string;
  /** Issue identifier. */
  id?: string;
  /** Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" */
  severity?: string;
  /** The URL of a web page to help resolving this issue. */
  documentation?: string;
}

export const AccountStatusAccountLevelIssue: Schema.Schema<AccountStatusAccountLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountStatusAccountLevelIssue" });

export interface AccountStatusStatistics {
  /** Number of expiring offers. */
  expiring?: string;
  /** Number of active offers. */
  active?: string;
  /** Number of pending offers. */
  pending?: string;
  /** Number of disapproved offers. */
  disapproved?: string;
}

export const AccountStatusStatistics: Schema.Schema<AccountStatusStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiring: Schema.optional(Schema.String),
    active: Schema.optional(Schema.String),
    pending: Schema.optional(Schema.String),
    disapproved: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountStatusStatistics" });

export interface AccountStatusItemLevelIssue {
  /** The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** Number of items with this issue. */
  numItems?: string;
  /** Whether the issue can be resolved by the merchant. */
  resolution?: string;
  /** A short issue description in English. */
  description?: string;
  /** A detailed issue description in English. */
  detail?: string;
  /** How this issue affects serving of the offer. */
  servability?: string;
  /** The error code of the issue. */
  code?: string;
  /** The attribute's name, if the issue is caused by a single attribute. */
  attributeName?: string;
}

export const AccountStatusItemLevelIssue: Schema.Schema<AccountStatusItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentation: Schema.optional(Schema.String),
    numItems: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    servability: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountStatusItemLevelIssue" });

export interface AccountStatusProducts {
  /** The country the data applies to. */
  country?: string;
  /** Aggregated product statistics. */
  statistics?: AccountStatusStatistics;
  /** The destination the data applies to. */
  destination?: string;
  /** The channel the data applies to. Acceptable values are: - "`local`" - "`online`" */
  channel?: string;
  /** List of item-level issues. */
  itemLevelIssues?: ReadonlyArray<AccountStatusItemLevelIssue>;
}

export const AccountStatusProducts: Schema.Schema<AccountStatusProducts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    statistics: Schema.optional(AccountStatusStatistics),
    destination: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    itemLevelIssues: Schema.optional(Schema.Array(AccountStatusItemLevelIssue)),
  }).annotate({ identifier: "AccountStatusProducts" });

export interface AccountStatus {
  /** How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
  accountManagement?: string;
  /** The ID of the account for which the status is reported. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
  kind?: string;
  /** Whether the account's website is claimed or not. */
  websiteClaimed?: boolean;
  /** A list of account level issues. */
  accountLevelIssues?: ReadonlyArray<AccountStatusAccountLevelIssue>;
  /** List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes. */
  products?: ReadonlyArray<AccountStatusProducts>;
}

export const AccountStatus: Schema.Schema<AccountStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountManagement: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    websiteClaimed: Schema.optional(Schema.Boolean),
    accountLevelIssues: Schema.optional(
      Schema.Array(AccountStatusAccountLevelIssue),
    ),
    products: Schema.optional(Schema.Array(AccountStatusProducts)),
  }).annotate({ identifier: "AccountStatus" });

export interface LiasettingsRequestInventoryVerificationResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestInventoryVerificationResponse`". */
  kind?: string;
}

export const LiasettingsRequestInventoryVerificationResponse: Schema.Schema<LiasettingsRequestInventoryVerificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({
    identifier: "LiasettingsRequestInventoryVerificationResponse",
  });

export interface DeliveryAreaPostalCodeRange {
  /** A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as `firstPostalCode`: if `firstPostalCode` is a postal code then `lastPostalCode` must be a postal code too; if firstPostalCode is a pattern then `lastPostalCode` must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching `firstPostalCode`. */
  lastPostalCode?: string;
  /** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. */
  firstPostalCode?: string;
}

export const DeliveryAreaPostalCodeRange: Schema.Schema<DeliveryAreaPostalCodeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastPostalCode: Schema.optional(Schema.String),
    firstPostalCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeliveryAreaPostalCodeRange" });

export interface DeliveryArea {
  /** A postal code, postal code range or postal code prefix that defines this area. Limited to US and AUS. */
  postalCodeRange?: DeliveryAreaPostalCodeRange;
  /** A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`). */
  regionCode?: string;
  /** Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`. */
  countryCode?: string;
}

export const DeliveryArea: Schema.Schema<DeliveryArea> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postalCodeRange: Schema.optional(DeliveryAreaPostalCodeRange),
    regionCode: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeliveryArea" });

export interface ProductDeliveryTimeAreaDeliveryTime {
  /** Required. The delivery area associated with `deliveryTime` for this product. */
  deliveryArea?: DeliveryArea;
  /** Required. The delivery time associated with `deliveryArea` for this product. */
  deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
}

export const ProductDeliveryTimeAreaDeliveryTime: Schema.Schema<ProductDeliveryTimeAreaDeliveryTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deliveryArea: Schema.optional(DeliveryArea),
    deliveryTime: Schema.optional(
      ProductDeliveryTimeAreaDeliveryTimeDeliveryTime,
    ),
  }).annotate({ identifier: "ProductDeliveryTimeAreaDeliveryTime" });

export interface LinkService {
  /** Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`" */
  service?: string;
  /** Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
  status?: string;
}

export const LinkService: Schema.Schema<LinkService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "LinkService" });

export interface ListRegionsResponse {
  /** The regions from the specified merchant. */
  regions?: ReadonlyArray<Region>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListRegionsResponse: Schema.Schema<ListRegionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Region)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRegionsResponse" });

export interface DatafeedTarget {
  /** Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
  feedLabel?: string;
  /** The list of [destinations to exclude](//support.google.com/merchants/answer/6324486) for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted. */
  excludedDestinations?: ReadonlyArray<string>;
  /** Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
  country?: string;
  /** The countries where the items may be displayed. Represented as a CLDR territory code. Will be ignored for "product inventory" feeds. */
  targetCountries?: ReadonlyArray<string>;
  /** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
  language?: string;
  /** The list of [destinations to include](//support.google.com/merchants/answer/7501026) for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. */
  includedDestinations?: ReadonlyArray<string>;
}

export const DatafeedTarget: Schema.Schema<DatafeedTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feedLabel: Schema.optional(Schema.String),
    excludedDestinations: Schema.optional(Schema.Array(Schema.String)),
    country: Schema.optional(Schema.String),
    targetCountries: Schema.optional(Schema.Array(Schema.String)),
    language: Schema.optional(Schema.String),
    includedDestinations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DatafeedTarget" });

export interface DatafeedFetchSchedule {
  /** Whether the scheduled fetch is paused or not. */
  paused?: boolean;
  /** The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`" */
  weekday?: string;
  /** The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols. */
  fetchUrl?: string;
  /** An optional user name for fetch_url. */
  username?: string;
  /** An optional password for fetch_url. */
  password?: string;
  /** The hour of the day the feed file should be fetched (0-23). */
  hour?: number;
  /** The day of the month the feed file should be fetched (1-31). */
  dayOfMonth?: number;
  /** Time zone used for schedule. UTC by default. For example, "America/Los_Angeles". */
  timeZone?: string;
  /** The minute of the hour the feed file should be fetched (0-59). Read-only. */
  minuteOfHour?: number;
}

export const DatafeedFetchSchedule: Schema.Schema<DatafeedFetchSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paused: Schema.optional(Schema.Boolean),
    weekday: Schema.optional(Schema.String),
    fetchUrl: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    hour: Schema.optional(Schema.Number),
    dayOfMonth: Schema.optional(Schema.Number),
    timeZone: Schema.optional(Schema.String),
    minuteOfHour: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatafeedFetchSchedule" });

export interface DatafeedFormat {
  /** Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`" */
  fileEncoding?: string;
  /** Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`" */
  columnDelimiter?: string;
  /** Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`" */
  quotingMode?: string;
}

export const DatafeedFormat: Schema.Schema<DatafeedFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileEncoding: Schema.optional(Schema.String),
    columnDelimiter: Schema.optional(Schema.String),
    quotingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedFormat" });

export interface Datafeed {
  /** Required. The filename of the feed. All feeds must have a unique file name. */
  fileName?: string;
  /** Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" */
  contentType?: string;
  /** The two-letter ISO 639-1 language in which the attributes are defined in the data feed. */
  attributeLanguage?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`" */
  kind?: string;
  /** Required for update. The ID of the data feed. */
  id?: string;
  /** The targets this feed should apply to (country, language, destinations). */
  targets?: ReadonlyArray<DatafeedTarget>;
  /** Required for insert. A descriptive name of the data feed. */
  name?: string;
  /** Fetch schedule for the feed file. */
  fetchSchedule?: DatafeedFetchSchedule;
  /** Format of the feed file. */
  format?: DatafeedFormat;
}

export const Datafeed: Schema.Schema<Datafeed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileName: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    attributeLanguage: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    targets: Schema.optional(Schema.Array(DatafeedTarget)),
    name: Schema.optional(Schema.String),
    fetchSchedule: Schema.optional(DatafeedFetchSchedule),
    format: Schema.optional(DatafeedFormat),
  }).annotate({ identifier: "Datafeed" });

export interface DatafeedsCustomBatchRequestEntry {
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The data feed to insert. */
  datafeed?: Datafeed;
  /** The ID of the managing account. */
  merchantId?: string;
  /** The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`" */
  method?: string;
  /** The ID of the data feed to get, delete or fetch. */
  datafeedId?: string;
}

export const DatafeedsCustomBatchRequestEntry: Schema.Schema<DatafeedsCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    datafeed: Schema.optional(Datafeed),
    merchantId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    datafeedId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedsCustomBatchRequestEntry" });

export interface DatafeedsCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<DatafeedsCustomBatchRequestEntry>;
}

export const DatafeedsCustomBatchRequest: Schema.Schema<DatafeedsCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(DatafeedsCustomBatchRequestEntry)),
  }).annotate({ identifier: "DatafeedsCustomBatchRequest" });

export interface TriggerActionResponse {
  /** The message for merchant. */
  message?: string;
}

export const TriggerActionResponse: Schema.Schema<TriggerActionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionResponse" });

export interface DatafeedsFetchNowResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsFetchNowResponse`". */
  kind?: string;
}

export const DatafeedsFetchNowResponse: Schema.Schema<DatafeedsFetchNowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedsFetchNowResponse" });

export interface DatafeedstatusesCustomBatchRequestEntry {
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
  country?: string;
  /** The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that for multi-target datafeeds this parameter is required. */
  language?: string;
  /** The ID of the managing account. */
  merchantId?: string;
  /** The feed label to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
  feedLabel?: string;
  /** The ID of the data feed to get. */
  datafeedId?: string;
  /** The method of the batch entry. Acceptable values are: - "`get`" */
  method?: string;
}

export const DatafeedstatusesCustomBatchRequestEntry: Schema.Schema<DatafeedstatusesCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    country: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    feedLabel: Schema.optional(Schema.String),
    datafeedId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedstatusesCustomBatchRequestEntry" });

export interface ProductStatusDestinationStatus {
  /** Deprecated. Destination approval status in `targetCountry` of the offer. */
  status?: string;
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. */
  disapprovedCountries?: ReadonlyArray<string>;
  /** The name of the destination */
  destination?: string;
  /** The channel of the destination. */
  channel?: string;
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is approved. */
  approvedCountries?: ReadonlyArray<string>;
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. */
  pendingCountries?: ReadonlyArray<string>;
}

export const ProductStatusDestinationStatus: Schema.Schema<ProductStatusDestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    disapprovedCountries: Schema.optional(Schema.Array(Schema.String)),
    destination: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    approvedCountries: Schema.optional(Schema.Array(Schema.String)),
    pendingCountries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProductStatusDestinationStatus" });

export interface ProductStatusItemLevelIssue {
  /** The destination the issue applies to. */
  destination?: string;
  /** A detailed issue description in English. */
  detail?: string;
  /** List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer. */
  applicableCountries?: ReadonlyArray<string>;
  /** The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** The attribute's name, if the issue is caused by a single attribute. */
  attributeName?: string;
  /** The error code of the issue. */
  code?: string;
  /** How this issue affects serving of the offer. */
  servability?: string;
  /** Whether the issue can be resolved by the merchant. */
  resolution?: string;
  /** A short issue description in English. */
  description?: string;
}

export const ProductStatusItemLevelIssue: Schema.Schema<ProductStatusItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    applicableCountries: Schema.optional(Schema.Array(Schema.String)),
    documentation: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    servability: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStatusItemLevelIssue" });

export interface ProductStatus {
  /** The ID of the product for which status is reported. */
  productId?: string;
  /** The title of the product. */
  title?: string;
  /** Date on which the item has been created, in ISO 8601 format. */
  creationDate?: string;
  /** Date on which the item has been last updated, in ISO 8601 format. */
  lastUpdateDate?: string;
  /** The intended destinations for the product. */
  destinationStatuses?: ReadonlyArray<ProductStatusDestinationStatus>;
  /** Date on which the item expires in Google Shopping, in ISO 8601 format. */
  googleExpirationDate?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`" */
  kind?: string;
  /** The link to the product. */
  link?: string;
  /** A list of all issues associated with the product. */
  itemLevelIssues?: ReadonlyArray<ProductStatusItemLevelIssue>;
}

export const ProductStatus: Schema.Schema<ProductStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    creationDate: Schema.optional(Schema.String),
    lastUpdateDate: Schema.optional(Schema.String),
    destinationStatuses: Schema.optional(
      Schema.Array(ProductStatusDestinationStatus),
    ),
    googleExpirationDate: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    itemLevelIssues: Schema.optional(Schema.Array(ProductStatusItemLevelIssue)),
  }).annotate({ identifier: "ProductStatus" });

export interface ProductstatusesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<ProductStatus>;
  /** The token for the retrieval of the next page of products statuses. */
  nextPageToken?: string;
}

export const ProductstatusesListResponse: Schema.Schema<ProductstatusesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(ProductStatus)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductstatusesListResponse" });

export interface LiasettingsRequestGmbAccessResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestGmbAccessResponse`". */
  kind?: string;
}

export const LiasettingsRequestGmbAccessResponse: Schema.Schema<LiasettingsRequestGmbAccessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiasettingsRequestGmbAccessResponse" });

export interface AccountsCustomBatchResponseEntry {
  /** The retrieved, created, or updated account. Not defined if the method was `delete`, `claimwebsite` or `link`. */
  account?: Account;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
  kind?: string;
}

export const AccountsCustomBatchResponseEntry: Schema.Schema<AccountsCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(Account),
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsCustomBatchResponseEntry" });

export interface TopicTrends {
  /** Search interest in the last 7 days, with the same normalization as search_interest. This field is only present for a past date. */
  last7DaysSearchInterest?: number;
  /** Google-provided topic trends are calculated for. Only top eight topics are returned. Topic is what shoppers are searching for on Google, grouped by the same concept. */
  topic?: string;
  /** Search interest in the last 90 days, with the same normalization as search_interest. This field is only present for a past date. */
  last90DaysSearchInterest?: number;
  /** Date the trend score was retrieved. */
  date?: Content_Date;
  /** Search interest in the last 30 days, with the same normalization as search_interest. This field is only present for a past date. */
  last30DaysSearchInterest?: number;
  /** Estimated search interest in the next 7 days, with the same normalization as search_interest. This field is only present for a future date. */
  next7DaysSearchInterest?: number;
  /** Daily search interest, normalized to the time and country to make comparisons easier, with 100 representing peak popularity (from 0 to 100) for the requested time period and location. */
  searchInterest?: number;
  /** Search interest in the last 120 days, with the same normalization as search_interest. This field is only present for a past date. */
  last120DaysSearchInterest?: number;
  /** Country trends are calculated for. Must be a two-letter country code (ISO 3166-1-alpha-2 code), for example, `“US”`. */
  customerCountryCode?: string;
}

export const TopicTrends: Schema.Schema<TopicTrends> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    last7DaysSearchInterest: Schema.optional(Schema.Number),
    topic: Schema.optional(Schema.String),
    last90DaysSearchInterest: Schema.optional(Schema.Number),
    date: Schema.optional(Content_Date),
    last30DaysSearchInterest: Schema.optional(Schema.Number),
    next7DaysSearchInterest: Schema.optional(Schema.Number),
    searchInterest: Schema.optional(Schema.Number),
    last120DaysSearchInterest: Schema.optional(Schema.Number),
    customerCountryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "TopicTrends" });

export interface ProductId {
  /** The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. */
  productId?: string;
}

export const ProductId: Schema.Schema<ProductId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductId" });

export interface ProductDeliveryTime {
  /** Required. A set of associations between `DeliveryArea` and `DeliveryTime` entries. The total number of `areaDeliveryTimes` can be at most 100. */
  areaDeliveryTimes?: ReadonlyArray<ProductDeliveryTimeAreaDeliveryTime>;
  /** Required. The `id` of the product. */
  productId?: ProductId;
}

export const ProductDeliveryTime: Schema.Schema<ProductDeliveryTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    areaDeliveryTimes: Schema.optional(
      Schema.Array(ProductDeliveryTimeAreaDeliveryTime),
    ),
    productId: Schema.optional(ProductId),
  }).annotate({ identifier: "ProductDeliveryTime" });

export interface AccountstatusesCustomBatchResponseEntry {
  /** The requested account status. Defined if and only if the request was successful. */
  accountStatus?: AccountStatus;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
}

export const AccountstatusesCustomBatchResponseEntry: Schema.Schema<AccountstatusesCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountStatus: Schema.optional(AccountStatus),
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AccountstatusesCustomBatchResponseEntry" });

export interface AccountstatusesCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<AccountstatusesCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`". */
  kind?: string;
}

export const AccountstatusesCustomBatchResponse: Schema.Schema<AccountstatusesCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(AccountstatusesCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountstatusesCustomBatchResponse" });

export interface OrderTrackingSignalShipmentLineItemMapping {
  /** The line item quantity in the shipment. */
  quantity?: string;
  /** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
  shipmentId?: string;
  /** Required. The line item ID. */
  lineItemId?: string;
}

export const OrderTrackingSignalShipmentLineItemMapping: Schema.Schema<OrderTrackingSignalShipmentLineItemMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantity: Schema.optional(Schema.String),
    shipmentId: Schema.optional(Schema.String),
    lineItemId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrderTrackingSignalShipmentLineItemMapping" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface DateTime {
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Time zone. */
  timeZone?: TimeZone;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
}

export const DateTime: Schema.Schema<DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
    day: Schema.optional(Schema.Number),
    utcOffset: Schema.optional(Schema.String),
    year: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DateTime" });

export interface OrderTrackingSignalShippingInfo {
  /** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
  shipmentId?: string;
  /** The status of the shipment. */
  shippingStatus?:
    | "SHIPPING_STATE_UNSPECIFIED"
    | "SHIPPED"
    | "DELIVERED"
    | (string & {});
  /** The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
  trackingId?: string;
  /** The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
  carrierName?: string;
  /** The latest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  latestDeliveryPromiseTime?: DateTime;
  /** The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc. */
  carrierServiceName?: string;
  /** The time when the shipment was shipped. Include the year and timezone string, if available. */
  shippedTime?: DateTime;
  /** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin. */
  originRegionCode?: string;
  /** The time when the shipment was actually delivered. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  actualDeliveryTime?: DateTime;
  /** The earliest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  earliestDeliveryPromiseTime?: DateTime;
  /** The origin postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
  originPostalCode?: string;
}

export const OrderTrackingSignalShippingInfo: Schema.Schema<OrderTrackingSignalShippingInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shipmentId: Schema.optional(Schema.String),
    shippingStatus: Schema.optional(Schema.String),
    trackingId: Schema.optional(Schema.String),
    carrierName: Schema.optional(Schema.String),
    latestDeliveryPromiseTime: Schema.optional(DateTime),
    carrierServiceName: Schema.optional(Schema.String),
    shippedTime: Schema.optional(DateTime),
    originRegionCode: Schema.optional(Schema.String),
    actualDeliveryTime: Schema.optional(DateTime),
    earliestDeliveryPromiseTime: Schema.optional(DateTime),
    originPostalCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrderTrackingSignalShippingInfo" });

export interface OrderTrackingSignalLineItemDetails {
  /** Required. The ID for this line item. */
  lineItemId?: string;
  /** The Global Trade Item Number. */
  gtin?: string;
  /** The quantity of the line item in the order. */
  quantity?: string;
  /** The manufacturer part number. */
  mpn?: string;
  /** Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId. */
  productId?: string;
  /** Plain text description of this product (deprecated: Please use product_title instead). */
  productDescription?: string;
  /** Plain text title of this product. */
  productTitle?: string;
  /** Brand of the product. */
  brand?: string;
  /** Merchant SKU for this item (deprecated). */
  sku?: string;
  /** Universal product code for this item (deprecated: Please use GTIN instead). */
  upc?: string;
}

export const OrderTrackingSignalLineItemDetails: Schema.Schema<OrderTrackingSignalLineItemDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lineItemId: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    productDescription: Schema.optional(Schema.String),
    productTitle: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
    upc: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrderTrackingSignalLineItemDetails" });

export interface PriceAmount {
  /** The price represented as a number. */
  value?: string;
  /** The currency of the price. */
  currency?: string;
}

export const PriceAmount: Schema.Schema<PriceAmount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
  }).annotate({ identifier: "PriceAmount" });

export interface OrderTrackingSignal {
  /** The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals). */
  merchantId?: string;
  /** Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
  deliveryPostalCode?: string;
  /** The mapping of the line items to the shipment information. */
  shipmentLineItemMapping?: ReadonlyArray<OrderTrackingSignalShipmentLineItemMapping>;
  /** The shipping information for the order. */
  shippingInfo?: ReadonlyArray<OrderTrackingSignalShippingInfo>;
  /** Required. The time when the order was created on the merchant side. Include the year and timezone string, if available. */
  orderCreatedTime?: DateTime;
  /** Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response. */
  orderId?: string;
  /** Output only. The ID that uniquely identifies this order tracking signal. */
  orderTrackingSignalId?: string;
  /** Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination. */
  deliveryRegionCode?: string;
  /** Information about line items in the order. */
  lineItems?: ReadonlyArray<OrderTrackingSignalLineItemDetails>;
  /** The shipping fee of the order; this value should be set to zero in the case of free shipping. */
  customerShippingFee?: PriceAmount;
}

export const OrderTrackingSignal: Schema.Schema<OrderTrackingSignal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.optional(Schema.String),
    deliveryPostalCode: Schema.optional(Schema.String),
    shipmentLineItemMapping: Schema.optional(
      Schema.Array(OrderTrackingSignalShipmentLineItemMapping),
    ),
    shippingInfo: Schema.optional(
      Schema.Array(OrderTrackingSignalShippingInfo),
    ),
    orderCreatedTime: Schema.optional(DateTime),
    orderId: Schema.optional(Schema.String),
    orderTrackingSignalId: Schema.optional(Schema.String),
    deliveryRegionCode: Schema.optional(Schema.String),
    lineItems: Schema.optional(
      Schema.Array(OrderTrackingSignalLineItemDetails),
    ),
    customerShippingFee: Schema.optional(PriceAmount),
  }).annotate({ identifier: "OrderTrackingSignal" });

export interface Css {
  /** Output only. Immutable. The CSS domain's full name. */
  fullName?: string;
  /** Output only. Immutable. The CSS domain's homepage. */
  homepageUri?: string;
  /** Output only. Immutable. The CSS domain ID. */
  cssDomainId?: string;
  /** Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users. */
  cssGroupId?: string;
  /** A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users. */
  labelIds?: ReadonlyArray<string>;
  /** Output only. Immutable. The CSS domain's display name, used when space is constrained. */
  displayName?: string;
}

export const Css: Schema.Schema<Css> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullName: Schema.optional(Schema.String),
    homepageUri: Schema.optional(Schema.String),
    cssDomainId: Schema.optional(Schema.String),
    cssGroupId: Schema.optional(Schema.String),
    labelIds: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Css" });

export interface ListCssesResponse {
  /** The CSS domains affiliated with the specified CSS group. */
  csses?: ReadonlyArray<Css>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListCssesResponse: Schema.Schema<ListCssesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csses: Schema.optional(Schema.Array(Css)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCssesResponse" });

export interface LabelIds {
  /** The list of label IDs. */
  labelIds?: ReadonlyArray<string>;
}

export const LabelIds: Schema.Schema<LabelIds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LabelIds" });

export interface AttributionSettings {
  /** Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 40. */
  attributionLookbackWindowInDays?: number;
  /** Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time. */
  conversionType?: ReadonlyArray<AttributionSettingsConversionType>;
  attributionModel?:
    | "ATTRIBUTION_MODEL_UNSPECIFIED"
    | "CROSS_CHANNEL_LAST_CLICK"
    | "ADS_PREFERRED_LAST_CLICK"
    | "CROSS_CHANNEL_DATA_DRIVEN"
    | "CROSS_CHANNEL_FIRST_CLICK"
    | "CROSS_CHANNEL_LINEAR"
    | "CROSS_CHANNEL_POSITION_BASED"
    | "CROSS_CHANNEL_TIME_DECAY"
    | (string & {});
}

export const AttributionSettings: Schema.Schema<AttributionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributionLookbackWindowInDays: Schema.optional(Schema.Number),
    conversionType: Schema.optional(
      Schema.Array(AttributionSettingsConversionType),
    ),
    attributionModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttributionSettings" });

export interface GoogleAnalyticsLink {
  /** Output only. Name of the Google Analytics property the merchant is linked to. */
  propertyName?: string;
  /** Required. Immutable. ID of the Google Analytics property the merchant is linked to. */
  propertyId?: string;
  /** Output only. Attribution settings for the linked Google Analytics property. */
  attributionSettings?: AttributionSettings;
}

export const GoogleAnalyticsLink: Schema.Schema<GoogleAnalyticsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    propertyName: Schema.optional(Schema.String),
    propertyId: Schema.optional(Schema.String),
    attributionSettings: Schema.optional(AttributionSettings),
  }).annotate({ identifier: "GoogleAnalyticsLink" });

export interface MerchantCenterDestination {
  /** Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center. */
  currencyCode?: string;
  /** Output only. Merchant Center Destination ID. */
  destinationId?: string;
  /** Required. Attribution settings being used for the Merchant Center Destination. */
  attributionSettings?: AttributionSettings;
  /** Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters. */
  displayName?: string;
}

export const MerchantCenterDestination: Schema.Schema<MerchantCenterDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    destinationId: Schema.optional(Schema.String),
    attributionSettings: Schema.optional(AttributionSettings),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "MerchantCenterDestination" });

export interface ConversionSource {
  /** Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete. */
  expireTime?: string;
  /** Output only. Current state of this conversion source. Can't be edited through the API. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "ARCHIVED"
    | "PENDING"
    | (string & {});
  /** Output only. Generated by the Content API upon creation of a new `ConversionSource`. Format: [a-z]{4}:.+ The four characters before the colon represent the type of conversio source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: - galk: For GoogleAnalyticsLink sources. - mcdn: For MerchantCenterDestination sources. */
  conversionSourceId?: string;
  /** Immutable. Conversion Source of type "Link to Google Analytics Property". */
  googleAnalyticsLink?: GoogleAnalyticsLink;
  /** Conversion Source of type "Merchant Center Tag Destination". */
  merchantCenterDestination?: MerchantCenterDestination;
}

export const ConversionSource: Schema.Schema<ConversionSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    conversionSourceId: Schema.optional(Schema.String),
    googleAnalyticsLink: Schema.optional(GoogleAnalyticsLink),
    merchantCenterDestination: Schema.optional(MerchantCenterDestination),
  }).annotate({ identifier: "ConversionSource" });

export interface ListConversionSourcesResponse {
  /** Token to be used to fetch the next results page. */
  nextPageToken?: string;
  /** List of conversion sources. */
  conversionSources?: ReadonlyArray<ConversionSource>;
}

export const ListConversionSourcesResponse: Schema.Schema<ListConversionSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    conversionSources: Schema.optional(Schema.Array(ConversionSource)),
  }).annotate({ identifier: "ListConversionSourcesResponse" });

export interface MethodQuota {
  /** Output only. The maximum number of calls allowed per day for the method. */
  quotaLimit?: string;
  /** Output only. The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method. */
  method?: string;
  /** Output only. The current quota usage, meaning the number of calls already made to the method per day. Usage is reset every day at 12 PM midday UTC. */
  quotaUsage?: string;
  /** Output only. The maximum number of calls allowed per minute for the method. */
  quotaMinuteLimit?: string;
}

export const MethodQuota: Schema.Schema<MethodQuota> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaLimit: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    quotaUsage: Schema.optional(Schema.String),
    quotaMinuteLimit: Schema.optional(Schema.String),
  }).annotate({ identifier: "MethodQuota" });

export interface ListMethodQuotasResponse {
  /** The current quota usage and limits per each method. */
  methodQuotas?: ReadonlyArray<MethodQuota>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMethodQuotasResponse: Schema.Schema<ListMethodQuotasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodQuotas: Schema.optional(Schema.Array(MethodQuota)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMethodQuotasResponse" });

export interface Value {
  /** If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set. */
  noShipping?: boolean;
  /** A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set. */
  pricePercentage?: string;
  /** The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. */
  carrierRateName?: string;
  /** A flat rate. Can only be set if all other fields are not set. */
  flatRate?: Price;
  /** The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set. */
  subtableName?: string;
}

export const Value: Schema.Schema<Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noShipping: Schema.optional(Schema.Boolean),
    pricePercentage: Schema.optional(Schema.String),
    carrierRateName: Schema.optional(Schema.String),
    flatRate: Schema.optional(Price),
    subtableName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Value" });

export interface Row {
  /** The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required. */
  cells?: ReadonlyArray<Value>;
}

export const Row: Schema.Schema<Row> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cells: Schema.optional(Schema.Array(Value)),
  }).annotate({ identifier: "Row" });

export interface Table {
  /** Name of the table. Required for subtables, ignored for the main table. */
  name?: string;
  /** The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required. */
  rows?: ReadonlyArray<Row>;
  /** Headers of the table's rows. Required. */
  rowHeaders?: Headers;
  /** Headers of the table's columns. Optional: if not set then the table has only one dimension. */
  columnHeaders?: Headers;
}

export const Table: Schema.Schema<Table> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    rows: Schema.optional(Schema.Array(Row)),
    rowHeaders: Schema.optional(Headers),
    columnHeaders: Schema.optional(Headers),
  }).annotate({ identifier: "Table" });

export interface CarrierRate {
  /** Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional. */
  percentageAdjustment?: string;
  /** Shipping origin for this carrier rate. Required. */
  originPostalCode?: string;
  /** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `getSupportedCarriers` method. Required. */
  carrierName?: string;
  /** Name of the carrier rate. Must be unique per rate group. Required. */
  name?: string;
  /** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `getSupportedCarriers` method. Required. */
  carrierService?: string;
  /** Additive shipping rate modifier. Can be negative. For example `{ "value": "1", "currency" : "USD" }` adds $1 to the rate, `{ "value": "-3", "currency" : "USD" }` removes $3 from the rate. Optional. */
  flatAdjustment?: Price;
}

export const CarrierRate: Schema.Schema<CarrierRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percentageAdjustment: Schema.optional(Schema.String),
    originPostalCode: Schema.optional(Schema.String),
    carrierName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    carrierService: Schema.optional(Schema.String),
    flatAdjustment: Schema.optional(Price),
  }).annotate({ identifier: "CarrierRate" });

export interface RateGroup {
  /** The value of the rate group (for example, flat rate $10). Can only be set if `mainTable` and `subtables` are not set. */
  singleValue?: Value;
  /** A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set. */
  subtables?: ReadonlyArray<Table>;
  /** A list of carrier rates that can be referred to by `mainTable` or `singleValue`. */
  carrierRates?: ReadonlyArray<CarrierRate>;
  /** Name of the rate group. Optional. If set has to be unique within shipping service. */
  name?: string;
  /** A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required. */
  applicableShippingLabels?: ReadonlyArray<string>;
  /** A table defining the rate group, when `singleValue` is not expressive enough. Can only be set if `singleValue` is not set. */
  mainTable?: Table;
}

export const RateGroup: Schema.Schema<RateGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    singleValue: Schema.optional(Value),
    subtables: Schema.optional(Schema.Array(Table)),
    carrierRates: Schema.optional(Schema.Array(CarrierRate)),
    name: Schema.optional(Schema.String),
    applicableShippingLabels: Schema.optional(Schema.Array(Schema.String)),
    mainTable: Schema.optional(Table),
  }).annotate({ identifier: "RateGroup" });

export interface CutoffTime {
  /** Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
  hour?: number;
  /** Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
  minute?: number;
  /** Timezone identifier for the cutoff time (for example, "Europe/Zurich"). List of identifiers. Required. */
  timezone?: string;
}

export const CutoffTime: Schema.Schema<CutoffTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hour: Schema.optional(Schema.Number),
    minute: Schema.optional(Schema.Number),
    timezone: Schema.optional(Schema.String),
  }).annotate({ identifier: "CutoffTime" });

export interface HolidayCutoff {
  /** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
  deadlineHour?: number;
  /** Unique identifier for the holiday. Required. */
  holidayId?: string;
  /** Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required. */
  visibleFromDate?: string;
  /** Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required. */
  deadlineDate?: string;
  /** Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required. */
  deadlineTimezone?: string;
}

export const HolidayCutoff: Schema.Schema<HolidayCutoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deadlineHour: Schema.optional(Schema.Number),
    holidayId: Schema.optional(Schema.String),
    visibleFromDate: Schema.optional(Schema.String),
    deadlineDate: Schema.optional(Schema.String),
    deadlineTimezone: Schema.optional(Schema.String),
  }).annotate({ identifier: "HolidayCutoff" });

export interface BusinessDayConfig {
  /** Regular business days, such as '"monday"'. May not be empty. */
  businessDays?: ReadonlyArray<string>;
}

export const BusinessDayConfig: Schema.Schema<BusinessDayConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    businessDays: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BusinessDayConfig" });

export interface TransitTableTransitTimeRowTransitTimeValue {
  /** Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery. */
  minTransitTimeInDays?: number;
  /** Must be greater than or equal to `minTransitTimeInDays`. */
  maxTransitTimeInDays?: number;
}

export const TransitTableTransitTimeRowTransitTimeValue: Schema.Schema<TransitTableTransitTimeRowTransitTimeValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minTransitTimeInDays: Schema.optional(Schema.Number),
    maxTransitTimeInDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TransitTableTransitTimeRowTransitTimeValue" });

export interface TransitTableTransitTimeRow {
  values?: ReadonlyArray<TransitTableTransitTimeRowTransitTimeValue>;
}

export const TransitTableTransitTimeRow: Schema.Schema<TransitTableTransitTimeRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(
      Schema.Array(TransitTableTransitTimeRowTransitTimeValue),
    ),
  }).annotate({ identifier: "TransitTableTransitTimeRow" });

export interface TransitTable {
  /** A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`. */
  transitTimeLabels?: ReadonlyArray<string>;
  rows?: ReadonlyArray<TransitTableTransitTimeRow>;
  /** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. */
  postalCodeGroupNames?: ReadonlyArray<string>;
}

export const TransitTable: Schema.Schema<TransitTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitTimeLabels: Schema.optional(Schema.Array(Schema.String)),
    rows: Schema.optional(Schema.Array(TransitTableTransitTimeRow)),
    postalCodeGroupNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TransitTable" });

export interface WarehouseBasedDeliveryTime {
  /** Shipping origin's street address. */
  originStreetAddress?: string;
  /** The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse. */
  warehouseName?: string;
  /** Shipping origin's state. */
  originAdministrativeArea?: string;
  /** Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). */
  originCountry?: string;
  /** Shipping origin. */
  originPostalCode?: string;
  /** Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method. */
  carrier?: string;
  /** Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list. */
  carrierService?: string;
  /** Shipping origin's city. */
  originCity?: string;
}

export const WarehouseBasedDeliveryTime: Schema.Schema<WarehouseBasedDeliveryTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originStreetAddress: Schema.optional(Schema.String),
    warehouseName: Schema.optional(Schema.String),
    originAdministrativeArea: Schema.optional(Schema.String),
    originCountry: Schema.optional(Schema.String),
    originPostalCode: Schema.optional(Schema.String),
    carrier: Schema.optional(Schema.String),
    carrierService: Schema.optional(Schema.String),
    originCity: Schema.optional(Schema.String),
  }).annotate({ identifier: "WarehouseBasedDeliveryTime" });

export interface DeliveryTime {
  /** Business days cutoff time definition. If not configured, the cutoff time will be defaulted to 8AM PST. If local delivery, use Service.StoreConfig.CutoffConfig. */
  cutoffTime?: CutoffTime;
  /** Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
  minTransitTimeInDays?: number;
  /** Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
  maxTransitTimeInDays?: number;
  /** Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping. */
  holidayCutoffs?: ReadonlyArray<HolidayCutoff>;
  /** The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed. */
  handlingBusinessDayConfig?: BusinessDayConfig;
  /** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
  minHandlingTimeInDays?: number;
  /** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
  maxHandlingTimeInDays?: number;
  /** Transit time table, number of business days spent in transit based on row and column dimensions. Either `{min,max}TransitTimeInDays` or `transitTimeTable` can be set, but not both. */
  transitTimeTable?: TransitTable;
  /** The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed. */
  transitBusinessDayConfig?: BusinessDayConfig;
  /** Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set. */
  warehouseBasedDeliveryTimes?: ReadonlyArray<WarehouseBasedDeliveryTime>;
}

export const DeliveryTime: Schema.Schema<DeliveryTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cutoffTime: Schema.optional(CutoffTime),
    minTransitTimeInDays: Schema.optional(Schema.Number),
    maxTransitTimeInDays: Schema.optional(Schema.Number),
    holidayCutoffs: Schema.optional(Schema.Array(HolidayCutoff)),
    handlingBusinessDayConfig: Schema.optional(BusinessDayConfig),
    minHandlingTimeInDays: Schema.optional(Schema.Number),
    maxHandlingTimeInDays: Schema.optional(Schema.Number),
    transitTimeTable: Schema.optional(TransitTable),
    transitBusinessDayConfig: Schema.optional(BusinessDayConfig),
    warehouseBasedDeliveryTimes: Schema.optional(
      Schema.Array(WarehouseBasedDeliveryTime),
    ),
  }).annotate({ identifier: "DeliveryTime" });

export interface ServiceStoreConfigCutoffConfigLocalCutoffTime {
  /** Hour local delivery orders must be placed by to process the same day. */
  hour?: string;
  /** Minute local delivery orders must be placed by to process the same day. */
  minute?: string;
}

export const ServiceStoreConfigCutoffConfigLocalCutoffTime: Schema.Schema<ServiceStoreConfigCutoffConfigLocalCutoffTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hour: Schema.optional(Schema.String),
    minute: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceStoreConfigCutoffConfigLocalCutoffTime" });

export interface ServiceStoreConfigCutoffConfig {
  /** Time in hours and minutes in the local timezone when local delivery ends. */
  localCutoffTime?: ServiceStoreConfigCutoffConfigLocalCutoffTime;
  /** Represents cutoff time as the number of hours before store closing. Mutually exclusive with other fields (hour and minute). */
  storeCloseOffsetHours?: string;
  /** Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery. */
  noDeliveryPostCutoff?: boolean;
}

export const ServiceStoreConfigCutoffConfig: Schema.Schema<ServiceStoreConfigCutoffConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localCutoffTime: Schema.optional(
      ServiceStoreConfigCutoffConfigLocalCutoffTime,
    ),
    storeCloseOffsetHours: Schema.optional(Schema.String),
    noDeliveryPostCutoff: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ServiceStoreConfigCutoffConfig" });

export interface Distance {
  /** The distance represented as a number. */
  value?: string;
  /** The distance unit. Acceptable values are `None`, `Miles`, and `Kilometers`. */
  unit?: string;
}

export const Distance: Schema.Schema<Distance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "Distance" });

export interface ServiceStoreConfig {
  /** Time local delivery ends for the day. This can be either `local_cutoff_time` or `store_close_offset_hours`, if both are provided an error is thrown. */
  cutoffConfig?: ServiceStoreConfigCutoffConfig;
  /** Maximum delivery radius. Only needed for local delivery fulfillment type. */
  serviceRadius?: Distance;
  /** Indicates whether all stores listed by this merchant provide local delivery or not. Acceptable values are `all stores` and `selected stores` */
  storeServiceType?: string;
  /** A list of store codes that provide local delivery. If empty, then `store_service_type` must be `all_stores`, or an error is thrown. If not empty, then `store_service_type` must be `selected_stores`, or an error is thrown. */
  storeCodes?: ReadonlyArray<string>;
}

export const ServiceStoreConfig: Schema.Schema<ServiceStoreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cutoffConfig: Schema.optional(ServiceStoreConfigCutoffConfig),
    serviceRadius: Schema.optional(Distance),
    storeServiceType: Schema.optional(Schema.String),
    storeCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceStoreConfig" });

export interface PickupCarrierService {
  /** The name of the pickup service (for example, `"Access point"`). Required. */
  serviceName?: string;
  /** The name of the pickup carrier (for example, `"UPS"`). Required. */
  carrierName?: string;
}

export const PickupCarrierService: Schema.Schema<PickupCarrierService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    carrierName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PickupCarrierService" });

export interface Service {
  /** Free-form name of the service. Must be unique within target account. Required. */
  name?: string;
  /** Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap. */
  rateGroups?: ReadonlyArray<RateGroup>;
  /** The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. */
  currency?: string;
  /** Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`" */
  eligibility?: string;
  /** Time spent in various aspects from order to the delivery of the product. Required. */
  deliveryTime?: DeliveryTime;
  /** A list of stores your products are delivered from. This is only available for the local delivery shipment type. */
  storeConfig?: ServiceStoreConfig;
  /** Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with minimum_order_value_table. */
  minimumOrderValue?: Price;
  /** Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup` (deprecated)" - "`local_delivery`" - "`collection_point`" */
  shipmentType?: string;
  /** The CLDR territory code of the country to which the service applies. Required. */
  deliveryCountry?: string;
  /** A boolean exposing the active status of the shipping service. Required. */
  active?: boolean;
  /** The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved through the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`. */
  pickupService?: PickupCarrierService;
  /** Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with minimum_order_value. */
  minimumOrderValueTable?: MinimumOrderValueTable;
}

export const Service: Schema.Schema<Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    rateGroups: Schema.optional(Schema.Array(RateGroup)),
    currency: Schema.optional(Schema.String),
    eligibility: Schema.optional(Schema.String),
    deliveryTime: Schema.optional(DeliveryTime),
    storeConfig: Schema.optional(ServiceStoreConfig),
    minimumOrderValue: Schema.optional(Price),
    shipmentType: Schema.optional(Schema.String),
    deliveryCountry: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    pickupService: Schema.optional(PickupCarrierService),
    minimumOrderValueTable: Schema.optional(MinimumOrderValueTable),
  }).annotate({ identifier: "Service" });

export interface Address {
  /** Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US"). */
  country?: string;
  /** Street-level part of the address. Use `\n` to add a second line. */
  streetAddress?: string;
  /** Required. Postal code or ZIP (for example, "94043"). */
  postalCode?: string;
  /** Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
  administrativeArea?: string;
  /** Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
  city?: string;
}

export const Address: Schema.Schema<Address> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    streetAddress: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    administrativeArea: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
  }).annotate({ identifier: "Address" });

export interface WarehouseCutoffTime {
  /** Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse. */
  hour?: number;
  /** Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse. */
  minute?: number;
}

export const WarehouseCutoffTime: Schema.Schema<WarehouseCutoffTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hour: Schema.optional(Schema.Number),
    minute: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WarehouseCutoffTime" });

export interface Warehouse {
  /** Business days of the warehouse. If not set, will be Monday to Friday by default. */
  businessDayConfig?: BusinessDayConfig;
  /** Required. Shipping address of the warehouse. */
  shippingAddress?: Address;
  /** Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item. */
  handlingDays?: string;
  /** Required. The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code. */
  cutoffTime?: WarehouseCutoffTime;
  /** Required. The name of the warehouse. Must be unique within account. */
  name?: string;
}

export const Warehouse: Schema.Schema<Warehouse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    businessDayConfig: Schema.optional(BusinessDayConfig),
    shippingAddress: Schema.optional(Address),
    handlingDays: Schema.optional(Schema.String),
    cutoffTime: Schema.optional(WarehouseCutoffTime),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Warehouse" });

export interface PostalCodeRange {
  /** A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required. */
  postalCodeRangeBegin?: string;
  /** A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`. */
  postalCodeRangeEnd?: string;
}

export const PostalCodeRange: Schema.Schema<PostalCodeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postalCodeRangeBegin: Schema.optional(Schema.String),
    postalCodeRangeEnd: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostalCodeRange" });

export interface PostalCodeGroup {
  /** The name of the postal code group, referred to in headers. Required. */
  name?: string;
  /** A range of postal codes. Required. */
  postalCodeRanges?: ReadonlyArray<PostalCodeRange>;
  /** The CLDR territory code of the country the postal code group applies to. Required. */
  country?: string;
}

export const PostalCodeGroup: Schema.Schema<PostalCodeGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    postalCodeRanges: Schema.optional(Schema.Array(PostalCodeRange)),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostalCodeGroup" });

export interface ShippingSettings {
  /** The target account's list of services. Optional. */
  services?: ReadonlyArray<Service>;
  /** Optional. A list of warehouses which can be referred to in `services`. */
  warehouses?: ReadonlyArray<Warehouse>;
  /** The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses. */
  accountId?: string;
  /** A list of postal code groups that can be referred to in `services`. Optional. */
  postalCodeGroups?: ReadonlyArray<PostalCodeGroup>;
}

export const ShippingSettings: Schema.Schema<ShippingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(Service)),
    warehouses: Schema.optional(Schema.Array(Warehouse)),
    accountId: Schema.optional(Schema.String),
    postalCodeGroups: Schema.optional(Schema.Array(PostalCodeGroup)),
  }).annotate({ identifier: "ShippingSettings" });

export interface UrlSettings {
  /** URL template when the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. */
  checkoutUriTemplate?: string;
  /** URL template when the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. */
  cartUriTemplate?: string;
}

export const UrlSettings: Schema.Schema<UrlSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    checkoutUriTemplate: Schema.optional(Schema.String),
    cartUriTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "UrlSettings" });

export interface CheckoutSettings {
  /** Output only. Reflects the merchant review state in `Checkout` feature. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an enrollment_state of `ENROLLED` before a review can begin for the merchant. */
  reviewState?:
    | "CHECKOUT_ON_MERCHANT_REVIEW_STATE_UNSPECIFIED"
    | "IN_REVIEW"
    | "APPROVED"
    | "DISAPPROVED"
    | (string & {});
  /** Output only. The effective value of review state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
  effectiveReviewState?:
    | "CHECKOUT_ON_MERCHANT_REVIEW_STATE_UNSPECIFIED"
    | "IN_REVIEW"
    | "APPROVED"
    | "DISAPPROVED"
    | (string & {});
  /** Required. The ID of the account. */
  merchantId?: string;
  /** URL settings for cart or checkout URL. */
  uriSettings?: UrlSettings;
  /** The effective value of `url_settings` for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
  effectiveUriSettings?: UrlSettings;
  /** Output only. The effective value of enrollment state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
  effectiveEnrollmentState?:
    | "CHECKOUT_ON_MERCHANT_ENROLLMENT_STATE_UNSPECIFIED"
    | "INACTIVE"
    | "ENROLLED"
    | "OPT_OUT"
    | (string & {});
  /** Output only. Reflects the merchant enrollment state in `Checkout` feature. */
  enrollmentState?:
    | "CHECKOUT_ON_MERCHANT_ENROLLMENT_STATE_UNSPECIFIED"
    | "INACTIVE"
    | "ENROLLED"
    | "OPT_OUT"
    | (string & {});
}

export const CheckoutSettings: Schema.Schema<CheckoutSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewState: Schema.optional(Schema.String),
    effectiveReviewState: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    uriSettings: Schema.optional(UrlSettings),
    effectiveUriSettings: Schema.optional(UrlSettings),
    effectiveEnrollmentState: Schema.optional(Schema.String),
    enrollmentState: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckoutSettings" });

export interface CustomAttribute {
  /** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
  name?: string;
  /** The value of the attribute. */
  value?: string;
  /** Subattributes within this attribute group. Exactly one of value or groupValues must be provided. */
  groupValues?: ReadonlyArray<CustomAttribute>;
}

export const CustomAttribute: Schema.Schema<CustomAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
      groupValues: Schema.optional(Schema.Array(CustomAttribute)),
    }),
  ).annotate({
    identifier: "CustomAttribute",
  }) as any as Schema.Schema<CustomAttribute>;

export interface LocalInventory {
  /** The sale price of the product. Mandatory if `sale_price_effective_date` is defined. */
  salePrice?: Price;
  /** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided. */
  salePriceEffectiveDate?: string;
  /** Required. The store code of this local inventory resource. */
  storeCode?: string;
  /** The in-store product location. */
  instoreProductLocation?: string;
  /** The quantity of the product. Must be nonnegative. */
  quantity?: number;
  /** The expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification. */
  pickupSla?: string;
  /** The supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification. */
  pickupMethod?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`" */
  kind?: string;
  /** The price of the product. */
  price?: Price;
  /** The availability of the product. For accepted attribute values, see the local product inventory feed specification. */
  availability?: string;
  /** A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, `{ "name": "size type", "value": "regular" }`. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
}

export const LocalInventory: Schema.Schema<LocalInventory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    salePrice: Schema.optional(Price),
    salePriceEffectiveDate: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    instoreProductLocation: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    pickupSla: Schema.optional(Schema.String),
    pickupMethod: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    availability: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
  }).annotate({ identifier: "LocalInventory" });

export interface PickupServicesPickupService {
  /** The name of the pickup service (for example, `"Access point"`). Always present. */
  serviceName?: string;
  /** The CLDR country code of the carrier (for example, "US"). Always present. */
  country?: string;
  /** The name of the carrier (for example, `"UPS"`). Always present. */
  carrierName?: string;
}

export const PickupServicesPickupService: Schema.Schema<PickupServicesPickupService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    carrierName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PickupServicesPickupService" });

export interface ShippingsettingsGetSupportedPickupServicesResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedPickupServicesResponse`". */
  kind?: string;
  /** A list of supported pickup services. May be empty. */
  pickupServices?: ReadonlyArray<PickupServicesPickupService>;
}

export const ShippingsettingsGetSupportedPickupServicesResponse: Schema.Schema<ShippingsettingsGetSupportedPickupServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    pickupServices: Schema.optional(Schema.Array(PickupServicesPickupService)),
  }).annotate({
    identifier: "ShippingsettingsGetSupportedPickupServicesResponse",
  });

export interface ShippingsettingsCustomBatchRequestEntry {
  /** The ID of the managing account. */
  merchantId?: string;
  /** The ID of the account for which to get/update account shipping settings. */
  accountId?: string;
  /** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
  method?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The account shipping settings to update. Only defined if the method is `update`. */
  shippingSettings?: ShippingSettings;
}

export const ShippingsettingsCustomBatchRequestEntry: Schema.Schema<ShippingsettingsCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    shippingSettings: Schema.optional(ShippingSettings),
  }).annotate({ identifier: "ShippingsettingsCustomBatchRequestEntry" });

export interface ShippingsettingsCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<ShippingsettingsCustomBatchRequestEntry>;
}

export const ShippingsettingsCustomBatchRequest: Schema.Schema<ShippingsettingsCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(ShippingsettingsCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "ShippingsettingsCustomBatchRequest" });

export interface DatafeedStatusExample {
  /** The ID of the example item. */
  itemId?: string;
  /** The problematic value. */
  value?: string;
  /** Line number in the data feed where the example is found. */
  lineNumber?: string;
}

export const DatafeedStatusExample: Schema.Schema<DatafeedStatusExample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemId: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    lineNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedStatusExample" });

export interface DatafeedStatusError {
  /** A list of example occurrences of the error, grouped by product. */
  examples?: ReadonlyArray<DatafeedStatusExample>;
  /** The code of the error, for example, "validation/invalid_value". */
  code?: string;
  /** The number of occurrences of the error in the feed. */
  count?: string;
  /** The error message, for example, "Invalid price". */
  message?: string;
}

export const DatafeedStatusError: Schema.Schema<DatafeedStatusError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    examples: Schema.optional(Schema.Array(DatafeedStatusExample)),
    code: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedStatusError" });

export interface DatafeedStatus {
  /** The number of items in the feed that were processed. */
  itemsTotal?: string;
  /** The two-letter ISO 639-1 language for which the status is reported. */
  language?: string;
  /** The list of errors occurring in the feed. */
  errors?: ReadonlyArray<DatafeedStatusError>;
  /** The list of errors occurring in the feed. */
  warnings?: ReadonlyArray<DatafeedStatusError>;
  /** The last date at which the feed was uploaded. */
  lastUploadDate?: string;
  /** The country for which the status is reported, represented as a CLDR territory code. */
  country?: string;
  /** The ID of the feed for which the status is reported. */
  datafeedId?: string;
  /** The number of items in the feed that were valid. */
  itemsValid?: string;
  /** The feed label status is reported for. */
  feedLabel?: string;
  /** The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors. */
  processingStatus?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`" */
  kind?: string;
}

export const DatafeedStatus: Schema.Schema<DatafeedStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemsTotal: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(DatafeedStatusError)),
    warnings: Schema.optional(Schema.Array(DatafeedStatusError)),
    lastUploadDate: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    datafeedId: Schema.optional(Schema.String),
    itemsValid: Schema.optional(Schema.String),
    feedLabel: Schema.optional(Schema.String),
    processingStatus: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedStatus" });

export interface PriceCompetitiveness {
  /** The price benchmark currency (ISO 4217 code). */
  benchmarkPriceCurrencyCode?: string;
  /** The country of the price benchmark (ISO 3166 code). */
  countryCode?: string;
  /** The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country. */
  benchmarkPriceMicros?: string;
}

export const PriceCompetitiveness: Schema.Schema<PriceCompetitiveness> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benchmarkPriceCurrencyCode: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    benchmarkPriceMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "PriceCompetitiveness" });

export interface ProductStructuredTitle {
  /** Required. The title text. Maximum length is 150 characters. */
  content?: string;
  /** Optional. The digital source type. Acceptable values are: - "`trained_algorithmic_media`" - "`default`" */
  digitalSourceType?: string;
}

export const ProductStructuredTitle: Schema.Schema<ProductStructuredTitle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    digitalSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStructuredTitle" });

export interface ProductShippingWeight {
  /** The weight of the product used to calculate the shipping cost of the item. */
  value?: number;
  /** The unit of value. */
  unit?: string;
}

export const ProductShippingWeight: Schema.Schema<ProductShippingWeight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductShippingWeight" });

export interface DatafeedstatusesCustomBatchResponseEntry {
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** The requested data feed status. Defined if and only if the request was successful. */
  datafeedStatus?: DatafeedStatus;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
}

export const DatafeedstatusesCustomBatchResponseEntry: Schema.Schema<DatafeedstatusesCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    datafeedStatus: Schema.optional(DatafeedStatus),
    errors: Schema.optional(Errors),
  }).annotate({ identifier: "DatafeedstatusesCustomBatchResponseEntry" });

export interface DatafeedstatusesCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<DatafeedstatusesCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`". */
  kind?: string;
}

export const DatafeedstatusesCustomBatchResponse: Schema.Schema<DatafeedstatusesCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(DatafeedstatusesCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedstatusesCustomBatchResponse" });

export interface ProductUnitPricingBaseMeasure {
  /** The denominator of the unit price. */
  value?: string;
  /** The unit of the denominator. */
  unit?: string;
}

export const ProductUnitPricingBaseMeasure: Schema.Schema<ProductUnitPricingBaseMeasure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductUnitPricingBaseMeasure" });

export interface AccountstatusesListResponse {
  /** The token for the retrieval of the next page of account statuses. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<AccountStatus>;
}

export const AccountstatusesListResponse: Schema.Schema<AccountstatusesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(AccountStatus)),
  }).annotate({ identifier: "AccountstatusesListResponse" });

export interface PosDataProvidersPosDataProvider {
  /** The full name of this POS data Provider. */
  fullName?: string;
  /** The ID of the account. */
  providerId?: string;
  /** The display name of Pos data Provider. */
  displayName?: string;
}

export const PosDataProvidersPosDataProvider: Schema.Schema<PosDataProvidersPosDataProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullName: Schema.optional(Schema.String),
    providerId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosDataProvidersPosDataProvider" });

export interface PosDataProviders {
  /** Country code. */
  country?: string;
  /** A list of POS data providers. */
  posDataProviders?: ReadonlyArray<PosDataProvidersPosDataProvider>;
}

export const PosDataProviders: Schema.Schema<PosDataProviders> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    posDataProviders: Schema.optional(
      Schema.Array(PosDataProvidersPosDataProvider),
    ),
  }).annotate({ identifier: "PosDataProviders" });

export interface LiasettingsListPosDataProvidersResponse {
  /** The list of POS data providers for each eligible country */
  posDataProviders?: ReadonlyArray<PosDataProviders>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`". */
  kind?: string;
}

export const LiasettingsListPosDataProvidersResponse: Schema.Schema<LiasettingsListPosDataProvidersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posDataProviders: Schema.optional(Schema.Array(PosDataProviders)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiasettingsListPosDataProvidersResponse" });

export interface TextWithTooltip {
  /** The suggested type of an icon for tooltip, if a tooltip is present. */
  tooltipIconStyle?:
    | "TOOLTIP_ICON_STYLE_UNSPECIFIED"
    | "INFO"
    | "QUESTION"
    | (string & {});
  /** Value of the tooltip as a simple text. */
  simpleTooltipValue?: string;
  /** Value of the message as a simple text. */
  simpleValue?: string;
}

export const TextWithTooltip: Schema.Schema<TextWithTooltip> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tooltipIconStyle: Schema.optional(Schema.String),
    simpleTooltipValue: Schema.optional(Schema.String),
    simpleValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextWithTooltip" });

export interface InputFieldTextInput {
  /** Type of the text input */
  type?:
    | "TEXT_INPUT_TYPE_UNSPECIFIED"
    | "GENERIC_SHORT_TEXT"
    | "GENERIC_LONG_TEXT"
    | (string & {});
  /** Additional info regarding the field to be displayed to merchant. For example, warning to not include personal identifiable information. There may be more information to be shown in a tooltip. */
  additionalInfo?: TextWithTooltip;
  /** Information about the required format. If present, it should be shown close to the input field to help merchants to provide a correct value. For example: "VAT numbers should be in a format similar to SK9999999999" */
  formatInfo?: string;
  /** Text to be used as the [aria-label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for the input. */
  ariaLabel?: string;
}

export const InputFieldTextInput: Schema.Schema<InputFieldTextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    additionalInfo: Schema.optional(TextWithTooltip),
    formatInfo: Schema.optional(Schema.String),
    ariaLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputFieldTextInput" });

export interface InputFieldCheckboxInput {}

export const InputFieldCheckboxInput: Schema.Schema<InputFieldCheckboxInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InputFieldCheckboxInput",
  });

export interface InputField {
  /** Input field label. There may be more information to be shown in a tooltip. */
  label?: TextWithTooltip;
  /** Not for display but need to be sent back for the given input field. */
  id?: string;
  /** Input field to provide text information. Corresponds to the [html input type=text](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.text.html#input.text) or [html textarea](https://www.w3.org/TR/2012/WD-html-markup-20121025/textarea.html#textarea). */
  textInput?: InputFieldTextInput;
  /** Input field to select one of the offered choices. Corresponds to the [html input type=radio](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.radio.html#input.radio). */
  choiceInput?: InputFieldChoiceInput;
  /** Whether the field is required. The action button needs to stay disabled till values for all required fields are provided. */
  required?: boolean;
  /** Input field to provide a boolean value. Corresponds to the [html input type=checkbox](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.checkbox.html#input.checkbox). */
  checkboxInput?: InputFieldCheckboxInput;
}

export const InputField: Schema.Schema<InputField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      label: Schema.optional(TextWithTooltip),
      id: Schema.optional(Schema.String),
      textInput: Schema.optional(InputFieldTextInput),
      choiceInput: Schema.optional(InputFieldChoiceInput),
      required: Schema.optional(Schema.Boolean),
      checkboxInput: Schema.optional(InputFieldCheckboxInput),
    }),
  ).annotate({ identifier: "InputField" }) as any as Schema.Schema<InputField>;

export interface InputFieldChoiceInputChoiceInputOption {
  /** Short description of the choice option. There may be more information to be shown as a tooltip. */
  label?: TextWithTooltip;
  /** Not for display but need to be sent back for the selected choice option. */
  id?: string;
  /** Input that should be displayed when this option is selected. The additional input will not contain a `ChoiceInput`. */
  additionalInput?: InputField;
}

export const InputFieldChoiceInputChoiceInputOption: Schema.Schema<InputFieldChoiceInputChoiceInputOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      label: Schema.optional(TextWithTooltip),
      id: Schema.optional(Schema.String),
      additionalInput: Schema.optional(InputField),
    }),
  ).annotate({
    identifier: "InputFieldChoiceInputChoiceInputOption",
  }) as any as Schema.Schema<InputFieldChoiceInputChoiceInputOption>;

export interface InputFieldChoiceInput {
  /** A list of choices. Only one option can be selected. */
  options?: ReadonlyArray<InputFieldChoiceInputChoiceInputOption>;
}

export const InputFieldChoiceInput: Schema.Schema<InputFieldChoiceInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      options: Schema.optional(
        Schema.Array(InputFieldChoiceInputChoiceInputOption),
      ),
    }),
  ).annotate({
    identifier: "InputFieldChoiceInput",
  }) as any as Schema.Schema<InputFieldChoiceInput>;

export interface ProductstatusesCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<ProductstatusesCustomBatchRequestEntry>;
}

export const ProductstatusesCustomBatchRequest: Schema.Schema<ProductstatusesCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(ProductstatusesCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "ProductstatusesCustomBatchRequest" });

export interface RegionalInventory {
  /** The price of the product. */
  price?: Price;
  /** The availability of the product. */
  availability?: string;
  /** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
  /** The ID uniquely identifying each region. */
  regionId?: string;
  /** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided. */
  salePriceEffectiveDate?: string;
  /** The sale price of the product. Mandatory if `sale_price_effective_date` is defined. */
  salePrice?: Price;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`". */
  kind?: string;
}

export const RegionalInventory: Schema.Schema<RegionalInventory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price: Schema.optional(Price),
    availability: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
    regionId: Schema.optional(Schema.String),
    salePriceEffectiveDate: Schema.optional(Schema.String),
    salePrice: Schema.optional(Price),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalInventory" });

export interface RegionalinventoryCustomBatchResponseEntry {
  /** Price and availability of the product. */
  regionalInventory?: RegionalInventory;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`". */
  kind?: string;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
}

export const RegionalinventoryCustomBatchResponseEntry: Schema.Schema<RegionalinventoryCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionalInventory: Schema.optional(RegionalInventory),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    errors: Schema.optional(Errors),
  }).annotate({ identifier: "RegionalinventoryCustomBatchResponseEntry" });

export interface ProductViewItemIssueItemIssueType {
  /** Canonical attribute name for attribute-specific issues. */
  canonicalAttribute?: string;
  /** Error code of the issue. */
  code?: string;
}

export const ProductViewItemIssueItemIssueType: Schema.Schema<ProductViewItemIssueItemIssueType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalAttribute: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductViewItemIssueItemIssueType" });

export interface ProductSubscriptionCost {
  /** The number of subscription periods the buyer has to pay. */
  periodLength?: string;
  /** The type of subscription period. - "`month`" - "`year`" */
  period?: string;
  /** The amount the buyer has to pay per subscription period. */
  amount?: Price;
}

export const ProductSubscriptionCost: Schema.Schema<ProductSubscriptionCost> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodLength: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    amount: Schema.optional(Price),
  }).annotate({ identifier: "ProductSubscriptionCost" });

export interface AccountLabel {
  /** The display name of this label. */
  name?: string;
  /** The description of this label. */
  description?: string;
  /** Output only. The ID of the label. */
  labelId?: string;
  /** Immutable. The ID of account this label belongs to. */
  accountId?: string;
  /** Output only. The type of this label. */
  labelType?: "LABEL_TYPE_UNSPECIFIED" | "MANUAL" | "AUTOMATIC" | (string & {});
}

export const AccountLabel: Schema.Schema<AccountLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labelId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    labelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountLabel" });

export interface ListAccountLabelsResponse {
  /** The labels from the specified account. */
  accountLabels?: ReadonlyArray<AccountLabel>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAccountLabelsResponse: Schema.Schema<ListAccountLabelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountLabels: Schema.optional(Schema.Array(AccountLabel)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccountLabelsResponse" });

export interface VerifyPhoneNumberRequest {
  /** The verification code that was sent to the phone number for validation. */
  verificationCode?: string;
  /** Verification method used to receive verification code. */
  phoneVerificationMethod?:
    | "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    | "SMS"
    | "PHONE_CALL"
    | (string & {});
  /** The verification ID returned by `requestphoneverification`. */
  verificationId?: string;
}

export const VerifyPhoneNumberRequest: Schema.Schema<VerifyPhoneNumberRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verificationCode: Schema.optional(Schema.String),
    phoneVerificationMethod: Schema.optional(Schema.String),
    verificationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyPhoneNumberRequest" });

export interface ProductDimension {
  /** Required. The length value represented as a number. The value can have a maximum precision of four decimal places. */
  value?: number;
  /** Required. The length units. Acceptable values are: - "`in`" - "`cm`" */
  unit?: string;
}

export const ProductDimension: Schema.Schema<ProductDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductDimension" });

export interface BuiltInSimpleActionAdditionalContent {
  /** Title of the additional content; */
  title?: string;
  /** Long text organized into paragraphs. */
  paragraphs?: ReadonlyArray<string>;
}

export const BuiltInSimpleActionAdditionalContent: Schema.Schema<BuiltInSimpleActionAdditionalContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    paragraphs: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BuiltInSimpleActionAdditionalContent" });

export interface BuiltInSimpleAction {
  /** Long text from an external source that should be available to the merchant. Present when the type is `SHOW_ADDITIONAL_CONTENT`. */
  additionalContent?: BuiltInSimpleActionAdditionalContent;
  /** The type of action that represents a functionality that is expected to be available in third-party application. */
  type?:
    | "BUILT_IN_SIMPLE_ACTION_TYPE_UNSPECIFIED"
    | "VERIFY_PHONE"
    | "CLAIM_WEBSITE"
    | "ADD_PRODUCTS"
    | "ADD_CONTACT_INFO"
    | "LINK_ADS_ACCOUNT"
    | "ADD_BUSINESS_REGISTRATION_NUMBER"
    | "EDIT_ITEM_ATTRIBUTE"
    | "FIX_ACCOUNT_ISSUE"
    | "SHOW_ADDITIONAL_CONTENT"
    | (string & {});
  /** The attribute that needs to be updated. Present when the type is `EDIT_ITEM_ATTRIBUTE`. This field contains a code for attribute, represented in snake_case. You can find a list of product's attributes, with their codes [here](https://support.google.com/merchants/answer/7052112). */
  attributeCode?: string;
}

export const BuiltInSimpleAction: Schema.Schema<BuiltInSimpleAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalContent: Schema.optional(BuiltInSimpleActionAdditionalContent),
    type: Schema.optional(Schema.String),
    attributeCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuiltInSimpleAction" });

export interface ActionReason {
  /** Detailed explanation of the reason. Should be displayed as a hint if present. */
  detail?: string;
  /** Optional. An action that needs to be performed to solve the problem represented by this reason. This action will always be available. Should be rendered as a link or button next to the summarizing message. For example, the review may be available only once merchant configure all required attributes. In such a situation this action can be a link to the form, where they can fill the missing attribute to unblock the main action. */
  action?: Action;
  /** Messages summarizing the reason, why the action is not available. For example: "Review requested on Jan 03. Review requests can take a few days to complete." */
  message?: string;
}

export const ActionReason: Schema.Schema<ActionReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      detail: Schema.optional(Schema.String),
      action: Schema.optional(Action),
      message: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "ActionReason",
  }) as any as Schema.Schema<ActionReason>;

export interface ExternalAction {
  /** The type of external action. */
  type?:
    | "EXTERNAL_ACTION_TYPE_UNSPECIFIED"
    | "REVIEW_PRODUCT_ISSUE_IN_MERCHANT_CENTER"
    | "REVIEW_ACCOUNT_ISSUE_IN_MERCHANT_CENTER"
    | "LEGAL_APPEAL_IN_HELP_CENTER"
    | "VERIFY_IDENTITY_IN_MERCHANT_CENTER"
    | (string & {});
  /** URL to external system, for example Merchant Center, where the merchant can perform the action. */
  uri?: string;
}

export const ExternalAction: Schema.Schema<ExternalAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalAction" });

export interface Callout {
  /** Can be used to render messages with different severity in different styles. Snippets off all types contain important information that should be displayed to merchants. */
  styleHint?:
    | "CALLOUT_STYLE_HINT_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
  /** A full message that needs to be shown to the merchant. */
  fullMessage?: TextWithTooltip;
}

export const Callout: Schema.Schema<Callout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    styleHint: Schema.optional(Schema.String),
    fullMessage: Schema.optional(TextWithTooltip),
  }).annotate({ identifier: "Callout" });

export interface ActionFlow {
  /** Important message to be highlighted in the request dialog. For example: "You can only request a review for disagreeing with this issue once. If it's not approved, you'll need to fix the issue and wait a few days before you can request another review." */
  dialogCallout?: Callout;
  /** A list of input fields. */
  inputs?: ReadonlyArray<InputField>;
  /** Text value describing the intent for the action flow. It can be used as an input label if merchant needs to pick one of multiple flows. For example: "I disagree with the issue" */
  label?: string;
  /** Message displayed in the request dialog. For example: "Make sure you've fixed all your country-specific issues. If not, you may have to wait 7 days to request another review". There may be an more information to be shown in a tooltip. */
  dialogMessage?: TextWithTooltip;
  /** Not for display but need to be sent back for the selected action flow. */
  id?: string;
  /** Title of the request dialog. For example: "Before you request a review" */
  dialogTitle?: string;
  /** Label for the button to trigger the action from the action dialog. For example: "Request review" */
  dialogButtonLabel?: string;
}

export const ActionFlow: Schema.Schema<ActionFlow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialogCallout: Schema.optional(Callout),
    inputs: Schema.optional(Schema.Array(InputField)),
    label: Schema.optional(Schema.String),
    dialogMessage: Schema.optional(TextWithTooltip),
    id: Schema.optional(Schema.String),
    dialogTitle: Schema.optional(Schema.String),
    dialogButtonLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionFlow" });

export interface BuiltInUserInputAction {
  /** Internal details. Not for display but need to be sent back when triggering the action. */
  actionContext?: string;
  /** Actions may provide multiple different flows. Merchant selects one that fits best to their intent. Selecting the flow is the first step in user's interaction with the action. It affects what input fields will be available and required and also how the request will be processed. */
  flows?: ReadonlyArray<ActionFlow>;
}

export const BuiltInUserInputAction: Schema.Schema<BuiltInUserInputAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionContext: Schema.optional(Schema.String),
    flows: Schema.optional(Schema.Array(ActionFlow)),
  }).annotate({ identifier: "BuiltInUserInputAction" });

export interface Action {
  /** Controlling whether the button is active or disabled. The value is 'false' when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons. */
  isAvailable?: boolean;
  /** Action implemented and performed in (your) third-party application. The application should point the merchant to the place, where they can access the corresponding functionality or provide instructions, if the specific functionality is not available. */
  builtinSimpleAction?: BuiltInSimpleAction;
  /** Label of the action button. */
  buttonLabel?: string;
  /** List of reasons why the action is not available. The list of reasons is empty if the action is available. If there is only one reason, it can be displayed next to the disabled button. If there are more reasons, all of them should be displayed, for example in a pop-up dialog. */
  reasons?: ReadonlyArray<ActionReason>;
  /** Action that is implemented and performed outside of (your) third-party application. The application needs to redirect the merchant to the external location where they can perform the action. */
  externalAction?: ExternalAction;
  /** Action implemented and performed in (your) third-party application. The application needs to show an additional content and input form to the merchant as specified for given action. They can trigger the action only when they provided all required inputs. */
  builtinUserInputAction?: BuiltInUserInputAction;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      isAvailable: Schema.optional(Schema.Boolean),
      builtinSimpleAction: Schema.optional(BuiltInSimpleAction),
      buttonLabel: Schema.optional(Schema.String),
      reasons: Schema.optional(Schema.Array(ActionReason)),
      externalAction: Schema.optional(ExternalAction),
      builtinUserInputAction: Schema.optional(BuiltInUserInputAction),
    }),
  ).annotate({ identifier: "Action" }) as any as Schema.Schema<Action>;

export interface ProductIssue {
  /** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `list-intro` - marks the paragraph that contains an intro for a list. This paragraph will be always followed by a list. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
  prerenderedContent?: string;
  /** A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue. */
  actions?: ReadonlyArray<Action>;
  /** Title of the issue. */
  title?: string;
  /** Clarifies the severity of the issue. The summarizing message, if present, should be shown right under the title for each issue. It helps merchants to quickly understand the impact of the issue. The detailed breakdown helps the merchant to fully understand the impact of the issue. It can be rendered as dialog that opens when the merchant mouse over the summarized impact statement. Issues with different severity can be styled differently. They may use a different color or icon to signal the difference between `ERROR`, `WARNING` and `INFO`. */
  impact?: ProductIssueImpact;
  /** Pre-rendered HTML that contains a link to the external location where the ODS can be requested and instructions for how to request it. HTML elements contain CSS classes that can be used to customize the style of this snippet. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `ods-section`* - wrapper around the out-of-court dispute resolution section * `ods-description`* - intro text for the out-of-court dispute resolution. It may contain multiple segments and a link. * `ods-param`* - wrapper around the header-value pair for parameters that merchant may need to provide during the ODS process. * `ods-routing-id`* - ods param for the Routing ID. * `ods-reference-id`* - ods param for the Routing ID. * `ods-param-header`* - header for the ODS parameter * `ods-param-value`* - value of the ODS parameter. This value should be rendered in a way that it is easy for merchants to identify and copy. * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. */
  prerenderedOutOfCourtDisputeSettlement?: string;
}

export const ProductIssue: Schema.Schema<ProductIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prerenderedContent: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(Action)),
    title: Schema.optional(Schema.String),
    impact: Schema.optional(ProductIssueImpact),
    prerenderedOutOfCourtDisputeSettlement: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductIssue" });

export interface ReturnPolicyOnlineRestockingFee {
  /** Fixed restocking fee. */
  fixedFee?: PriceAmount;
  /** Percent of total price in micros. 15,000,000 means 15% of the total price would be charged. */
  microPercent?: number;
}

export const ReturnPolicyOnlineRestockingFee: Schema.Schema<ReturnPolicyOnlineRestockingFee> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedFee: Schema.optional(PriceAmount),
    microPercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReturnPolicyOnlineRestockingFee" });

export interface ProductWeight {
  /** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
  value?: number;
  /** Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`" */
  unit?: string;
}

export const ProductWeight: Schema.Schema<ProductWeight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductWeight" });

export interface DatafeedstatusesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<DatafeedStatus>;
  /** The token for the retrieval of the next page of datafeed statuses. */
  nextPageToken?: string;
}

export const DatafeedstatusesListResponse: Schema.Schema<DatafeedstatusesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(DatafeedStatus)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedstatusesListResponse" });

export interface InputValueTextInputValue {
  /** Required. Text provided by the merchant. */
  value?: string;
}

export const InputValueTextInputValue: Schema.Schema<InputValueTextInputValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputValueTextInputValue" });

export interface DatafeedstatusesCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<DatafeedstatusesCustomBatchRequestEntry>;
}

export const DatafeedstatusesCustomBatchRequest: Schema.Schema<DatafeedstatusesCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(DatafeedstatusesCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "DatafeedstatusesCustomBatchRequest" });

export interface TimePeriod {
  /** The ending timestamp. */
  endTime?: string;
  /** The starting timestamp. */
  startTime?: string;
}

export const TimePeriod: Schema.Schema<TimePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimePeriod" });

export interface ReturnPolicyOnlineReturnShippingFee {
  /** Type of return shipping fee. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "FIXED"
    | "CUSTOMER_PAYING_ACTUAL_FEE"
    | (string & {});
  /** Fixed return shipping fee amount. This value is only applicable when type is FIXED. We will treat the return shipping fee as free if type is FIXED and this value is not set. */
  fixedFee?: PriceAmount;
}

export const ReturnPolicyOnlineReturnShippingFee: Schema.Schema<ReturnPolicyOnlineReturnShippingFee> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    fixedFee: Schema.optional(PriceAmount),
  }).annotate({ identifier: "ReturnPolicyOnlineReturnShippingFee" });

export interface ReturnPolicyOnlineReturnReasonCategoryInfo {
  /** The return reason category. */
  returnReasonCategory?:
    | "RETURN_REASON_CATEGORY_UNSPECIFIED"
    | "BUYER_REMORSE"
    | "ITEM_DEFECT"
    | (string & {});
  /** The corresponding return label source. If the `ReturnMethod` field includes `BY_MAIL`, it is required to specify `ReturnLabelSource` for both `BUYER_REMORSE` and `ITEM_DEFECT` return reason categories. */
  returnLabelSource?:
    | "RETURN_LABEL_SOURCE_UNSPECIFIED"
    | "DOWNLOAD_AND_PRINT"
    | "IN_THE_BOX"
    | "CUSTOMER_RESPONSIBILITY"
    | (string & {});
  /** The corresponding return shipping fee. This is only applicable when returnLabelSource is not the customer's responsibility. */
  returnShippingFee?: ReturnPolicyOnlineReturnShippingFee;
}

export const ReturnPolicyOnlineReturnReasonCategoryInfo: Schema.Schema<ReturnPolicyOnlineReturnReasonCategoryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnReasonCategory: Schema.optional(Schema.String),
    returnLabelSource: Schema.optional(Schema.String),
    returnShippingFee: Schema.optional(ReturnPolicyOnlineReturnShippingFee),
  }).annotate({ identifier: "ReturnPolicyOnlineReturnReasonCategoryInfo" });

export interface LiaInventorySettings {
  /** The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
  status?: string;
  /** The name of the contact for the inventory verification process. */
  inventoryVerificationContactName?: string;
  /** The email of the contact for the inventory verification process. */
  inventoryVerificationContactEmail?: string;
  /** The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
  inventoryVerificationContactStatus?: string;
}

export const LiaInventorySettings: Schema.Schema<LiaInventorySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    inventoryVerificationContactName: Schema.optional(Schema.String),
    inventoryVerificationContactEmail: Schema.optional(Schema.String),
    inventoryVerificationContactStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiaInventorySettings" });

export interface LiaPosDataProvider {
  /** The ID of the POS data provider. */
  posDataProviderId?: string;
  /** The account ID by which this merchant is known to the POS data provider. */
  posExternalAccountId?: string;
}

export const LiaPosDataProvider: Schema.Schema<LiaPosDataProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posDataProviderId: Schema.optional(Schema.String),
    posExternalAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiaPosDataProvider" });

export interface LiaOmnichannelExperience {
  /** The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`" */
  pickupTypes?: ReadonlyArray<string>;
  /** The CLDR country code (for example, "US"). */
  country?: string;
  /** The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here. */
  lsfType?: string;
}

export const LiaOmnichannelExperience: Schema.Schema<LiaOmnichannelExperience> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pickupTypes: Schema.optional(Schema.Array(Schema.String)),
    country: Schema.optional(Schema.String),
    lsfType: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiaOmnichannelExperience" });

export interface AccountstatusesCustomBatchRequestEntry {
  /** The method of the batch entry. Acceptable values are: - "`get`" */
  method?: string;
  /** The ID of the (sub-)account whose status to get. */
  accountId?: string;
  /** The ID of the managing account. */
  merchantId?: string;
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: ReadonlyArray<string>;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
}

export const AccountstatusesCustomBatchRequestEntry: Schema.Schema<AccountstatusesCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    destinations: Schema.optional(Schema.Array(Schema.String)),
    batchId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AccountstatusesCustomBatchRequestEntry" });

export interface PosInventoryResponse {
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The available quantity of the item. */
  quantity?: string;
  /** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupSla?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
  /** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupMethod?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posInventoryResponse`". */
  kind?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** Required. The current price of the item. */
  price?: Price;
}

export const PosInventoryResponse: Schema.Schema<PosInventoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    pickupSla: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
    pickupMethod: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    price: Schema.optional(Price),
  }).annotate({ identifier: "PosInventoryResponse" });

export interface ProductStructuredDescription {
  /** Required. The description text. Maximum length is 5000 characters. */
  content?: string;
  /** Optional. The digital source type. Acceptable values are: - "`trained_algorithmic_media`" - "`default`" */
  digitalSourceType?: string;
}

export const ProductStructuredDescription: Schema.Schema<ProductStructuredDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    digitalSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStructuredDescription" });

export interface HolidaysHoliday {
  /** The CLDR territory code of the country in which the holiday is available. For example, "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. */
  countryCode?: string;
  /** Date on which the order has to arrive at the customer's, in ISO 8601 format. For example, "2016-12-24" for 24th December 2016. Always present. */
  deliveryGuaranteeDate?: string;
  /** Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present. */
  deliveryGuaranteeHour?: string;
  /** Date of the holiday, in ISO 8601 format. For example, "2016-12-25" for Christmas 2016. Always present. */
  date?: string;
  /** Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present. */
  id?: string;
  /** The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`" */
  type?: string;
}

export const HolidaysHoliday: Schema.Schema<HolidaysHoliday> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryCode: Schema.optional(Schema.String),
    deliveryGuaranteeDate: Schema.optional(Schema.String),
    deliveryGuaranteeHour: Schema.optional(Schema.String),
    date: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "HolidaysHoliday" });

export interface ShippingsettingsGetSupportedHolidaysResponse {
  /** A list of holidays applicable for delivery guarantees. May be empty. */
  holidays?: ReadonlyArray<HolidaysHoliday>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`". */
  kind?: string;
}

export const ShippingsettingsGetSupportedHolidaysResponse: Schema.Schema<ShippingsettingsGetSupportedHolidaysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    holidays: Schema.optional(Schema.Array(HolidaysHoliday)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingsettingsGetSupportedHolidaysResponse" });

export interface LocalinventoryCustomBatchRequestEntry {
  /** The ID of the managing account. */
  merchantId?: string;
  /** Method of the batch request entry. Acceptable values are: - "`insert`" */
  method?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The ID of the product for which to update local inventory. */
  productId?: string;
  /** Local inventory of the product. */
  localInventory?: LocalInventory;
}

export const LocalinventoryCustomBatchRequestEntry: Schema.Schema<LocalinventoryCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    productId: Schema.optional(Schema.String),
    localInventory: Schema.optional(LocalInventory),
  }).annotate({ identifier: "LocalinventoryCustomBatchRequestEntry" });

export interface LocalinventoryCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<LocalinventoryCustomBatchRequestEntry>;
}

export const LocalinventoryCustomBatchRequest: Schema.Schema<LocalinventoryCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(LocalinventoryCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "LocalinventoryCustomBatchRequest" });

export interface RecommendationDescription {
  /** Output only. Type of the description. */
  type?: "DESCRIPTION_TYPE_UNSPECIFIED" | "SHORT" | "LONG" | (string & {});
  /** Output only. Text of the description. */
  text?: string;
}

export const RecommendationDescription: Schema.Schema<RecommendationDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecommendationDescription" });

export interface Recommendation {
  /** Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation. */
  paid?: boolean;
  /** Optional. A numerical score of the impact from the recommendation's description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact. */
  numericalImpact?: number;
  /** Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type. */
  subType?: string;
  /** Optional. Default CTA of the recommendation. */
  defaultCallToAction?: RecommendationCallToAction;
  /** Optional. Localized recommendation name. The localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
  recommendationName?: string;
  /** Output only. List of additional localized descriptions for a recommendation. Localication uses the `languageCode` field in `GenerateRecommendations` requests. Not all description types are guaranteed to be present and we recommend to rely on default description. */
  additionalDescriptions?: ReadonlyArray<RecommendationDescription>;
  /** Output only. CTAs of this recommendation. Repeated. */
  additionalCallToAction?: ReadonlyArray<RecommendationCallToAction>;
  /** Optional. Localized Recommendation Title. Localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
  title?: string;
  /** Output only. Any creatives attached to the recommendation. Repeated. */
  creative?: ReadonlyArray<RecommendationCreative>;
  /** Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN */
  type?: string;
  /** Optional. Localized recommendation description. The localization the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
  defaultDescription?: string;
}

export const Recommendation: Schema.Schema<Recommendation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paid: Schema.optional(Schema.Boolean),
    numericalImpact: Schema.optional(Schema.Number),
    subType: Schema.optional(Schema.String),
    defaultCallToAction: Schema.optional(RecommendationCallToAction),
    recommendationName: Schema.optional(Schema.String),
    additionalDescriptions: Schema.optional(
      Schema.Array(RecommendationDescription),
    ),
    additionalCallToAction: Schema.optional(
      Schema.Array(RecommendationCallToAction),
    ),
    title: Schema.optional(Schema.String),
    creative: Schema.optional(Schema.Array(RecommendationCreative)),
    type: Schema.optional(Schema.String),
    defaultDescription: Schema.optional(Schema.String),
  }).annotate({ identifier: "Recommendation" });

export interface GenerateRecommendationsResponse {
  /** Output only. Response token is a string created for each `GenerateRecommendationsResponse`. This token doesn't expire, and is globally unique. This token must be used when reporting interactions for recommendations. */
  responseToken?: string;
  /** Recommendations generated for a request. */
  recommendations?: ReadonlyArray<Recommendation>;
}

export const GenerateRecommendationsResponse: Schema.Schema<GenerateRecommendationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseToken: Schema.optional(Schema.String),
    recommendations: Schema.optional(Schema.Array(Recommendation)),
  }).annotate({ identifier: "GenerateRecommendationsResponse" });

export interface InputValueChoiceInputValue {
  /** Required. Id of the option that was selected by the merchant. */
  choiceInputOptionId?: string;
}

export const InputValueChoiceInputValue: Schema.Schema<InputValueChoiceInputValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    choiceInputOptionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputValueChoiceInputValue" });

export interface RequestPhoneVerificationRequest {
  /** Phone number to be verified. */
  phoneNumber?: string;
  /** Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. */
  phoneRegionCode?: string;
  /** Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided. */
  languageCode?: string;
  /** Verification method to receive verification code. */
  phoneVerificationMethod?:
    | "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    | "SMS"
    | "PHONE_CALL"
    | (string & {});
}

export const RequestPhoneVerificationRequest: Schema.Schema<RequestPhoneVerificationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    phoneRegionCode: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    phoneVerificationMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestPhoneVerificationRequest" });

export interface ProductShipping {
  /** A free-form description of the service class or delivery speed. */
  service?: string;
  /** Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present. */
  minHandlingTime?: string;
  /** The location where the shipping is applicable, represented by a location group name. */
  locationGroupName?: string;
  /** The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. */
  postalCode?: string;
  /** Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
  maxHandlingTime?: string;
  /** The geographic region to which a shipping rate applies. */
  region?: string;
  /** Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
  maxTransitTime?: string;
  /** Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present. */
  minTransitTime?: string;
  /** The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API. */
  locationId?: string;
  /** The CLDR territory code of the country to which an item will ship. */
  country?: string;
  /** Fixed shipping price, represented as a number. */
  price?: Price;
}

export const ProductShipping: Schema.Schema<ProductShipping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    minHandlingTime: Schema.optional(Schema.String),
    locationGroupName: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    maxHandlingTime: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    maxTransitTime: Schema.optional(Schema.String),
    minTransitTime: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    price: Schema.optional(Price),
  }).annotate({ identifier: "ProductShipping" });

export interface LiaAboutPageSettings {
  /** The status of the verification process for the About page. Supported values are: - "`active`" - "`inactive`" - "`pending`" */
  status?: string;
  /** The URL for the About page. */
  url?: string;
}

export const LiaAboutPageSettings: Schema.Schema<LiaAboutPageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiaAboutPageSettings" });

export interface LiaOnDisplayToOrderSettings {
  /** Shipping cost and policy URL. */
  shippingCostPolicyUrl?: string;
  /** The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
  status?: string;
}

export const LiaOnDisplayToOrderSettings: Schema.Schema<LiaOnDisplayToOrderSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shippingCostPolicyUrl: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiaOnDisplayToOrderSettings" });

export interface LiaCountrySettings {
  /** Required. CLDR country code (for example, "US"). */
  country?: string;
  /** LIA inventory verification settings. */
  inventory?: LiaInventorySettings;
  /** The status of the "Store pickup" feature. */
  storePickupActive?: boolean;
  /** The status of the "Merchant hosted local storefront" feature. */
  hostedLocalStorefrontActive?: boolean;
  /** The settings for the About page. */
  about?: LiaAboutPageSettings;
  /** The POS data provider linked with this country. */
  posDataProvider?: LiaPosDataProvider;
  /** LIA "On Display To Order" settings. */
  onDisplayToOrder?: LiaOnDisplayToOrderSettings;
  /** The omnichannel experience configured for this country. */
  omnichannelExperience?: LiaOmnichannelExperience;
}

export const LiaCountrySettings: Schema.Schema<LiaCountrySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    inventory: Schema.optional(LiaInventorySettings),
    storePickupActive: Schema.optional(Schema.Boolean),
    hostedLocalStorefrontActive: Schema.optional(Schema.Boolean),
    about: Schema.optional(LiaAboutPageSettings),
    posDataProvider: Schema.optional(LiaPosDataProvider),
    onDisplayToOrder: Schema.optional(LiaOnDisplayToOrderSettings),
    omnichannelExperience: Schema.optional(LiaOmnichannelExperience),
  }).annotate({ identifier: "LiaCountrySettings" });

export interface LiaSettings {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`" */
  kind?: string;
  /** The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses. */
  accountId?: string;
  /** The LIA settings for each country. */
  countrySettings?: ReadonlyArray<LiaCountrySettings>;
}

export const LiaSettings: Schema.Schema<LiaSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    countrySettings: Schema.optional(Schema.Array(LiaCountrySettings)),
  }).annotate({ identifier: "LiaSettings" });

export interface GmbAccountsGmbAccount {
  /** The type of the Business Profile (User or Business). */
  type?: string;
  /** The name of the Business Profile. */
  name?: string;
  /** Number of listings under this account. */
  listingCount?: string;
  /** The email which identifies the Business Profile. */
  email?: string;
}

export const GmbAccountsGmbAccount: Schema.Schema<GmbAccountsGmbAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    listingCount: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GmbAccountsGmbAccount" });

export interface GmbAccounts {
  /** The ID of the Merchant Center account. */
  accountId?: string;
  /** A list of Business Profiles which are available to the merchant. */
  gmbAccounts?: ReadonlyArray<GmbAccountsGmbAccount>;
}

export const GmbAccounts: Schema.Schema<GmbAccounts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    gmbAccounts: Schema.optional(Schema.Array(GmbAccountsGmbAccount)),
  }).annotate({ identifier: "GmbAccounts" });

export interface LiasettingsCustomBatchResponseEntry {
  /** The retrieved or updated Lia settings. */
  liaSettings?: LiaSettings;
  /** The updated omnichannel experience for a country. */
  omnichannelExperience?: LiaOmnichannelExperience;
  /** A list of errors defined if, and only if, the request failed. */
  errors?: Errors;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`" */
  kind?: string;
  /** The list of accessible Business Profiles. */
  gmbAccounts?: GmbAccounts;
  /** The ID of the request entry to which this entry responds. */
  batchId?: number;
  /** The list of POS data providers. */
  posDataProviders?: ReadonlyArray<PosDataProviders>;
}

export const LiasettingsCustomBatchResponseEntry: Schema.Schema<LiasettingsCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liaSettings: Schema.optional(LiaSettings),
    omnichannelExperience: Schema.optional(LiaOmnichannelExperience),
    errors: Schema.optional(Errors),
    kind: Schema.optional(Schema.String),
    gmbAccounts: Schema.optional(GmbAccounts),
    batchId: Schema.optional(Schema.Number),
    posDataProviders: Schema.optional(Schema.Array(PosDataProviders)),
  }).annotate({ identifier: "LiasettingsCustomBatchResponseEntry" });

export interface LiasettingsCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<LiasettingsCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponse`". */
  kind?: string;
}

export const LiasettingsCustomBatchResponse: Schema.Schema<LiasettingsCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(LiasettingsCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiasettingsCustomBatchResponse" });

export interface SearchRequest {
  /** Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview). */
  query?: string;
  /** Number of ReportRows to retrieve in a single page. Defaults to 1000. Values above 5000 are coerced to 5000. */
  pageSize?: number;
  /** Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used. */
  pageToken?: string;
}

export const SearchRequest: Schema.Schema<SearchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchRequest" });

export interface AlternateDisputeResolution {
  /** The label for the alternate dispute resolution link. */
  label?: string;
  /** The URL pointing to a page, where merchant can request alternative dispute resolution with an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). */
  uri?: string;
}

export const AlternateDisputeResolution: Schema.Schema<AlternateDisputeResolution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlternateDisputeResolution" });

export interface LocalinventoryCustomBatchResponseEntry {
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`" */
  kind?: string;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
}

export const LocalinventoryCustomBatchResponseEntry: Schema.Schema<LocalinventoryCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    errors: Schema.optional(Errors),
  }).annotate({ identifier: "LocalinventoryCustomBatchResponseEntry" });

export interface LocalinventoryCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<LocalinventoryCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`". */
  kind?: string;
}

export const LocalinventoryCustomBatchResponse: Schema.Schema<LocalinventoryCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(LocalinventoryCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalinventoryCustomBatchResponse" });

export interface ShippingsettingsCustomBatchResponseEntry {
  /** The retrieved or updated account shipping settings. */
  shippingSettings?: ShippingSettings;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry to which this entry responds. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`" */
  kind?: string;
}

export const ShippingsettingsCustomBatchResponseEntry: Schema.Schema<ShippingsettingsCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shippingSettings: Schema.optional(ShippingSettings),
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingsettingsCustomBatchResponseEntry" });

export interface ShippingsettingsCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<ShippingsettingsCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponse`". */
  kind?: string;
}

export const ShippingsettingsCustomBatchResponse: Schema.Schema<ShippingsettingsCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(ShippingsettingsCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingsettingsCustomBatchResponse" });

export interface PromotionPromotionStatusPromotionIssue {
  /** Code of the issue. */
  code?: string;
  /** Explanation of the issue. */
  detail?: string;
}

export const PromotionPromotionStatusPromotionIssue: Schema.Schema<PromotionPromotionStatusPromotionIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "PromotionPromotionStatusPromotionIssue" });

export interface PromotionPromotionStatusDestinationStatus {
  /** The name of the destination. */
  destination?: string;
  /** The status for the specified destination. */
  status?:
    | "STATE_UNSPECIFIED"
    | "IN_REVIEW"
    | "REJECTED"
    | "LIVE"
    | "STOPPED"
    | "EXPIRED"
    | "PENDING"
    | (string & {});
}

export const PromotionPromotionStatusDestinationStatus: Schema.Schema<PromotionPromotionStatusDestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "PromotionPromotionStatusDestinationStatus" });

export interface PromotionPromotionStatus {
  /** A list of issues associated with the promotion. */
  promotionIssue?: ReadonlyArray<PromotionPromotionStatusPromotionIssue>;
  /** The intended destinations for the promotion. */
  destinationStatuses?: ReadonlyArray<PromotionPromotionStatusDestinationStatus>;
  /** Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
  creationDate?: string;
  /** Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
  lastUpdateDate?: string;
}

export const PromotionPromotionStatus: Schema.Schema<PromotionPromotionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotionIssue: Schema.optional(
      Schema.Array(PromotionPromotionStatusPromotionIssue),
    ),
    destinationStatuses: Schema.optional(
      Schema.Array(PromotionPromotionStatusDestinationStatus),
    ),
    creationDate: Schema.optional(Schema.String),
    lastUpdateDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "PromotionPromotionStatus" });

export interface Promotion {
  /** The maximum monetary discount a customer can receive for the promotion. This field is only supported with the `Percent off` coupon value type. */
  maxDiscountAmount?: PriceAmount;
  /** Free gift item ID for the promotion. */
  freeGiftItemId?: string;
  /** The money off amount offered in the promotion. */
  moneyOffAmount?: PriceAmount;
  /** Product filter by product type for the promotion. */
  productType?: ReadonlyArray<string>;
  /** Free gift value for the promotion. */
  freeGiftValue?: PriceAmount;
  /** Maximum purchase quantity for the promotion. */
  limitQuantity?: number;
  /** Maximum purchase value for the promotion. */
  limitValue?: PriceAmount;
  /** Product filter by item group ID exclusion for the promotion. */
  itemGroupIdExclusion?: ReadonlyArray<string>;
  /** The percentage discount offered in the promotion. */
  percentOff?: number;
  /** Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`. */
  targetCountry?: string;
  /** Product filter by item group ID for the promotion. */
  itemGroupId?: ReadonlyArray<string>;
  /** Product filter by product type exclusion for the promotion. */
  productTypeExclusion?: ReadonlyArray<string>;
  /** Product filter by brand exclusion for the promotion. */
  brandExclusion?: ReadonlyArray<string>;
  /** The custom redemption restriction for the promotion. If the `redemption_restriction` field is set to `CUSTOM`, this field must be set. */
  customRedemptionRestriction?: string;
  /** Cost cap for the promotion. */
  moneyBudget?: PriceAmount;
  /** Product filter by item ID exclusion for the promotion. */
  itemIdExclusion?: ReadonlyArray<string>;
  /** Order limit for the promotion. */
  orderLimit?: number;
  /** URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed. */
  promotionUrl?: string;
  /** Required. Type of the promotion. */
  offerType?:
    | "OFFER_TYPE_UNSPECIFIED"
    | "NO_CODE"
    | "GENERIC_CODE"
    | (string & {});
  /** Product filter by item ID for the promotion. */
  itemId?: ReadonlyArray<string>;
  /** Product filter by brand for the promotion. */
  brand?: ReadonlyArray<string>;
  /** Minimum purchase quantity for the promotion. */
  minimumPurchaseQuantity?: number;
  /** `TimePeriod` representation of the promotion's display dates. */
  promotionDisplayTimePeriod?: TimePeriod;
  /** Store codes to include for the promotion. */
  storeCode?: ReadonlyArray<string>;
  /** Output only. The current status of the promotion. */
  promotionStatus?: PromotionPromotionStatus;
  /** Required. Long title for the promotion. */
  longTitle?: string;
  /** Required. Redemption channel for the promotion. At least one channel is required. */
  redemptionChannel?: ReadonlyArray<
    "REDEMPTION_CHANNEL_UNSPECIFIED" | "IN_STORE" | "ONLINE" | (string & {})
  >;
  /** Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country. */
  contentLanguage?: string;
  /** Destination ID for the promotion. */
  promotionDestinationIds?: ReadonlyArray<string>;
  /** Store codes to exclude for the promotion. */
  storeCodeExclusion?: ReadonlyArray<string>;
  /** Minimum purchase amount for the promotion. */
  minimumPurchaseAmount?: PriceAmount;
  /** Free gift description for the promotion. */
  freeGiftDescription?: string;
  /** The redemption restriction for the promotion. */
  redemptionRestriction?:
    | "REDEMPTION_RESTRICTION_UNSPECIFIED"
    | "SUBSCRIBE_AND_SAVE"
    | "FIRST_ORDER"
    | "SIGN_UP_FOR_EMAIL"
    | "SIGN_UP_FOR_TEXT"
    | "FORMS_OF_PAYMENT"
    | "CUSTOM"
    | (string & {});
  /** String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead. */
  promotionDisplayDates?: string;
  /** Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`. */
  id?: string;
  /** Required. `TimePeriod` representation of the promotion's effective dates. */
  promotionEffectiveTimePeriod?: TimePeriod;
  /** Generic redemption code for the promotion. To be used with the `offerType` field. */
  genericRedemptionCode?: string;
  /** String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead. */
  promotionEffectiveDates?: string;
  /** Required. The user provided promotion ID to uniquely identify the promotion. */
  promotionId?: string;
  /** Required. Coupon value type for the promotion. */
  couponValueType?:
    | "COUPON_VALUE_TYPE_UNSPECIFIED"
    | "MONEY_OFF"
    | "PERCENT_OFF"
    | "BUY_M_GET_N_MONEY_OFF"
    | "BUY_M_GET_N_PERCENT_OFF"
    | "BUY_M_GET_MONEY_OFF"
    | "BUY_M_GET_PERCENT_OFF"
    | "FREE_GIFT"
    | "FREE_GIFT_WITH_VALUE"
    | "FREE_GIFT_WITH_ITEM_ID"
    | "FREE_SHIPPING_STANDARD"
    | "FREE_SHIPPING_OVERNIGHT"
    | "FREE_SHIPPING_TWO_DAY"
    | (string & {});
  /** Shipping service names for the promotion. */
  shippingServiceNames?: ReadonlyArray<string>;
  /** The number of items discounted in the promotion. */
  getThisQuantityDiscounted?: number;
  /** Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value. */
  storeApplicability?:
    | "STORE_APPLICABILITY_UNSPECIFIED"
    | "ALL_STORES"
    | "SPECIFIC_STORES"
    | (string & {});
  /** Required. Applicability of the promotion to either all products or only specific products. */
  productApplicability?:
    | "PRODUCT_APPLICABILITY_UNSPECIFIED"
    | "ALL_PRODUCTS"
    | "SPECIFIC_PRODUCTS"
    | (string & {});
}

export const Promotion: Schema.Schema<Promotion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDiscountAmount: Schema.optional(PriceAmount),
    freeGiftItemId: Schema.optional(Schema.String),
    moneyOffAmount: Schema.optional(PriceAmount),
    productType: Schema.optional(Schema.Array(Schema.String)),
    freeGiftValue: Schema.optional(PriceAmount),
    limitQuantity: Schema.optional(Schema.Number),
    limitValue: Schema.optional(PriceAmount),
    itemGroupIdExclusion: Schema.optional(Schema.Array(Schema.String)),
    percentOff: Schema.optional(Schema.Number),
    targetCountry: Schema.optional(Schema.String),
    itemGroupId: Schema.optional(Schema.Array(Schema.String)),
    productTypeExclusion: Schema.optional(Schema.Array(Schema.String)),
    brandExclusion: Schema.optional(Schema.Array(Schema.String)),
    customRedemptionRestriction: Schema.optional(Schema.String),
    moneyBudget: Schema.optional(PriceAmount),
    itemIdExclusion: Schema.optional(Schema.Array(Schema.String)),
    orderLimit: Schema.optional(Schema.Number),
    promotionUrl: Schema.optional(Schema.String),
    offerType: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.Array(Schema.String)),
    brand: Schema.optional(Schema.Array(Schema.String)),
    minimumPurchaseQuantity: Schema.optional(Schema.Number),
    promotionDisplayTimePeriod: Schema.optional(TimePeriod),
    storeCode: Schema.optional(Schema.Array(Schema.String)),
    promotionStatus: Schema.optional(PromotionPromotionStatus),
    longTitle: Schema.optional(Schema.String),
    redemptionChannel: Schema.optional(Schema.Array(Schema.String)),
    contentLanguage: Schema.optional(Schema.String),
    promotionDestinationIds: Schema.optional(Schema.Array(Schema.String)),
    storeCodeExclusion: Schema.optional(Schema.Array(Schema.String)),
    minimumPurchaseAmount: Schema.optional(PriceAmount),
    freeGiftDescription: Schema.optional(Schema.String),
    redemptionRestriction: Schema.optional(Schema.String),
    promotionDisplayDates: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    promotionEffectiveTimePeriod: Schema.optional(TimePeriod),
    genericRedemptionCode: Schema.optional(Schema.String),
    promotionEffectiveDates: Schema.optional(Schema.String),
    promotionId: Schema.optional(Schema.String),
    couponValueType: Schema.optional(Schema.String),
    shippingServiceNames: Schema.optional(Schema.Array(Schema.String)),
    getThisQuantityDiscounted: Schema.optional(Schema.Number),
    storeApplicability: Schema.optional(Schema.String),
    productApplicability: Schema.optional(Schema.String),
  }).annotate({ identifier: "Promotion" });

export interface ListPromotionResponse {
  /** List of all available promotions for the merchant. */
  promotions?: ReadonlyArray<Promotion>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPromotionResponse: Schema.Schema<ListPromotionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotions: Schema.optional(Schema.Array(Promotion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPromotionResponse" });

export interface LoyaltyProgram {
  /** Optional. The shipping label for the loyalty program. You can use this label to indicate whether this offer has the loyalty shipping benefit. If not specified, the item is not eligible for loyalty shipping for the given loyalty tier. */
  shippingLabel?: string;
  /** Required. The label of the loyalty program. This is an internal label that uniquely identifies the relationship between a merchant entity and a loyalty program entity. It must be provided so that system can associate the assets below (for example, price and points) with a merchant. The corresponding program must be linked to the merchant account. */
  programLabel?: string;
  /** Optional. The price for members of the given tier (instant discount price). Must be smaller or equal to the regular price. */
  price?: Price;
  /** Required. The label of the tier within the loyalty program. Must match one of the labels within the program. */
  tierLabel?: string;
  /** Optional. The cashback that can be used for future purchases. */
  cashbackForFutureUse?: Price;
  /** Optional. The amount of loyalty points earned on a purchase. */
  loyaltyPoints?: string;
  /** Optional. A date range during which the item is eligible for member price. If not specified, the member price is always applicable. The date range is represented by a pair of ISO 8601 dates separated by a space, comma, or slash. */
  memberPriceEffectiveDate?: string;
}

export const LoyaltyProgram: Schema.Schema<LoyaltyProgram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shippingLabel: Schema.optional(Schema.String),
    programLabel: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    tierLabel: Schema.optional(Schema.String),
    cashbackForFutureUse: Schema.optional(Price),
    loyaltyPoints: Schema.optional(Schema.String),
    memberPriceEffectiveDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoyaltyProgram" });

export interface ProductShippingDimension {
  /** The dimension of the product used to calculate the shipping cost of the item. */
  value?: number;
  /** The unit of value. */
  unit?: string;
}

export const ProductShippingDimension: Schema.Schema<ProductShippingDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductShippingDimension" });

export interface ProductSustainabilityIncentive {
  /** Optional. The fixed amount of the incentive. */
  amount?: Price;
  /** Optional. The percentage of the sale price that the incentive is applied to. */
  percentage?: number;
  /** Required. Sustainability incentive program. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "EV_TAX_CREDIT"
    | "EV_PRICE_DISCOUNT"
    | (string & {});
}

export const ProductSustainabilityIncentive: Schema.Schema<ProductSustainabilityIncentive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.optional(Price),
    percentage: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductSustainabilityIncentive" });

export interface ProductCertification {
  /** The certification value (also known as class, level or grade), for example "A+", "C", "gold". Maximum length is 2000 characters. */
  certificationValue?: string;
  /** The name of the certification, for example "EPREL". Maximum length is 2000 characters. */
  certificationName?: string;
  /** The certification authority, for example "European_Commission". Maximum length is 2000 characters. */
  certificationAuthority?: string;
  /** The certification code, for eaxample "123456". Maximum length is 2000 characters. */
  certificationCode?: string;
}

export const ProductCertification: Schema.Schema<ProductCertification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificationValue: Schema.optional(Schema.String),
    certificationName: Schema.optional(Schema.String),
    certificationAuthority: Schema.optional(Schema.String),
    certificationCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductCertification" });

export interface FreeShippingThreshold {
  /** Required. The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
  /** Required. The minimum product price for the shipping cost to become free. Represented as a number. */
  priceThreshold?: Price;
}

export const FreeShippingThreshold: Schema.Schema<FreeShippingThreshold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    priceThreshold: Schema.optional(Price),
  }).annotate({ identifier: "FreeShippingThreshold" });

export interface Installment {
  /** The number of installments the buyer has to pay. */
  months?: string;
  /** The amount the buyer has to pay per month. */
  amount?: Price;
  /** Optional. The initial down payment amount the buyer has to pay. */
  downpayment?: Price;
  /** Optional. Type of installment payments. Supported values are: - "`finance`" - "`lease`" */
  creditType?: string;
}

export const Installment: Schema.Schema<Installment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    months: Schema.optional(Schema.String),
    amount: Schema.optional(Price),
    downpayment: Schema.optional(Price),
    creditType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Installment" });

export interface CloudExportAdditionalProperties {
  /** Maximum float value of the given property. For example for a TV product 100.00. */
  maxValue?: number;
  /** Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters. */
  propertyName?: string;
  /** Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters. */
  textValue?: ReadonlyArray<string>;
  /** Float values of the given property. For example for a TV product 1.2345. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. */
  floatValue?: ReadonlyArray<number>;
  /** Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256 bytes. */
  unitCode?: string;
  /** Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD. */
  boolValue?: boolean;
  /** Integer values of the given property. For example, 1080 for a screen resolution of a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. */
  intValue?: ReadonlyArray<string>;
  /** Minimum float value of the given property. For example for a TV product 1.00. */
  minValue?: number;
}

export const CloudExportAdditionalProperties: Schema.Schema<CloudExportAdditionalProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxValue: Schema.optional(Schema.Number),
    propertyName: Schema.optional(Schema.String),
    textValue: Schema.optional(Schema.Array(Schema.String)),
    floatValue: Schema.optional(Schema.Array(Schema.Number)),
    unitCode: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    intValue: Schema.optional(Schema.Array(Schema.String)),
    minValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudExportAdditionalProperties" });

export interface ProductTax {
  /** The percentage of tax rate that applies to the item price. */
  rate?: number;
  /** The numeric ID of a location that the tax rate applies to as defined in the Google Ads API. */
  locationId?: string;
  /** Should be set to true if tax is charged on shipping. */
  taxShip?: boolean;
  /** The country within which the item is taxed, specified as a CLDR territory code. */
  country?: string;
  /** The geographic region to which the tax rate applies. */
  region?: string;
  /** The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*. */
  postalCode?: string;
}

export const ProductTax: Schema.Schema<ProductTax> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rate: Schema.optional(Schema.Number),
    locationId: Schema.optional(Schema.String),
    taxShip: Schema.optional(Schema.Boolean),
    country: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductTax" });

export interface ProductUnitPricingMeasure {
  /** The measure of an item. */
  value?: number;
  /** The unit of the measure. */
  unit?: string;
}

export const ProductUnitPricingMeasure: Schema.Schema<ProductUnitPricingMeasure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductUnitPricingMeasure" });

export interface ProductProductDetail {
  /** The section header used to group a set of product details. */
  sectionName?: string;
  /** The value of the product detail. */
  attributeValue?: string;
  /** The name of the product detail. */
  attributeName?: string;
}

export const ProductProductDetail: Schema.Schema<ProductProductDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionName: Schema.optional(Schema.String),
    attributeValue: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductProductDetail" });

export interface Product {
  /** Custom label 1 for custom grouping of items in a Shopping campaign. */
  customLabel1?: string;
  /** Structured title, for algorithmically (AI)-generated titles. */
  structuredTitle?: ProductStructuredTitle;
  /** Similar to ads_grouping, but only works on CPC. */
  adsLabels?: ReadonlyArray<string>;
  /** The list of [destinations to exclude](//support.google.com/merchants/answer/6324486) for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted. */
  excludedDestinations?: ReadonlyArray<string>;
  /** The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productHeight?: ProductDimension;
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Minimal product handling time (in business days). */
  minHandlingTime?: string;
  /** Number of periods (months or years) and amount of payment per period for an item with an associated subscription contract. */
  subscriptionCost?: ProductSubscriptionCost;
  /** URL for the canonical version of your item's landing page. */
  canonicalLink?: string;
  /** Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
  feedLabel?: string;
  /** Global Trade Item Number (GTIN) of the item. */
  gtin?: string;
  /** Loyalty program information that is used to surface loyalty benefits ( for example, better pricing, points, etc) to the user of this item. This signular field points to the latest uploaded loyalty program info. This field will be deprecated in the coming weeks and should not be used in favor of the plural 'LoyaltyProgram' field below. */
  loyaltyProgram?: LoyaltyProgram;
  /** URL of the 3D model of the item to provide more visuals. */
  virtualModelLink?: string;
  /** Target gender of the item. */
  gender?: string;
  /** List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings. */
  shoppingAdsExcludedCountries?: ReadonlyArray<string>;
  /** Publication of this item should be temporarily paused. Acceptable values are: - "`ads`" */
  pause?: string;
  /** Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account. */
  externalSellerId?: string;
  /** The shipping label of the product, used to group product in account-level shipping rules. */
  shippingLabel?: string;
  /** Maximum retail price (MRP) of the item. Applicable to India only. */
  maximumRetailPrice?: Price;
  /** System in which the size is specified. Recommended for apparel items. */
  sizeSystem?: string;
  /** Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. */
  isBundle?: boolean;
  /** URL directly linking to your item's page on your website. */
  link?: string;
  /** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions). */
  customAttributes?: ReadonlyArray<CustomAttribute>;
  /** Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`" */
  pickupSla?: string;
  /** A safeguard in the [Automated Discounts](//support.google.com/merchants/answer/10295759) and [Dynamic Promotions](//support.google.com/merchants/answer/13949249) projects, ensuring that discounts on merchants' offers do not fall below this value, thereby preserving the offer's value and profitability. */
  autoPricingMinPrice?: Price;
  /** Additional cut of the item. Used together with size_type to represent combined size types for apparel items. */
  additionalSizeType?: string;
  /** The quantity of the product that is available for selling on Google. Supported only for online products. */
  sellOnGoogleQuantity?: string;
  /** URL directly to your item's landing page for dynamic remarketing campaigns. */
  displayAdsLink?: string;
  /** Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. */
  offerId?: string;
  /** Categories of the item (formatted as in product data specification). */
  productTypes?: ReadonlyArray<string>;
  /** The energy efficiency class as defined in EU directive 2010/30/EU. */
  energyEfficiencyClass?: string;
  /** Title of the item. */
  title?: string;
  /** The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. */
  disclosureDate?: string;
  /** The list of [destinations to include](//support.google.com/merchants/answer/7501026) for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. */
  includedDestinations?: ReadonlyArray<string>;
  /** Height of the item for shipping. */
  shippingHeight?: ProductShippingDimension;
  /** Weight of the item for shipping. */
  shippingWeight?: ProductShippingWeight;
  /** Width of the item for shipping. */
  shippingWidth?: ProductShippingDimension;
  /** Optional. The list of sustainability incentive programs. */
  sustainabilityIncentives?: ReadonlyArray<ProductSustainabilityIncentive>;
  /** The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productLength?: ProductDimension;
  /** Description of the item. */
  description?: string;
  /** Condition or state of the item. */
  condition?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#product`" */
  kind?: string;
  /** Output only. The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" */
  source?: string;
  /** Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
  channel?: string;
  /** Manufacturer Part Number (MPN) of the item. */
  mpn?: string;
  /** Title of an item for dynamic remarketing campaigns. */
  displayAdsTitle?: string;
  /** The energy efficiency class as defined in EU directive 2010/30/EU. */
  minEnergyEfficiencyClass?: string;
  /** Advertiser-specified recommendations. */
  displayAdsSimilarIds?: ReadonlyArray<string>;
  /** URL template for merchant hosted local storefront. */
  linkTemplate?: string;
  /** An identifier for an item for dynamic remarketing campaigns. */
  displayAdsId?: string;
  /** The energy efficiency class as defined in EU directive 2010/30/EU. */
  maxEnergyEfficiencyClass?: string;
  /** Additional URLs of images of the item. */
  additionalImageLinks?: ReadonlyArray<string>;
  /** Advertised sale price of the item. */
  salePrice?: Price;
  /** The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productWidth?: ProductDimension;
  /** The unique ID of a promotion. */
  promotionIds?: ReadonlyArray<string>;
  /** Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. */
  certifications?: ReadonlyArray<ProductCertification>;
  /** Optional. Conditions to be met for a product to have free shipping. */
  freeShippingThreshold?: ReadonlyArray<FreeShippingThreshold>;
  /** Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information. */
  lifestyleImageLinks?: ReadonlyArray<string>;
  /** The cut of the item. Recommended for apparel items. */
  sizeType?: string;
  /** Color of the item. */
  color?: string;
  /** The number of identical products in a merchant-defined multipack. */
  multipack?: string;
  /** Shipping rules. */
  shipping?: ReadonlyArray<ProductShipping>;
  /** The preference of the denominator of the unit price. */
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;
  /** Custom label 2 for custom grouping of items in a Shopping campaign. */
  customLabel2?: string;
  /** Number and amount of installments to pay for an item. */
  installment?: Installment;
  /** Length of the item for shipping. */
  shippingLength?: ProductShippingDimension;
  /** Extra fields to export to the Cloud Retail program. */
  cloudExportAdditionalProperties?: ReadonlyArray<CloudExportAdditionalProperties>;
  /** Required. The CLDR territory code for the item's country of sale. */
  targetCountry?: string;
  /** Bullet points describing the most relevant highlights of a product. */
  productHighlights?: ReadonlyArray<string>;
  /** Offer margin for dynamic remarketing campaigns. */
  displayAdsValue?: number;
  /** Optional. A list of loyalty program information that is used to surface loyalty benefits (for example, better pricing, points, etc) to the user of this item. */
  loyaltyPrograms?: ReadonlyArray<LoyaltyProgram>;
  /** Tax information. */
  taxes?: ReadonlyArray<ProductTax>;
  /** Maximal product handling time (in business days). */
  maxHandlingTime?: string;
  /** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
  googleProductCategory?: string;
  /** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
  adsGrouping?: string;
  /** The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`" */
  pickupMethod?: string;
  /** The material of which the item is made. */
  material?: string;
  /** Custom label 0 for custom grouping of items in a Shopping campaign. */
  customLabel0?: string;
  /** Custom label 4 for custom grouping of items in a Shopping campaign. */
  customLabel4?: string;
  /** URL template for merchant hosted local storefront optimized for mobile devices. */
  mobileLinkTemplate?: string;
  /** The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId. */
  id?: string;
  /** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
  expirationDate?: string;
  /** The transit time label of the product, used to group product in account-level transit time tables. */
  transitTimeLabel?: string;
  /** Structured description, for algorithmically (AI)-generated descriptions. */
  structuredDescription?: ProductStructuredDescription;
  /** False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. */
  identifierExists?: boolean;
  /** Availability status of the item. */
  availability?: string;
  /** The measure and dimension of an item. */
  unitPricingMeasure?: ProductUnitPricingMeasure;
  /** URL of an image of the item. */
  imageLink?: string;
  /** The tax category of the product, used to configure detailed tax nexus in account-level tax settings. */
  taxCategory?: string;
  /** Brand of the item. */
  brand?: string;
  /** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
  adsRedirect?: string;
  /** Cost of goods sold. Used for gross profit reporting. */
  costOfGoodsSold?: Price;
  /** The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive). */
  productWeight?: ProductWeight;
  /** The item's pattern (for example, polka dots). */
  pattern?: string;
  /** Should be set to true if the item is targeted towards adults. */
  adult?: boolean;
  /** The day a pre-ordered product becomes available for delivery, in ISO 8601 format. */
  availabilityDate?: string;
  /** Shared identifier for all variants of the same product. */
  itemGroupId?: string;
  /** Price of the item. */
  price?: Price;
  /** Technical specification or additional product details. */
  productDetails?: ReadonlyArray<ProductProductDetail>;
  /** Date range during which the item is on sale (see product data specification ). */
  salePriceEffectiveDate?: string;
  /** Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition). */
  sizes?: ReadonlyArray<string>;
  /** Custom label 3 for custom grouping of items in a Shopping campaign. */
  customLabel3?: string;
  /** URL for the mobile-optimized version of your item's landing page. */
  mobileLink?: string;
  /** Target age group of the item. */
  ageGroup?: string;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customLabel1: Schema.optional(Schema.String),
    structuredTitle: Schema.optional(ProductStructuredTitle),
    adsLabels: Schema.optional(Schema.Array(Schema.String)),
    excludedDestinations: Schema.optional(Schema.Array(Schema.String)),
    productHeight: Schema.optional(ProductDimension),
    contentLanguage: Schema.optional(Schema.String),
    minHandlingTime: Schema.optional(Schema.String),
    subscriptionCost: Schema.optional(ProductSubscriptionCost),
    canonicalLink: Schema.optional(Schema.String),
    feedLabel: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    loyaltyProgram: Schema.optional(LoyaltyProgram),
    virtualModelLink: Schema.optional(Schema.String),
    gender: Schema.optional(Schema.String),
    shoppingAdsExcludedCountries: Schema.optional(Schema.Array(Schema.String)),
    pause: Schema.optional(Schema.String),
    externalSellerId: Schema.optional(Schema.String),
    shippingLabel: Schema.optional(Schema.String),
    maximumRetailPrice: Schema.optional(Price),
    sizeSystem: Schema.optional(Schema.String),
    isBundle: Schema.optional(Schema.Boolean),
    link: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
    pickupSla: Schema.optional(Schema.String),
    autoPricingMinPrice: Schema.optional(Price),
    additionalSizeType: Schema.optional(Schema.String),
    sellOnGoogleQuantity: Schema.optional(Schema.String),
    displayAdsLink: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    productTypes: Schema.optional(Schema.Array(Schema.String)),
    energyEfficiencyClass: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    disclosureDate: Schema.optional(Schema.String),
    includedDestinations: Schema.optional(Schema.Array(Schema.String)),
    shippingHeight: Schema.optional(ProductShippingDimension),
    shippingWeight: Schema.optional(ProductShippingWeight),
    shippingWidth: Schema.optional(ProductShippingDimension),
    sustainabilityIncentives: Schema.optional(
      Schema.Array(ProductSustainabilityIncentive),
    ),
    productLength: Schema.optional(ProductDimension),
    description: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.String),
    displayAdsTitle: Schema.optional(Schema.String),
    minEnergyEfficiencyClass: Schema.optional(Schema.String),
    displayAdsSimilarIds: Schema.optional(Schema.Array(Schema.String)),
    linkTemplate: Schema.optional(Schema.String),
    displayAdsId: Schema.optional(Schema.String),
    maxEnergyEfficiencyClass: Schema.optional(Schema.String),
    additionalImageLinks: Schema.optional(Schema.Array(Schema.String)),
    salePrice: Schema.optional(Price),
    productWidth: Schema.optional(ProductDimension),
    promotionIds: Schema.optional(Schema.Array(Schema.String)),
    certifications: Schema.optional(Schema.Array(ProductCertification)),
    freeShippingThreshold: Schema.optional(Schema.Array(FreeShippingThreshold)),
    lifestyleImageLinks: Schema.optional(Schema.Array(Schema.String)),
    sizeType: Schema.optional(Schema.String),
    color: Schema.optional(Schema.String),
    multipack: Schema.optional(Schema.String),
    shipping: Schema.optional(Schema.Array(ProductShipping)),
    unitPricingBaseMeasure: Schema.optional(ProductUnitPricingBaseMeasure),
    customLabel2: Schema.optional(Schema.String),
    installment: Schema.optional(Installment),
    shippingLength: Schema.optional(ProductShippingDimension),
    cloudExportAdditionalProperties: Schema.optional(
      Schema.Array(CloudExportAdditionalProperties),
    ),
    targetCountry: Schema.optional(Schema.String),
    productHighlights: Schema.optional(Schema.Array(Schema.String)),
    displayAdsValue: Schema.optional(Schema.Number),
    loyaltyPrograms: Schema.optional(Schema.Array(LoyaltyProgram)),
    taxes: Schema.optional(Schema.Array(ProductTax)),
    maxHandlingTime: Schema.optional(Schema.String),
    googleProductCategory: Schema.optional(Schema.String),
    adsGrouping: Schema.optional(Schema.String),
    pickupMethod: Schema.optional(Schema.String),
    material: Schema.optional(Schema.String),
    customLabel0: Schema.optional(Schema.String),
    customLabel4: Schema.optional(Schema.String),
    mobileLinkTemplate: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    expirationDate: Schema.optional(Schema.String),
    transitTimeLabel: Schema.optional(Schema.String),
    structuredDescription: Schema.optional(ProductStructuredDescription),
    identifierExists: Schema.optional(Schema.Boolean),
    availability: Schema.optional(Schema.String),
    unitPricingMeasure: Schema.optional(ProductUnitPricingMeasure),
    imageLink: Schema.optional(Schema.String),
    taxCategory: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    adsRedirect: Schema.optional(Schema.String),
    costOfGoodsSold: Schema.optional(Price),
    productWeight: Schema.optional(ProductWeight),
    pattern: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.Boolean),
    availabilityDate: Schema.optional(Schema.String),
    itemGroupId: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    productDetails: Schema.optional(Schema.Array(ProductProductDetail)),
    salePriceEffectiveDate: Schema.optional(Schema.String),
    sizes: Schema.optional(Schema.Array(Schema.String)),
    customLabel3: Schema.optional(Schema.String),
    mobileLink: Schema.optional(Schema.String),
    ageGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface ProductsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productsListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<Product>;
  /** The token for the retrieval of the next page of products. */
  nextPageToken?: string;
}

export const ProductsListResponse: Schema.Schema<ProductsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Product)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductsListResponse" });

export interface CarriersCarrier {
  /** The CLDR country code of the carrier (for example, "US"). Always present. */
  country?: string;
  /** A list of supported services (for example, `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService. */
  services?: ReadonlyArray<string>;
  /** The name of the carrier (for example, `"UPS"`). Always present. */
  name?: string;
  /** A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService. */
  eddServices?: ReadonlyArray<string>;
}

export const CarriersCarrier: Schema.Schema<CarriersCarrier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    eddServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CarriersCarrier" });

export interface ShippingsettingsGetSupportedCarriersResponse {
  /** A list of supported carriers. May be empty. */
  carriers?: ReadonlyArray<CarriersCarrier>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`". */
  kind?: string;
}

export const ShippingsettingsGetSupportedCarriersResponse: Schema.Schema<ShippingsettingsGetSupportedCarriersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    carriers: Schema.optional(Schema.Array(CarriersCarrier)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingsettingsGetSupportedCarriersResponse" });

export interface AccounttaxListResponse {
  /** The token for the retrieval of the next page of account tax settings. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<AccountTax>;
}

export const AccounttaxListResponse: Schema.Schema<AccounttaxListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(AccountTax)),
  }).annotate({ identifier: "AccounttaxListResponse" });

export interface PosSaleRequest {
  /** Required. The price of the item. */
  price?: Price;
  /** A unique ID to group items from the same sale event. */
  saleId?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The relative change of the available quantity. Negative for items returned. */
  quantity?: string;
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
}

export const PosSaleRequest: Schema.Schema<PosSaleRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price: Schema.optional(Price),
    saleId: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosSaleRequest" });

export interface CollectionFeaturedProduct {
  /** Required. Y-coordinate of the product callout on the Shoppable Image. */
  y?: number;
  /** Required. X-coordinate of the product callout on the Shoppable Image. */
  x?: number;
  /** The unique identifier for the product item. */
  offerId?: string;
}

export const CollectionFeaturedProduct: Schema.Schema<CollectionFeaturedProduct> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
    offerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CollectionFeaturedProduct" });

export interface Collection {
  /** A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123) */
  mobileLink?: string;
  /** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
  customLabel3?: string;
  /** The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236) */
  imageLink?: ReadonlyArray<string>;
  /** The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781) */
  language?: string;
  /** Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290) */
  id?: string;
  /** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
  customLabel1?: string;
  /** Your collection's name. [headline attribute](https://support.google.com/merchants/answer/9673580) */
  headline?: ReadonlyArray<string>;
  /** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
  customLabel4?: string;
  /** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217) */
  customLabel0?: string;
  /** This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736) */
  featuredProduct?: ReadonlyArray<CollectionFeaturedProduct>;
  /** A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983) */
  link?: string;
  /** [product_country attribute](https://support.google.com/merchants/answer/9674155) */
  productCountry?: string;
  /** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
  customLabel2?: string;
}

export const Collection: Schema.Schema<Collection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileLink: Schema.optional(Schema.String),
    customLabel3: Schema.optional(Schema.String),
    imageLink: Schema.optional(Schema.Array(Schema.String)),
    language: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    customLabel1: Schema.optional(Schema.String),
    headline: Schema.optional(Schema.Array(Schema.String)),
    customLabel4: Schema.optional(Schema.String),
    customLabel0: Schema.optional(Schema.String),
    featuredProduct: Schema.optional(Schema.Array(CollectionFeaturedProduct)),
    link: Schema.optional(Schema.String),
    productCountry: Schema.optional(Schema.String),
    customLabel2: Schema.optional(Schema.String),
  }).annotate({ identifier: "Collection" });

export interface PosStore {
  /** Output only. The hint of why the matching has failed. This is only set when matching_status=failed. Possible values are: - "`linked-store-not-found`": There aren't any Google Business Profile stores available for matching. Connect your Merchant Center account with the Google Business Profile account. Or add a new Google Business Profile store corresponding to the POS store. - "`store-match-not-found`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but POS store location address does not match with Google Business Profile stores' addresses. Update POS store address or Google Business Profile store address to match correctly. - "`store-match-unverified`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores, as the matched Google Business Profile store is unverified. Go through the Google Business Profile verification process to match correctly. */
  matchingStatusHint?: string;
  /** The merchant or store name. */
  storeName?: string;
  /** Required. The street address of the store. */
  storeAddress?: string;
  /** Required. A store identifier that is unique for the given merchant. */
  storeCode?: string;
  /** The store phone number. */
  phoneNumber?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posStore`" */
  kind?: string;
  /** The website url for the store or merchant. */
  websiteUrl?: string;
  /** Output only. The matching status of POS store and Google Business Profile store. Possible values are: - "`matched`": The POS store is successfully matched with the Google Business Profile store. - "`failed`": The POS store is not matched with the Google Business Profile store. See matching_status_hint for further details. Note that there is up to 48 hours propagation delay for changes in Merchant Center (e.g. creation of new account, accounts linking) and Google Business Profile (e.g. store address update) which may affect the matching status. In such cases, after a delay call [pos.list](https://developers.google.com/shopping-content/reference/rest/v2.1/pos/list) to retrieve the updated matching status. */
  matchingStatus?: string;
  /** The Google Place Id of the store location. */
  placeId?: string;
  /** The business type of the store. */
  gcidCategory?: ReadonlyArray<string>;
}

export const PosStore: Schema.Schema<PosStore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchingStatusHint: Schema.optional(Schema.String),
    storeName: Schema.optional(Schema.String),
    storeAddress: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    websiteUrl: Schema.optional(Schema.String),
    matchingStatus: Schema.optional(Schema.String),
    placeId: Schema.optional(Schema.String),
    gcidCategory: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PosStore" });

export interface RenderProductIssuesRequestPayload {
  /** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
  contentOption?:
    | "CONTENT_OPTION_UNSPECIFIED"
    | "PRE_RENDERED_HTML"
    | (string & {});
  /** Optional. How actions with user input form should be handled. If not provided, actions will be returned as links that points merchant to Merchant Center where they can request the action. */
  userInputActionOption?:
    | "USER_INPUT_ACTION_RENDERING_OPTION_UNSPECIFIED"
    | "REDIRECT_TO_MERCHANT_CENTER"
    | "BUILT_IN_USER_INPUT_ACTIONS"
    | (string & {});
}

export const RenderProductIssuesRequestPayload: Schema.Schema<RenderProductIssuesRequestPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentOption: Schema.optional(Schema.String),
    userInputActionOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "RenderProductIssuesRequestPayload" });

export interface AccountReturnCarrier {
  /** Number of the carrier account. */
  carrierAccountNumber?: string;
  /** Name of the carrier account. */
  carrierAccountName?: string;
  /** The carrier code enum. Accepts the values FEDEX or UPS. */
  carrierCode?: "CARRIER_CODE_UNSPECIFIED" | "FEDEX" | "UPS" | (string & {});
  /** Output only. Immutable. The Google-provided unique carrier ID, used to update the resource. */
  carrierAccountId?: string;
}

export const AccountReturnCarrier: Schema.Schema<AccountReturnCarrier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    carrierAccountNumber: Schema.optional(Schema.String),
    carrierAccountName: Schema.optional(Schema.String),
    carrierCode: Schema.optional(Schema.String),
    carrierAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountReturnCarrier" });

export interface LiasettingsListResponse {
  /** The token for the retrieval of the next page of LIA settings. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<LiaSettings>;
}

export const LiasettingsListResponse: Schema.Schema<LiasettingsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(LiaSettings)),
  }).annotate({ identifier: "LiasettingsListResponse" });

export interface ListCollectionStatusesResponse {
  /** The collectionstatuses listed. */
  resources?: ReadonlyArray<CollectionStatus>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListCollectionStatusesResponse: Schema.Schema<ListCollectionStatusesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(CollectionStatus)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCollectionStatusesResponse" });

export interface ProductViewItemIssueIssueSeverityPerDestination {
  /** Issue destination. */
  destination?: string;
  /** List of demoted countries in the destination. */
  demotedCountries?: ReadonlyArray<string>;
  /** List of disapproved countries in the destination. */
  disapprovedCountries?: ReadonlyArray<string>;
}

export const ProductViewItemIssueIssueSeverityPerDestination: Schema.Schema<ProductViewItemIssueIssueSeverityPerDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    demotedCountries: Schema.optional(Schema.Array(Schema.String)),
    disapprovedCountries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "ProductViewItemIssueIssueSeverityPerDestination",
  });

export interface ProductViewItemIssueItemIssueSeverity {
  /** Severity of an issue aggregated for destination. */
  aggregatedSeverity?:
    | "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED"
    | "DISAPPROVED"
    | "DEMOTED"
    | "PENDING"
    | (string & {});
  /** Item issue severity for every destination. */
  severityPerDestination?: ReadonlyArray<ProductViewItemIssueIssueSeverityPerDestination>;
}

export const ProductViewItemIssueItemIssueSeverity: Schema.Schema<ProductViewItemIssueItemIssueSeverity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatedSeverity: Schema.optional(Schema.String),
    severityPerDestination: Schema.optional(
      Schema.Array(ProductViewItemIssueIssueSeverityPerDestination),
    ),
  }).annotate({ identifier: "ProductViewItemIssueItemIssueSeverity" });

export interface ShoppingAdsProgramStatusReviewIneligibilityReasonDetails {
  /** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
  cooldownTime?: string;
}

export const ShoppingAdsProgramStatusReviewIneligibilityReasonDetails: Schema.Schema<ShoppingAdsProgramStatusReviewIneligibilityReasonDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cooldownTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ShoppingAdsProgramStatusReviewIneligibilityReasonDetails",
  });

export interface ShoppingAdsProgramStatusRegionStatus {
  /** Review ineligibility reason if account is not eligible for review. */
  reviewIneligibilityReason?:
    | "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED"
    | "ONBOARDING_ISSUES"
    | "NOT_ENOUGH_OFFERS"
    | "IN_COOLDOWN_PERIOD"
    | "ALREADY_UNDER_REVIEW"
    | "NO_REVIEW_REQUIRED"
    | "WILL_BE_REVIEWED_AUTOMATICALLY"
    | "IS_RETIRED"
    | "ALREADY_REVIEWED"
    | (string & {});
  /** Eligibility status of the Shopping Ads program. */
  eligibilityStatus?:
    | "STATE_UNSPECIFIED"
    | "APPROVED"
    | "DISAPPROVED"
    | "WARNING"
    | "UNDER_REVIEW"
    | "PENDING_REVIEW"
    | "ONBOARDING"
    | (string & {});
  /** Issues that must be fixed to be eligible for review. */
  onboardingIssues?: ReadonlyArray<string>;
  /** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
  disapprovalDate?: string;
  /** Issues evaluated in the review process. Fix all issues before requesting a review. */
  reviewIssues?: ReadonlyArray<string>;
  /** Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided. */
  reviewIneligibilityReasonDetails?: ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;
  /** The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`. */
  regionCodes?: ReadonlyArray<string>;
  /** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
  reviewEligibilityStatus?:
    | "REVIEW_ELIGIBILITY_UNSPECIFIED"
    | "ELIGIBLE"
    | "INELIGIBLE"
    | (string & {});
  /** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
  reviewIneligibilityReasonDescription?: string;
}

export const ShoppingAdsProgramStatusRegionStatus: Schema.Schema<ShoppingAdsProgramStatusRegionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewIneligibilityReason: Schema.optional(Schema.String),
    eligibilityStatus: Schema.optional(Schema.String),
    onboardingIssues: Schema.optional(Schema.Array(Schema.String)),
    disapprovalDate: Schema.optional(Schema.String),
    reviewIssues: Schema.optional(Schema.Array(Schema.String)),
    reviewIneligibilityReasonDetails: Schema.optional(
      ShoppingAdsProgramStatusReviewIneligibilityReasonDetails,
    ),
    regionCodes: Schema.optional(Schema.Array(Schema.String)),
    reviewEligibilityStatus: Schema.optional(Schema.String),
    reviewIneligibilityReasonDescription: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShoppingAdsProgramStatusRegionStatus" });

export interface ShoppingAdsProgramStatus {
  /** Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`. */
  regionStatuses?: ReadonlyArray<ShoppingAdsProgramStatusRegionStatus>;
  /** State of the program. `ENABLED` if there are offers for at least one region. */
  globalState?:
    | "PROGRAM_STATE_UNSPECIFIED"
    | "NOT_ENABLED"
    | "NO_OFFERS_UPLOADED"
    | "ENABLED"
    | (string & {});
}

export const ShoppingAdsProgramStatus: Schema.Schema<ShoppingAdsProgramStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionStatuses: Schema.optional(
      Schema.Array(ShoppingAdsProgramStatusRegionStatus),
    ),
    globalState: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShoppingAdsProgramStatus" });

export interface AccountIssueImpact {
  /** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Disapproves 90k offers in 25 countries" */
  message?: string;
  /** Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details. */
  breakdowns?: ReadonlyArray<Breakdown>;
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
}

export const AccountIssueImpact: Schema.Schema<AccountIssueImpact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    breakdowns: Schema.optional(Schema.Array(Breakdown)),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountIssueImpact" });

export interface AccountIssue {
  /** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
  prerenderedContent?: string;
  /** A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue. */
  actions?: ReadonlyArray<Action>;
  /** Title of the issue. */
  title?: string;
  /** Clarifies the severity of the issue. The summarizing message, if present, should be shown right under the title for each issue. It helps merchants to quickly understand the impact of the issue. The detailed breakdown helps the merchant to fully understand the impact of the issue. It can be rendered as dialog that opens when the merchant mouse over the summarized impact statement. Issues with different severity can be styled differently. They may use a different color or icon to signal the difference between `ERROR`, `WARNING` and `INFO`. */
  impact?: AccountIssueImpact;
  /** Pre-rendered HTML that contains a link to the external location where the ODS can be requested and instructions for how to request it. HTML elements contain CSS classes that can be used to customize the style of this snippet. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `ods-section`* - wrapper around the out-of-court dispute resolution section * `ods-description`* - intro text for the out-of-court dispute resolution. It may contain multiple segments and a link. * `ods-param`* - wrapper around the header-value pair for parameters that merchant may need to provide during the ODS process. * `ods-routing-id`* - ods param for the Routing ID. * `ods-reference-id`* - ods param for the Routing ID. * `ods-param-header`* - header for the ODS parameter * `ods-param-value`* - value of the ODS parameter. This value should be rendered in a way that it is easy for merchants to identify and copy. * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. */
  prerenderedOutOfCourtDisputeSettlement?: string;
}

export const AccountIssue: Schema.Schema<AccountIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prerenderedContent: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(Action)),
    title: Schema.optional(Schema.String),
    impact: Schema.optional(AccountIssueImpact),
    prerenderedOutOfCourtDisputeSettlement: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountIssue" });

export interface LiasettingsCustomBatchRequestEntry {
  /** The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" */
  method?: string;
  /** The account Lia settings to update. Only defined if the method is `update`. */
  liaSettings?: LiaSettings;
  /** Inventory validation contact name. Required only for SetInventoryValidationContact. */
  contactName?: string;
  /** The omnichannel experience for a country. Required only for SetOmnichannelExperience. */
  omnichannelExperience?: LiaOmnichannelExperience;
  /** The account ID by which this merchant is known to the POS provider. */
  posExternalAccountId?: string;
  /** The ID of POS data provider. Required only for SetPosProvider. */
  posDataProviderId?: string;
  /** The ID of the account for which to get/update account LIA settings. */
  accountId?: string;
  /** The ID of the managing account. */
  merchantId?: string;
  /** The Business Profile. Required only for RequestGmbAccess. */
  gmbEmail?: string;
  /** Inventory validation contact email. Required only for SetInventoryValidationContact. */
  contactEmail?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The country code. Required only for RequestInventoryVerification. */
  country?: string;
}

export const LiasettingsCustomBatchRequestEntry: Schema.Schema<LiasettingsCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    liaSettings: Schema.optional(LiaSettings),
    contactName: Schema.optional(Schema.String),
    omnichannelExperience: Schema.optional(LiaOmnichannelExperience),
    posExternalAccountId: Schema.optional(Schema.String),
    posDataProviderId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    gmbEmail: Schema.optional(Schema.String),
    contactEmail: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiasettingsCustomBatchRequestEntry" });

export interface RegionalinventoryCustomBatchRequestEntry {
  /** Method of the batch request entry. Acceptable values are: - "`insert`" */
  method?: string;
  /** The ID of the managing account. */
  merchantId?: string;
  /** Price and availability of the product. */
  regionalInventory?: RegionalInventory;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The ID of the product for which to update price and availability. */
  productId?: string;
}

export const RegionalinventoryCustomBatchRequestEntry: Schema.Schema<RegionalinventoryCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    regionalInventory: Schema.optional(RegionalInventory),
    batchId: Schema.optional(Schema.Number),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalinventoryCustomBatchRequestEntry" });

export interface ProductsCustomBatchResponseEntry {
  /** The inserted product. Only defined if the method is `insert` and if the request was successful. */
  product?: Product;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`" */
  kind?: string;
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
}

export const ProductsCustomBatchResponseEntry: Schema.Schema<ProductsCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Product),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    errors: Schema.optional(Errors),
  }).annotate({ identifier: "ProductsCustomBatchResponseEntry" });

export interface ProductsCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<ProductsCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`". */
  kind?: string;
}

export const ProductsCustomBatchResponse: Schema.Schema<ProductsCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(ProductsCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductsCustomBatchResponse" });

export interface Metrics {
  /** Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the `FREE_PRODUCT_LISTING` program. */
  conversions?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average order value in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  aovMicros?: number;
  /** Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions). */
  ctr?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  aos?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  orders?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of ordered items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
  orderedItemSalesMicros?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  unshippedOrders?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.** */
  itemFillRate?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.** */
  shippedItems?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  daysToShip?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
  returnRate?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.** */
  rejectedItems?: string;
  /** Value of conversions in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the `FREE_PRODUCT_LISTING` program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. */
  conversionValueMicros?: string;
  /** Number of clicks. */
  clicks?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.** */
  orderedItems?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
  returnsMicros?: string;
  /** Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the `FREE_PRODUCT_LISTING` program. */
  conversionRate?: number;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of shipped items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
  shippedItemSalesMicros?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.** */
  returnedItems?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.** */
  itemDaysToShip?: number;
  /** Number of times merchant's products are shown. */
  impressions?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
  shippedOrders?: string;
  /** *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.** */
  unshippedItems?: number;
}

export const Metrics: Schema.Schema<Metrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversions: Schema.optional(Schema.Number),
    aovMicros: Schema.optional(Schema.Number),
    ctr: Schema.optional(Schema.Number),
    aos: Schema.optional(Schema.Number),
    orders: Schema.optional(Schema.String),
    orderedItemSalesMicros: Schema.optional(Schema.String),
    unshippedOrders: Schema.optional(Schema.Number),
    itemFillRate: Schema.optional(Schema.Number),
    shippedItems: Schema.optional(Schema.String),
    daysToShip: Schema.optional(Schema.Number),
    returnRate: Schema.optional(Schema.Number),
    rejectedItems: Schema.optional(Schema.String),
    conversionValueMicros: Schema.optional(Schema.String),
    clicks: Schema.optional(Schema.String),
    orderedItems: Schema.optional(Schema.String),
    returnsMicros: Schema.optional(Schema.String),
    conversionRate: Schema.optional(Schema.Number),
    shippedItemSalesMicros: Schema.optional(Schema.String),
    returnedItems: Schema.optional(Schema.String),
    itemDaysToShip: Schema.optional(Schema.Number),
    impressions: Schema.optional(Schema.String),
    shippedOrders: Schema.optional(Schema.String),
    unshippedItems: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Metrics" });

export interface DatafeedsListResponse {
  /** The token for the retrieval of the next page of datafeeds. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<Datafeed>;
}

export const DatafeedsListResponse: Schema.Schema<DatafeedsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Datafeed)),
  }).annotate({ identifier: "DatafeedsListResponse" });

export interface PosListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<PosStore>;
}

export const PosListResponse: Schema.Schema<PosListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(PosStore)),
  }).annotate({ identifier: "PosListResponse" });

export interface ListAccountReturnCarrierResponse {
  /** List of all available account return carriers for the merchant. */
  accountReturnCarriers?: ReadonlyArray<AccountReturnCarrier>;
}

export const ListAccountReturnCarrierResponse: Schema.Schema<ListAccountReturnCarrierResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountReturnCarriers: Schema.optional(Schema.Array(AccountReturnCarrier)),
  }).annotate({ identifier: "ListAccountReturnCarrierResponse" });

export interface ReportInteractionRequest {
  /** Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link `GenerateRecommendationsResponse`} call. */
  type?: string;
  /** Required. Type of the interaction that is reported, for example INTERACTION_CLICK. */
  interactionType?:
    | "INTERACTION_TYPE_UNSPECIFIED"
    | "INTERACTION_DISMISS"
    | "INTERACTION_CLICK"
    | (string & {});
  /** Required. Token of the response when recommendation was returned. */
  responseToken?: string;
  /** Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link `RecommendationsService.GenerateRecommendations`} call. */
  subtype?: string;
}

export const ReportInteractionRequest: Schema.Schema<ReportInteractionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    interactionType: Schema.optional(Schema.String),
    responseToken: Schema.optional(Schema.String),
    subtype: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportInteractionRequest" });

export interface AccounttaxCustomBatchRequestEntry {
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The ID of the account for which to get/update account tax settings. */
  accountId?: string;
  /** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
  method?: string;
  /** The account tax settings to update. Only defined if the method is `update`. */
  accountTax?: AccountTax;
  /** The ID of the managing account. */
  merchantId?: string;
}

export const AccounttaxCustomBatchRequestEntry: Schema.Schema<AccounttaxCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.Number),
    accountId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    accountTax: Schema.optional(AccountTax),
    merchantId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccounttaxCustomBatchRequestEntry" });

export interface LinkedAccount {
  /** The ID of the linked account. */
  linkedAccountId?: string;
  /** List of provided services. */
  services?: ReadonlyArray<LinkService>;
}

export const LinkedAccount: Schema.Schema<LinkedAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedAccountId: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(LinkService)),
  }).annotate({ identifier: "LinkedAccount" });

export interface AccountsListLinksResponse {
  /** The token for the retrieval of the next page of links. */
  nextPageToken?: string;
  /** The list of available links. */
  links?: ReadonlyArray<LinkedAccount>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`". */
  kind?: string;
}

export const AccountsListLinksResponse: Schema.Schema<AccountsListLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    links: Schema.optional(Schema.Array(LinkedAccount)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsListLinksResponse" });

export interface AccountsUpdateLabelsRequest {
  /** The IDs of labels that should be assigned to the account. */
  labelIds?: ReadonlyArray<string>;
}

export const AccountsUpdateLabelsRequest: Schema.Schema<AccountsUpdateLabelsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccountsUpdateLabelsRequest" });

export interface LiasettingsCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<LiasettingsCustomBatchRequestEntry>;
}

export const LiasettingsCustomBatchRequest: Schema.Schema<LiasettingsCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(LiasettingsCustomBatchRequestEntry)),
  }).annotate({ identifier: "LiasettingsCustomBatchRequest" });

export interface RequestReviewShoppingAdsRequest {
  /** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
  regionCode?: string;
}

export const RequestReviewShoppingAdsRequest: Schema.Schema<RequestReviewShoppingAdsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestReviewShoppingAdsRequest" });

export interface AccountsLinkResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsLinkResponse`". */
  kind?: string;
}

export const AccountsLinkResponse: Schema.Schema<AccountsLinkResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsLinkResponse" });

export interface RequestPhoneVerificationResponse {
  /** The verification ID to use in subsequent calls to `verifyphonenumber`. */
  verificationId?: string;
}

export const RequestPhoneVerificationResponse: Schema.Schema<RequestPhoneVerificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verificationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestPhoneVerificationResponse" });

export interface AccountCredentials {
  /** An OAuth access token. */
  accessToken?: string;
  /** The amount of time, in seconds, after which the access token is no longer valid. */
  expiresIn?: string;
  /** Indicates to Google how Google should use these OAuth tokens. */
  purpose?:
    | "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED"
    | "SHOPIFY_ORDER_MANAGEMENT"
    | "SHOPIFY_INTEGRATION"
    | (string & {});
}

export const AccountCredentials: Schema.Schema<AccountCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    expiresIn: Schema.optional(Schema.String),
    purpose: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountCredentials" });

export interface FreeListingsProgramStatusReviewIneligibilityReasonDetails {
  /** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
  cooldownTime?: string;
}

export const FreeListingsProgramStatusReviewIneligibilityReasonDetails: Schema.Schema<FreeListingsProgramStatusReviewIneligibilityReasonDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cooldownTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "FreeListingsProgramStatusReviewIneligibilityReasonDetails",
  });

export interface FreeListingsProgramStatusRegionStatus {
  /** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
  reviewIneligibilityReasonDescription?: string;
  /** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
  reviewEligibilityStatus?:
    | "REVIEW_ELIGIBILITY_UNSPECIFIED"
    | "ELIGIBLE"
    | "INELIGIBLE"
    | (string & {});
  /** The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`. */
  regionCodes?: ReadonlyArray<string>;
  /** Issues evaluated in the review process. Fix all issues before requesting a review. */
  reviewIssues?: ReadonlyArray<string>;
  /** Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided. */
  reviewIneligibilityReasonDetails?: FreeListingsProgramStatusReviewIneligibilityReasonDetails;
  /** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
  disapprovalDate?: string;
  /** Issues that must be fixed to be eligible for review. */
  onboardingIssues?: ReadonlyArray<string>;
  /** Eligibility status of the standard free listing program. */
  eligibilityStatus?:
    | "STATE_UNSPECIFIED"
    | "APPROVED"
    | "DISAPPROVED"
    | "WARNING"
    | "UNDER_REVIEW"
    | "PENDING_REVIEW"
    | "ONBOARDING"
    | (string & {});
  /** Review ineligibility reason if account is not eligible for review. */
  reviewIneligibilityReason?:
    | "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED"
    | "ONBOARDING_ISSUES"
    | "NOT_ENOUGH_OFFERS"
    | "IN_COOLDOWN_PERIOD"
    | "ALREADY_UNDER_REVIEW"
    | "NO_REVIEW_REQUIRED"
    | "WILL_BE_REVIEWED_AUTOMATICALLY"
    | "IS_RETIRED"
    | "ALREADY_REVIEWED"
    | (string & {});
}

export const FreeListingsProgramStatusRegionStatus: Schema.Schema<FreeListingsProgramStatusRegionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewIneligibilityReasonDescription: Schema.optional(Schema.String),
    reviewEligibilityStatus: Schema.optional(Schema.String),
    regionCodes: Schema.optional(Schema.Array(Schema.String)),
    reviewIssues: Schema.optional(Schema.Array(Schema.String)),
    reviewIneligibilityReasonDetails: Schema.optional(
      FreeListingsProgramStatusReviewIneligibilityReasonDetails,
    ),
    disapprovalDate: Schema.optional(Schema.String),
    onboardingIssues: Schema.optional(Schema.Array(Schema.String)),
    eligibilityStatus: Schema.optional(Schema.String),
    reviewIneligibilityReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "FreeListingsProgramStatusRegionStatus" });

export interface FreeListingsProgramStatus {
  /** Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`. */
  regionStatuses?: ReadonlyArray<FreeListingsProgramStatusRegionStatus>;
  /** State of the program. `ENABLED` if there are offers for at least one region. */
  globalState?:
    | "PROGRAM_STATE_UNSPECIFIED"
    | "NOT_ENABLED"
    | "NO_OFFERS_UPLOADED"
    | "ENABLED"
    | (string & {});
}

export const FreeListingsProgramStatus: Schema.Schema<FreeListingsProgramStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionStatuses: Schema.optional(
      Schema.Array(FreeListingsProgramStatusRegionStatus),
    ),
    globalState: Schema.optional(Schema.String),
  }).annotate({ identifier: "FreeListingsProgramStatus" });

export interface PosInventory {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`" */
  kind?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupMethod?: string;
  /** Required. The current price of the item. */
  price?: Price;
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The available quantity of the item. */
  quantity?: string;
  /** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupSla?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
}

export const PosInventory: Schema.Schema<PosInventory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    pickupMethod: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    pickupSla: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosInventory" });

export interface PosCustomBatchRequestEntry {
  /** The ID of the POS data provider. */
  merchantId?: string;
  /** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`" */
  method?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The store code. This should be set only if the method is `delete` or `get`. */
  storeCode?: string;
  /** The inventory to submit. This should be set only if the method is `inventory`. */
  inventory?: PosInventory;
  /** The ID of the account for which to get/submit data. */
  targetMerchantId?: string;
  /** The store information to submit. This should be set only if the method is `insert`. */
  store?: PosStore;
  /** The sale information to submit. This should be set only if the method is `sale`. */
  sale?: PosSale;
}

export const PosCustomBatchRequestEntry: Schema.Schema<PosCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    storeCode: Schema.optional(Schema.String),
    inventory: Schema.optional(PosInventory),
    targetMerchantId: Schema.optional(Schema.String),
    store: Schema.optional(PosStore),
    sale: Schema.optional(PosSale),
  }).annotate({ identifier: "PosCustomBatchRequestEntry" });

export interface PosCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<PosCustomBatchRequestEntry>;
}

export const PosCustomBatchRequest: Schema.Schema<PosCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(PosCustomBatchRequestEntry)),
  }).annotate({ identifier: "PosCustomBatchRequest" });

export interface DatafeedsCustomBatchResponseEntry {
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** The requested data feed. Defined if and only if the request was successful. */
  datafeed?: Datafeed;
}

export const DatafeedsCustomBatchResponseEntry: Schema.Schema<DatafeedsCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    datafeed: Schema.optional(Datafeed),
  }).annotate({ identifier: "DatafeedsCustomBatchResponseEntry" });

export interface AccountsUpdateLabelsResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsUpdateLabelsResponse`". */
  kind?: string;
}

export const AccountsUpdateLabelsResponse: Schema.Schema<AccountsUpdateLabelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsUpdateLabelsResponse" });

export interface ShippingsettingsListResponse {
  /** The token for the retrieval of the next page of shipping settings. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<ShippingSettings>;
}

export const ShippingsettingsListResponse: Schema.Schema<ShippingsettingsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(ShippingSettings)),
  }).annotate({ identifier: "ShippingsettingsListResponse" });

export interface PriceInsights {
  /** The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product. */
  suggestedPriceMicros?: string;
  /** *Deprecated*: This field is no longer supported and will start returning USD for all requests. The predicted monthly gross profit change currency (ISO 4217 code). */
  predictedMonthlyGrossProfitChangeCurrencyCode?: string;
  /** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit. */
  predictedGrossProfitChangeFraction?: number;
  /** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price. */
  predictedMonthlyGrossProfitChangeMicros?: string;
  /** The suggested price currency (ISO 4217 code). */
  suggestedPriceCurrencyCode?: string;
  /** The predicted effectiveness of applying the price suggestion, bucketed. */
  effectiveness?:
    | "EFFECTIVENESS_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions. */
  predictedImpressionsChangeFraction?: number;
  /** The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks. */
  predictedClicksChangeFraction?: number;
  /** The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions). */
  predictedConversionsChangeFraction?: number;
}

export const PriceInsights: Schema.Schema<PriceInsights> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedPriceMicros: Schema.optional(Schema.String),
    predictedMonthlyGrossProfitChangeCurrencyCode: Schema.optional(
      Schema.String,
    ),
    predictedGrossProfitChangeFraction: Schema.optional(Schema.Number),
    predictedMonthlyGrossProfitChangeMicros: Schema.optional(Schema.String),
    suggestedPriceCurrencyCode: Schema.optional(Schema.String),
    effectiveness: Schema.optional(Schema.String),
    predictedImpressionsChangeFraction: Schema.optional(Schema.Number),
    predictedClicksChangeFraction: Schema.optional(Schema.Number),
    predictedConversionsChangeFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PriceInsights" });

export interface Segments {
  /** Title of the product. */
  title?: string;
  /** Brand of the product. */
  brand?: string;
  /** [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
  categoryL1?: string;
  /** Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned. */
  customerCountryCode?: string;
  /** [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
  productTypeL3?: string;
  /** Merchant-provided id of the product. */
  offerId?: string;
  /** [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
  categoryL4?: string;
  /** Custom label 3 for custom grouping of products. */
  customLabel3?: string;
  /** First day of the week (Monday) of the metrics date in the merchant timezone. */
  week?: Content_Date;
  /** [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
  productTypeL1?: string;
  /** [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
  productTypeL2?: string;
  /** [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
  productTypeL4?: string;
  /** [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
  categoryL3?: string;
  /** Custom label 4 for custom grouping of products. */
  customLabel4?: string;
  /** Program to which metrics apply, for example, Free Product Listing. */
  program?:
    | "PROGRAM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "FREE_PRODUCT_LISTING"
    | "FREE_LOCAL_PRODUCT_LISTING"
    | "BUY_ON_GOOGLE_LISTING"
    | (string & {});
  /** Date in the merchant timezone to which metrics apply. */
  date?: Content_Date;
  /** Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency. */
  currencyCode?: string;
  /** [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
  categoryL5?: string;
  /** Custom label 1 for custom grouping of products. */
  customLabel1?: string;
  /** [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
  categoryL2?: string;
  /** Custom label 2 for custom grouping of products. */
  customLabel2?: string;
  /** [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
  productTypeL5?: string;
  /** Custom label 0 for custom grouping of products. */
  customLabel0?: string;
}

export const Segments: Schema.Schema<Segments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    categoryL1: Schema.optional(Schema.String),
    customerCountryCode: Schema.optional(Schema.String),
    productTypeL3: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    categoryL4: Schema.optional(Schema.String),
    customLabel3: Schema.optional(Schema.String),
    week: Schema.optional(Content_Date),
    productTypeL1: Schema.optional(Schema.String),
    productTypeL2: Schema.optional(Schema.String),
    productTypeL4: Schema.optional(Schema.String),
    categoryL3: Schema.optional(Schema.String),
    customLabel4: Schema.optional(Schema.String),
    program: Schema.optional(Schema.String),
    date: Schema.optional(Content_Date),
    currencyCode: Schema.optional(Schema.String),
    categoryL5: Schema.optional(Schema.String),
    customLabel1: Schema.optional(Schema.String),
    categoryL2: Schema.optional(Schema.String),
    customLabel2: Schema.optional(Schema.String),
    productTypeL5: Schema.optional(Schema.String),
    customLabel0: Schema.optional(Schema.String),
  }).annotate({ identifier: "Segments" });

export interface BestSellers {
  /** Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold. */
  rank?: string;
  /** Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query. */
  countryCode?: string;
  /** Popularity rank in the previous week or month. */
  previousRank?: string;
  /** Estimated demand in relation to the item with the highest popularity rank in the same category and country. */
  relativeDemand?:
    | "RELATIVE_DEMAND_UNSPECIFIED"
    | "VERY_LOW"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "VERY_HIGH"
    | (string & {});
  /** Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports. * The first day of the month for monthly reports. If a `WHERE` condition on `best_sellers.report_date` is not specified in the query, the latest available weekly or monthly report is returned. */
  reportDate?: Content_Date;
  /** Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month. */
  previousRelativeDemand?:
    | "RELATIVE_DEMAND_UNSPECIFIED"
    | "VERY_LOW"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "VERY_HIGH"
    | (string & {});
  /** Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned. */
  categoryId?: string;
  /** Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query. */
  reportGranularity?:
    | "REPORT_GRANULARITY_UNSPECIFIED"
    | "WEEKLY"
    | "MONTHLY"
    | (string & {});
  /** Change in the estimated demand. Whether it rose, sank or remained flat. */
  relativeDemandChange?:
    | "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED"
    | "SINKER"
    | "FLAT"
    | "RISER"
    | (string & {});
}

export const BestSellers: Schema.Schema<BestSellers> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rank: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    previousRank: Schema.optional(Schema.String),
    relativeDemand: Schema.optional(Schema.String),
    reportDate: Schema.optional(Content_Date),
    previousRelativeDemand: Schema.optional(Schema.String),
    categoryId: Schema.optional(Schema.String),
    reportGranularity: Schema.optional(Schema.String),
    relativeDemandChange: Schema.optional(Schema.String),
  }).annotate({ identifier: "BestSellers" });

export interface Brand {
  /** Name of the brand. */
  name?: string;
}

export const Brand: Schema.Schema<Brand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Brand" });

export interface ProductViewItemIssue {
  /** Item issue type. */
  issueType?: ProductViewItemIssueItemIssueType;
  /** Item issue severity. */
  severity?: ProductViewItemIssueItemIssueSeverity;
  /** Item issue resolution. */
  resolution?:
    | "UNKNOWN"
    | "MERCHANT_ACTION"
    | "PENDING_PROCESSING"
    | (string & {});
}

export const ProductViewItemIssue: Schema.Schema<ProductViewItemIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueType: Schema.optional(ProductViewItemIssueItemIssueType),
    severity: Schema.optional(ProductViewItemIssueItemIssueSeverity),
    resolution: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductViewItemIssue" });

export interface ProductView {
  /** The time the merchant created the product in timestamp seconds. */
  creationTime?: string;
  /** Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
  categoryL2?: string;
  /** Estimated performance potential compared to highest performing products of the merchant. */
  clickPotential?:
    | "CLICK_POTENTIAL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause. */
  id?: string;
  /** Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
  productTypeL4?: string;
  /** Expiration date for the product. Specified on insertion. */
  expirationDate?: Content_Date;
  /** Availability of the product. */
  availability?: string;
  /** Merchant-provided id of the product. */
  offerId?: string;
  /** Title of the product. */
  title?: string;
  /** Brand of the product. */
  brand?: string;
  /** First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
  categoryL1?: string;
  /** GTIN of the product. */
  gtin?: ReadonlyArray<string>;
  /** Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
  productTypeL5?: string;
  /** Normalized click potential of the product. Values range from 1 to 1000, where 1 is the highest click potential and 1000 is the theoretical lowest. */
  clickPotentialRank?: string;
  /** Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
  categoryL5?: string;
  /** Product price currency code (for example, ISO 4217). Absent if product price is not available. */
  currencyCode?: string;
  /** Item group ID provided by the merchant for grouping variants together. */
  itemGroupId?: string;
  /** Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available. */
  priceMicros?: string;
  /** Condition of the product. */
  condition?: string;
  /** Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
  categoryL3?: string;
  /** List of item issues for the product. */
  itemIssues?: ReadonlyArray<ProductViewItemIssue>;
  /** First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
  productTypeL1?: string;
  /** Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
  productTypeL2?: string;
  /** Language code of the product in BCP 47 format. */
  languageCode?: string;
  /** Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
  productTypeL3?: string;
  /** Channel of the product (online versus local). */
  channel?: "CHANNEL_UNSPECIFIED" | "LOCAL" | "ONLINE" | (string & {});
  /** The normalized shipping label specified in the feed */
  shippingLabel?: string;
  /** Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
  categoryL4?: string;
  /** Aggregated destination status. */
  aggregatedDestinationStatus?:
    | "AGGREGATED_STATUS_UNSPECIFIED"
    | "NOT_ELIGIBLE_OR_DISAPPROVED"
    | "PENDING"
    | "ELIGIBLE_LIMITED"
    | "ELIGIBLE"
    | (string & {});
}

export const ProductView: Schema.Schema<ProductView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creationTime: Schema.optional(Schema.String),
    categoryL2: Schema.optional(Schema.String),
    clickPotential: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    productTypeL4: Schema.optional(Schema.String),
    expirationDate: Schema.optional(Content_Date),
    availability: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    categoryL1: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.Array(Schema.String)),
    productTypeL5: Schema.optional(Schema.String),
    clickPotentialRank: Schema.optional(Schema.String),
    categoryL5: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    itemGroupId: Schema.optional(Schema.String),
    priceMicros: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    categoryL3: Schema.optional(Schema.String),
    itemIssues: Schema.optional(Schema.Array(ProductViewItemIssue)),
    productTypeL1: Schema.optional(Schema.String),
    productTypeL2: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    productTypeL3: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    shippingLabel: Schema.optional(Schema.String),
    categoryL4: Schema.optional(Schema.String),
    aggregatedDestinationStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductView" });

export interface ReportRow {
  /** Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. */
  priceCompetitiveness?: PriceCompetitiveness;
  /** Segmentation dimensions requested by the merchant in the query. Dimension values are only set for dimensions requested explicitly in the query. */
  segments?: Segments;
  /** Best sellers fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView` or `BestSellersBrandView`. */
  bestSellers?: BestSellers;
  /** Product cluster fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView`. */
  productCluster?: ProductCluster;
  /** Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. */
  priceInsights?: PriceInsights;
  /** Brand fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersBrandView`. */
  brand?: Brand;
  /** Product fields requested by the merchant in the query. Field values are only set if the merchant queries `ProductView`. */
  productView?: ProductView;
  /** [Topic trends](https://support.google.com/merchants/answer/13542370) fields requested by the merchant in the query. Field values are only set if the merchant queries `TopicTrendsView`. */
  topicTrends?: TopicTrends;
  /** Metrics requested by the merchant in the query. Metric values are only set for metrics requested explicitly in the query. */
  metrics?: Metrics;
  /** Competitive visibility fields requested by the merchant in the query. Field values are only set if the merchant queries `CompetitiveVisibilityTopMerchantView`, `CompetitiveVisibilityBenchmarkView` or `CompetitiveVisibilityCompetitorView`. */
  competitiveVisibility?: CompetitiveVisibility;
}

export const ReportRow: Schema.Schema<ReportRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priceCompetitiveness: Schema.optional(PriceCompetitiveness),
    segments: Schema.optional(Segments),
    bestSellers: Schema.optional(BestSellers),
    productCluster: Schema.optional(ProductCluster),
    priceInsights: Schema.optional(PriceInsights),
    brand: Schema.optional(Brand),
    productView: Schema.optional(ProductView),
    topicTrends: Schema.optional(TopicTrends),
    metrics: Schema.optional(Metrics),
    competitiveVisibility: Schema.optional(CompetitiveVisibility),
  }).annotate({ identifier: "ReportRow" });

export interface ReturnPolicyOnlinePolicy {
  /** The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns. */
  days?: string;
  /** Policy type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "NUMBER_OF_DAYS_AFTER_DELIVERY"
    | "NO_RETURNS"
    | "LIFETIME_RETURNS"
    | (string & {});
}

export const ReturnPolicyOnlinePolicy: Schema.Schema<ReturnPolicyOnlinePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    days: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReturnPolicyOnlinePolicy" });

export interface ReturnPolicyOnline {
  /** The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set. */
  restockingFee?: ReturnPolicyOnlineRestockingFee;
  /** Output only. Return policy ID generated by Google. */
  returnPolicyId?: string;
  /** The return policy uri. This can used by Google to do a sanity check for the policy. */
  returnPolicyUri?: string;
  /** The unique user-defined label of the return policy. The same label cannot be used in different return policies for the same country. Policies with the label 'default' will apply to all products, unless a product specifies a return_policy_label attribute. */
  label?: string;
  /** The countries of sale where the return policy is applicable. The values must be a valid 2 letter ISO 3166 code, e.g. "US". */
  countries?: ReadonlyArray<string>;
  /** The item conditions that are accepted for returns. This is required to not be empty unless the type of return policy is noReturns. */
  itemConditions?: ReadonlyArray<
    "ITEM_CONDITION_UNSPECIFIED" | "NEW" | "USED" | (string & {})
  >;
  /** The name of the policy as shown in Merchant Center. */
  name?: string;
  /** The return reason category information. This required to not be empty unless the type of return policy is noReturns. */
  returnReasonCategoryInfo?: ReadonlyArray<ReturnPolicyOnlineReturnReasonCategoryInfo>;
  /** The return policy. */
  policy?: ReturnPolicyOnlinePolicy;
  /** The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns. */
  returnMethods?: ReadonlyArray<
    | "RETURN_METHOD_UNSPECIFIED"
    | "BY_MAIL"
    | "IN_STORE"
    | "AT_A_KIOSK"
    | (string & {})
  >;
}

export const ReturnPolicyOnline: Schema.Schema<ReturnPolicyOnline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restockingFee: Schema.optional(ReturnPolicyOnlineRestockingFee),
    returnPolicyId: Schema.optional(Schema.String),
    returnPolicyUri: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    countries: Schema.optional(Schema.Array(Schema.String)),
    itemConditions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    returnReasonCategoryInfo: Schema.optional(
      Schema.Array(ReturnPolicyOnlineReturnReasonCategoryInfo),
    ),
    policy: Schema.optional(ReturnPolicyOnlinePolicy),
    returnMethods: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReturnPolicyOnline" });

export interface PosCustomBatchResponseEntry {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`" */
  kind?: string;
  /** A list of errors defined if, and only if, the request failed. */
  errors?: Errors;
  /** The ID of the request entry to which this entry responds. */
  batchId?: number;
  /** The updated inventory information. */
  inventory?: PosInventory;
  /** The retrieved or updated store information. */
  store?: PosStore;
  /** The updated sale information. */
  sale?: PosSale;
}

export const PosCustomBatchResponseEntry: Schema.Schema<PosCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    inventory: Schema.optional(PosInventory),
    store: Schema.optional(PosStore),
    sale: Schema.optional(PosSale),
  }).annotate({ identifier: "PosCustomBatchResponseEntry" });

export interface PosCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<PosCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`". */
  kind?: string;
}

export const PosCustomBatchResponse: Schema.Schema<PosCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(PosCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosCustomBatchResponse" });

export interface InputValueCheckboxInputValue {
  /** Required. True if the merchant checked the box field. False otherwise. */
  value?: boolean;
}

export const InputValueCheckboxInputValue: Schema.Schema<InputValueCheckboxInputValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InputValueCheckboxInputValue" });

export interface InputValue {
  /** Required. Id of the corresponding input field. */
  inputFieldId?: string;
  /** Value for text input field. */
  textInputValue?: InputValueTextInputValue;
  /** Value for checkbox input field. */
  checkboxInputValue?: InputValueCheckboxInputValue;
  /** Value for choice input field. */
  choiceInputValue?: InputValueChoiceInputValue;
}

export const InputValue: Schema.Schema<InputValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputFieldId: Schema.optional(Schema.String),
    textInputValue: Schema.optional(InputValueTextInputValue),
    checkboxInputValue: Schema.optional(InputValueCheckboxInputValue),
    choiceInputValue: Schema.optional(InputValueChoiceInputValue),
  }).annotate({ identifier: "InputValue" });

export interface ActionInput {
  /** Required. Values for input fields. */
  inputValues?: ReadonlyArray<InputValue>;
  /** Required. Id of the selected action flow. */
  actionFlowId?: string;
}

export const ActionInput: Schema.Schema<ActionInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputValues: Schema.optional(Schema.Array(InputValue)),
    actionFlowId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionInput" });

export interface TriggerActionPayload {
  /** Required. The context from the selected action. The value is obtained from rendered issues and needs to be sent back to identify the action that is being triggered. */
  actionContext?: string;
  /** Required. Input provided by the merchant. */
  actionInput?: ActionInput;
}

export const TriggerActionPayload: Schema.Schema<TriggerActionPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionContext: Schema.optional(Schema.String),
    actionInput: Schema.optional(ActionInput),
  }).annotate({ identifier: "TriggerActionPayload" });

export interface LiasettingsGetAccessibleGmbAccountsResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsGetAccessibleGmbAccountsResponse`". */
  kind?: string;
  /** The ID of the Merchant Center account. */
  accountId?: string;
  /** A list of Business Profiles which are available to the merchant. */
  gmbAccounts?: ReadonlyArray<GmbAccountsGmbAccount>;
}

export const LiasettingsGetAccessibleGmbAccountsResponse: Schema.Schema<LiasettingsGetAccessibleGmbAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    gmbAccounts: Schema.optional(Schema.Array(GmbAccountsGmbAccount)),
  }).annotate({ identifier: "LiasettingsGetAccessibleGmbAccountsResponse" });

export interface VerifyPhoneNumberResponse {
  /** Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number. */
  verifiedPhoneNumber?: string;
}

export const VerifyPhoneNumberResponse: Schema.Schema<VerifyPhoneNumberResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verifiedPhoneNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyPhoneNumberResponse" });

export interface RequestReviewFreeListingsRequest {
  /** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
  regionCode?: string;
}

export const RequestReviewFreeListingsRequest: Schema.Schema<RequestReviewFreeListingsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestReviewFreeListingsRequest" });

export interface PosSaleResponse {
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The relative change of the available quantity. Negative for items returned. */
  quantity?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#posSaleResponse`". */
  kind?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** Required. The price of the item. */
  price?: Price;
  /** A unique ID to group items from the same sale event. */
  saleId?: string;
}

export const PosSaleResponse: Schema.Schema<PosSaleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    saleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosSaleResponse" });

export interface PosInventoryRequest {
  /** Required. The current price of the item. */
  price?: Price;
  /** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupMethod?: string;
  /** Global Trade Item Number. */
  gtin?: string;
  /** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
  storeCode?: string;
  /** Required. The CLDR territory code for the item. */
  targetCountry?: string;
  /** Required. A unique identifier for the item. */
  itemId?: string;
  /** Required. The available quantity of the item. */
  quantity?: string;
  /** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
  pickupSla?: string;
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage?: string;
  /** Required. The inventory timestamp, in ISO 8601 format. */
  timestamp?: string;
}

export const PosInventoryRequest: Schema.Schema<PosInventoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price: Schema.optional(Price),
    pickupMethod: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
    storeCode: Schema.optional(Schema.String),
    targetCountry: Schema.optional(Schema.String),
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    pickupSla: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosInventoryRequest" });

export interface RenderAccountIssuesRequestPayload {
  /** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
  contentOption?:
    | "CONTENT_OPTION_UNSPECIFIED"
    | "PRE_RENDERED_HTML"
    | (string & {});
  /** Optional. How actions with user input form should be handled. If not provided, actions will be returned as links that points merchant to Merchant Center where they can request the action. */
  userInputActionOption?:
    | "USER_INPUT_ACTION_RENDERING_OPTION_UNSPECIFIED"
    | "REDIRECT_TO_MERCHANT_CENTER"
    | "BUILT_IN_USER_INPUT_ACTIONS"
    | (string & {});
}

export const RenderAccountIssuesRequestPayload: Schema.Schema<RenderAccountIssuesRequestPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentOption: Schema.optional(Schema.String),
    userInputActionOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "RenderAccountIssuesRequestPayload" });

export interface AccountIdentifier {
  /** The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount). */
  aggregatorId?: string;
  /** The merchant account ID, set for individual accounts and subaccounts. */
  merchantId?: string;
}

export const AccountIdentifier: Schema.Schema<AccountIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatorId: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountIdentifier" });

export interface AccountsAuthInfoResponse {
  /** The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined. */
  accountIdentifiers?: ReadonlyArray<AccountIdentifier>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`". */
  kind?: string;
}

export const AccountsAuthInfoResponse: Schema.Schema<AccountsAuthInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountIdentifiers: Schema.optional(Schema.Array(AccountIdentifier)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsAuthInfoResponse" });

export interface ECommercePlatformLinkInfo {
  /** The id used by the third party service provider to identify the merchant. */
  externalAccountId?: string;
}

export const ECommercePlatformLinkInfo: Schema.Schema<ECommercePlatformLinkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ECommercePlatformLinkInfo" });

export interface AccountsLinkRequest {
  /** Additional information required for `eCommercePlatform` link type. */
  eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;
  /** The ID of the linked account. */
  linkedAccountId?: string;
  /** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
  action?: string;
  /** Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" */
  services?: ReadonlyArray<string>;
  /** Additional information required for `paymentServiceProvider` link type. */
  paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;
  /** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" */
  linkType?: string;
}

export const AccountsLinkRequest: Schema.Schema<AccountsLinkRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eCommercePlatformLinkInfo: Schema.optional(ECommercePlatformLinkInfo),
    linkedAccountId: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(Schema.String)),
    paymentServiceProviderLinkInfo: Schema.optional(
      PaymentServiceProviderLinkInfo,
    ),
    linkType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsLinkRequest" });

export interface AccountsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListResponse`". */
  kind?: string;
  resources?: ReadonlyArray<Account>;
  /** The token for the retrieval of the next page of accounts. */
  nextPageToken?: string;
}

export const AccountsListResponse: Schema.Schema<AccountsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Account)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsListResponse" });

export interface RenderProductIssuesResponse {
  /** List of issues for a given product. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. */
  issues?: ReadonlyArray<ProductIssue>;
  /** Alternate Dispute Resolution (ADR) is deprecated. Use `prerendered_out_of_court_dispute_settlement` instead. */
  alternateDisputeResolution?: AlternateDisputeResolution;
}

export const RenderProductIssuesResponse: Schema.Schema<RenderProductIssuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issues: Schema.optional(Schema.Array(ProductIssue)),
    alternateDisputeResolution: Schema.optional(AlternateDisputeResolution),
  }).annotate({ identifier: "RenderProductIssuesResponse" });

export interface ProductstatusesCustomBatchResponseEntry {
  /** A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request. */
  errors?: Errors;
  /** The ID of the request entry this entry responds to. */
  batchId?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`" */
  kind?: string;
  /** The requested product status. Only defined if the request was successful. */
  productStatus?: ProductStatus;
}

export const ProductstatusesCustomBatchResponseEntry: Schema.Schema<ProductstatusesCustomBatchResponseEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Errors),
    batchId: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    productStatus: Schema.optional(ProductStatus),
  }).annotate({ identifier: "ProductstatusesCustomBatchResponseEntry" });

export interface ProductstatusesCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<ProductstatusesCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`". */
  kind?: string;
}

export const ProductstatusesCustomBatchResponse: Schema.Schema<ProductstatusesCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(ProductstatusesCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductstatusesCustomBatchResponse" });

export interface LiasettingsSetInventoryVerificationContactResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetInventoryVerificationContactResponse`". */
  kind?: string;
}

export const LiasettingsSetInventoryVerificationContactResponse: Schema.Schema<LiasettingsSetInventoryVerificationContactResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({
    identifier: "LiasettingsSetInventoryVerificationContactResponse",
  });

export interface InsertCheckoutSettingsRequest {
  /** Required. The `UrlSettings` for the request. The presence of URL settings indicates `Checkout` enrollment. */
  uriSettings?: UrlSettings;
}

export const InsertCheckoutSettingsRequest: Schema.Schema<InsertCheckoutSettingsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uriSettings: Schema.optional(UrlSettings),
  }).annotate({ identifier: "InsertCheckoutSettingsRequest" });

export interface ProductsCustomBatchRequestEntry {
  /** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`" */
  method?: string;
  /** The ID of the managing account. */
  merchantId?: string;
  /** The product to insert or update. Only required if the method is `insert` or `update`. If the `update` method is used with `updateMask` only to delete a field, then this isn't required. For example, setting `salePrice` on the `updateMask` and not providing a `product` will result in an existing sale price on the product specified by `productId` being deleted. */
  product?: Product;
  /** The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed. */
  feedId?: string;
  /** The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`. */
  updateMask?: string;
  /** An entry ID, unique within the batch request. */
  batchId?: number;
  /** The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`. */
  productId?: string;
}

export const ProductsCustomBatchRequestEntry: Schema.Schema<ProductsCustomBatchRequestEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    product: Schema.optional(Product),
    feedId: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    batchId: Schema.optional(Schema.Number),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductsCustomBatchRequestEntry" });

export interface LiasettingsSetPosDataProviderResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetPosDataProviderResponse`". */
  kind?: string;
}

export const LiasettingsSetPosDataProviderResponse: Schema.Schema<LiasettingsSetPosDataProviderResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiasettingsSetPosDataProviderResponse" });

export interface AccounttaxCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<AccounttaxCustomBatchRequestEntry>;
}

export const AccounttaxCustomBatchRequest: Schema.Schema<AccounttaxCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(AccounttaxCustomBatchRequestEntry)),
  }).annotate({ identifier: "AccounttaxCustomBatchRequest" });

export interface DatafeedsCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<DatafeedsCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsCustomBatchResponse`". */
  kind?: string;
}

export const DatafeedsCustomBatchResponse: Schema.Schema<DatafeedsCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(DatafeedsCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatafeedsCustomBatchResponse" });

export interface RegionalinventoryCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<RegionalinventoryCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`". */
  kind?: string;
}

export const RegionalinventoryCustomBatchResponse: Schema.Schema<RegionalinventoryCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(RegionalinventoryCustomBatchResponseEntry),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalinventoryCustomBatchResponse" });

export interface ListReturnPolicyOnlineResponse {
  /** The retrieved return policies. */
  returnPolicies?: ReadonlyArray<ReturnPolicyOnline>;
}

export const ListReturnPolicyOnlineResponse: Schema.Schema<ListReturnPolicyOnlineResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPolicies: Schema.optional(Schema.Array(ReturnPolicyOnline)),
  }).annotate({ identifier: "ListReturnPolicyOnlineResponse" });

export interface AccountstatusesCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<AccountstatusesCustomBatchRequestEntry>;
}

export const AccountstatusesCustomBatchRequest: Schema.Schema<AccountstatusesCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(AccountstatusesCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "AccountstatusesCustomBatchRequest" });

export interface UndeleteConversionSourceRequest {}

export const UndeleteConversionSourceRequest: Schema.Schema<UndeleteConversionSourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UndeleteConversionSourceRequest",
  });

export interface AccounttaxCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<AccounttaxCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponse`". */
  kind?: string;
}

export const AccounttaxCustomBatchResponse: Schema.Schema<AccounttaxCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(AccounttaxCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccounttaxCustomBatchResponse" });

export interface ProductsCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<ProductsCustomBatchRequestEntry>;
}

export const ProductsCustomBatchRequest: Schema.Schema<ProductsCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(ProductsCustomBatchRequestEntry)),
  }).annotate({ identifier: "ProductsCustomBatchRequest" });

export interface ListCollectionsResponse {
  /** The collections listed. */
  resources?: ReadonlyArray<Collection>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListCollectionsResponse: Schema.Schema<ListCollectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Collection)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCollectionsResponse" });

export interface RenderAccountIssuesResponse {
  /** List of account issues for a given account. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. */
  issues?: ReadonlyArray<AccountIssue>;
  /** Alternate Dispute Resolution (ADR) is deprecated. Use `prerendered_out_of_court_dispute_settlement` instead. */
  alternateDisputeResolution?: AlternateDisputeResolution;
}

export const RenderAccountIssuesResponse: Schema.Schema<RenderAccountIssuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issues: Schema.optional(Schema.Array(AccountIssue)),
    alternateDisputeResolution: Schema.optional(AlternateDisputeResolution),
  }).annotate({ identifier: "RenderAccountIssuesResponse" });

export interface AccountsCustomBatchResponse {
  /** The result of the execution of the batch requests. */
  entries?: ReadonlyArray<AccountsCustomBatchResponseEntry>;
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`". */
  kind?: string;
}

export const AccountsCustomBatchResponse: Schema.Schema<AccountsCustomBatchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(AccountsCustomBatchResponseEntry)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsCustomBatchResponse" });

export interface RegionalinventoryCustomBatchRequest {
  /** The request entries to be processed in the batch. */
  entries?: ReadonlyArray<RegionalinventoryCustomBatchRequestEntry>;
}

export const RegionalinventoryCustomBatchRequest: Schema.Schema<RegionalinventoryCustomBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(RegionalinventoryCustomBatchRequestEntry),
    ),
  }).annotate({ identifier: "RegionalinventoryCustomBatchRequest" });

export interface AccountsClaimWebsiteResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "`content#accountsClaimWebsiteResponse`". */
  kind?: string;
}

export const AccountsClaimWebsiteResponse: Schema.Schema<AccountsClaimWebsiteResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountsClaimWebsiteResponse" });

export interface SearchResponse {
  /** Rows that matched the search query. */
  results?: ReadonlyArray<ReportRow>;
  /** Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchResponse: Schema.Schema<SearchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(ReportRow)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchResponse" });

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

export interface UpdatePubsubnotificationsettingsRequest {
  /** The ID of the account. */
  merchantId: string;
  /** Request body */
  body?: PubsubNotificationSettings;
}

export const UpdatePubsubnotificationsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(PubsubNotificationSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "{merchantId}/pubsubnotificationsettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePubsubnotificationsettingsRequest>;

export type UpdatePubsubnotificationsettingsResponse =
  PubsubNotificationSettings;
export const UpdatePubsubnotificationsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PubsubNotificationSettings;

export type UpdatePubsubnotificationsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request. */
export const updatePubsubnotificationsettings: API.OperationMethod<
  UpdatePubsubnotificationsettingsRequest,
  UpdatePubsubnotificationsettingsResponse,
  UpdatePubsubnotificationsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePubsubnotificationsettingsRequest,
  output: UpdatePubsubnotificationsettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPubsubnotificationsettingsRequest {
  /** The ID of the account for which to get pubsub notification settings. */
  merchantId: string;
}

export const GetPubsubnotificationsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/pubsubnotificationsettings" }),
    svc,
  ) as unknown as Schema.Schema<GetPubsubnotificationsettingsRequest>;

export type GetPubsubnotificationsettingsResponse = PubsubNotificationSettings;
export const GetPubsubnotificationsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PubsubNotificationSettings;

export type GetPubsubnotificationsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a Merchant Center account's pubsub notification settings. */
export const getPubsubnotificationsettings: API.OperationMethod<
  GetPubsubnotificationsettingsRequest,
  GetPubsubnotificationsettingsResponse,
  GetPubsubnotificationsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPubsubnotificationsettingsRequest,
  output: GetPubsubnotificationsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchReportsRequest {
  /** Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount. */
  merchantId: string;
  /** Request body */
  body?: SearchRequest;
}

export const SearchReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  body: Schema.optional(SearchRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "{merchantId}/reports/search",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<SearchReportsRequest>;

export type SearchReportsResponse = SearchResponse;
export const SearchReportsResponse = /*@__PURE__*/ /*#__PURE__*/ SearchResponse;

export type SearchReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves merchant performance metrics matching the search query and optionally segmented by selected dimensions. */
export const searchReports: API.OperationMethod<
  SearchReportsRequest,
  SearchReportsResponse,
  SearchReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchReportsRequest,
  output: SearchReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RequestreviewShoppingadsprogramRequest {
  /** Required. The ID of the account. */
  merchantId: string;
  /** Request body */
  body?: RequestReviewShoppingAdsRequest;
}

export const RequestreviewShoppingadsprogramRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(RequestReviewShoppingAdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/shoppingadsprogram/requestreview",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestreviewShoppingadsprogramRequest>;

export interface RequestreviewShoppingadsprogramResponse {}
export const RequestreviewShoppingadsprogramResponse: Schema.Schema<RequestreviewShoppingadsprogramResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<RequestreviewShoppingadsprogramResponse>;

export type RequestreviewShoppingadsprogramError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review. */
export const requestreviewShoppingadsprogram: API.OperationMethod<
  RequestreviewShoppingadsprogramRequest,
  RequestreviewShoppingadsprogramResponse,
  RequestreviewShoppingadsprogramError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestreviewShoppingadsprogramRequest,
  output: RequestreviewShoppingadsprogramResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetShoppingadsprogramRequest {
  /** Required. The ID of the account. */
  merchantId: string;
}

export const GetShoppingadsprogramRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/shoppingadsprogram" }),
    svc,
  ) as unknown as Schema.Schema<GetShoppingadsprogramRequest>;

export type GetShoppingadsprogramResponse = ShoppingAdsProgramStatus;
export const GetShoppingadsprogramResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShoppingAdsProgramStatus;

export type GetShoppingadsprogramError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account. */
export const getShoppingadsprogram: API.OperationMethod<
  GetShoppingadsprogramRequest,
  GetShoppingadsprogramResponse,
  GetShoppingadsprogramError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetShoppingadsprogramRequest,
  output: GetShoppingadsprogramResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchRegionsRequest {
  /** Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`. */
  updateMask?: string;
  /** Required. The id of the merchant for which to update region definition. */
  merchantId: string;
  /** Required. The id of the region to update. */
  regionId: string;
  /** Request body */
  body?: Region;
}

export const PatchRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  regionId: Schema.String.pipe(T.HttpPath("regionId")),
  body: Schema.optional(Region).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "{merchantId}/regions/{regionId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchRegionsRequest>;

export type PatchRegionsResponse = Region;
export const PatchRegionsResponse = /*@__PURE__*/ /*#__PURE__*/ Region;

export type PatchRegionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a region definition in your Merchant Center account. */
export const patchRegions: API.OperationMethod<
  PatchRegionsRequest,
  PatchRegionsResponse,
  PatchRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRegionsRequest,
  output: PatchRegionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteRegionsRequest {
  /** Required. The id of the merchant for which to delete region definition. */
  merchantId: string;
  /** Required. The id of the region to delete. */
  regionId: string;
}

export const DeleteRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  regionId: Schema.String.pipe(T.HttpPath("regionId")),
}).pipe(
  T.Http({ method: "DELETE", path: "{merchantId}/regions/{regionId}" }),
  svc,
) as unknown as Schema.Schema<DeleteRegionsRequest>;

export interface DeleteRegionsResponse {}
export const DeleteRegionsResponse: Schema.Schema<DeleteRegionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteRegionsResponse>;

export type DeleteRegionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a region definition from your Merchant Center account. */
export const deleteRegions: API.OperationMethod<
  DeleteRegionsRequest,
  DeleteRegionsResponse,
  DeleteRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRegionsRequest,
  output: DeleteRegionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListRegionsRequest {
  /** Required. The id of the merchant for which to list region definitions. */
  merchantId: string;
  /** The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/regions" }),
  svc,
) as unknown as Schema.Schema<ListRegionsRequest>;

export type ListRegionsResponse_Op = ListRegionsResponse;
export const ListRegionsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListRegionsResponse;

export type ListRegionsError = DefaultErrors | NotFound | Forbidden;

/** Lists the regions in your Merchant Center account. */
export const listRegions: API.PaginatedOperationMethod<
  ListRegionsRequest,
  ListRegionsResponse_Op,
  ListRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetRegionsRequest {
  /** Required. The id of the merchant for which to retrieve region definition. */
  merchantId: string;
  /** Required. The id of the region to retrieve. */
  regionId: string;
}

export const GetRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  regionId: Schema.String.pipe(T.HttpPath("regionId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/regions/{regionId}" }),
  svc,
) as unknown as Schema.Schema<GetRegionsRequest>;

export type GetRegionsResponse = Region;
export const GetRegionsResponse = /*@__PURE__*/ /*#__PURE__*/ Region;

export type GetRegionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a region defined in your Merchant Center account. */
export const getRegions: API.OperationMethod<
  GetRegionsRequest,
  GetRegionsResponse,
  GetRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionsRequest,
  output: GetRegionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateRegionsRequest {
  /** Required. The id of the merchant for which to create region definition. */
  merchantId: string;
  /** Required. The id of the region to create. */
  regionId?: string;
  /** Request body */
  body?: Region;
}

export const CreateRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  regionId: Schema.optional(Schema.String).pipe(T.HttpQuery("regionId")),
  body: Schema.optional(Region).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "{merchantId}/regions", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateRegionsRequest>;

export type CreateRegionsResponse = Region;
export const CreateRegionsResponse = /*@__PURE__*/ /*#__PURE__*/ Region;

export type CreateRegionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a region definition in your Merchant Center account. */
export const createRegions: API.OperationMethod<
  CreateRegionsRequest,
  CreateRegionsResponse,
  CreateRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRegionsRequest,
  output: CreateRegionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RenderproductissuesMerchantsupportRequest {
  /** Required. The ID of the account that contains the product. */
  merchantId: string;
  /** Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for. */
  productId: string;
  /** Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`. */
  languageCode?: string;
  /** Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. */
  timeZone?: string;
  /** Request body */
  body?: RenderProductIssuesRequestPayload;
}

export const RenderproductissuesMerchantsupportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    timeZone: Schema.optional(Schema.String).pipe(T.HttpQuery("timeZone")),
    body: Schema.optional(RenderProductIssuesRequestPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/merchantsupport/renderproductissues/{productId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RenderproductissuesMerchantsupportRequest>;

export type RenderproductissuesMerchantsupportResponse =
  RenderProductIssuesResponse;
export const RenderproductissuesMerchantsupportResponse =
  /*@__PURE__*/ /*#__PURE__*/ RenderProductIssuesResponse;

export type RenderproductissuesMerchantsupportError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications. */
export const renderproductissuesMerchantsupport: API.OperationMethod<
  RenderproductissuesMerchantsupportRequest,
  RenderproductissuesMerchantsupportResponse,
  RenderproductissuesMerchantsupportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenderproductissuesMerchantsupportRequest,
  output: RenderproductissuesMerchantsupportResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TriggeractionMerchantsupportRequest {
  /** Required. The ID of the merchant's account. */
  merchantId: string;
  /** Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`. */
  languageCode?: string;
  /** Request body */
  body?: TriggerActionPayload;
}

export const TriggeractionMerchantsupportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(TriggerActionPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/merchantsupport/triggeraction",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TriggeractionMerchantsupportRequest>;

export type TriggeractionMerchantsupportResponse = TriggerActionResponse;
export const TriggeractionMerchantsupportResponse =
  /*@__PURE__*/ /*#__PURE__*/ TriggerActionResponse;

export type TriggeractionMerchantsupportError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Start an action. The action can be requested by merchants in third-party application. Before merchants can request the action, the third-party application needs to show them action specific content and display a user input form. You can submit an allowlist request in the [Shopping API Support Form](https://support.google.com/merchants/contact/shopping_api_support_form) under "What is the issue/question?" to get access to this feature. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user. */
export const triggeractionMerchantsupport: API.OperationMethod<
  TriggeractionMerchantsupportRequest,
  TriggeractionMerchantsupportResponse,
  TriggeractionMerchantsupportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TriggeractionMerchantsupportRequest,
  output: TriggeractionMerchantsupportResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RenderaccountissuesMerchantsupportRequest {
  /** Required. The ID of the account to fetch issues for. */
  merchantId: string;
  /** Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`. */
  languageCode?: string;
  /** Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. */
  timeZone?: string;
  /** Request body */
  body?: RenderAccountIssuesRequestPayload;
}

export const RenderaccountissuesMerchantsupportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    timeZone: Schema.optional(Schema.String).pipe(T.HttpQuery("timeZone")),
    body: Schema.optional(RenderAccountIssuesRequestPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/merchantsupport/renderaccountissues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RenderaccountissuesMerchantsupportRequest>;

export type RenderaccountissuesMerchantsupportResponse =
  RenderAccountIssuesResponse;
export const RenderaccountissuesMerchantsupportResponse =
  /*@__PURE__*/ /*#__PURE__*/ RenderAccountIssuesResponse;

export type RenderaccountissuesMerchantsupportError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications. */
export const renderaccountissuesMerchantsupport: API.OperationMethod<
  RenderaccountissuesMerchantsupportRequest,
  RenderaccountissuesMerchantsupportResponse,
  RenderaccountissuesMerchantsupportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenderaccountissuesMerchantsupportRequest,
  output: RenderaccountissuesMerchantsupportResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPromotionsRequest {
  /** Required. The ID of the account that contains the collection. */
  merchantId: string;
  /** Required. REST ID of the promotion to retrieve. */
  id: string;
}

export const GetPromotionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/promotions/{id}" }),
  svc,
) as unknown as Schema.Schema<GetPromotionsRequest>;

export type GetPromotionsResponse = Promotion;
export const GetPromotionsResponse = /*@__PURE__*/ /*#__PURE__*/ Promotion;

export type GetPromotionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a promotion from your Merchant Center account. */
export const getPromotions: API.OperationMethod<
  GetPromotionsRequest,
  GetPromotionsResponse,
  GetPromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPromotionsRequest,
  output: GetPromotionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreatePromotionsRequest {
  /** Required. The ID of the account that contains the collection. */
  merchantId: string;
  /** Request body */
  body?: Promotion;
}

export const CreatePromotionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(Promotion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "{merchantId}/promotions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreatePromotionsRequest>;

export type CreatePromotionsResponse = Promotion;
export const CreatePromotionsResponse = /*@__PURE__*/ /*#__PURE__*/ Promotion;

export type CreatePromotionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed. */
export const createPromotions: API.OperationMethod<
  CreatePromotionsRequest,
  CreatePromotionsResponse,
  CreatePromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePromotionsRequest,
  output: CreatePromotionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPromotionsRequest {
  /** A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The ID of the account that contains the collection. */
  merchantId: string;
  /** The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country. */
  countryCode?: string;
  /** The two-letter ISO 639-1 language code associated with the promotions, used as a filter. */
  languageCode?: string;
}

export const ListPromotionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  countryCode: Schema.optional(Schema.String).pipe(T.HttpQuery("countryCode")),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/promotions" }),
  svc,
) as unknown as Schema.Schema<ListPromotionsRequest>;

export type ListPromotionsResponse = ListPromotionResponse;
export const ListPromotionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPromotionResponse;

export type ListPromotionsError = DefaultErrors | NotFound | Forbidden;

/** List all promotions from your Merchant Center account. */
export const listPromotions: API.PaginatedOperationMethod<
  ListPromotionsRequest,
  ListPromotionsResponse,
  ListPromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPromotionsRequest,
  output: ListPromotionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrdertrackingsignalsRequest {
  /** The ID of the merchant for which the order signal is created. */
  merchantId: string;
  /** Request body */
  body?: OrderTrackingSignal;
}

export const CreateOrdertrackingsignalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(OrderTrackingSignal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/ordertrackingsignals",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrdertrackingsignalsRequest>;

export type CreateOrdertrackingsignalsResponse = OrderTrackingSignal;
export const CreateOrdertrackingsignalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrderTrackingSignal;

export type CreateOrdertrackingsignalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new order tracking signal. */
export const createOrdertrackingsignals: API.OperationMethod<
  CreateOrdertrackingsignalsRequest,
  CreateOrdertrackingsignalsResponse,
  CreateOrdertrackingsignalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrdertrackingsignalsRequest,
  output: CreateOrdertrackingsignalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDatafeedstatusesRequest {
  /** The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. */
  language?: string;
  /** Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. */
  country?: string;
  /** The ID of the datafeed. */
  datafeedId: string;
  /** The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. */
  feedLabel?: string;
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
}

export const GetDatafeedstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String).pipe(T.HttpQuery("language")),
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
    datafeedId: Schema.String.pipe(T.HttpPath("datafeedId")),
    feedLabel: Schema.optional(Schema.String).pipe(T.HttpQuery("feedLabel")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/datafeedstatuses/{datafeedId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDatafeedstatusesRequest>;

export type GetDatafeedstatusesResponse = DatafeedStatus;
export const GetDatafeedstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedStatus;

export type GetDatafeedstatusesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the status of a datafeed from your Merchant Center account. */
export const getDatafeedstatuses: API.OperationMethod<
  GetDatafeedstatusesRequest,
  GetDatafeedstatusesResponse,
  GetDatafeedstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatafeedstatusesRequest,
  output: GetDatafeedstatusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CustombatchDatafeedstatusesRequest {
  /** Request body */
  body?: DatafeedstatusesCustomBatchRequest;
}

export const CustombatchDatafeedstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DatafeedstatusesCustomBatchRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "datafeedstatuses/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchDatafeedstatusesRequest>;

export type CustombatchDatafeedstatusesResponse =
  DatafeedstatusesCustomBatchResponse;
export const CustombatchDatafeedstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedstatusesCustomBatchResponse;

export type CustombatchDatafeedstatusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets multiple Merchant Center datafeed statuses in a single request. */
export const custombatchDatafeedstatuses: API.OperationMethod<
  CustombatchDatafeedstatusesRequest,
  CustombatchDatafeedstatusesResponse,
  CustombatchDatafeedstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchDatafeedstatusesRequest,
  output: CustombatchDatafeedstatusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDatafeedstatusesRequest {
  /** The maximum number of products to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the account that manages the datafeeds. This account cannot be a multi-client account. */
  merchantId: string;
}

export const ListDatafeedstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/datafeedstatuses" }),
    svc,
  ) as unknown as Schema.Schema<ListDatafeedstatusesRequest>;

export type ListDatafeedstatusesResponse = DatafeedstatusesListResponse;
export const ListDatafeedstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedstatusesListResponse;

export type ListDatafeedstatusesError = DefaultErrors | NotFound | Forbidden;

/** Lists the statuses of the datafeeds in your Merchant Center account. */
export const listDatafeedstatuses: API.PaginatedOperationMethod<
  ListDatafeedstatusesRequest,
  ListDatafeedstatusesResponse,
  ListDatafeedstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDatafeedstatusesRequest,
  output: ListDatafeedstatusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ReportInteractionRecommendationsRequest {
  /** Required. The ID of the account that wants to report an interaction. */
  merchantId: string;
  /** Request body */
  body?: ReportInteractionRequest;
}

export const ReportInteractionRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(ReportInteractionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/recommendations/reportInteraction",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportInteractionRecommendationsRequest>;

export interface ReportInteractionRecommendationsResponse {}
export const ReportInteractionRecommendationsResponse: Schema.Schema<ReportInteractionRecommendationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ReportInteractionRecommendationsResponse>;

export type ReportInteractionRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports an interaction on a recommendation for a merchant. */
export const reportInteractionRecommendations: API.OperationMethod<
  ReportInteractionRecommendationsRequest,
  ReportInteractionRecommendationsResponse,
  ReportInteractionRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportInteractionRecommendationsRequest,
  output: ReportInteractionRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateRecommendationsRequest {
  /** Required. The ID of the account to fetch recommendations for. */
  merchantId: string;
  /** Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND */
  allowedTag?: string[];
  /** Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi */
  languageCode?: string;
}

export const GenerateRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    allowedTag: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("allowedTag"),
    ),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/recommendations/generate" }),
    svc,
  ) as unknown as Schema.Schema<GenerateRecommendationsRequest>;

export type GenerateRecommendationsResponse_Op =
  GenerateRecommendationsResponse;
export const GenerateRecommendationsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ GenerateRecommendationsResponse;

export type GenerateRecommendationsError = DefaultErrors | NotFound | Forbidden;

/** Generates recommendations for a merchant. */
export const generateRecommendations: API.OperationMethod<
  GenerateRecommendationsRequest,
  GenerateRecommendationsResponse_Op,
  GenerateRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateRecommendationsRequest,
  output: GenerateRecommendationsResponse_Op,
  errors: [NotFound, Forbidden],
}));

export interface CustombatchLocalinventoryRequest {
  /** Request body */
  body?: LocalinventoryCustomBatchRequest;
}

export const CustombatchLocalinventoryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(LocalinventoryCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "localinventory/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchLocalinventoryRequest>;

export type CustombatchLocalinventoryResponse =
  LocalinventoryCustomBatchResponse;
export const CustombatchLocalinventoryResponse =
  /*@__PURE__*/ /*#__PURE__*/ LocalinventoryCustomBatchResponse;

export type CustombatchLocalinventoryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates local inventory for multiple products or stores in a single request. */
export const custombatchLocalinventory: API.OperationMethod<
  CustombatchLocalinventoryRequest,
  CustombatchLocalinventoryResponse,
  CustombatchLocalinventoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchLocalinventoryRequest,
  output: CustombatchLocalinventoryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertLocalinventoryRequest {
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product for which to update local inventory. */
  productId: string;
  /** Request body */
  body?: LocalInventory;
}

export const InsertLocalinventoryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(LocalInventory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/products/{productId}/localinventory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertLocalinventoryRequest>;

export type InsertLocalinventoryResponse = LocalInventory;
export const InsertLocalinventoryResponse =
  /*@__PURE__*/ /*#__PURE__*/ LocalInventory;

export type InsertLocalinventoryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the local inventory of a product in your Merchant Center account. */
export const insertLocalinventory: API.OperationMethod<
  InsertLocalinventoryRequest,
  InsertLocalinventoryResponse,
  InsertLocalinventoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLocalinventoryRequest,
  output: InsertLocalinventoryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProductdeliverytimeRequest {
  /** The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** Request body */
  body?: ProductDeliveryTime;
}

export const CreateProductdeliverytimeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(ProductDeliveryTime).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/productdeliverytime",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProductdeliverytimeRequest>;

export type CreateProductdeliverytimeResponse = ProductDeliveryTime;
export const CreateProductdeliverytimeResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductDeliveryTime;

export type CreateProductdeliverytimeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates the delivery time of a product. */
export const createProductdeliverytime: API.OperationMethod<
  CreateProductdeliverytimeRequest,
  CreateProductdeliverytimeResponse,
  CreateProductdeliverytimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProductdeliverytimeRequest,
  output: CreateProductdeliverytimeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProductdeliverytimeRequest {
  /** Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. */
  productId: string;
}

export const GetProductdeliverytimeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/productdeliverytime/{productId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProductdeliverytimeRequest>;

export type GetProductdeliverytimeResponse = ProductDeliveryTime;
export const GetProductdeliverytimeResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductDeliveryTime;

export type GetProductdeliverytimeError = DefaultErrors | NotFound | Forbidden;

/** Gets `productDeliveryTime` by `productId`. */
export const getProductdeliverytime: API.OperationMethod<
  GetProductdeliverytimeRequest,
  GetProductdeliverytimeResponse,
  GetProductdeliverytimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProductdeliverytimeRequest,
  output: GetProductdeliverytimeResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProductdeliverytimeRequest {
  /** Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. */
  productId: string;
}

export const DeleteProductdeliverytimeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "{merchantId}/productdeliverytime/{productId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProductdeliverytimeRequest>;

export interface DeleteProductdeliverytimeResponse {}
export const DeleteProductdeliverytimeResponse: Schema.Schema<DeleteProductdeliverytimeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteProductdeliverytimeResponse>;

export type DeleteProductdeliverytimeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the delivery time of a product. */
export const deleteProductdeliverytime: API.OperationMethod<
  DeleteProductdeliverytimeRequest,
  DeleteProductdeliverytimeResponse,
  DeleteProductdeliverytimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProductdeliverytimeRequest,
  output: DeleteProductdeliverytimeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateReturnpolicyonlineRequest {
  /** Required. The id of the merchant for which to retrieve the return policy online object. */
  merchantId: string;
  /** Request body */
  body?: ReturnPolicyOnline;
}

export const CreateReturnpolicyonlineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(ReturnPolicyOnline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/returnpolicyonline",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateReturnpolicyonlineRequest>;

export type CreateReturnpolicyonlineResponse = ReturnPolicyOnline;
export const CreateReturnpolicyonlineResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReturnPolicyOnline;

export type CreateReturnpolicyonlineError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new return policy. */
export const createReturnpolicyonline: API.OperationMethod<
  CreateReturnpolicyonlineRequest,
  CreateReturnpolicyonlineResponse,
  CreateReturnpolicyonlineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateReturnpolicyonlineRequest,
  output: CreateReturnpolicyonlineResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListReturnpolicyonlineRequest {
  /** Required. The id of the merchant for which to retrieve the return policy online object. */
  merchantId: string;
}

export const ListReturnpolicyonlineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/returnpolicyonline" }),
    svc,
  ) as unknown as Schema.Schema<ListReturnpolicyonlineRequest>;

export type ListReturnpolicyonlineResponse = ListReturnPolicyOnlineResponse;
export const ListReturnpolicyonlineResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReturnPolicyOnlineResponse;

export type ListReturnpolicyonlineError = DefaultErrors | NotFound | Forbidden;

/** Lists all existing return policies. */
export const listReturnpolicyonline: API.OperationMethod<
  ListReturnpolicyonlineRequest,
  ListReturnpolicyonlineResponse,
  ListReturnpolicyonlineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListReturnpolicyonlineRequest,
  output: ListReturnpolicyonlineResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteReturnpolicyonlineRequest {
  /** Required. The id of the merchant for which to retrieve the return policy online object. */
  merchantId: string;
  /** Required. The id of the return policy to delete. */
  returnPolicyId: string;
}

export const DeleteReturnpolicyonlineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    returnPolicyId: Schema.String.pipe(T.HttpPath("returnPolicyId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "{merchantId}/returnpolicyonline/{returnPolicyId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteReturnpolicyonlineRequest>;

export interface DeleteReturnpolicyonlineResponse {}
export const DeleteReturnpolicyonlineResponse: Schema.Schema<DeleteReturnpolicyonlineResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteReturnpolicyonlineResponse>;

export type DeleteReturnpolicyonlineError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing return policy. */
export const deleteReturnpolicyonline: API.OperationMethod<
  DeleteReturnpolicyonlineRequest,
  DeleteReturnpolicyonlineResponse,
  DeleteReturnpolicyonlineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteReturnpolicyonlineRequest,
  output: DeleteReturnpolicyonlineResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchReturnpolicyonlineRequest {
  /** Required. The id of the merchant for which to retrieve the return policy online object. */
  merchantId: string;
  /** Required. The id of the return policy to update. */
  returnPolicyId: string;
  /** Request body */
  body?: ReturnPolicyOnline;
}

export const PatchReturnpolicyonlineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    returnPolicyId: Schema.String.pipe(T.HttpPath("returnPolicyId")),
    body: Schema.optional(ReturnPolicyOnline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "{merchantId}/returnpolicyonline/{returnPolicyId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchReturnpolicyonlineRequest>;

export type PatchReturnpolicyonlineResponse = ReturnPolicyOnline;
export const PatchReturnpolicyonlineResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReturnPolicyOnline;

export type PatchReturnpolicyonlineError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing return policy. */
export const patchReturnpolicyonline: API.OperationMethod<
  PatchReturnpolicyonlineRequest,
  PatchReturnpolicyonlineResponse,
  PatchReturnpolicyonlineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchReturnpolicyonlineRequest,
  output: PatchReturnpolicyonlineResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetReturnpolicyonlineRequest {
  /** Required. The id of the merchant for which to retrieve the return policy online object. */
  merchantId: string;
  /** Required. The id of the return policy to retrieve. */
  returnPolicyId: string;
}

export const GetReturnpolicyonlineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    returnPolicyId: Schema.String.pipe(T.HttpPath("returnPolicyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/returnpolicyonline/{returnPolicyId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetReturnpolicyonlineRequest>;

export type GetReturnpolicyonlineResponse = ReturnPolicyOnline;
export const GetReturnpolicyonlineResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReturnPolicyOnline;

export type GetReturnpolicyonlineError = DefaultErrors | NotFound | Forbidden;

/** Gets an existing return policy. */
export const getReturnpolicyonline: API.OperationMethod<
  GetReturnpolicyonlineRequest,
  GetReturnpolicyonlineResponse,
  GetReturnpolicyonlineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetReturnpolicyonlineRequest,
  output: GetReturnpolicyonlineResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFreelistingsprogramRequest {
  /** Required. The ID of the account. */
  merchantId: string;
}

export const GetFreelistingsprogramRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/freelistingsprogram" }),
    svc,
  ) as unknown as Schema.Schema<GetFreelistingsprogramRequest>;

export type GetFreelistingsprogramResponse = FreeListingsProgramStatus;
export const GetFreelistingsprogramResponse =
  /*@__PURE__*/ /*#__PURE__*/ FreeListingsProgramStatus;

export type GetFreelistingsprogramError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account. */
export const getFreelistingsprogram: API.OperationMethod<
  GetFreelistingsprogramRequest,
  GetFreelistingsprogramResponse,
  GetFreelistingsprogramError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFreelistingsprogramRequest,
  output: GetFreelistingsprogramResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestreviewFreelistingsprogramRequest {
  /** Required. The ID of the account. */
  merchantId: string;
  /** Request body */
  body?: RequestReviewFreeListingsRequest;
}

export const RequestreviewFreelistingsprogramRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(RequestReviewFreeListingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/freelistingsprogram/requestreview",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestreviewFreelistingsprogramRequest>;

export interface RequestreviewFreelistingsprogramResponse {}
export const RequestreviewFreelistingsprogramResponse: Schema.Schema<RequestreviewFreelistingsprogramResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<RequestreviewFreelistingsprogramResponse>;

export type RequestreviewFreelistingsprogramError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review. */
export const requestreviewFreelistingsprogram: API.OperationMethod<
  RequestreviewFreelistingsprogramRequest,
  RequestreviewFreelistingsprogramResponse,
  RequestreviewFreelistingsprogramError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestreviewFreelistingsprogramRequest,
  output: RequestreviewFreelistingsprogramResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFreelistingsprogramCheckoutsettingsRequest {
  /** Required. The ID of the account. */
  merchantId: string;
}

export const DeleteFreelistingsprogramCheckoutsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "{merchantId}/freelistingsprogram/checkoutsettings",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteFreelistingsprogramCheckoutsettingsRequest>;

export interface DeleteFreelistingsprogramCheckoutsettingsResponse {}
export const DeleteFreelistingsprogramCheckoutsettingsResponse: Schema.Schema<DeleteFreelistingsprogramCheckoutsettingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteFreelistingsprogramCheckoutsettingsResponse>;

export type DeleteFreelistingsprogramCheckoutsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes `Checkout` settings and unenrolls merchant from `Checkout` program. */
export const deleteFreelistingsprogramCheckoutsettings: API.OperationMethod<
  DeleteFreelistingsprogramCheckoutsettingsRequest,
  DeleteFreelistingsprogramCheckoutsettingsResponse,
  DeleteFreelistingsprogramCheckoutsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFreelistingsprogramCheckoutsettingsRequest,
  output: DeleteFreelistingsprogramCheckoutsettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFreelistingsprogramCheckoutsettingsRequest {
  /** Required. The ID of the account. */
  merchantId: string;
}

export const GetFreelistingsprogramCheckoutsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/freelistingsprogram/checkoutsettings",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFreelistingsprogramCheckoutsettingsRequest>;

export type GetFreelistingsprogramCheckoutsettingsResponse = CheckoutSettings;
export const GetFreelistingsprogramCheckoutsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckoutSettings;

export type GetFreelistingsprogramCheckoutsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings. */
export const getFreelistingsprogramCheckoutsettings: API.OperationMethod<
  GetFreelistingsprogramCheckoutsettingsRequest,
  GetFreelistingsprogramCheckoutsettingsResponse,
  GetFreelistingsprogramCheckoutsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFreelistingsprogramCheckoutsettingsRequest,
  output: GetFreelistingsprogramCheckoutsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertFreelistingsprogramCheckoutsettingsRequest {
  /** Required. The ID of the account. */
  merchantId: string;
  /** Request body */
  body?: InsertCheckoutSettingsRequest;
}

export const InsertFreelistingsprogramCheckoutsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(InsertCheckoutSettingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/freelistingsprogram/checkoutsettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFreelistingsprogramCheckoutsettingsRequest>;

export type InsertFreelistingsprogramCheckoutsettingsResponse =
  CheckoutSettings;
export const InsertFreelistingsprogramCheckoutsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckoutSettings;

export type InsertFreelistingsprogramCheckoutsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls merchant in `Checkout` program. */
export const insertFreelistingsprogramCheckoutsettings: API.OperationMethod<
  InsertFreelistingsprogramCheckoutsettingsRequest,
  InsertFreelistingsprogramCheckoutsettingsResponse,
  InsertFreelistingsprogramCheckoutsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFreelistingsprogramCheckoutsettingsRequest,
  output: InsertFreelistingsprogramCheckoutsettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchAccountstatusesRequest {
  /** Request body */
  body?: AccountstatusesCustomBatchRequest;
}

export const CustombatchAccountstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AccountstatusesCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "accountstatuses/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchAccountstatusesRequest>;

export type CustombatchAccountstatusesResponse =
  AccountstatusesCustomBatchResponse;
export const CustombatchAccountstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountstatusesCustomBatchResponse;

export type CustombatchAccountstatusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves multiple Merchant Center account statuses in a single request. */
export const custombatchAccountstatuses: API.OperationMethod<
  CustombatchAccountstatusesRequest,
  CustombatchAccountstatusesResponse,
  CustombatchAccountstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchAccountstatusesRequest,
  output: CustombatchAccountstatusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountstatusesRequest {
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: string[];
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account. */
  accountId: string;
}

export const GetAccountstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("destinations"),
    ),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/accountstatuses/{accountId}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountstatusesRequest>;

export type GetAccountstatusesResponse = AccountStatus;
export const GetAccountstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountStatus;

export type GetAccountstatusesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts. */
export const getAccountstatuses: API.OperationMethod<
  GetAccountstatusesRequest,
  GetAccountstatusesResponse,
  GetAccountstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountstatusesRequest,
  output: GetAccountstatusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountstatusesRequest {
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: string[];
  /** If set, only the accounts with the given name (case sensitive) will be returned. */
  name?: string;
  /** The maximum number of account statuses to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
}

export const ListAccountstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("destinations"),
    ),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/accountstatuses" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountstatusesRequest>;

export type ListAccountstatusesResponse = AccountstatusesListResponse;
export const ListAccountstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountstatusesListResponse;

export type ListAccountstatusesError = DefaultErrors | NotFound | Forbidden;

/** Lists the statuses of the sub-accounts in your Merchant Center account. */
export const listAccountstatuses: API.PaginatedOperationMethod<
  ListAccountstatusesRequest,
  ListAccountstatusesResponse,
  ListAccountstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountstatusesRequest,
  output: ListAccountstatusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCollectionstatusesRequest {
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection. */
  collectionId: string;
}

export const GetCollectionstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/collectionstatuses/{collectionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCollectionstatusesRequest>;

export type GetCollectionstatusesResponse = CollectionStatus;
export const GetCollectionstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CollectionStatus;

export type GetCollectionstatusesError = DefaultErrors | NotFound | Forbidden;

/** Gets the status of a collection from your Merchant Center account. */
export const getCollectionstatuses: API.OperationMethod<
  GetCollectionstatusesRequest,
  GetCollectionstatusesResponse,
  GetCollectionstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCollectionstatusesRequest,
  output: GetCollectionstatusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCollectionstatusesRequest {
  /** Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. */
  pageToken?: string;
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListCollectionstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/collectionstatuses" }),
    svc,
  ) as unknown as Schema.Schema<ListCollectionstatusesRequest>;

export type ListCollectionstatusesResponse = ListCollectionStatusesResponse;
export const ListCollectionstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCollectionStatusesResponse;

export type ListCollectionstatusesError = DefaultErrors | NotFound | Forbidden;

/** Lists the statuses of the collections in your Merchant Center account. */
export const listCollectionstatuses: API.PaginatedOperationMethod<
  ListCollectionstatusesRequest,
  ListCollectionstatusesResponse,
  ListCollectionstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCollectionstatusesRequest,
  output: ListCollectionstatusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccounttaxRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get/update account tax settings. */
  accountId: string;
}

export const GetAccounttaxRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/accounttax/{accountId}" }),
  svc,
) as unknown as Schema.Schema<GetAccounttaxRequest>;

export type GetAccounttaxResponse = AccountTax;
export const GetAccounttaxResponse = /*@__PURE__*/ /*#__PURE__*/ AccountTax;

export type GetAccounttaxError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the tax settings of the account. */
export const getAccounttax: API.OperationMethod<
  GetAccounttaxRequest,
  GetAccounttaxResponse,
  GetAccounttaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccounttaxRequest,
  output: GetAccounttaxResponse,
  errors: [NotFound, Forbidden],
}));

export interface CustombatchAccounttaxRequest {
  /** Request body */
  body?: AccounttaxCustomBatchRequest;
}

export const CustombatchAccounttaxRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AccounttaxCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "accounttax/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchAccounttaxRequest>;

export type CustombatchAccounttaxResponse = AccounttaxCustomBatchResponse;
export const CustombatchAccounttaxResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccounttaxCustomBatchResponse;

export type CustombatchAccounttaxError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves and updates tax settings of multiple accounts in a single request. */
export const custombatchAccounttax: API.OperationMethod<
  CustombatchAccounttaxRequest,
  CustombatchAccounttaxResponse,
  CustombatchAccounttaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchAccounttaxRequest,
  output: CustombatchAccounttaxResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccounttaxRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get/update account tax settings. */
  accountId: string;
  /** Request body */
  body?: AccountTax;
}

export const UpdateAccounttaxRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(AccountTax).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "{merchantId}/accounttax/{accountId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccounttaxRequest>;

export type UpdateAccounttaxResponse = AccountTax;
export const UpdateAccounttaxResponse = /*@__PURE__*/ /*#__PURE__*/ AccountTax;

export type UpdateAccounttaxError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the tax settings of the account. Any fields that are not provided are deleted from the resource. */
export const updateAccounttax: API.OperationMethod<
  UpdateAccounttaxRequest,
  UpdateAccounttaxResponse,
  UpdateAccounttaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccounttaxRequest,
  output: UpdateAccounttaxResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccounttaxRequest {
  /** The maximum number of tax settings to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
}

export const ListAccounttaxRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/accounttax" }),
  svc,
) as unknown as Schema.Schema<ListAccounttaxRequest>;

export type ListAccounttaxResponse = AccounttaxListResponse;
export const ListAccounttaxResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccounttaxListResponse;

export type ListAccounttaxError = DefaultErrors | NotFound | Forbidden;

/** Lists the tax settings of the sub-accounts in your Merchant Center account. */
export const listAccounttax: API.PaginatedOperationMethod<
  ListAccounttaxRequest,
  ListAccounttaxResponse,
  ListAccounttaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccounttaxRequest,
  output: ListAccounttaxResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProductsRequest {
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product. */
  productId: string;
  /** The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted. */
  feedId?: string;
}

export const DeleteProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  productId: Schema.String.pipe(T.HttpPath("productId")),
  feedId: Schema.optional(Schema.String).pipe(T.HttpQuery("feedId")),
}).pipe(
  T.Http({ method: "DELETE", path: "{merchantId}/products/{productId}" }),
  svc,
) as unknown as Schema.Schema<DeleteProductsRequest>;

export interface DeleteProductsResponse {}
export const DeleteProductsResponse: Schema.Schema<DeleteProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteProductsResponse>;

export type DeleteProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a product from your Merchant Center account. */
export const deleteProducts: API.OperationMethod<
  DeleteProductsRequest,
  DeleteProductsResponse,
  DeleteProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProductsRequest,
  output: DeleteProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProductsRequest {
  /** The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the account that contains the products. This account cannot be a multi-client account. */
  merchantId: string;
}

export const ListProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/products" }),
  svc,
) as unknown as Schema.Schema<ListProductsRequest>;

export type ListProductsResponse = ProductsListResponse;
export const ListProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductsListResponse;

export type ListProductsError = DefaultErrors | NotFound | Forbidden;

/** Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested. */
export const listProducts: API.PaginatedOperationMethod<
  ListProductsRequest,
  ListProductsResponse,
  ListProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProductsRequest,
  output: ListProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProductsRequest {
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product. */
  productId: string;
}

export const GetProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  productId: Schema.String.pipe(T.HttpPath("productId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/products/{productId}" }),
  svc,
) as unknown as Schema.Schema<GetProductsRequest>;

export type GetProductsResponse = Product;
export const GetProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type GetProductsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a product from your Merchant Center account. */
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

export interface InsertProductsRequest {
  /** The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed. */
  feedId?: string;
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** Request body */
  body?: Product;
}

export const InsertProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  feedId: Schema.optional(Schema.String).pipe(T.HttpQuery("feedId")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  body: Schema.optional(Product).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "{merchantId}/products", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertProductsRequest>;

export type InsertProductsResponse = Product;
export const InsertProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type InsertProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry. */
export const insertProducts: API.OperationMethod<
  InsertProductsRequest,
  InsertProductsResponse,
  InsertProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertProductsRequest,
  output: InsertProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchProductsRequest {
  /** Request body */
  body?: ProductsCustomBatchRequest;
}

export const CustombatchProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ProductsCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "products/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchProductsRequest>;

export type CustombatchProductsResponse = ProductsCustomBatchResponse;
export const CustombatchProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductsCustomBatchResponse;

export type CustombatchProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves, inserts, and deletes multiple products in a single request. */
export const custombatchProducts: API.OperationMethod<
  CustombatchProductsRequest,
  CustombatchProductsResponse,
  CustombatchProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchProductsRequest,
  output: CustombatchProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProductsRequest {
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product for which to update. */
  productId: string;
  /** The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. */
  updateMask?: string;
  /** Request body */
  body?: Product;
}

export const UpdateProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  productId: Schema.String.pipe(T.HttpPath("productId")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(Product).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "{merchantId}/products/{productId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateProductsRequest>;

export type UpdateProductsResponse = Product;
export const UpdateProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type UpdateProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing product in your Merchant Center account. Only updates attributes provided in the request. */
export const updateProducts: API.OperationMethod<
  UpdateProductsRequest,
  UpdateProductsResponse,
  UpdateProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProductsRequest,
  output: UpdateProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateConversionsourcesRequest {
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
  /** Request body */
  body?: ConversionSource;
}

export const CreateConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(ConversionSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/conversionsources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateConversionsourcesRequest>;

export type CreateConversionsourcesResponse = ConversionSource;
export const CreateConversionsourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type CreateConversionsourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new conversion source. */
export const createConversionsources: API.OperationMethod<
  CreateConversionsourcesRequest,
  CreateConversionsourcesResponse,
  CreateConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateConversionsourcesRequest,
  output: CreateConversionsourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchConversionsourcesRequest {
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
  /** Required. The ID of the conversion source to be updated. */
  conversionSourceId: string;
  /** Optional. List of fields being updated. The following fields can be updated: `attribution_settings`, `display_name`, `currency_code`. */
  updateMask?: string;
  /** Request body */
  body?: ConversionSource;
}

export const PatchConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    conversionSourceId: Schema.String.pipe(T.HttpPath("conversionSourceId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ConversionSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "{merchantId}/conversionsources/{conversionSourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchConversionsourcesRequest>;

export type PatchConversionsourcesResponse = ConversionSource;
export const PatchConversionsourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type PatchConversionsourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates information of an existing conversion source. */
export const patchConversionsources: API.OperationMethod<
  PatchConversionsourcesRequest,
  PatchConversionsourcesResponse,
  PatchConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchConversionsourcesRequest,
  output: PatchConversionsourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteConversionsourcesRequest {
  /** Required. The ID of the conversion source to be deleted. */
  conversionSourceId: string;
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
}

export const DeleteConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionSourceId: Schema.String.pipe(T.HttpPath("conversionSourceId")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "{merchantId}/conversionsources/{conversionSourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteConversionsourcesRequest>;

export interface DeleteConversionsourcesResponse {}
export const DeleteConversionsourcesResponse: Schema.Schema<DeleteConversionsourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteConversionsourcesResponse>;

export type DeleteConversionsourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service. */
export const deleteConversionsources: API.OperationMethod<
  DeleteConversionsourcesRequest,
  DeleteConversionsourcesResponse,
  DeleteConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteConversionsourcesRequest,
  output: DeleteConversionsourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListConversionsourcesRequest {
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
  /** The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total. */
  pageSize?: number;
  /** If true, also returns archived conversion sources. */
  showDeleted?: boolean;
  /** Page token. */
  pageToken?: string;
}

export const ListConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/conversionsources" }),
    svc,
  ) as unknown as Schema.Schema<ListConversionsourcesRequest>;

export type ListConversionsourcesResponse = ListConversionSourcesResponse;
export const ListConversionsourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConversionSourcesResponse;

export type ListConversionsourcesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the list of conversion sources the caller has access to. */
export const listConversionsources: API.PaginatedOperationMethod<
  ListConversionsourcesRequest,
  ListConversionsourcesResponse,
  ListConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListConversionsourcesRequest,
  output: ListConversionsourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetConversionsourcesRequest {
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
  /** Required. The REST ID of the collection. */
  conversionSourceId: string;
}

export const GetConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    conversionSourceId: Schema.String.pipe(T.HttpPath("conversionSourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/conversionsources/{conversionSourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetConversionsourcesRequest>;

export type GetConversionsourcesResponse = ConversionSource;
export const GetConversionsourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type GetConversionsourcesError = DefaultErrors | NotFound | Forbidden;

/** Fetches a conversion source. */
export const getConversionsources: API.OperationMethod<
  GetConversionsourcesRequest,
  GetConversionsourcesResponse,
  GetConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConversionsourcesRequest,
  output: GetConversionsourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UndeleteConversionsourcesRequest {
  /** Required. The ID of the conversion source to be undeleted. */
  conversionSourceId: string;
  /** Required. The ID of the account that owns the new conversion source. */
  merchantId: string;
  /** Request body */
  body?: UndeleteConversionSourceRequest;
}

export const UndeleteConversionsourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionSourceId: Schema.String.pipe(T.HttpPath("conversionSourceId")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(UndeleteConversionSourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/conversionsources/{conversionSourceId}:undelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UndeleteConversionsourcesRequest>;

export interface UndeleteConversionsourcesResponse {}
export const UndeleteConversionsourcesResponse: Schema.Schema<UndeleteConversionsourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UndeleteConversionsourcesResponse>;

export type UndeleteConversionsourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-enables an archived conversion source. */
export const undeleteConversionsources: API.OperationMethod<
  UndeleteConversionsourcesRequest,
  UndeleteConversionsourcesResponse,
  UndeleteConversionsourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteConversionsourcesRequest,
  output: UndeleteConversionsourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** A store code that is unique per merchant. */
  storeCode: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
}

export const GetPosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  storeCode: Schema.String.pipe(T.HttpPath("storeCode")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "{merchantId}/pos/{targetMerchantId}/store/{storeCode}",
  }),
  svc,
) as unknown as Schema.Schema<GetPosRequest>;

export type GetPosResponse = PosStore;
export const GetPosResponse = /*@__PURE__*/ /*#__PURE__*/ PosStore;

export type GetPosError = DefaultErrors | NotFound | Forbidden;

/** Retrieves information about the given store. */
export const getPos: API.OperationMethod<
  GetPosRequest,
  GetPosResponse,
  GetPosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPosRequest,
  output: GetPosResponse,
  errors: [NotFound, Forbidden],
}));

export interface InventoryPosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
  /** Request body */
  body?: PosInventoryRequest;
}

export const InventoryPosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
  body: Schema.optional(PosInventoryRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "{merchantId}/pos/{targetMerchantId}/inventory",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InventoryPosRequest>;

export type InventoryPosResponse = PosInventoryResponse;
export const InventoryPosResponse =
  /*@__PURE__*/ /*#__PURE__*/ PosInventoryResponse;

export type InventoryPosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submit inventory for the given merchant. */
export const inventoryPos: API.OperationMethod<
  InventoryPosRequest,
  InventoryPosResponse,
  InventoryPosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InventoryPosRequest,
  output: InventoryPosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
}

export const ListPosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/pos/{targetMerchantId}/store" }),
  svc,
) as unknown as Schema.Schema<ListPosRequest>;

export type ListPosResponse = PosListResponse;
export const ListPosResponse = /*@__PURE__*/ /*#__PURE__*/ PosListResponse;

export type ListPosError = DefaultErrors | NotFound | Forbidden;

/** Lists the stores of the target merchant. */
export const listPos: API.OperationMethod<
  ListPosRequest,
  ListPosResponse,
  ListPosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPosRequest,
  output: ListPosResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeletePosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** A store code that is unique per merchant. */
  storeCode: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
}

export const DeletePosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  storeCode: Schema.String.pipe(T.HttpPath("storeCode")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "{merchantId}/pos/{targetMerchantId}/store/{storeCode}",
  }),
  svc,
) as unknown as Schema.Schema<DeletePosRequest>;

export interface DeletePosResponse {}
export const DeletePosResponse: Schema.Schema<DeletePosResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePosResponse>;

export type DeletePosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a store for the given merchant. */
export const deletePos: API.OperationMethod<
  DeletePosRequest,
  DeletePosResponse,
  DeletePosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePosRequest,
  output: DeletePosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SalePosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
  /** Request body */
  body?: PosSaleRequest;
}

export const SalePosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
  body: Schema.optional(PosSaleRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "{merchantId}/pos/{targetMerchantId}/sale",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<SalePosRequest>;

export type SalePosResponse = PosSaleResponse;
export const SalePosResponse = /*@__PURE__*/ /*#__PURE__*/ PosSaleResponse;

export type SalePosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submit a sale event for the given merchant. */
export const salePos: API.OperationMethod<
  SalePosRequest,
  SalePosResponse,
  SalePosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SalePosRequest,
  output: SalePosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchPosRequest {
  /** Request body */
  body?: PosCustomBatchRequest;
}

export const CustombatchPosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(PosCustomBatchRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "pos/batch", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CustombatchPosRequest>;

export type CustombatchPosResponse = PosCustomBatchResponse;
export const CustombatchPosResponse =
  /*@__PURE__*/ /*#__PURE__*/ PosCustomBatchResponse;

export type CustombatchPosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batches multiple POS-related calls in a single request. */
export const custombatchPos: API.OperationMethod<
  CustombatchPosRequest,
  CustombatchPosResponse,
  CustombatchPosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchPosRequest,
  output: CustombatchPosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPosRequest {
  /** The ID of the POS or inventory data provider. */
  merchantId: string;
  /** The ID of the target merchant. */
  targetMerchantId: string;
  /** Request body */
  body?: PosStore;
}

export const InsertPosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  targetMerchantId: Schema.String.pipe(T.HttpPath("targetMerchantId")),
  body: Schema.optional(PosStore).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "{merchantId}/pos/{targetMerchantId}/store",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertPosRequest>;

export type InsertPosResponse = PosStore;
export const InsertPosResponse = /*@__PURE__*/ /*#__PURE__*/ PosStore;

export type InsertPosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a store for the given merchant. */
export const insertPos: API.OperationMethod<
  InsertPosRequest,
  InsertPosResponse,
  InsertPosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPosRequest,
  output: InsertPosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListQuotasRequest {
  /** Required. The ID of the account that has quota. This account must be an admin. */
  merchantId: string;
  /** The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. */
  pageToken?: string;
}

export const ListQuotasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/quotas" }),
  svc,
) as unknown as Schema.Schema<ListQuotasRequest>;

export type ListQuotasResponse = ListMethodQuotasResponse;
export const ListQuotasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMethodQuotasResponse;

export type ListQuotasError = DefaultErrors | NotFound | Forbidden;

/** Lists the daily call quota and usage per method for your Merchant Center account. */
export const listQuotas: API.PaginatedOperationMethod<
  ListQuotasRequest,
  ListQuotasResponse,
  ListQuotasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListQuotasRequest,
  output: ListQuotasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsRequest {
  /** If view is set to "css", only return accounts that are assigned label with given ID. */
  label?: string;
  /** The maximum number of accounts to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant". */
  view?: "MERCHANT" | "CSS" | (string & {});
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
  /** If set, only the accounts with the given name (case sensitive) will be returned. */
  name?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String).pipe(T.HttpQuery("label")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse = AccountsListResponse;
export const ListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsListResponse;

export type ListAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists the sub-accounts in your Merchant Center account. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdatelabelsAccountsRequest {
  /** The ID of the managing account. */
  merchantId: string;
  /** The ID of the account whose labels are updated. */
  accountId: string;
  /** Request body */
  body?: AccountsUpdateLabelsRequest;
}

export const UpdatelabelsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(AccountsUpdateLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/accounts/{accountId}/updatelabels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatelabelsAccountsRequest>;

export type UpdatelabelsAccountsResponse = AccountsUpdateLabelsResponse;
export const UpdatelabelsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsUpdateLabelsResponse;

export type UpdatelabelsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates labels that are assigned to the Merchant Center account by CSS user. */
export const updatelabelsAccounts: API.OperationMethod<
  UpdatelabelsAccountsRequest,
  UpdatelabelsAccountsResponse,
  UpdatelabelsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatelabelsAccountsRequest,
  output: UpdatelabelsAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertAccountsRequest {
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
  /** Request body */
  body?: Account;
}

export const InsertAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "{merchantId}/accounts", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertAccountsRequest>;

export type InsertAccountsResponse = Account;
export const InsertAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type InsertAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Merchant Center sub-account. */
export const insertAccounts: API.OperationMethod<
  InsertAccountsRequest,
  InsertAccountsResponse,
  InsertAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountsRequest,
  output: InsertAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account. */
  accountId: string;
  /** Request body */
  body?: Account;
}

export const UpdateAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "{merchantId}/accounts/{accountId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateAccountsRequest>;

export type UpdateAccountsResponse = Account;
export const UpdateAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type UpdateAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Merchant Center account. Any fields that are not provided are deleted from the resource. */
export const updateAccounts: API.OperationMethod<
  UpdateAccountsRequest,
  UpdateAccountsResponse,
  UpdateAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsRequest,
  output: UpdateAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListlinksAccountsRequest {
  /** The ID of the account for which to list links. */
  accountId: string;
  /** The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
}

export const ListlinksAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/accounts/{accountId}/listlinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListlinksAccountsRequest>;

export type ListlinksAccountsResponse = AccountsListLinksResponse;
export const ListlinksAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsListLinksResponse;

export type ListlinksAccountsError = DefaultErrors | NotFound | Forbidden;

/** Returns the list of accounts linked to your Merchant Center account. */
export const listlinksAccounts: API.PaginatedOperationMethod<
  ListlinksAccountsRequest,
  ListlinksAccountsResponse,
  ListlinksAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListlinksAccountsRequest,
  output: ListlinksAccountsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsRequest {
  /** Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant". */
  view?: "MERCHANT" | "CSS" | (string & {});
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account. */
  accountId: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/accounts/{accountId}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = Account;
export const GetAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type GetAccountsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a Merchant Center account. */
export const getAccounts: API.OperationMethod<
  GetAccountsRequest,
  GetAccountsResponse,
  GetAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsRequest,
  output: GetAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsRequest {
  /** The ID of the account. */
  accountId: string;
  /** Option to delete sub-accounts with products. The default value is false. */
  force?: boolean;
  /** The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account. */
  merchantId: string;
}

export const DeleteAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
  force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
}).pipe(
  T.Http({ method: "DELETE", path: "{merchantId}/accounts/{accountId}" }),
  svc,
) as unknown as Schema.Schema<DeleteAccountsRequest>;

export interface DeleteAccountsResponse {}
export const DeleteAccountsResponse: Schema.Schema<DeleteAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsResponse>;

export type DeleteAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Merchant Center sub-account. */
export const deleteAccounts: API.OperationMethod<
  DeleteAccountsRequest,
  DeleteAccountsResponse,
  DeleteAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsRequest,
  output: DeleteAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LinkAccountsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account that should be linked. */
  accountId: string;
  /** Request body */
  body?: AccountsLinkRequest;
}

export const LinkAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
  body: Schema.optional(AccountsLinkRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "{merchantId}/accounts/{accountId}/link",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<LinkAccountsRequest>;

export type LinkAccountsResponse = AccountsLinkResponse;
export const LinkAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsLinkResponse;

export type LinkAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId. */
export const linkAccounts: API.OperationMethod<
  LinkAccountsRequest,
  LinkAccountsResponse,
  LinkAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LinkAccountsRequest,
  output: LinkAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AuthinfoAccountsRequest {}

export const AuthinfoAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "accounts/authinfo" }),
    svc,
  ) as unknown as Schema.Schema<AuthinfoAccountsRequest>;

export type AuthinfoAccountsResponse = AccountsAuthInfoResponse;
export const AuthinfoAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsAuthInfoResponse;

export type AuthinfoAccountsError = DefaultErrors | NotFound | Forbidden;

/** Returns information about the authenticated user. */
export const authinfoAccounts: API.OperationMethod<
  AuthinfoAccountsRequest,
  AuthinfoAccountsResponse,
  AuthinfoAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AuthinfoAccountsRequest,
  output: AuthinfoAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestphoneverificationAccountsRequest {
  /** Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account. */
  merchantId: string;
  /** Required. The ID of the account. */
  accountId: string;
  /** Request body */
  body?: RequestPhoneVerificationRequest;
}

export const RequestphoneverificationAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(RequestPhoneVerificationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/accounts/{accountId}/requestphoneverification",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestphoneverificationAccountsRequest>;

export type RequestphoneverificationAccountsResponse =
  RequestPhoneVerificationResponse;
export const RequestphoneverificationAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RequestPhoneVerificationResponse;

export type RequestphoneverificationAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Request verification code to start phone verification. */
export const requestphoneverificationAccounts: API.OperationMethod<
  RequestphoneverificationAccountsRequest,
  RequestphoneverificationAccountsResponse,
  RequestphoneverificationAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestphoneverificationAccountsRequest,
  output: RequestphoneverificationAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchAccountsRequest {
  /** Request body */
  body?: AccountsCustomBatchRequest;
}

export const CustombatchAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AccountsCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "accounts/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchAccountsRequest>;

export type CustombatchAccountsResponse = AccountsCustomBatchResponse;
export const CustombatchAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsCustomBatchResponse;

export type CustombatchAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request. */
export const custombatchAccounts: API.OperationMethod<
  CustombatchAccountsRequest,
  CustombatchAccountsResponse,
  CustombatchAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchAccountsRequest,
  output: CustombatchAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyphonenumberAccountsRequest {
  /** Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account. */
  merchantId: string;
  /** Required. The ID of the account. */
  accountId: string;
  /** Request body */
  body?: VerifyPhoneNumberRequest;
}

export const VerifyphonenumberAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(VerifyPhoneNumberRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/accounts/{accountId}/verifyphonenumber",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<VerifyphonenumberAccountsRequest>;

export type VerifyphonenumberAccountsResponse = VerifyPhoneNumberResponse;
export const VerifyphonenumberAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerifyPhoneNumberResponse;

export type VerifyphonenumberAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number. */
export const verifyphonenumberAccounts: API.OperationMethod<
  VerifyphonenumberAccountsRequest,
  VerifyphonenumberAccountsResponse,
  VerifyphonenumberAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyphonenumberAccountsRequest,
  output: VerifyphonenumberAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClaimwebsiteAccountsRequest {
  /** The ID of the account whose website is claimed. */
  accountId: string;
  /** Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request. */
  overwrite?: boolean;
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
}

export const ClaimwebsiteAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    overwrite: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("overwrite")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/accounts/{accountId}/claimwebsite",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClaimwebsiteAccountsRequest>;

export type ClaimwebsiteAccountsResponse = AccountsClaimWebsiteResponse;
export const ClaimwebsiteAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsClaimWebsiteResponse;

export type ClaimwebsiteAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website. */
export const claimwebsiteAccounts: API.OperationMethod<
  ClaimwebsiteAccountsRequest,
  ClaimwebsiteAccountsResponse,
  ClaimwebsiteAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClaimwebsiteAccountsRequest,
  output: ClaimwebsiteAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsLabelsRequest {
  /** Required. The id of the account this label belongs to. */
  accountId: string;
  /** Request body */
  body?: AccountLabel;
}

export const CreateAccountsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(AccountLabel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "accounts/{accountId}/labels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsLabelsRequest>;

export type CreateAccountsLabelsResponse = AccountLabel;
export const CreateAccountsLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountLabel;

export type CreateAccountsLabelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new label, not assigned to any account. */
export const createAccountsLabels: API.OperationMethod<
  CreateAccountsLabelsRequest,
  CreateAccountsLabelsResponse,
  CreateAccountsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsLabelsRequest,
  output: CreateAccountsLabelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAccountsLabelsRequest {
  /** Required. The id of the account this label belongs to. */
  accountId: string;
  /** Required. The id of the label to update. */
  labelId: string;
  /** Request body */
  body?: AccountLabel;
}

export const PatchAccountsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    labelId: Schema.String.pipe(T.HttpPath("labelId")),
    body: Schema.optional(AccountLabel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "accounts/{accountId}/labels/{labelId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsLabelsRequest>;

export type PatchAccountsLabelsResponse = AccountLabel;
export const PatchAccountsLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountLabel;

export type PatchAccountsLabelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a label. */
export const patchAccountsLabels: API.OperationMethod<
  PatchAccountsLabelsRequest,
  PatchAccountsLabelsResponse,
  PatchAccountsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsLabelsRequest,
  output: PatchAccountsLabelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsLabelsRequest {
  /** Required. The id of the account that owns the label. */
  accountId: string;
  /** Required. The id of the label to delete. */
  labelId: string;
}

export const DeleteAccountsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    labelId: Schema.String.pipe(T.HttpPath("labelId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "accounts/{accountId}/labels/{labelId}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsLabelsRequest>;

export interface DeleteAccountsLabelsResponse {}
export const DeleteAccountsLabelsResponse: Schema.Schema<DeleteAccountsLabelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsLabelsResponse>;

export type DeleteAccountsLabelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a label and removes it from all accounts to which it was assigned. */
export const deleteAccountsLabels: API.OperationMethod<
  DeleteAccountsLabelsRequest,
  DeleteAccountsLabelsResponse,
  DeleteAccountsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsLabelsRequest,
  output: DeleteAccountsLabelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsLabelsRequest {
  /** The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The account id for whose labels are to be listed. */
  accountId: string;
}

export const ListAccountsLabelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({ method: "GET", path: "accounts/{accountId}/labels" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsLabelsRequest>;

export type ListAccountsLabelsResponse = ListAccountLabelsResponse;
export const ListAccountsLabelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountLabelsResponse;

export type ListAccountsLabelsError = DefaultErrors | NotFound | Forbidden;

/** Lists the labels assigned to an account. */
export const listAccountsLabels: API.PaginatedOperationMethod<
  ListAccountsLabelsRequest,
  ListAccountsLabelsResponse,
  ListAccountsLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsLabelsRequest,
  output: ListAccountsLabelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchAccountsReturncarrierRequest {
  /** Required. The Merchant Center Account Id under which the Return Carrier is to be linked. */
  accountId: string;
  /** Required. The Google-provided unique carrier ID, used to update the resource. */
  carrierAccountId: string;
  /** Request body */
  body?: AccountReturnCarrier;
}

export const PatchAccountsReturncarrierRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    carrierAccountId: Schema.String.pipe(T.HttpPath("carrierAccountId")),
    body: Schema.optional(AccountReturnCarrier).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "accounts/{accountId}/returncarrier/{carrierAccountId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsReturncarrierRequest>;

export type PatchAccountsReturncarrierResponse = AccountReturnCarrier;
export const PatchAccountsReturncarrierResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountReturnCarrier;

export type PatchAccountsReturncarrierError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a return carrier in the merchant account. */
export const patchAccountsReturncarrier: API.OperationMethod<
  PatchAccountsReturncarrierRequest,
  PatchAccountsReturncarrierResponse,
  PatchAccountsReturncarrierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsReturncarrierRequest,
  output: PatchAccountsReturncarrierResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsReturncarrierRequest {
  /** Required. The Merchant Center Account Id under which the Return Carrier is to be linked. */
  accountId: string;
  /** Required. The Google-provided unique carrier ID, used to update the resource. */
  carrierAccountId: string;
}

export const DeleteAccountsReturncarrierRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    carrierAccountId: Schema.String.pipe(T.HttpPath("carrierAccountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "accounts/{accountId}/returncarrier/{carrierAccountId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsReturncarrierRequest>;

export interface DeleteAccountsReturncarrierResponse {}
export const DeleteAccountsReturncarrierResponse: Schema.Schema<DeleteAccountsReturncarrierResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsReturncarrierResponse>;

export type DeleteAccountsReturncarrierError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a return carrier in the merchant account. */
export const deleteAccountsReturncarrier: API.OperationMethod<
  DeleteAccountsReturncarrierRequest,
  DeleteAccountsReturncarrierResponse,
  DeleteAccountsReturncarrierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsReturncarrierRequest,
  output: DeleteAccountsReturncarrierResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsReturncarrierRequest {
  /** Required. The Merchant Center Account Id under which the Return Carrier is to be linked. */
  accountId: string;
}

export const ListAccountsReturncarrierRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({ method: "GET", path: "accounts/{accountId}/returncarrier" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsReturncarrierRequest>;

export type ListAccountsReturncarrierResponse =
  ListAccountReturnCarrierResponse;
export const ListAccountsReturncarrierResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountReturnCarrierResponse;

export type ListAccountsReturncarrierError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists available return carriers in the merchant account. */
export const listAccountsReturncarrier: API.OperationMethod<
  ListAccountsReturncarrierRequest,
  ListAccountsReturncarrierResponse,
  ListAccountsReturncarrierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsReturncarrierRequest,
  output: ListAccountsReturncarrierResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateAccountsReturncarrierRequest {
  /** Required. The Merchant Center Account Id under which the Return Carrier is to be linked. */
  accountId: string;
  /** Request body */
  body?: AccountReturnCarrier;
}

export const CreateAccountsReturncarrierRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(AccountReturnCarrier).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "accounts/{accountId}/returncarrier",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsReturncarrierRequest>;

export type CreateAccountsReturncarrierResponse = AccountReturnCarrier;
export const CreateAccountsReturncarrierResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountReturnCarrier;

export type CreateAccountsReturncarrierError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Links return carrier to a merchant account. */
export const createAccountsReturncarrier: API.OperationMethod<
  CreateAccountsReturncarrierRequest,
  CreateAccountsReturncarrierResponse,
  CreateAccountsReturncarrierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsReturncarrierRequest,
  output: CreateAccountsReturncarrierResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsCredentialsRequest {
  /** Required. The merchant id of the account these credentials belong to. */
  accountId: string;
  /** Request body */
  body?: AccountCredentials;
}

export const CreateAccountsCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(AccountCredentials).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "accounts/{accountId}/credentials",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsCredentialsRequest>;

export type CreateAccountsCredentialsResponse = AccountCredentials;
export const CreateAccountsCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountCredentials;

export type CreateAccountsCredentialsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them. */
export const createAccountsCredentials: API.OperationMethod<
  CreateAccountsCredentialsRequest,
  CreateAccountsCredentialsResponse,
  CreateAccountsCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsCredentialsRequest,
  output: CreateAccountsCredentialsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProductstatusesRequest {
  /** The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: string[];
  /** The ID of the account that contains the products. This account cannot be a multi-client account. */
  merchantId: string;
}

export const ListProductstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    destinations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("destinations"),
    ),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/productstatuses" }),
    svc,
  ) as unknown as Schema.Schema<ListProductstatusesRequest>;

export type ListProductstatusesResponse = ProductstatusesListResponse;
export const ListProductstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductstatusesListResponse;

export type ListProductstatusesError = DefaultErrors | NotFound | Forbidden;

/** Lists the statuses of the products in your Merchant Center account. */
export const listProductstatuses: API.PaginatedOperationMethod<
  ListProductstatusesRequest,
  ListProductstatusesResponse,
  ListProductstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProductstatusesRequest,
  output: ListProductstatusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CustombatchProductstatusesRequest {
  /** Request body */
  body?: ProductstatusesCustomBatchRequest;
}

export const CustombatchProductstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ProductstatusesCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "productstatuses/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchProductstatusesRequest>;

export type CustombatchProductstatusesResponse =
  ProductstatusesCustomBatchResponse;
export const CustombatchProductstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductstatusesCustomBatchResponse;

export type CustombatchProductstatusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the statuses of multiple products in a single request. */
export const custombatchProductstatuses: API.OperationMethod<
  CustombatchProductstatusesRequest,
  CustombatchProductstatusesResponse,
  CustombatchProductstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchProductstatusesRequest,
  output: CustombatchProductstatusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProductstatusesRequest {
  /** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
  destinations?: string[];
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product. */
  productId: string;
}

export const GetProductstatusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("destinations"),
    ),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/productstatuses/{productId}" }),
    svc,
  ) as unknown as Schema.Schema<GetProductstatusesRequest>;

export type GetProductstatusesResponse = ProductStatus;
export const GetProductstatusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductStatus;

export type GetProductstatusesError = DefaultErrors | NotFound | Forbidden;

/** Gets the status of a product from your Merchant Center account. */
export const getProductstatuses: API.OperationMethod<
  GetProductstatusesRequest,
  GetProductstatusesResponse,
  GetProductstatusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProductstatusesRequest,
  output: GetProductstatusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertRegionalinventoryRequest {
  /** The ID of the account that contains the product. This account cannot be a multi-client account. */
  merchantId: string;
  /** The REST ID of the product for which to update the regional inventory. */
  productId: string;
  /** Request body */
  body?: RegionalInventory;
}

export const InsertRegionalinventoryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(RegionalInventory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/products/{productId}/regionalinventory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertRegionalinventoryRequest>;

export type InsertRegionalinventoryResponse = RegionalInventory;
export const InsertRegionalinventoryResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionalInventory;

export type InsertRegionalinventoryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry. */
export const insertRegionalinventory: API.OperationMethod<
  InsertRegionalinventoryRequest,
  InsertRegionalinventoryResponse,
  InsertRegionalinventoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRegionalinventoryRequest,
  output: InsertRegionalinventoryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchRegionalinventoryRequest {
  /** Request body */
  body?: RegionalinventoryCustomBatchRequest;
}

export const CustombatchRegionalinventoryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(RegionalinventoryCustomBatchRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "regionalinventory/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchRegionalinventoryRequest>;

export type CustombatchRegionalinventoryResponse =
  RegionalinventoryCustomBatchResponse;
export const CustombatchRegionalinventoryResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionalinventoryCustomBatchResponse;

export type CustombatchRegionalinventoryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates regional inventory for multiple products or regions in a single request. */
export const custombatchRegionalinventory: API.OperationMethod<
  CustombatchRegionalinventoryRequest,
  CustombatchRegionalinventoryResponse,
  CustombatchRegionalinventoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchRegionalinventoryRequest,
  output: CustombatchRegionalinventoryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchDatafeedsRequest {
  /** Request body */
  body?: DatafeedsCustomBatchRequest;
}

export const CustombatchDatafeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DatafeedsCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "datafeeds/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchDatafeedsRequest>;

export type CustombatchDatafeedsResponse = DatafeedsCustomBatchResponse;
export const CustombatchDatafeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedsCustomBatchResponse;

export type CustombatchDatafeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request. */
export const custombatchDatafeeds: API.OperationMethod<
  CustombatchDatafeedsRequest,
  CustombatchDatafeedsResponse,
  CustombatchDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchDatafeedsRequest,
  output: CustombatchDatafeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateDatafeedsRequest {
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
  /** The ID of the datafeed. */
  datafeedId: string;
  /** Request body */
  body?: Datafeed;
}

export const UpdateDatafeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    datafeedId: Schema.String.pipe(T.HttpPath("datafeedId")),
    body: Schema.optional(Datafeed).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "{merchantId}/datafeeds/{datafeedId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateDatafeedsRequest>;

export type UpdateDatafeedsResponse = Datafeed;
export const UpdateDatafeedsResponse = /*@__PURE__*/ /*#__PURE__*/ Datafeed;

export type UpdateDatafeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource. */
export const updateDatafeeds: API.OperationMethod<
  UpdateDatafeedsRequest,
  UpdateDatafeedsResponse,
  UpdateDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDatafeedsRequest,
  output: UpdateDatafeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertDatafeedsRequest {
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
  /** Request body */
  body?: Datafeed;
}

export const InsertDatafeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(Datafeed).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({ method: "POST", path: "{merchantId}/datafeeds", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertDatafeedsRequest>;

export type InsertDatafeedsResponse = Datafeed;
export const InsertDatafeedsResponse = /*@__PURE__*/ /*#__PURE__*/ Datafeed;

export type InsertDatafeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Registers a datafeed configuration with your Merchant Center account. */
export const insertDatafeeds: API.OperationMethod<
  InsertDatafeedsRequest,
  InsertDatafeedsResponse,
  InsertDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDatafeedsRequest,
  output: InsertDatafeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDatafeedsRequest {
  /** The maximum number of products to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the account that manages the datafeeds. This account cannot be a multi-client account. */
  merchantId: string;
}

export const ListDatafeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/datafeeds" }),
  svc,
) as unknown as Schema.Schema<ListDatafeedsRequest>;

export type ListDatafeedsResponse = DatafeedsListResponse;
export const ListDatafeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedsListResponse;

export type ListDatafeedsError = DefaultErrors | NotFound | Forbidden;

/** Lists the configurations for datafeeds in your Merchant Center account. */
export const listDatafeeds: API.PaginatedOperationMethod<
  ListDatafeedsRequest,
  ListDatafeedsResponse,
  ListDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDatafeedsRequest,
  output: ListDatafeedsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteDatafeedsRequest {
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
  /** The ID of the datafeed. */
  datafeedId: string;
}

export const DeleteDatafeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    datafeedId: Schema.String.pipe(T.HttpPath("datafeedId")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "{merchantId}/datafeeds/{datafeedId}" }),
  svc,
) as unknown as Schema.Schema<DeleteDatafeedsRequest>;

export interface DeleteDatafeedsResponse {}
export const DeleteDatafeedsResponse: Schema.Schema<DeleteDatafeedsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDatafeedsResponse>;

export type DeleteDatafeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a datafeed configuration from your Merchant Center account. */
export const deleteDatafeeds: API.OperationMethod<
  DeleteDatafeedsRequest,
  DeleteDatafeedsResponse,
  DeleteDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDatafeedsRequest,
  output: DeleteDatafeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchnowDatafeedsRequest {
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
  /** The ID of the datafeed to be fetched. */
  datafeedId: string;
}

export const FetchnowDatafeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    datafeedId: Schema.String.pipe(T.HttpPath("datafeedId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/datafeeds/{datafeedId}/fetchNow",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchnowDatafeedsRequest>;

export type FetchnowDatafeedsResponse = DatafeedsFetchNowResponse;
export const FetchnowDatafeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatafeedsFetchNowResponse;

export type FetchnowDatafeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data. */
export const fetchnowDatafeeds: API.OperationMethod<
  FetchnowDatafeedsRequest,
  FetchnowDatafeedsResponse,
  FetchnowDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchnowDatafeedsRequest,
  output: FetchnowDatafeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDatafeedsRequest {
  /** The ID of the account that manages the datafeed. This account cannot be a multi-client account. */
  merchantId: string;
  /** The ID of the datafeed. */
  datafeedId: string;
}

export const GetDatafeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  datafeedId: Schema.String.pipe(T.HttpPath("datafeedId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/datafeeds/{datafeedId}" }),
  svc,
) as unknown as Schema.Schema<GetDatafeedsRequest>;

export type GetDatafeedsResponse = Datafeed;
export const GetDatafeedsResponse = /*@__PURE__*/ /*#__PURE__*/ Datafeed;

export type GetDatafeedsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a datafeed configuration from your Merchant Center account. */
export const getDatafeeds: API.OperationMethod<
  GetDatafeedsRequest,
  GetDatafeedsResponse,
  GetDatafeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatafeedsRequest,
  output: GetDatafeedsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetCollectionsRequest {
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** Required. The REST ID of the collection. */
  collectionId: string;
}

export const GetCollectionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/collections/{collectionId}" }),
  svc,
) as unknown as Schema.Schema<GetCollectionsRequest>;

export type GetCollectionsResponse = Collection;
export const GetCollectionsResponse = /*@__PURE__*/ /*#__PURE__*/ Collection;

export type GetCollectionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a collection from your Merchant Center account. */
export const getCollections: API.OperationMethod<
  GetCollectionsRequest,
  GetCollectionsResponse,
  GetCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCollectionsRequest,
  output: GetCollectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateCollectionsRequest {
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** Request body */
  body?: Collection;
}

export const CreateCollectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    body: Schema.optional(Collection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "{merchantId}/collections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateCollectionsRequest>;

export type CreateCollectionsResponse = Collection;
export const CreateCollectionsResponse = /*@__PURE__*/ /*#__PURE__*/ Collection;

export type CreateCollectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request. */
export const createCollections: API.OperationMethod<
  CreateCollectionsRequest,
  CreateCollectionsResponse,
  CreateCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCollectionsRequest,
  output: CreateCollectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteCollectionsRequest {
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection. */
  collectionId: string;
}

export const DeleteCollectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "{merchantId}/collections/{collectionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteCollectionsRequest>;

export interface DeleteCollectionsResponse {}
export const DeleteCollectionsResponse: Schema.Schema<DeleteCollectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCollectionsResponse>;

export type DeleteCollectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a collection from your Merchant Center account. */
export const deleteCollections: API.OperationMethod<
  DeleteCollectionsRequest,
  DeleteCollectionsResponse,
  DeleteCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCollectionsRequest,
  output: DeleteCollectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCollectionsRequest {
  /** Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. */
  pageToken?: string;
  /** Required. The ID of the account that contains the collection. This account cannot be a multi-client account. */
  merchantId: string;
  /** The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListCollectionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  },
).pipe(
  T.Http({ method: "GET", path: "{merchantId}/collections" }),
  svc,
) as unknown as Schema.Schema<ListCollectionsRequest>;

export type ListCollectionsResponse_Op = ListCollectionsResponse;
export const ListCollectionsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListCollectionsResponse;

export type ListCollectionsError = DefaultErrors | NotFound | Forbidden;

/** Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested. */
export const listCollections: API.PaginatedOperationMethod<
  ListCollectionsRequest,
  ListCollectionsResponse_Op,
  ListCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCollectionsRequest,
  output: ListCollectionsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListCssesRequest {
  /** The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The CSS group ID of CSS domains to be listed. */
  cssGroupId: string;
  /** A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListCssesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  cssGroupId: Schema.String.pipe(T.HttpPath("cssGroupId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "{cssGroupId}/csses" }),
  svc,
) as unknown as Schema.Schema<ListCssesRequest>;

export type ListCssesResponse_Op = ListCssesResponse;
export const ListCssesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListCssesResponse;

export type ListCssesError = DefaultErrors | NotFound | Forbidden;

/** Lists CSS domains affiliated with a CSS group. */
export const listCsses: API.PaginatedOperationMethod<
  ListCssesRequest,
  ListCssesResponse_Op,
  ListCssesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCssesRequest,
  output: ListCssesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdatelabelsCssesRequest {
  /** Required. The ID of the updated CSS domain. */
  cssDomainId: string;
  /** Required. The CSS group ID of the updated CSS domain. */
  cssGroupId: string;
  /** Request body */
  body?: LabelIds;
}

export const UpdatelabelsCssesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cssDomainId: Schema.String.pipe(T.HttpPath("cssDomainId")),
    cssGroupId: Schema.String.pipe(T.HttpPath("cssGroupId")),
    body: Schema.optional(LabelIds).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{cssGroupId}/csses/{cssDomainId}/updatelabels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatelabelsCssesRequest>;

export type UpdatelabelsCssesResponse = Css;
export const UpdatelabelsCssesResponse = /*@__PURE__*/ /*#__PURE__*/ Css;

export type UpdatelabelsCssesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates labels that are assigned to a CSS domain by its CSS group. */
export const updatelabelsCsses: API.OperationMethod<
  UpdatelabelsCssesRequest,
  UpdatelabelsCssesResponse,
  UpdatelabelsCssesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatelabelsCssesRequest,
  output: UpdatelabelsCssesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCssesRequest {
  /** Required. The ID of the CSS domain to return. */
  cssDomainId: string;
  /** Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group. */
  cssGroupId: string;
}

export const GetCssesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cssDomainId: Schema.String.pipe(T.HttpPath("cssDomainId")),
  cssGroupId: Schema.String.pipe(T.HttpPath("cssGroupId")),
}).pipe(
  T.Http({ method: "GET", path: "{cssGroupId}/csses/{cssDomainId}" }),
  svc,
) as unknown as Schema.Schema<GetCssesRequest>;

export type GetCssesResponse = Css;
export const GetCssesResponse = /*@__PURE__*/ /*#__PURE__*/ Css;

export type GetCssesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a single CSS domain by ID. */
export const getCsses: API.OperationMethod<
  GetCssesRequest,
  GetCssesResponse,
  GetCssesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCssesRequest,
  output: GetCssesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetomnichannelexperienceLiasettingsRequest {
  /** The CLDR country code (for example, "US") for which the omnichannel experience is selected. */
  country?: string;
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`" */
  pickupTypes?: string[];
  /** The ID of the account for which to retrieve accessible Business Profiles. */
  accountId: string;
  /** The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here. */
  lsfType?: string;
}

export const SetomnichannelexperienceLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    pickupTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("pickupTypes"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    lsfType: Schema.optional(Schema.String).pipe(T.HttpQuery("lsfType")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/liasettings/{accountId}/setomnichannelexperience",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetomnichannelexperienceLiasettingsRequest>;

export type SetomnichannelexperienceLiasettingsResponse =
  LiaOmnichannelExperience;
export const SetomnichannelexperienceLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiaOmnichannelExperience;

export type SetomnichannelexperienceLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it. */
export const setomnichannelexperienceLiasettings: API.OperationMethod<
  SetomnichannelexperienceLiasettingsRequest,
  SetomnichannelexperienceLiasettingsResponse,
  SetomnichannelexperienceLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetomnichannelexperienceLiasettingsRequest,
  output: SetomnichannelexperienceLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetposdataproviderLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The account ID by which this merchant is known to the POS data provider. */
  posExternalAccountId?: string;
  /** The ID of the account for which to retrieve accessible Business Profiles. */
  accountId: string;
  /** The country for which the POS data provider is selected. */
  country: string;
  /** The ID of POS data provider. */
  posDataProviderId?: string;
}

export const SetposdataproviderLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    posExternalAccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("posExternalAccountId"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    country: Schema.String.pipe(T.HttpQuery("country")),
    posDataProviderId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("posDataProviderId"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/liasettings/{accountId}/setposdataprovider",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetposdataproviderLiasettingsRequest>;

export type SetposdataproviderLiasettingsResponse =
  LiasettingsSetPosDataProviderResponse;
export const SetposdataproviderLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsSetPosDataProviderResponse;

export type SetposdataproviderLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the POS data provider for the specified country. */
export const setposdataproviderLiasettings: API.OperationMethod<
  SetposdataproviderLiasettingsRequest,
  SetposdataproviderLiasettingsResponse,
  SetposdataproviderLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetposdataproviderLiasettingsRequest,
  output: SetposdataproviderLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CustombatchLiasettingsRequest {
  /** Request body */
  body?: LiasettingsCustomBatchRequest;
}

export const CustombatchLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(LiasettingsCustomBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "liasettings/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchLiasettingsRequest>;

export type CustombatchLiasettingsResponse = LiasettingsCustomBatchResponse;
export const CustombatchLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsCustomBatchResponse;

export type CustombatchLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves and/or updates the LIA settings of multiple accounts in a single request. */
export const custombatchLiasettings: API.OperationMethod<
  CustombatchLiasettingsRequest,
  CustombatchLiasettingsResponse,
  CustombatchLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchLiasettingsRequest,
  output: CustombatchLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListposdataprovidersLiasettingsRequest {}

export const ListposdataprovidersLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "liasettings/posdataproviders" }),
    svc,
  ) as unknown as Schema.Schema<ListposdataprovidersLiasettingsRequest>;

export type ListposdataprovidersLiasettingsResponse =
  LiasettingsListPosDataProvidersResponse;
export const ListposdataprovidersLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsListPosDataProvidersResponse;

export type ListposdataprovidersLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of POS data providers that have active settings for the all eiligible countries. */
export const listposdataprovidersLiasettings: API.OperationMethod<
  ListposdataprovidersLiasettingsRequest,
  ListposdataprovidersLiasettingsResponse,
  ListposdataprovidersLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListposdataprovidersLiasettingsRequest,
  output: ListposdataprovidersLiasettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestinventoryverificationLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The country for which inventory validation is requested. */
  country: string;
  /** The ID of the account that manages the order. This cannot be a multi-client account. */
  accountId: string;
}

export const RequestinventoryverificationLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    country: Schema.String.pipe(T.HttpPath("country")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestinventoryverificationLiasettingsRequest>;

export type RequestinventoryverificationLiasettingsResponse =
  LiasettingsRequestInventoryVerificationResponse;
export const RequestinventoryverificationLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsRequestInventoryVerificationResponse;

export type RequestinventoryverificationLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests inventory validation for the specified country. */
export const requestinventoryverificationLiasettings: API.OperationMethod<
  RequestinventoryverificationLiasettingsRequest,
  RequestinventoryverificationLiasettingsResponse,
  RequestinventoryverificationLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestinventoryverificationLiasettingsRequest,
  output: RequestinventoryverificationLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetinventoryverificationcontactLiasettingsRequest {
  /** The name of the inventory verification contact. */
  contactName: string;
  /** The ID of the account that manages the order. This cannot be a multi-client account. */
  accountId: string;
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The language for which inventory verification is requested. */
  language: string;
  /** The email of the inventory verification contact. */
  contactEmail: string;
  /** The country for which inventory verification is requested. */
  country: string;
}

export const SetinventoryverificationcontactLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contactName: Schema.String.pipe(T.HttpQuery("contactName")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    language: Schema.String.pipe(T.HttpQuery("language")),
    contactEmail: Schema.String.pipe(T.HttpQuery("contactEmail")),
    country: Schema.String.pipe(T.HttpQuery("country")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/liasettings/{accountId}/setinventoryverificationcontact",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetinventoryverificationcontactLiasettingsRequest>;

export type SetinventoryverificationcontactLiasettingsResponse =
  LiasettingsSetInventoryVerificationContactResponse;
export const SetinventoryverificationcontactLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsSetInventoryVerificationContactResponse;

export type SetinventoryverificationcontactLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the inventory verification contact for the specified country. */
export const setinventoryverificationcontactLiasettings: API.OperationMethod<
  SetinventoryverificationcontactLiasettingsRequest,
  SetinventoryverificationcontactLiasettingsResponse,
  SetinventoryverificationcontactLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetinventoryverificationcontactLiasettingsRequest,
  output: SetinventoryverificationcontactLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get or update LIA settings. */
  accountId: string;
  /** Request body */
  body?: LiaSettings;
}

export const UpdateLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(LiaSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "{merchantId}/liasettings/{accountId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLiasettingsRequest>;

export type UpdateLiasettingsResponse = LiaSettings;
export const UpdateLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiaSettings;

export type UpdateLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource. */
export const updateLiasettings: API.OperationMethod<
  UpdateLiasettingsRequest,
  UpdateLiasettingsResponse,
  UpdateLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLiasettingsRequest,
  output: UpdateLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetaccessiblegmbaccountsLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to retrieve accessible Business Profiles. */
  accountId: string;
}

export const GetaccessiblegmbaccountsLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/liasettings/{accountId}/accessiblegmbaccounts",
    }),
    svc,
  ) as unknown as Schema.Schema<GetaccessiblegmbaccountsLiasettingsRequest>;

export type GetaccessiblegmbaccountsLiasettingsResponse =
  LiasettingsGetAccessibleGmbAccountsResponse;
export const GetaccessiblegmbaccountsLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsGetAccessibleGmbAccountsResponse;

export type GetaccessiblegmbaccountsLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of accessible Business Profiles. */
export const getaccessiblegmbaccountsLiasettings: API.OperationMethod<
  GetaccessiblegmbaccountsLiasettingsRequest,
  GetaccessiblegmbaccountsLiasettingsResponse,
  GetaccessiblegmbaccountsLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetaccessiblegmbaccountsLiasettingsRequest,
  output: GetaccessiblegmbaccountsLiasettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLiasettingsRequest {
  /** The maximum number of LIA settings to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
}

export const ListLiasettingsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  },
).pipe(
  T.Http({ method: "GET", path: "{merchantId}/liasettings" }),
  svc,
) as unknown as Schema.Schema<ListLiasettingsRequest>;

export type ListLiasettingsResponse = LiasettingsListResponse;
export const ListLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsListResponse;

export type ListLiasettingsError = DefaultErrors | NotFound | Forbidden;

/** Lists the LIA settings of the sub-accounts in your Merchant Center account. */
export const listLiasettings: API.PaginatedOperationMethod<
  ListLiasettingsRequest,
  ListLiasettingsResponse,
  ListLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLiasettingsRequest,
  output: ListLiasettingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get or update LIA settings. */
  accountId: string;
}

export const GetLiasettingsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
}).pipe(
  T.Http({ method: "GET", path: "{merchantId}/liasettings/{accountId}" }),
  svc,
) as unknown as Schema.Schema<GetLiasettingsRequest>;

export type GetLiasettingsResponse = LiaSettings;
export const GetLiasettingsResponse = /*@__PURE__*/ /*#__PURE__*/ LiaSettings;

export type GetLiasettingsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the LIA settings of the account. */
export const getLiasettings: API.OperationMethod<
  GetLiasettingsRequest,
  GetLiasettingsResponse,
  GetLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLiasettingsRequest,
  output: GetLiasettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestgmbaccessLiasettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The email of the Business Profile. */
  gmbEmail: string;
  /** The ID of the account for which Business Profile access is requested. */
  accountId: string;
}

export const RequestgmbaccessLiasettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    gmbEmail: Schema.String.pipe(T.HttpQuery("gmbEmail")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "{merchantId}/liasettings/{accountId}/requestgmbaccess",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestgmbaccessLiasettingsRequest>;

export type RequestgmbaccessLiasettingsResponse =
  LiasettingsRequestGmbAccessResponse;
export const RequestgmbaccessLiasettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiasettingsRequestGmbAccessResponse;

export type RequestgmbaccessLiasettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests access to a specified Business Profile. */
export const requestgmbaccessLiasettings: API.OperationMethod<
  RequestgmbaccessLiasettingsRequest,
  RequestgmbaccessLiasettingsResponse,
  RequestgmbaccessLiasettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestgmbaccessLiasettingsRequest,
  output: RequestgmbaccessLiasettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetsupportedpickupservicesShippingsettingsRequest {
  /** The ID of the account for which to retrieve the supported pickup services. */
  merchantId: string;
}

export const GetsupportedpickupservicesShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/supportedPickupServices" }),
    svc,
  ) as unknown as Schema.Schema<GetsupportedpickupservicesShippingsettingsRequest>;

export type GetsupportedpickupservicesShippingsettingsResponse =
  ShippingsettingsGetSupportedPickupServicesResponse;
export const GetsupportedpickupservicesShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingsettingsGetSupportedPickupServicesResponse;

export type GetsupportedpickupservicesShippingsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves supported pickup services for an account. */
export const getsupportedpickupservicesShippingsettings: API.OperationMethod<
  GetsupportedpickupservicesShippingsettingsRequest,
  GetsupportedpickupservicesShippingsettingsResponse,
  GetsupportedpickupservicesShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetsupportedpickupservicesShippingsettingsRequest,
  output: GetsupportedpickupservicesShippingsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CustombatchShippingsettingsRequest {
  /** Request body */
  body?: ShippingsettingsCustomBatchRequest;
}

export const CustombatchShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ShippingsettingsCustomBatchRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "shippingsettings/batch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CustombatchShippingsettingsRequest>;

export type CustombatchShippingsettingsResponse =
  ShippingsettingsCustomBatchResponse;
export const CustombatchShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingsettingsCustomBatchResponse;

export type CustombatchShippingsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves and updates the shipping settings of multiple accounts in a single request. */
export const custombatchShippingsettings: API.OperationMethod<
  CustombatchShippingsettingsRequest,
  CustombatchShippingsettingsResponse,
  CustombatchShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CustombatchShippingsettingsRequest,
  output: CustombatchShippingsettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateShippingsettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get/update shipping settings. */
  accountId: string;
  /** Request body */
  body?: ShippingSettings;
}

export const UpdateShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(ShippingSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "{merchantId}/shippingsettings/{accountId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateShippingsettingsRequest>;

export type UpdateShippingsettingsResponse = ShippingSettings;
export const UpdateShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingSettings;

export type UpdateShippingsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource. */
export const updateShippingsettings: API.OperationMethod<
  UpdateShippingsettingsRequest,
  UpdateShippingsettingsResponse,
  UpdateShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateShippingsettingsRequest,
  output: UpdateShippingsettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetsupportedcarriersShippingsettingsRequest {
  /** The ID of the account for which to retrieve the supported carriers. */
  merchantId: string;
}

export const GetsupportedcarriersShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/supportedCarriers" }),
    svc,
  ) as unknown as Schema.Schema<GetsupportedcarriersShippingsettingsRequest>;

export type GetsupportedcarriersShippingsettingsResponse =
  ShippingsettingsGetSupportedCarriersResponse;
export const GetsupportedcarriersShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingsettingsGetSupportedCarriersResponse;

export type GetsupportedcarriersShippingsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves supported carriers and carrier services for an account. */
export const getsupportedcarriersShippingsettings: API.OperationMethod<
  GetsupportedcarriersShippingsettingsRequest,
  GetsupportedcarriersShippingsettingsResponse,
  GetsupportedcarriersShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetsupportedcarriersShippingsettingsRequest,
  output: GetsupportedcarriersShippingsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetShippingsettingsRequest {
  /** The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. */
  merchantId: string;
  /** The ID of the account for which to get/update shipping settings. */
  accountId: string;
}

export const GetShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "{merchantId}/shippingsettings/{accountId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetShippingsettingsRequest>;

export type GetShippingsettingsResponse = ShippingSettings;
export const GetShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingSettings;

export type GetShippingsettingsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the shipping settings of the account. */
export const getShippingsettings: API.OperationMethod<
  GetShippingsettingsRequest,
  GetShippingsettingsResponse,
  GetShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetShippingsettingsRequest,
  output: GetShippingsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetsupportedholidaysShippingsettingsRequest {
  /** The ID of the account for which to retrieve the supported holidays. */
  merchantId: string;
}

export const GetsupportedholidaysShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/supportedHolidays" }),
    svc,
  ) as unknown as Schema.Schema<GetsupportedholidaysShippingsettingsRequest>;

export type GetsupportedholidaysShippingsettingsResponse =
  ShippingsettingsGetSupportedHolidaysResponse;
export const GetsupportedholidaysShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingsettingsGetSupportedHolidaysResponse;

export type GetsupportedholidaysShippingsettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves supported holidays for an account. */
export const getsupportedholidaysShippingsettings: API.OperationMethod<
  GetsupportedholidaysShippingsettingsRequest,
  GetsupportedholidaysShippingsettingsResponse,
  GetsupportedholidaysShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetsupportedholidaysShippingsettingsRequest,
  output: GetsupportedholidaysShippingsettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListShippingsettingsRequest {
  /** The maximum number of shipping settings to return in the response, used for paging. */
  maxResults?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The ID of the managing account. This must be a multi-client account. */
  merchantId: string;
}

export const ListShippingsettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    merchantId: Schema.String.pipe(T.HttpPath("merchantId")),
  }).pipe(
    T.Http({ method: "GET", path: "{merchantId}/shippingsettings" }),
    svc,
  ) as unknown as Schema.Schema<ListShippingsettingsRequest>;

export type ListShippingsettingsResponse = ShippingsettingsListResponse;
export const ListShippingsettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShippingsettingsListResponse;

export type ListShippingsettingsError = DefaultErrors | NotFound | Forbidden;

/** Lists the shipping settings of the sub-accounts in your Merchant Center account. */
export const listShippingsettings: API.PaginatedOperationMethod<
  ListShippingsettingsRequest,
  ListShippingsettingsResponse,
  ListShippingsettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListShippingsettingsRequest,
  output: ListShippingsettingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
