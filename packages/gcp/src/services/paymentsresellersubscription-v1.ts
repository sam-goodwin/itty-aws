// ==========================================================================
// Payments Reseller Subscription API (paymentsresellersubscription v1)
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
  name: "paymentsresellersubscription",
  version: "v1",
  rootUrl: "https://paymentsresellersubscription.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Amount {
  /** Required. Amount in micros (1_000_000 micros = 1 currency unit) */
  amountMicros?: string;
  /** Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD. */
  currencyCode?: string;
}

export const Amount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amountMicros: Schema.optional(Schema.String),
  currencyCode: Schema.optional(Schema.String),
}).annotate({ identifier: "Amount" });

export interface ProductPriceConfig {
  /** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
  regionCode?: string;
  /** Output only. The price in the region. */
  amount?: Amount;
}

export const ProductPriceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regionCode: Schema.optional(Schema.String),
  amount: Schema.optional(Amount),
}).annotate({ identifier: "ProductPriceConfig" });

export interface ProductBundleDetailsBundleElement {
  /** Required. Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
  product?: string;
}

export const ProductBundleDetailsBundleElement =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductBundleDetailsBundleElement" });

export interface ProductBundleDetails {
  /** The entitlement mode of the bundle product. */
  entitlementMode?:
    | "ENTITLEMENT_MODE_UNSPECIFIED"
    | "ENTITLEMENT_MODE_FULL"
    | "ENTITLEMENT_MODE_INCREMENTAL"
    | (string & {});
  /** The individual products that are included in the bundle. */
  bundleElements?: ReadonlyArray<ProductBundleDetailsBundleElement>;
}

export const ProductBundleDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entitlementMode: Schema.optional(Schema.String),
  bundleElements: Schema.optional(
    Schema.Array(ProductBundleDetailsBundleElement),
  ),
}).annotate({ identifier: "ProductBundleDetails" });

export interface SubscriptionUpgradeDowngradeDetails {
  /** Required. The previous subscription id to be replaced. The format can be one of the following: 1. `subscription_id`: the old subscription id under the same partner_id. 2. `partners/{partner_id}/subscriptions/{subscription_id}`. A different partner_id is allowed. But they must be under the same partner group. */
  previousSubscriptionId?: string;
  /** Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription. */
  billingCycleSpec?:
    | "BILLING_CYCLE_SPEC_UNSPECIFIED"
    | "BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION"
    | "BILLING_CYCLE_SPEC_START_IMMEDIATELY"
    | "BILLING_CYCLE_SPEC_DEFERRED_TO_NEXT_RECURRENCE"
    | (string & {});
}

export const SubscriptionUpgradeDowngradeDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousSubscriptionId: Schema.optional(Schema.String),
    billingCycleSpec: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionUpgradeDowngradeDetails" });

export interface GoogleTypeLocalizedText {
  /** Localized string in the language corresponding to language_code below. */
  text?: string;
  /** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleTypeLocalizedText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeLocalizedText" });

export interface Duration {
  /** The unit used for the duration */
  unit?: "UNIT_UNSPECIFIED" | "MONTH" | "DAY" | "HOUR" | (string & {});
  /** number of duration units to be included. */
  count?: number;
}

export const Duration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unit: Schema.optional(Schema.String),
  count: Schema.optional(Schema.Number),
}).annotate({ identifier: "Duration" });

export interface PromotionIntroductoryPricingDetailsIntroductoryPricingSpec {
  /** Output only. The discount percentage in micros. For example, 50,000 represents 5%. */
  discountRatioMicros?: string;
  /** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
  regionCode?: string;
  /** Output only. The duration of an introductory offer in billing cycles. */
  recurrenceCount?: number;
  /** Output only. The discount amount. The value is positive. */
  discountAmount?: Amount;
}

export const PromotionIntroductoryPricingDetailsIntroductoryPricingSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discountRatioMicros: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    recurrenceCount: Schema.optional(Schema.Number),
    discountAmount: Schema.optional(Amount),
  }).annotate({
    identifier: "PromotionIntroductoryPricingDetailsIntroductoryPricingSpec",
  });

export interface PromotionIntroductoryPricingDetails {
  /** Output only. Specifies the introductory pricing periods. */
  introductoryPricingSpecs?: ReadonlyArray<PromotionIntroductoryPricingDetailsIntroductoryPricingSpec>;
}

export const PromotionIntroductoryPricingDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    introductoryPricingSpecs: Schema.optional(
      Schema.Array(PromotionIntroductoryPricingDetailsIntroductoryPricingSpec),
    ),
  }).annotate({ identifier: "PromotionIntroductoryPricingDetails" });

export interface SubscriptionPromotionSpec {
  /** Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'. */
  promotion?: string;
  /** Output only. The duration of the free trial if the promotion is of type FREE_TRIAL. */
  freeTrialDuration?: Duration;
  /** Output only. The type of the promotion for the spec. */
  type?:
    | "PROMOTION_TYPE_UNSPECIFIED"
    | "PROMOTION_TYPE_FREE_TRIAL"
    | "PROMOTION_TYPE_INTRODUCTORY_PRICING"
    | (string & {});
  /** Output only. The details of the introductory pricing spec if the promotion is of type INTRODUCTORY_PRICING. */
  introductoryPricingDetails?: PromotionIntroductoryPricingDetails;
}

export const SubscriptionPromotionSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotion: Schema.optional(Schema.String),
    freeTrialDuration: Schema.optional(Duration),
    type: Schema.optional(Schema.String),
    introductoryPricingDetails: Schema.optional(
      PromotionIntroductoryPricingDetails,
    ),
  }).annotate({ identifier: "SubscriptionPromotionSpec" });

export interface ServicePeriod {
  /** Required. The start time of the service period. Time is inclusive. */
  startTime?: string;
  /** Optional. The end time of the service period. Time is exclusive. */
  endTime?: string;
}

export const ServicePeriod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "ServicePeriod" });

export interface SubscriptionLineItemOneTimeRecurrenceDetails {
  /** Output only. The service period of the ONE_TIME line item. */
  servicePeriod?: ServicePeriod;
}

export const SubscriptionLineItemOneTimeRecurrenceDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicePeriod: Schema.optional(ServicePeriod),
  }).annotate({ identifier: "SubscriptionLineItemOneTimeRecurrenceDetails" });

export interface SubscriptionLineItemBundleDetailsBundleElementDetails {
  /** Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
  product?: string;
  /** Output only. The time when this product is linked to an end user. */
  userAccountLinkedTime?: string;
}

export const SubscriptionLineItemBundleDetailsBundleElementDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Schema.String),
    userAccountLinkedTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SubscriptionLineItemBundleDetailsBundleElementDetails",
  });

export interface SubscriptionLineItemBundleDetails {
  /** Output only. The details for each element in the hard bundle. */
  bundleElementDetails?: ReadonlyArray<SubscriptionLineItemBundleDetailsBundleElementDetails>;
}

export const SubscriptionLineItemBundleDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bundleElementDetails: Schema.optional(
      Schema.Array(SubscriptionLineItemBundleDetailsBundleElementDetails),
    ),
  }).annotate({ identifier: "SubscriptionLineItemBundleDetails" });

export interface GoogleOnePayload {
  /** The type of offering the subscription was sold by the partner. e.g. VAS. */
  offering?:
    | "OFFERING_UNSPECIFIED"
    | "OFFERING_VAS_BUNDLE"
    | "OFFERING_VAS_STANDALONE"
    | "OFFERING_HARD_BUNDLE"
    | "OFFERING_SOFT_BUNDLE"
    | (string & {});
  /** Campaign attributed to sales of this subscription. */
  campaigns?: ReadonlyArray<string>;
  /** The type of sales channel through which the subscription was sold. */
  salesChannel?:
    | "CHANNEL_UNSPECIFIED"
    | "CHANNEL_RETAIL"
    | "CHANNEL_ONLINE_WEB"
    | "CHANNEL_ONLINE_ANDROID_APP"
    | "CHANNEL_ONLINE_IOS_APP"
    | (string & {});
  /** The identifier for the partner store where the subscription was sold. */
  storeId?: string;
}

export const GoogleOnePayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offering: Schema.optional(Schema.String),
  campaigns: Schema.optional(Schema.Array(Schema.String)),
  salesChannel: Schema.optional(Schema.String),
  storeId: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleOnePayload" });

export interface GoogleHomePayload {
  /** Output only. This identifies whether the subscription is attached to a Google Home structure. */
  attachedToGoogleStructure?: boolean;
  /** Optional. Structure identifier on Google side. */
  googleStructureId?: string;
  /** Optional. This identifies the structure ID on partner side that the subscription should be applied to. Only required when the partner requires structure mapping. */
  partnerStructureId?: string;
}

export const GoogleHomePayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  attachedToGoogleStructure: Schema.optional(Schema.Boolean),
  googleStructureId: Schema.optional(Schema.String),
  partnerStructureId: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleHomePayload" });

export interface YoutubePayload {
  /** Output only. The access expiration time for this line item. */
  accessEndTime?: string;
  /** Optional. Specifies the plan type offered to the end user by the partner. */
  partnerPlanType?:
    | "PARTNER_PLAN_TYPE_UNSPECIFIED"
    | "PARTNER_PLAN_TYPE_STANDALONE"
    | "PARTNER_PLAN_TYPE_HARD_BUNDLE"
    | "PARTNER_PLAN_TYPE_SOFT_BUNDLE"
    | (string & {});
  /** The list of eligibility_ids which are applicable for the line item. */
  partnerEligibilityIds?: ReadonlyArray<string>;
}

export const YoutubePayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accessEndTime: Schema.optional(Schema.String),
  partnerPlanType: Schema.optional(Schema.String),
  partnerEligibilityIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "YoutubePayload" });

export interface ProductPayload {
  /** Product-specific payloads. Payload specific to Google One products. */
  googleOnePayload?: GoogleOnePayload;
  /** Payload specific to Google Home products. */
  googleHomePayload?: GoogleHomePayload;
  /** Payload specific to Youtube products. */
  youtubePayload?: YoutubePayload;
}

export const ProductPayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleOnePayload: Schema.optional(GoogleOnePayload),
  googleHomePayload: Schema.optional(GoogleHomePayload),
  youtubePayload: Schema.optional(YoutubePayload),
}).annotate({ identifier: "ProductPayload" });

export interface FiniteBillingCycleDetails {
  /** The number of a subscription line item billing cycles after which billing will stop automatically. */
  billingCycleCountLimit?: string;
}

export const FiniteBillingCycleDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingCycleCountLimit: Schema.optional(Schema.String),
  }).annotate({ identifier: "FiniteBillingCycleDetails" });

export interface SubscriptionLineItem {
  /** Optional. The promotions applied on the line item. It can be: - an introductory pricing promotion. - a free trial promotion. This feature is not enabled. If used, the request will be rejected. When used as input in Create or Provision API, specify its resource name only. */
  lineItemPromotionSpecs?: ReadonlyArray<SubscriptionPromotionSpec>;
  /** Output only. The recurrence type of the line item. */
  recurrenceType?:
    | "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED"
    | "LINE_ITEM_RECURRENCE_TYPE_PERIODIC"
    | "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
    | (string & {});
  /** Output only. Details only set for a ONE_TIME recurrence line item. */
  oneTimeRecurrenceDetails?: SubscriptionLineItemOneTimeRecurrenceDetails;
  /** Identifier. Resource name of the line item. Format: partners/{partner}/subscriptions/{subscription}/lineItems/{lineItem} */
  name?: string;
  /** Output only. The state of the line item. */
  state?:
    | "LINE_ITEM_STATE_UNSPECIFIED"
    | "LINE_ITEM_STATE_ACTIVE"
    | "LINE_ITEM_STATE_INACTIVE"
    | "LINE_ITEM_STATE_NEW"
    | "LINE_ITEM_STATE_ACTIVATING"
    | "LINE_ITEM_STATE_DEACTIVATING"
    | "LINE_ITEM_STATE_WAITING_TO_DEACTIVATE"
    | "LINE_ITEM_STATE_OFF_CYCLE_CHARGING"
    | (string & {});
  /** Output only. The bundle details for the line item. Only populated if the line item corresponds to a hard bundle. */
  bundleDetails?: SubscriptionLineItemBundleDetails;
  /** Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
  lineItemFreeTrialEndTime?: string;
  /** Output only. Description of this line item. */
  description?: string;
  /** Output only. A unique index of the subscription line item. */
  lineItemIndex?: number;
  /** Optional. Product specific payload for this line item. */
  productPayload?: ProductPayload;
  /** Optional. Details for a subscription line item with finite billing cycles. If unset, the line item will be charged indefinitely. Used only with LINE_ITEM_RECURRENCE_TYPE_PERIODIC. */
  finiteBillingCycleDetails?: FiniteBillingCycleDetails;
  /** Output only. The price of the product/service in this line item. The amount could be the wholesale price, or it can include a cost of sale based on the contract. */
  amount?: Amount;
  /** Required. Product resource name that identifies the product associated with this line item. The format is 'partners/{partner_id}/products/{product_id}'. */
  product?: string;
}

export const SubscriptionLineItem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lineItemPromotionSpecs: Schema.optional(
    Schema.Array(SubscriptionPromotionSpec),
  ),
  recurrenceType: Schema.optional(Schema.String),
  oneTimeRecurrenceDetails: Schema.optional(
    SubscriptionLineItemOneTimeRecurrenceDetails,
  ),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  bundleDetails: Schema.optional(SubscriptionLineItemBundleDetails),
  lineItemFreeTrialEndTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  lineItemIndex: Schema.optional(Schema.Number),
  productPayload: Schema.optional(ProductPayload),
  finiteBillingCycleDetails: Schema.optional(FiniteBillingCycleDetails),
  amount: Schema.optional(Amount),
  product: Schema.optional(Schema.String),
}).annotate({ identifier: "SubscriptionLineItem" });

export interface SubscriptionMigrationDetails {
  /** Output only. The migrated subscription id in the legacy system. */
  migratedSubscriptionId?: string;
}

export const SubscriptionMigrationDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratedSubscriptionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionMigrationDetails" });

export interface SubscriptionCancellationDetails {
  /** Output only. The reason of the cancellation. */
  reason?:
    | "CANCELLATION_REASON_UNSPECIFIED"
    | "CANCELLATION_REASON_FRAUD"
    | "CANCELLATION_REASON_REMORSE"
    | "CANCELLATION_REASON_ACCIDENTAL_PURCHASE"
    | "CANCELLATION_REASON_PAST_DUE"
    | "CANCELLATION_REASON_ACCOUNT_CLOSED"
    | "CANCELLATION_REASON_UPGRADE_DOWNGRADE"
    | "CANCELLATION_REASON_USER_DELINQUENCY"
    | "CANCELLATION_REASON_SYSTEM_ERROR"
    | "CANCELLATION_REASON_SYSTEM_CANCEL"
    | "CANCELLATION_REASON_BILLING_SYSTEM_SWITCH"
    | "CANCELLATION_REASON_OTHER"
    | (string & {});
}

export const SubscriptionCancellationDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionCancellationDetails" });

export interface Location {
  /** The postal code this location refers to. Ex. "94043" */
  postalCode?: string;
  /** 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 */
  regionCode?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postalCode: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface Subscription {
  /** Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum. */
  partnerUserToken?: string;
  /** Required. The line items of the subscription. */
  lineItems?: ReadonlyArray<SubscriptionLineItem>;
  /** Optional. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'. */
  products?: ReadonlyArray<string>;
  /** Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input. */
  promotionSpecs?: ReadonlyArray<SubscriptionPromotionSpec>;
  /** Output only. System generated timestamp when the subscription is created. UTC timezone. */
  createTime?: string;
  /** Output only. Describes the details of the migrated subscription. Only populated if this subscription is migrated from another system. */
  migrationDetails?: SubscriptionMigrationDetails;
  /** Output only. Describes the details of a cancelled subscription. Only applicable to subscription of state `STATE_CANCELLED`. */
  cancellationDetails?: SubscriptionCancellationDetails;
  /** Output only. System generated timestamp when the subscription is most recently updated. UTC timezone. */
  updateTime?: string;
  /** Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty. */
  redirectUri?: string;
  /** Required. The location that the service is provided as indicated by the partner. */
  serviceLocation?: Location;
  /** Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription. */
  upgradeDowngradeDetails?: SubscriptionUpgradeDowngradeDetails;
  /** Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
  processingState?:
    | "PROCESSING_STATE_UNSPECIFIED"
    | "PROCESSING_STATE_CANCELLING"
    | "PROCESSING_STATE_RECURRING"
    | "PROCESSING_STATE_RESUMING"
    | (string & {});
  /** Identifier. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only. */
  name?: string;
  /** Optional. The timestamp when the user transaction was made with the Partner. Specify for the case of "bundle with choice", and it must be before the provision_time (when the user makes a selection). */
  purchaseTime?: string;
  /** Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z" */
  cycleEndTime?: string;
  /** Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_CREATED"
    | "STATE_ACTIVE"
    | "STATE_CANCELLED"
    | "STATE_IN_GRACE_PERIOD"
    | "STATE_CANCEL_AT_END_OF_CYCLE"
    | "STATE_SUSPENDED"
    | (string & {});
  /** Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
  freeTrialEndTime?: string;
  /** Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'. */
  promotions?: ReadonlyArray<string>;
  /** Output only. Indicates if the subscription is entitled to the end user. */
  endUserEntitled?: boolean;
  /** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
  renewalTime?: string;
}

export const Subscription = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partnerUserToken: Schema.optional(Schema.String),
  lineItems: Schema.optional(Schema.Array(SubscriptionLineItem)),
  products: Schema.optional(Schema.Array(Schema.String)),
  promotionSpecs: Schema.optional(Schema.Array(SubscriptionPromotionSpec)),
  createTime: Schema.optional(Schema.String),
  migrationDetails: Schema.optional(SubscriptionMigrationDetails),
  cancellationDetails: Schema.optional(SubscriptionCancellationDetails),
  updateTime: Schema.optional(Schema.String),
  redirectUri: Schema.optional(Schema.String),
  serviceLocation: Schema.optional(Location),
  upgradeDowngradeDetails: Schema.optional(SubscriptionUpgradeDowngradeDetails),
  processingState: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  purchaseTime: Schema.optional(Schema.String),
  cycleEndTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  freeTrialEndTime: Schema.optional(Schema.String),
  promotions: Schema.optional(Schema.Array(Schema.String)),
  endUserEntitled: Schema.optional(Schema.Boolean),
  renewalTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Subscription" });

export interface CycleOptions {
  /** Optional. The duration of the initial cycle. Only `DAY` is supported. If set, Google will start the subscription with this initial cycle duration starting at the request time (see available methods below). A prorated charge will be applied. This option is available to the following methods: - partners.subscriptions.provision - partners.subscriptions.resume - partners.userSessions.generate */
  initialCycleDuration?: Duration;
}

export const CycleOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialCycleDuration: Schema.optional(Duration),
}).annotate({ identifier: "CycleOptions" });

export interface CreateSubscriptionIntent {
  /** Required. The parent resource name, which is the identifier of the partner. */
  parent?: string;
  /** Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. */
  subscriptionId?: string;
  /** Required. The Subscription to be created. */
  subscription?: Subscription;
  /** Optional. The cycle options for the subscription. */
  cycleOptions?: CycleOptions;
}

export const CreateSubscriptionIntent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
    subscription: Schema.optional(Subscription),
    cycleOptions: Schema.optional(CycleOptions),
  }).annotate({ identifier: "CreateSubscriptionIntent" });

export interface IntentPayloadIntentOptions {
  /** Optional. If true, Google may use a different product and promotion id from the ones in the `create_intent` based on the user's eligibility. Only applicable for certain YouTube free trial offers. */
  enableOfferOverride?: boolean;
}

export const IntentPayloadIntentOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableOfferOverride: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IntentPayloadIntentOptions" });

export interface EntitleSubscriptionIntent {
  /** Required. The name of the subscription resource that is entitled to the current end user. It is in the format of "partners/{partner_id}/subscriptions/{subscriptionId}". */
  name?: string;
}

export const EntitleSubscriptionIntent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntitleSubscriptionIntent" });

export interface IntentPayload {
  /** The request to create a subscription. */
  createIntent?: CreateSubscriptionIntent;
  /** Optional. The additional features for the intent. */
  intentOptions?: IntentPayloadIntentOptions;
  /** The request to entitle a subscription. */
  entitleIntent?: EntitleSubscriptionIntent;
}

export const IntentPayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createIntent: Schema.optional(CreateSubscriptionIntent),
  intentOptions: Schema.optional(IntentPayloadIntentOptions),
  entitleIntent: Schema.optional(EntitleSubscriptionIntent),
}).annotate({ identifier: "IntentPayload" });

export interface UndoCancelSubscriptionResponse {
  /** The updated subscription resource. */
  subscription?: Subscription;
}

export const UndoCancelSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
  }).annotate({ identifier: "UndoCancelSubscriptionResponse" });

export interface GenerateUserSessionRequest {
  /** The user intent to generate the user session. */
  intentPayload?: IntentPayload;
}

export const GenerateUserSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentPayload: Schema.optional(IntentPayload),
  }).annotate({ identifier: "GenerateUserSessionRequest" });

export interface Product {
  /** Output only. Specifies the details for a bundle product. */
  bundleDetails?: ProductBundleDetails;
  /** Output only. Specifies the length of the billing cycle of the subscription. */
  subscriptionBillingCycleDuration?: Duration;
  /** Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refer to: https://en.wikipedia.org/wiki/ISO_3166-1 */
  regionCodes?: ReadonlyArray<string>;
  /** Output only. Specifies the type of the product. */
  productType?:
    | "PRODUCT_TYPE_UNSPECIFIED"
    | "PRODUCT_TYPE_SUBSCRIPTION"
    | "PRODUCT_TYPE_BUNDLE_SUBSCRIPTION"
    | (string & {});
  /** Identifier. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}" */
  name?: string;
  /** Output only. Localized human readable name of the product. */
  titles?: ReadonlyArray<GoogleTypeLocalizedText>;
  /** Optional. Details for a subscription line item with finite billing cycles. If unset, the line item will be charged indefinitely. */
  finiteBillingCycleDetails?: FiniteBillingCycleDetails;
  /** Output only. Price configs for the product in the available regions. */
  priceConfigs?: ReadonlyArray<ProductPriceConfig>;
}

export const Product = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleDetails: Schema.optional(ProductBundleDetails),
  subscriptionBillingCycleDuration: Schema.optional(Duration),
  regionCodes: Schema.optional(Schema.Array(Schema.String)),
  productType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  titles: Schema.optional(Schema.Array(GoogleTypeLocalizedText)),
  finiteBillingCycleDetails: Schema.optional(FiniteBillingCycleDetails),
  priceConfigs: Schema.optional(Schema.Array(ProductPriceConfig)),
}).annotate({ identifier: "Product" });

export interface CancelSubscriptionResponse {
  /** The cancelled subscription resource. */
  subscription?: Subscription;
}

export const CancelSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
  }).annotate({ identifier: "CancelSubscriptionResponse" });

export interface Promotion {
  /** Optional. Specifies the start time (inclusive) of the period that the promotion is available in. */
  startTime?: string;
  /** Output only. Specifies the type of the promotion. */
  promotionType?:
    | "PROMOTION_TYPE_UNSPECIFIED"
    | "PROMOTION_TYPE_FREE_TRIAL"
    | "PROMOTION_TYPE_INTRODUCTORY_PRICING"
    | (string & {});
  /** Optional. Specifies the duration of the free trial of the subscription when promotion_type is PROMOTION_TYPE_FREE_TRIAL */
  freeTrialDuration?: Duration;
  /** Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely. */
  endTime?: string;
  /** Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refer to: https://en.wikipedia.org/wiki/ISO_3166-1 */
  regionCodes?: ReadonlyArray<string>;
  /** Identifier. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}" */
  name?: string;
  /** Output only. The product ids this promotion can be applied to. */
  applicableProducts?: ReadonlyArray<string>;
  /** Optional. Specifies the introductory pricing details when the promotion_type is PROMOTION_TYPE_INTRODUCTORY_PRICING. */
  introductoryPricingDetails?: PromotionIntroductoryPricingDetails;
  /** Output only. Localized human readable name of the promotion. */
  titles?: ReadonlyArray<GoogleTypeLocalizedText>;
}

export const Promotion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  promotionType: Schema.optional(Schema.String),
  freeTrialDuration: Schema.optional(Duration),
  endTime: Schema.optional(Schema.String),
  regionCodes: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  applicableProducts: Schema.optional(Schema.Array(Schema.String)),
  introductoryPricingDetails: Schema.optional(
    PromotionIntroductoryPricingDetails,
  ),
  titles: Schema.optional(Schema.Array(GoogleTypeLocalizedText)),
}).annotate({ identifier: "Promotion" });

export interface FindEligiblePromotionsResponse {
  /** The promotions for the current user. */
  promotions?: ReadonlyArray<Promotion>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FindEligiblePromotionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotions: Schema.optional(Schema.Array(Promotion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindEligiblePromotionsResponse" });

export interface Extension {
  /** Required. Specifies the period of access the subscription should grant. */
  duration?: Duration;
  /** Required. Identifier of the end-user in partner’s system. */
  partnerUserToken?: string;
}

export const Extension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  duration: Schema.optional(Duration),
  partnerUserToken: Schema.optional(Schema.String),
}).annotate({ identifier: "Extension" });

export interface ExtendSubscriptionRequest {
  /** Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. */
  requestId?: string;
  /** Required. Specifies details of the extension. Currently, the duration of the extension must be exactly one billing cycle of the original subscription. */
  extension?: Extension;
}

export const ExtendSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    extension: Schema.optional(Extension),
  }).annotate({ identifier: "ExtendSubscriptionRequest" });

export interface FindEligiblePromotionsRequest {
  /** Optional. A page token, received from a previous `FindEligiblePromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FindEligiblePromotions` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` */
  filter?: string;
  /** Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 promotions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const FindEligiblePromotionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FindEligiblePromotionsRequest" });

export interface UserSession {
  /** Output only. The time at which the user session expires. */
  expireTime?: string;
  /** Output only. The encrypted token of the user session, including the information of the user's intent and request. This token should be provided when redirecting the user to Google. */
  token?: string;
}

export const UserSession = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expireTime: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
}).annotate({ identifier: "UserSession" });

export interface ResumeSubscriptionResponse {
  /** The resumed subscription resource. */
  subscription?: Subscription;
}

export const ResumeSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
  }).annotate({ identifier: "ResumeSubscriptionResponse" });

export interface EntitleSubscriptionRequestLineItemEntitlementDetails {
  /** Required. The index of the line item to be entitled. */
  lineItemIndex?: number;
  /** Optional. Only applicable if the line item corresponds to a hard bundle. Product resource names that identify the bundle elements to be entitled in the line item. If unspecified, all bundle elements will be entitled. The format is 'partners/{partner_id}/products/{product_id}'. */
  products?: ReadonlyArray<string>;
}

export const EntitleSubscriptionRequestLineItemEntitlementDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lineItemIndex: Schema.optional(Schema.Number),
    products: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "EntitleSubscriptionRequestLineItemEntitlementDetails",
  });

export interface EntitleSubscriptionRequest {
  /** Optional. The line items to be entitled. If unspecified, all line items will be entitled. */
  lineItemEntitlementDetails?: ReadonlyArray<EntitleSubscriptionRequestLineItemEntitlementDetails>;
}

export const EntitleSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lineItemEntitlementDetails: Schema.optional(
      Schema.Array(EntitleSubscriptionRequestLineItemEntitlementDetails),
    ),
  }).annotate({ identifier: "EntitleSubscriptionRequest" });

export interface SuspendSubscriptionResponse {
  /** The suspended subscription resource. */
  subscription?: Subscription;
}

export const SuspendSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
  }).annotate({ identifier: "SuspendSubscriptionResponse" });

export interface ExtendSubscriptionResponse {
  /** The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z" */
  cycleEndTime?: string;
  /** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
  renewalTime?: string;
  /** End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner. */
  freeTrialEndTime?: string;
}

export const ExtendSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cycleEndTime: Schema.optional(Schema.String),
    renewalTime: Schema.optional(Schema.String),
    freeTrialEndTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExtendSubscriptionResponse" });

export interface GenerateUserSessionResponse {
  /** The generated user session. The token size is proportional to the size of the intent payload. */
  userSession?: UserSession;
}

export const GenerateUserSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSession: Schema.optional(UserSession),
  }).annotate({ identifier: "GenerateUserSessionResponse" });

export interface EntitleSubscriptionResponse {
  /** The subscription that has user linked to it. */
  subscription?: Subscription;
}

export const EntitleSubscriptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
  }).annotate({ identifier: "EntitleSubscriptionResponse" });

export interface ListProductsResponse {
  /** The products for the specified partner. */
  products?: ReadonlyArray<Product>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  products: Schema.optional(Schema.Array(Product)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListProductsResponse" });

export interface ResumeSubscriptionRequest {
  /** Optional. The cycle options for the subscription. */
  cycleOptions?: CycleOptions;
  /** Required. The mode to resume the subscription. */
  resumeMode?:
    | "RESUME_MODE_UNSPECIFIED"
    | "RESUME_MODE_CYCLE_OPTIONS"
    | "RESUME_MODE_RESTORE_EXISTING_BILLING_SCHEDULE"
    | (string & {});
}

export const ResumeSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cycleOptions: Schema.optional(CycleOptions),
    resumeMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResumeSubscriptionRequest" });

export interface ListPromotionsResponse {
  /** The promotions for the specified partner. */
  promotions?: ReadonlyArray<Promotion>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPromotionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    promotions: Schema.optional(Schema.Array(Promotion)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListPromotionsResponse" });

export interface SuspendSubscriptionRequest {}

export const SuspendSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendSubscriptionRequest",
  });

export interface CancelSubscriptionRequest {
  /** Specifies the reason for the cancellation. */
  cancellationReason?:
    | "CANCELLATION_REASON_UNSPECIFIED"
    | "CANCELLATION_REASON_FRAUD"
    | "CANCELLATION_REASON_REMORSE"
    | "CANCELLATION_REASON_ACCIDENTAL_PURCHASE"
    | "CANCELLATION_REASON_PAST_DUE"
    | "CANCELLATION_REASON_ACCOUNT_CLOSED"
    | "CANCELLATION_REASON_UPGRADE_DOWNGRADE"
    | "CANCELLATION_REASON_USER_DELINQUENCY"
    | "CANCELLATION_REASON_SYSTEM_ERROR"
    | "CANCELLATION_REASON_SYSTEM_CANCEL"
    | "CANCELLATION_REASON_BILLING_SYSTEM_SWITCH"
    | "CANCELLATION_REASON_OTHER"
    | (string & {});
  /** Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancellation at renewal_time, and will not issue a refund. - YouTube subscriptions must use this option currently. However, the user will still have access to the subscription until the end of the billing cycle. */
  cancelImmediately?: boolean;
}

export const CancelSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancellationReason: Schema.optional(Schema.String),
    cancelImmediately: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CancelSubscriptionRequest" });

export interface UndoCancelSubscriptionRequest {}

export const UndoCancelSubscriptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UndoCancelSubscriptionRequest",
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

export interface ListPartnersProductsRequest {
  /** Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` */
  filter?: string;
  /** Required. The parent, the partner that can resell. Format: partners/{partner} */
  parent: string;
  /** Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListPartnersProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/products" }),
    svc,
  ) as unknown as Schema.Schema<ListPartnersProductsRequest>;

export type ListPartnersProductsResponse = ListProductsResponse;
export const ListPartnersProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductsResponse;

export type ListPartnersProductsError = DefaultErrors | NotFound | Forbidden;

/** Currently, it doesn't support **YouTube** products. Retrieves the products that can be resold by the partner. It should be authenticated with a service account. */
export const listPartnersProducts: API.PaginatedOperationMethod<
  ListPartnersProductsRequest,
  ListPartnersProductsResponse,
  ListPartnersProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPartnersProductsRequest,
  output: ListPartnersProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FindEligiblePartnersPromotionsRequest {
  /** Required. The parent, the partner that can resell. Format: partners/{partner} */
  parent: string;
  /** Request body */
  body?: FindEligiblePromotionsRequest;
}

export const FindEligiblePartnersPromotionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(FindEligiblePromotionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/promotions:findEligible",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FindEligiblePartnersPromotionsRequest>;

export type FindEligiblePartnersPromotionsResponse =
  FindEligiblePromotionsResponse;
export const FindEligiblePartnersPromotionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindEligiblePromotionsResponse;

export type FindEligiblePartnersPromotionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Currently, it is only enabled for **YouTube**. Finds eligible promotions for the current user. The API requires user authorization via OAuth. The bare minimum oauth scope `openid` is sufficient, which will skip the consent screen. */
export const findEligiblePartnersPromotions: API.OperationMethod<
  FindEligiblePartnersPromotionsRequest,
  FindEligiblePartnersPromotionsResponse,
  FindEligiblePartnersPromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindEligiblePartnersPromotionsRequest,
  output: FindEligiblePartnersPromotionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPartnersPromotionsRequest {
  /** Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 promotions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` */
  filter?: string;
  /** Required. The parent, the partner that can resell. Format: partners/{partner} */
  parent: string;
  /** Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListPartnersPromotionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/promotions" }),
    svc,
  ) as unknown as Schema.Schema<ListPartnersPromotionsRequest>;

export type ListPartnersPromotionsResponse = ListPromotionsResponse;
export const ListPartnersPromotionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPromotionsResponse;

export type ListPartnersPromotionsError = DefaultErrors | NotFound | Forbidden;

/** Currently, it doesn't support **YouTube** promotions. Retrieves the promotions, such as free trial, that can be used by the partner. It should be authenticated with a service account. */
export const listPartnersPromotions: API.PaginatedOperationMethod<
  ListPartnersPromotionsRequest,
  ListPartnersPromotionsResponse,
  ListPartnersPromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPartnersPromotionsRequest,
  output: ListPartnersPromotionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExtendPartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". */
  name: string;
  /** Request body */
  body?: ExtendSubscriptionRequest;
}

export const ExtendPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExtendSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:extend", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExtendPartnersSubscriptionsRequest>;

export type ExtendPartnersSubscriptionsResponse = ExtendSubscriptionResponse;
export const ExtendPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExtendSubscriptionResponse;

export type ExtendPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** [Opt-in only] Most partners should be on auto-extend by default. Extends a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts. */
export const extendPartnersSubscriptions: API.OperationMethod<
  ExtendPartnersSubscriptionsRequest,
  ExtendPartnersSubscriptionsResponse,
  ExtendPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExtendPartnersSubscriptionsRequest,
  output: ExtendPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProvisionPartnersSubscriptionsRequest {
  /** number of duration units to be included. */
  "cycleOptions.initialCycleDuration.count"?: number;
  /** Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription with the same ID already exists, the creation fails with an `ALREADY_EXISTS` error. */
  subscriptionId?: string;
  /** The unit used for the duration */
  "cycleOptions.initialCycleDuration.unit"?:
    | "UNIT_UNSPECIFIED"
    | "MONTH"
    | "DAY"
    | "HOUR"
    | (string & {});
  /** Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}". */
  parent: string;
  /** Request body */
  body?: Subscription;
}

export const ProvisionPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "cycleOptions.initialCycleDuration.count": Schema.optional(
      Schema.Number,
    ).pipe(T.HttpQuery("cycleOptions.initialCycleDuration.count")),
    subscriptionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subscriptionId"),
    ),
    "cycleOptions.initialCycleDuration.unit": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("cycleOptions.initialCycleDuration.unit")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/subscriptions:provision",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProvisionPartnersSubscriptionsRequest>;

export type ProvisionPartnersSubscriptionsResponse = Subscription;
export const ProvisionPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type ProvisionPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts. */
export const provisionPartnersSubscriptions: API.OperationMethod<
  ProvisionPartnersSubscriptionsRequest,
  ProvisionPartnersSubscriptionsResponse,
  ProvisionPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProvisionPartnersSubscriptionsRequest,
  output: ProvisionPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EntitlePartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
  /** Request body */
  body?: EntitleSubscriptionRequest;
}

export const EntitlePartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EntitleSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:entitle", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EntitlePartnersSubscriptionsRequest>;

export type EntitlePartnersSubscriptionsResponse = EntitleSubscriptionResponse;
export const EntitlePartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntitleSubscriptionResponse;

export type EntitlePartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Entitles a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth. */
export const entitlePartnersSubscriptions: API.OperationMethod<
  EntitlePartnersSubscriptionsRequest,
  EntitlePartnersSubscriptionsResponse,
  EntitlePartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EntitlePartnersSubscriptionsRequest,
  output: EntitlePartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuspendPartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource to be suspended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
  /** Request body */
  body?: SuspendSubscriptionRequest;
}

export const SuspendPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SuspendSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:suspend", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SuspendPartnersSubscriptionsRequest>;

export type SuspendPartnersSubscriptionsResponse = SuspendSubscriptionResponse;
export const SuspendPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SuspendSubscriptionResponse;

export type SuspendPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Suspends a subscription. Contract terms may dictate if a prorated refund will be issued upon suspension. It should be called directly by the partner using service accounts. */
export const suspendPartnersSubscriptions: API.OperationMethod<
  SuspendPartnersSubscriptionsRequest,
  SuspendPartnersSubscriptionsResponse,
  SuspendPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuspendPartnersSubscriptionsRequest,
  output: SuspendPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumePartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource to be resumed. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
  /** Request body */
  body?: ResumeSubscriptionRequest;
}

export const ResumePartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResumePartnersSubscriptionsRequest>;

export type ResumePartnersSubscriptionsResponse = ResumeSubscriptionResponse;
export const ResumePartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResumeSubscriptionResponse;

export type ResumePartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resumes a suspended subscription. The new billing cycle will start at the time of the request. It should be called directly by the partner using service accounts. */
export const resumePartnersSubscriptions: API.OperationMethod<
  ResumePartnersSubscriptionsRequest,
  ResumePartnersSubscriptionsResponse,
  ResumePartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumePartnersSubscriptionsRequest,
  output: ResumePartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelPartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
  /** Request body */
  body?: CancelSubscriptionRequest;
}

export const CancelPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelPartnersSubscriptionsRequest>;

export type CancelPartnersSubscriptionsResponse = CancelSubscriptionResponse;
export const CancelPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelSubscriptionResponse;

export type CancelPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts. */
export const cancelPartnersSubscriptions: API.OperationMethod<
  CancelPartnersSubscriptionsRequest,
  CancelPartnersSubscriptionsResponse,
  CancelPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelPartnersSubscriptionsRequest,
  output: CancelPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndoCancelPartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
  /** Request body */
  body?: UndoCancelSubscriptionRequest;
}

export const UndoCancelPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UndoCancelSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:undoCancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndoCancelPartnersSubscriptionsRequest>;

export type UndoCancelPartnersSubscriptionsResponse =
  UndoCancelSubscriptionResponse;
export const UndoCancelPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UndoCancelSubscriptionResponse;

export type UndoCancelPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Currently, it is used by **Google One, Play Pass** partners. Revokes the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts. */
export const undoCancelPartnersSubscriptions: API.OperationMethod<
  UndoCancelPartnersSubscriptionsRequest,
  UndoCancelPartnersSubscriptionsResponse,
  UndoCancelPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndoCancelPartnersSubscriptionsRequest,
  output: UndoCancelPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPartnersSubscriptionsRequest {
  /** Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" */
  name: string;
}

export const GetPartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPartnersSubscriptionsRequest>;

export type GetPartnersSubscriptionsResponse = Subscription;
export const GetPartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type GetPartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a subscription by id. It should be called directly by the partner using service accounts. */
export const getPartnersSubscriptions: API.OperationMethod<
  GetPartnersSubscriptionsRequest,
  GetPartnersSubscriptionsResponse,
  GetPartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPartnersSubscriptionsRequest,
  output: GetPartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreatePartnersSubscriptionsRequest {
  /** Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}". */
  parent: string;
  /** Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription with the same ID already exists, the creation fails with an `ALREADY_EXISTS` error. */
  subscriptionId?: string;
  /** Request body */
  body?: Subscription;
}

export const CreatePartnersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    subscriptionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subscriptionId"),
    ),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/subscriptions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePartnersSubscriptionsRequest>;

export type CreatePartnersSubscriptionsResponse = Subscription;
export const CreatePartnersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type CreatePartnersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth. */
export const createPartnersSubscriptions: API.OperationMethod<
  CreatePartnersSubscriptionsRequest,
  CreatePartnersSubscriptionsResponse,
  CreatePartnersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePartnersSubscriptionsRequest,
  output: CreatePartnersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchPartnersSubscriptionsLineItemsRequest {
  /** Identifier. Resource name of the line item. Format: partners/{partner}/subscriptions/{subscription}/lineItems/{lineItem} */
  name: string;
  /** Required. The list of fields to update. Only a limited set of fields can be updated. The allowed fields are the following: - `product_payload.googleHomePayload.googleStructureId` */
  updateMask?: string;
  /** Request body */
  body?: SubscriptionLineItem;
}

export const PatchPartnersSubscriptionsLineItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SubscriptionLineItem).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPartnersSubscriptionsLineItemsRequest>;

export type PatchPartnersSubscriptionsLineItemsResponse = SubscriptionLineItem;
export const PatchPartnersSubscriptionsLineItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SubscriptionLineItem;

export type PatchPartnersSubscriptionsLineItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a line item of a subscription. It should be authenticated with a service account. */
export const patchPartnersSubscriptionsLineItems: API.OperationMethod<
  PatchPartnersSubscriptionsLineItemsRequest,
  PatchPartnersSubscriptionsLineItemsResponse,
  PatchPartnersSubscriptionsLineItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPartnersSubscriptionsLineItemsRequest,
  output: PatchPartnersSubscriptionsLineItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GeneratePartnersUserSessionsRequest {
  /** Required. The parent, the partner that can resell. Format: partners/{partner} */
  parent: string;
  /** Request body */
  body?: GenerateUserSessionRequest;
}

export const GeneratePartnersUserSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateUserSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/userSessions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratePartnersUserSessionsRequest>;

export type GeneratePartnersUserSessionsResponse = GenerateUserSessionResponse;
export const GeneratePartnersUserSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateUserSessionResponse;

export type GeneratePartnersUserSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This API replaces user authorized OAuth consent based APIs (Create, Entitle). Issues a timed session token for the given user intent. You can use the session token to redirect the user to Google to finish the signup flow. You can re-generate new session token repeatedly for the same request if necessary, regardless of the previous tokens being expired or not. By default, the session token is valid for 1 hour. */
export const generatePartnersUserSessions: API.OperationMethod<
  GeneratePartnersUserSessionsRequest,
  GeneratePartnersUserSessionsResponse,
  GeneratePartnersUserSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratePartnersUserSessionsRequest,
  output: GeneratePartnersUserSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
