// ==========================================================================
// Google Play Android Developer API (androidpublisher v3)
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
  name: "androidpublisher",
  version: "v3",
  rootUrl: "https://androidpublisher.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface IntroductoryPriceOfferPhase {}

export const IntroductoryPriceOfferPhase: Schema.Codec<IntroductoryPriceOfferPhase> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "IntroductoryPriceOfferPhase",
  });

export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
}

export const Money: Schema.Codec<Money> =
  /*@__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface ExternalAccountIdentifiers {
  /** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
  externalAccountId?: string;
  /** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
  obfuscatedExternalProfileId?: string;
  /** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
  obfuscatedExternalAccountId?: string;
}

export const ExternalAccountIdentifiers: Schema.Codec<ExternalAccountIdentifiers> =
  /*@__PURE__*/ Schema.Struct({
    externalAccountId: Schema.optional(Schema.String),
    obfuscatedExternalProfileId: Schema.optional(Schema.String),
    obfuscatedExternalAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalAccountIdentifiers" });

export interface OutOfAppPurchaseContext {
  /** User account identifier from the last expired subscription for this SKU. */
  expiredExternalAccountIdentifiers?: ExternalAccountIdentifiers;
  /** The purchase token of the last expired subscription. This purchase token must only be used to help identify the user if the link between the purchaseToken and user is stored in your database. This cannot be used to call the Google Developer API if it has been more than 60 days since expiry. */
  expiredPurchaseToken?: string;
}

export const OutOfAppPurchaseContext: Schema.Codec<OutOfAppPurchaseContext> =
  /*@__PURE__*/ Schema.Struct({
    expiredExternalAccountIdentifiers: Schema.optional(
      ExternalAccountIdentifiers,
    ),
    expiredPurchaseToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutOfAppPurchaseContext" });

export interface RemoteInAppUpdate {
  /** Required. Set to true if Remote In-App Update action type is needed. */
  isRemoteInAppUpdateRequested?: boolean;
}

export const RemoteInAppUpdate: Schema.Codec<RemoteInAppUpdate> =
  /*@__PURE__*/ Schema.Struct({
    isRemoteInAppUpdateRequested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RemoteInAppUpdate" });

export interface AndroidSdks {
  /** Android api levels of devices targeted by recovery action. See https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels for different api levels in android. */
  sdkLevels?: ReadonlyArray<string>;
}

export const AndroidSdks: Schema.Codec<AndroidSdks> =
  /*@__PURE__*/ Schema.Struct({
    sdkLevels: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AndroidSdks" });

export interface Regions {
  /** Regions targeted by the recovery action. Region codes are ISO 3166 Alpha-2 country codes. For example, US stands for United States of America. See https://www.iso.org/iso-3166-country-codes.html for the complete list of country codes. */
  regionCode?: ReadonlyArray<string>;
}

export const Regions: Schema.Codec<Regions> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Regions" });

export interface AllUsers {
  /** Required. Set to true if all set of users are needed. */
  isAllUsersRequested?: boolean;
}

export const AllUsers: Schema.Codec<AllUsers> =
  /*@__PURE__*/ Schema.Struct({
    isAllUsersRequested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AllUsers" });

export interface TargetingUpdate {
  /** Additional android sdk levels are targeted by the recovery action. */
  androidSdks?: AndroidSdks;
  /** Additional regions are targeted by the recovery action. */
  regions?: Regions;
  /** All users are targeted. */
  allUsers?: AllUsers;
}

export const TargetingUpdate: Schema.Codec<TargetingUpdate> =
  /*@__PURE__*/ Schema.Struct({
    androidSdks: Schema.optional(AndroidSdks),
    regions: Schema.optional(Regions),
    allUsers: Schema.optional(AllUsers),
  }).annotate({ identifier: "TargetingUpdate" });

export interface OtherRegionsSubscriptionOfferConfig {
  /** Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false. */
  otherRegionsNewSubscriberAvailability?: boolean;
}

export const OtherRegionsSubscriptionOfferConfig: Schema.Codec<OtherRegionsSubscriptionOfferConfig> =
  /*@__PURE__*/ Schema.Struct({
    otherRegionsNewSubscriberAvailability: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OtherRegionsSubscriptionOfferConfig" });

export interface OfferTag {
  /** Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters. */
  tag?: string;
}

export const OfferTag: Schema.Codec<OfferTag> =
  /*@__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "OfferTag" });

export interface RegionalSubscriptionOfferPhaseFreePriceOverride {}

export const RegionalSubscriptionOfferPhaseFreePriceOverride: Schema.Codec<RegionalSubscriptionOfferPhaseFreePriceOverride> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RegionalSubscriptionOfferPhaseFreePriceOverride",
  });

export interface RegionalSubscriptionOfferPhaseConfig {
  /** Set to specify this offer is free to obtain. */
  free?: RegionalSubscriptionOfferPhaseFreePriceOverride;
  /** Required. Immutable. The region to which this config applies. */
  regionCode?: string;
  /** The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for this region. */
  price?: Money;
  /** The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for this region. */
  absoluteDiscount?: Money;
  /** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region. */
  relativeDiscount?: number;
}

export const RegionalSubscriptionOfferPhaseConfig: Schema.Codec<RegionalSubscriptionOfferPhaseConfig> =
  /*@__PURE__*/ Schema.Struct({
    free: Schema.optional(RegionalSubscriptionOfferPhaseFreePriceOverride),
    regionCode: Schema.optional(Schema.String),
    price: Schema.optional(Money),
    absoluteDiscount: Schema.optional(Money),
    relativeDiscount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RegionalSubscriptionOfferPhaseConfig" });

export interface OtherRegionsSubscriptionOfferPhasePrices {
  /** Required. Price in USD to use for any new locations Play may launch in. */
  usdPrice?: Money;
  /** Required. Price in EUR to use for any new locations Play may launch in. */
  eurPrice?: Money;
}

export const OtherRegionsSubscriptionOfferPhasePrices: Schema.Codec<OtherRegionsSubscriptionOfferPhasePrices> =
  /*@__PURE__*/ Schema.Struct({
    usdPrice: Schema.optional(Money),
    eurPrice: Schema.optional(Money),
  }).annotate({ identifier: "OtherRegionsSubscriptionOfferPhasePrices" });

export interface OtherRegionsSubscriptionOfferPhaseFreePriceOverride {}

export const OtherRegionsSubscriptionOfferPhaseFreePriceOverride: Schema.Codec<OtherRegionsSubscriptionOfferPhaseFreePriceOverride> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OtherRegionsSubscriptionOfferPhaseFreePriceOverride",
  });

export interface OtherRegionsSubscriptionOfferPhaseConfig {
  /** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in. */
  relativeDiscount?: number;
  /** The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for any new locations Play may launch in. */
  absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices;
  /** Set to specify this offer is free to obtain. */
  free?: OtherRegionsSubscriptionOfferPhaseFreePriceOverride;
  /** The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for any new locations Play may launch in. */
  otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices;
}

export const OtherRegionsSubscriptionOfferPhaseConfig: Schema.Codec<OtherRegionsSubscriptionOfferPhaseConfig> =
  /*@__PURE__*/ Schema.Struct({
    relativeDiscount: Schema.optional(Schema.Number),
    absoluteDiscounts: Schema.optional(
      OtherRegionsSubscriptionOfferPhasePrices,
    ),
    free: Schema.optional(OtherRegionsSubscriptionOfferPhaseFreePriceOverride),
    otherRegionsPrices: Schema.optional(
      OtherRegionsSubscriptionOfferPhasePrices,
    ),
  }).annotate({ identifier: "OtherRegionsSubscriptionOfferPhaseConfig" });

export interface SubscriptionOfferPhase {
  /** Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase. */
  recurrenceCount?: number;
  /** Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format. */
  duration?: string;
  /** Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config. */
  regionalConfigs?: ReadonlyArray<RegionalSubscriptionOfferPhaseConfig>;
  /** Pricing information for any new locations Play may launch in. */
  otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;
}

export const SubscriptionOfferPhase: Schema.Codec<SubscriptionOfferPhase> =
  /*@__PURE__*/ Schema.Struct({
    recurrenceCount: Schema.optional(Schema.Number),
    duration: Schema.optional(Schema.String),
    regionalConfigs: Schema.optional(
      Schema.Array(RegionalSubscriptionOfferPhaseConfig),
    ),
    otherRegionsConfig: Schema.optional(
      OtherRegionsSubscriptionOfferPhaseConfig,
    ),
  }).annotate({ identifier: "SubscriptionOfferPhase" });

export interface RegionalSubscriptionOfferConfig {
  /** Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
  regionCode?: string;
  /** Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false. */
  newSubscriberAvailability?: boolean;
}

export const RegionalSubscriptionOfferConfig: Schema.Codec<RegionalSubscriptionOfferConfig> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    newSubscriberAvailability: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RegionalSubscriptionOfferConfig" });

export interface TargetingRuleScopeThisSubscription {}

export const TargetingRuleScopeThisSubscription: Schema.Codec<TargetingRuleScopeThisSubscription> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TargetingRuleScopeThisSubscription",
  });

export interface TargetingRuleScopeAnySubscriptionInApp {}

export const TargetingRuleScopeAnySubscriptionInApp: Schema.Codec<TargetingRuleScopeAnySubscriptionInApp> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TargetingRuleScopeAnySubscriptionInApp",
  });

export interface TargetingRuleScope {
  /** The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app. */
  specificSubscriptionInApp?: string;
  /** The scope of the current targeting rule is the subscription in which this offer is defined. */
  thisSubscription?: TargetingRuleScopeThisSubscription;
  /** The scope of the current targeting rule is any subscription in the parent app. */
  anySubscriptionInApp?: TargetingRuleScopeAnySubscriptionInApp;
}

export const TargetingRuleScope: Schema.Codec<TargetingRuleScope> =
  /*@__PURE__*/ Schema.Struct({
    specificSubscriptionInApp: Schema.optional(Schema.String),
    thisSubscription: Schema.optional(TargetingRuleScopeThisSubscription),
    anySubscriptionInApp: Schema.optional(
      TargetingRuleScopeAnySubscriptionInApp,
    ),
  }).annotate({ identifier: "TargetingRuleScope" });

export interface AcquisitionTargetingRule {
  /** Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "any subscription in app". */
  scope?: TargetingRuleScope;
}

export const AcquisitionTargetingRule: Schema.Codec<AcquisitionTargetingRule> =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.optional(TargetingRuleScope),
  }).annotate({ identifier: "AcquisitionTargetingRule" });

export interface UpgradeTargetingRule {
  /** Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer. */
  oncePerUser?: boolean;
  /** Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "specific subscription in app". */
  scope?: TargetingRuleScope;
  /** The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched. */
  billingPeriodDuration?: string;
}

export const UpgradeTargetingRule: Schema.Codec<UpgradeTargetingRule> =
  /*@__PURE__*/ Schema.Struct({
    oncePerUser: Schema.optional(Schema.Boolean),
    scope: Schema.optional(TargetingRuleScope),
    billingPeriodDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeTargetingRule" });

export interface SubscriptionOfferTargeting {
  /** Offer targeting rule for new user acquisition. */
  acquisitionRule?: AcquisitionTargetingRule;
  /** Offer targeting rule for upgrading users' existing plans. */
  upgradeRule?: UpgradeTargetingRule;
}

export const SubscriptionOfferTargeting: Schema.Codec<SubscriptionOfferTargeting> =
  /*@__PURE__*/ Schema.Struct({
    acquisitionRule: Schema.optional(AcquisitionTargetingRule),
    upgradeRule: Schema.optional(UpgradeTargetingRule),
  }).annotate({ identifier: "SubscriptionOfferTargeting" });

export interface SubscriptionOffer {
  /** Required. Immutable. The package name of the app the parent subscription belongs to. */
  packageName?: string;
  /** Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active. */
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The configuration for any new locations Play may launch in the future. */
  otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;
  /** Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. */
  offerId?: string;
  /** Required. Immutable. The ID of the base plan to which this offer is an extension. */
  basePlanId?: string;
  /** Required. Immutable. The ID of the parent subscription this offer belongs to. */
  productId?: string;
  /** List of up to 20 custom tags specified for this offer, and returned to the app through the billing library. */
  offerTags?: ReadonlyArray<OfferTag>;
  /** Required. The phases of this subscription offer. Must contain at least one and at most two entries. Users will always receive all these phases in the specified order. */
  phases?: ReadonlyArray<SubscriptionOfferPhase>;
  /** Required. The region-specific configuration of this offer. Must contain at least one entry. */
  regionalConfigs?: ReadonlyArray<RegionalSubscriptionOfferConfig>;
  /** The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves. */
  targeting?: SubscriptionOfferTargeting;
}

export const SubscriptionOffer: Schema.Codec<SubscriptionOffer> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    otherRegionsConfig: Schema.optional(OtherRegionsSubscriptionOfferConfig),
    offerId: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    offerTags: Schema.optional(Schema.Array(OfferTag)),
    phases: Schema.optional(Schema.Array(SubscriptionOfferPhase)),
    regionalConfigs: Schema.optional(
      Schema.Array(RegionalSubscriptionOfferConfig),
    ),
    targeting: Schema.optional(SubscriptionOfferTargeting),
  }).annotate({ identifier: "SubscriptionOffer" });

export interface BatchGetSubscriptionOffersResponse {
  subscriptionOffers?: ReadonlyArray<SubscriptionOffer>;
}

export const BatchGetSubscriptionOffersResponse: Schema.Codec<BatchGetSubscriptionOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptionOffers: Schema.optional(Schema.Array(SubscriptionOffer)),
  }).annotate({ identifier: "BatchGetSubscriptionOffersResponse" });

export interface PaidAppDetails {}

export const PaidAppDetails: Schema.Codec<PaidAppDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PaidAppDetails",
  });

export interface TextureCompressionFormat {
  /** Alias for texture compression format. */
  alias?:
    | "UNSPECIFIED_TEXTURE_COMPRESSION_FORMAT"
    | "ETC1_RGB8"
    | "PALETTED"
    | "THREE_DC"
    | "ATC"
    | "LATC"
    | "DXT1"
    | "S3TC"
    | "PVRTC"
    | "ASTC"
    | "ETC2"
    | (string & {});
}

export const TextureCompressionFormat: Schema.Codec<TextureCompressionFormat> =
  /*@__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextureCompressionFormat" });

export interface TextureCompressionFormatTargeting {
  /** The list of targeted TCFs. Should not be empty. */
  value?: ReadonlyArray<TextureCompressionFormat>;
  /** List of alternative TCFs (TCFs targeted by the sibling splits). */
  alternatives?: ReadonlyArray<TextureCompressionFormat>;
}

export const TextureCompressionFormatTargeting: Schema.Codec<TextureCompressionFormatTargeting> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(TextureCompressionFormat)),
    alternatives: Schema.optional(Schema.Array(TextureCompressionFormat)),
  }).annotate({ identifier: "TextureCompressionFormatTargeting" });

export interface SdkVersion {
  /** Inclusive minimum value of an sdk version. */
  min?: number;
}

export const SdkVersion: Schema.Codec<SdkVersion> =
  /*@__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SdkVersion" });

export interface SdkVersionTargeting {
  /** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
  alternatives?: ReadonlyArray<SdkVersion>;
  /** Value of an sdk version. */
  value?: ReadonlyArray<SdkVersion>;
}

export const SdkVersionTargeting: Schema.Codec<SdkVersionTargeting> =
  /*@__PURE__*/ Schema.Struct({
    alternatives: Schema.optional(Schema.Array(SdkVersion)),
    value: Schema.optional(Schema.Array(SdkVersion)),
  }).annotate({ identifier: "SdkVersionTargeting" });

export interface Abi {
  /** Alias for an abi. */
  alias?:
    | "UNSPECIFIED_CPU_ARCHITECTURE"
    | "ARMEABI"
    | "ARMEABI_V7A"
    | "ARM64_V8A"
    | "X86"
    | "X86_64"
    | "RISCV64"
    | (string & {});
}

export const Abi: Schema.Codec<Abi> = /*@__PURE__*/ Schema.Struct({
  alias: Schema.optional(Schema.String),
}).annotate({ identifier: "Abi" });

export interface AbiTargeting {
  /** Value of an abi. */
  value?: ReadonlyArray<Abi>;
  /** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
  alternatives?: ReadonlyArray<Abi>;
}

export const AbiTargeting: Schema.Codec<AbiTargeting> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Abi)),
    alternatives: Schema.optional(Schema.Array(Abi)),
  }).annotate({ identifier: "AbiTargeting" });

export interface ScreenDensity {
  /** Alias for a screen density. */
  densityAlias?:
    | "DENSITY_UNSPECIFIED"
    | "NODPI"
    | "LDPI"
    | "MDPI"
    | "TVDPI"
    | "HDPI"
    | "XHDPI"
    | "XXHDPI"
    | "XXXHDPI"
    | (string & {});
  /** Value for density dpi. */
  densityDpi?: number;
}

export const ScreenDensity: Schema.Codec<ScreenDensity> =
  /*@__PURE__*/ Schema.Struct({
    densityAlias: Schema.optional(Schema.String),
    densityDpi: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ScreenDensity" });

export interface ScreenDensityTargeting {
  /** Value of a screen density. */
  value?: ReadonlyArray<ScreenDensity>;
  /** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
  alternatives?: ReadonlyArray<ScreenDensity>;
}

export const ScreenDensityTargeting: Schema.Codec<ScreenDensityTargeting> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(ScreenDensity)),
    alternatives: Schema.optional(Schema.Array(ScreenDensity)),
  }).annotate({ identifier: "ScreenDensityTargeting" });

export interface MultiAbi {
  /** A list of targeted ABIs, as represented by the Android Platform */
  abi?: ReadonlyArray<Abi>;
}

export const MultiAbi: Schema.Codec<MultiAbi> =
  /*@__PURE__*/ Schema.Struct({
    abi: Schema.optional(Schema.Array(Abi)),
  }).annotate({ identifier: "MultiAbi" });

export interface MultiAbiTargeting {
  /** Value of a multi abi. */
  value?: ReadonlyArray<MultiAbi>;
  /** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
  alternatives?: ReadonlyArray<MultiAbi>;
}

export const MultiAbiTargeting: Schema.Codec<MultiAbiTargeting> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(MultiAbi)),
    alternatives: Schema.optional(Schema.Array(MultiAbi)),
  }).annotate({ identifier: "MultiAbiTargeting" });

export interface VariantTargeting {
  /** Texture-compression-format-level targeting */
  textureCompressionFormatTargeting?: TextureCompressionFormatTargeting;
  /** The sdk version that the variant targets */
  sdkVersionTargeting?: SdkVersionTargeting;
  /** The abi that the variant targets */
  abiTargeting?: AbiTargeting;
  /** The screen densities that this variant supports */
  screenDensityTargeting?: ScreenDensityTargeting;
  /** Multi-api-level targeting */
  multiAbiTargeting?: MultiAbiTargeting;
}

export const VariantTargeting: Schema.Codec<VariantTargeting> =
  /*@__PURE__*/ Schema.Struct({
    textureCompressionFormatTargeting: Schema.optional(
      TextureCompressionFormatTargeting,
    ),
    sdkVersionTargeting: Schema.optional(SdkVersionTargeting),
    abiTargeting: Schema.optional(AbiTargeting),
    screenDensityTargeting: Schema.optional(ScreenDensityTargeting),
    multiAbiTargeting: Schema.optional(MultiAbiTargeting),
  }).annotate({ identifier: "VariantTargeting" });

export interface UserCountriesTargeting {
  /** List of country codes in the two-letter CLDR territory format. */
  countryCodes?: ReadonlyArray<string>;
  /** Indicates if the list above is exclusive. */
  exclude?: boolean;
}

export const UserCountriesTargeting: Schema.Codec<UserCountriesTargeting> =
  /*@__PURE__*/ Schema.Struct({
    countryCodes: Schema.optional(Schema.Array(Schema.String)),
    exclude: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UserCountriesTargeting" });

export interface DeviceFeature {
  /** The feature version specified by android:glEsVersion or android:version in in the AndroidManifest. */
  featureVersion?: number;
  /** Name of the feature. */
  featureName?: string;
}

export const DeviceFeature: Schema.Codec<DeviceFeature> =
  /*@__PURE__*/ Schema.Struct({
    featureVersion: Schema.optional(Schema.Number),
    featureName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceFeature" });

export interface DeviceFeatureTargeting {
  /** Feature of the device. */
  requiredFeature?: DeviceFeature;
}

export const DeviceFeatureTargeting: Schema.Codec<DeviceFeatureTargeting> =
  /*@__PURE__*/ Schema.Struct({
    requiredFeature: Schema.optional(DeviceFeature),
  }).annotate({ identifier: "DeviceFeatureTargeting" });

export interface ModuleTargeting {
  /** Countries-level targeting */
  userCountriesTargeting?: UserCountriesTargeting;
  /** The sdk version that the variant targets */
  sdkVersionTargeting?: SdkVersionTargeting;
  /** Targeting for device features. */
  deviceFeatureTargeting?: ReadonlyArray<DeviceFeatureTargeting>;
}

export const ModuleTargeting: Schema.Codec<ModuleTargeting> =
  /*@__PURE__*/ Schema.Struct({
    userCountriesTargeting: Schema.optional(UserCountriesTargeting),
    sdkVersionTargeting: Schema.optional(SdkVersionTargeting),
    deviceFeatureTargeting: Schema.optional(
      Schema.Array(DeviceFeatureTargeting),
    ),
  }).annotate({ identifier: "ModuleTargeting" });

export interface ModuleMetadata {
  /** Indicates the delivery type (e.g. on-demand) of the module. */
  deliveryType?:
    | "UNKNOWN_DELIVERY_TYPE"
    | "INSTALL_TIME"
    | "ON_DEMAND"
    | "FAST_FOLLOW"
    | (string & {});
  /** The targeting that makes a conditional module installed. Relevant only for Split APKs. */
  targeting?: ModuleTargeting;
  /** Module name. */
  name?: string;
  /** Names of the modules that this module directly depends on. Each module implicitly depends on the base module. */
  dependencies?: ReadonlyArray<string>;
  /** Indicates the type of this feature module. */
  moduleType?: "UNKNOWN_MODULE_TYPE" | "FEATURE_MODULE" | (string & {});
}

export const ModuleMetadata: Schema.Codec<ModuleMetadata> =
  /*@__PURE__*/ Schema.Struct({
    deliveryType: Schema.optional(Schema.String),
    targeting: Schema.optional(ModuleTargeting),
    name: Schema.optional(Schema.String),
    dependencies: Schema.optional(Schema.Array(Schema.String)),
    moduleType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ModuleMetadata" });

export interface LanguageTargeting {
  /** Alternative languages. */
  alternatives?: ReadonlyArray<string>;
  /** ISO-639: 2 or 3 letter language code. */
  value?: ReadonlyArray<string>;
}

export const LanguageTargeting: Schema.Codec<LanguageTargeting> =
  /*@__PURE__*/ Schema.Struct({
    alternatives: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LanguageTargeting" });

export interface ApkTargeting {
  /** The screen density that this apk supports. */
  screenDensityTargeting?: ScreenDensityTargeting;
  /** Multi-api-level targeting. */
  multiAbiTargeting?: MultiAbiTargeting;
  /** The abi that the apk targets */
  abiTargeting?: AbiTargeting;
  /** The sdk version that the apk targets */
  sdkVersionTargeting?: SdkVersionTargeting;
  /** Texture-compression-format-level targeting */
  textureCompressionFormatTargeting?: TextureCompressionFormatTargeting;
  /** The language that the apk targets */
  languageTargeting?: LanguageTargeting;
}

export const ApkTargeting: Schema.Codec<ApkTargeting> =
  /*@__PURE__*/ Schema.Struct({
    screenDensityTargeting: Schema.optional(ScreenDensityTargeting),
    multiAbiTargeting: Schema.optional(MultiAbiTargeting),
    abiTargeting: Schema.optional(AbiTargeting),
    sdkVersionTargeting: Schema.optional(SdkVersionTargeting),
    textureCompressionFormatTargeting: Schema.optional(
      TextureCompressionFormatTargeting,
    ),
    languageTargeting: Schema.optional(LanguageTargeting),
  }).annotate({ identifier: "ApkTargeting" });

export interface SplitApkMetadata {
  /** Indicates whether this APK is the main split of the module. */
  isMasterSplit?: boolean;
  /** Id of the split. */
  splitId?: string;
}

export const SplitApkMetadata: Schema.Codec<SplitApkMetadata> =
  /*@__PURE__*/ Schema.Struct({
    isMasterSplit: Schema.optional(Schema.Boolean),
    splitId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SplitApkMetadata" });

export interface StandaloneApkMetadata {
  /** Names of the modules fused in this standalone APK. */
  fusedModuleName?: ReadonlyArray<string>;
}

export const StandaloneApkMetadata: Schema.Codec<StandaloneApkMetadata> =
  /*@__PURE__*/ Schema.Struct({
    fusedModuleName: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StandaloneApkMetadata" });

export interface ApkDescription {
  /** Apk-level targeting. */
  targeting?: ApkTargeting;
  /** Set only for Split APKs. */
  splitApkMetadata?: SplitApkMetadata;
  /** Set only for asset slices. */
  assetSliceMetadata?: SplitApkMetadata;
  /** Set only for Instant split APKs. */
  instantApkMetadata?: SplitApkMetadata;
  /** Path of the Apk, will be in the following format: .apk where DownloadId is the ID used to download the apk using GeneratedApks.Download API. */
  path?: string;
  /** Set only for standalone APKs. */
  standaloneApkMetadata?: StandaloneApkMetadata;
}

export const ApkDescription: Schema.Codec<ApkDescription> =
  /*@__PURE__*/ Schema.Struct({
    targeting: Schema.optional(ApkTargeting),
    splitApkMetadata: Schema.optional(SplitApkMetadata),
    assetSliceMetadata: Schema.optional(SplitApkMetadata),
    instantApkMetadata: Schema.optional(SplitApkMetadata),
    path: Schema.optional(Schema.String),
    standaloneApkMetadata: Schema.optional(StandaloneApkMetadata),
  }).annotate({ identifier: "ApkDescription" });

export interface ApkSet {
  /** Metadata about the module represented by this ApkSet */
  moduleMetadata?: ModuleMetadata;
  /** Description of the generated apks. */
  apkDescription?: ReadonlyArray<ApkDescription>;
}

export const ApkSet: Schema.Codec<ApkSet> =
  /*@__PURE__*/ Schema.Struct({
    moduleMetadata: Schema.optional(ModuleMetadata),
    apkDescription: Schema.optional(Schema.Array(ApkDescription)),
  }).annotate({ identifier: "ApkSet" });

export interface SplitApkVariant {
  /** Variant-level targeting. */
  targeting?: VariantTargeting;
  /** Set of APKs, one set per module. */
  apkSet?: ReadonlyArray<ApkSet>;
  /** Number of the variant, starting at 0 (unless overridden). A device will receive APKs from the first variant that matches the device configuration, with higher variant numbers having priority over lower variant numbers. */
  variantNumber?: number;
}

export const SplitApkVariant: Schema.Codec<SplitApkVariant> =
  /*@__PURE__*/ Schema.Struct({
    targeting: Schema.optional(VariantTargeting),
    apkSet: Schema.optional(Schema.Array(ApkSet)),
    variantNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SplitApkVariant" });

export interface Timestamp {
  /** Represents seconds of UTC time since Unix epoch. */
  seconds?: string;
  /** Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive. */
  nanos?: number;
}

export const Timestamp: Schema.Codec<Timestamp> =
  /*@__PURE__*/ Schema.Struct({
    seconds: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Timestamp" });

export interface DeveloperComment {
  /** The last time at which this comment was updated. */
  lastModified?: Timestamp;
  /** The content of the comment, i.e. reply body. */
  text?: string;
}

export const DeveloperComment: Schema.Codec<DeveloperComment> =
  /*@__PURE__*/ Schema.Struct({
    lastModified: Schema.optional(Timestamp),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeveloperComment" });

export interface AppDetails {
  /** The user-visible website for this app. */
  contactWebsite?: string;
  /** The user-visible support email for this app. */
  contactEmail?: string;
  /** The user-visible support telephone number for this app. */
  contactPhone?: string;
  /** Default language code, in BCP 47 format (eg "en-US"). */
  defaultLanguage?: string;
}

export const AppDetails: Schema.Codec<AppDetails> =
  /*@__PURE__*/ Schema.Struct({
    contactWebsite: Schema.optional(Schema.String),
    contactEmail: Schema.optional(Schema.String),
    contactPhone: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppDetails" });

export interface SystemOnChip {
  /** Required. The model of the SoC, eg. "Tensor" Value of build property "ro.soc.model" https://developer.android.com/reference/android/os/Build#SOC_MODEL Required. */
  model?: string;
  /** Required. The designer of the SoC, eg. "Google" Value of build property "ro.soc.manufacturer" https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER Required. */
  manufacturer?: string;
}

export const SystemOnChip: Schema.Codec<SystemOnChip> =
  /*@__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemOnChip" });

export interface CancelSubscriptionPurchaseResponse {}

export const CancelSubscriptionPurchaseResponse: Schema.Codec<CancelSubscriptionPurchaseResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelSubscriptionPurchaseResponse",
  });

export interface RegionalBasePlanConfig {
  /** Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false. */
  newSubscriberAvailability?: boolean;
  /** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
  regionCode?: string;
  /** The price of the base plan in the specified region. Must be set if the base plan is available to new subscribers. Must be set in the currency that is linked to the specified region. */
  price?: Money;
}

export const RegionalBasePlanConfig: Schema.Codec<RegionalBasePlanConfig> =
  /*@__PURE__*/ Schema.Struct({
    newSubscriberAvailability: Schema.optional(Schema.Boolean),
    regionCode: Schema.optional(Schema.String),
    price: Schema.optional(Money),
  }).annotate({ identifier: "RegionalBasePlanConfig" });

export interface OtherRegionsBasePlanConfig {
  /** Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false. */
  newSubscriberAvailability?: boolean;
  /** Required. Price in USD to use for any new locations Play may launch in. */
  usdPrice?: Money;
  /** Required. Price in EUR to use for any new locations Play may launch in. */
  eurPrice?: Money;
}

export const OtherRegionsBasePlanConfig: Schema.Codec<OtherRegionsBasePlanConfig> =
  /*@__PURE__*/ Schema.Struct({
    newSubscriberAvailability: Schema.optional(Schema.Boolean),
    usdPrice: Schema.optional(Money),
    eurPrice: Schema.optional(Money),
  }).annotate({ identifier: "OtherRegionsBasePlanConfig" });

export interface InstallmentsBasePlanType {
  /** The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE. */
  prorationMode?:
    | "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED"
    | "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE"
    | "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
    | (string & {});
  /** Optional. Custom account hold period of the subscription, specified in ISO 8601 format. Acceptable values must be in days and between P0D and P60D. An empty field represents a recommended account hold, calculated as 60 days minus grace period. The sum of gracePeriodDuration and accountHoldDuration must be between P30D and P60D days, inclusive. */
  accountHoldDuration?: string;
  /** Required. Immutable. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. The duration is immutable after the base plan is created. */
  billingPeriodDuration?: string;
  /** Required. Immutable. The number of payments the user is committed to. It is immutable after the base plan is created. */
  committedPaymentsCount?: number;
  /** Required. Immutable. Installments base plan renewal type. Determines the behavior at the end of the initial commitment. The renewal type is immutable after the base plan is created. */
  renewalType?:
    | "RENEWAL_TYPE_UNSPECIFIED"
    | "RENEWAL_TYPE_RENEWS_WITHOUT_COMMITMENT"
    | "RENEWAL_TYPE_RENEWS_WITH_COMMITMENT"
    | (string & {});
  /** Grace period of the subscription, specified in ISO 8601 format. Acceptable values must be in days and between P0D and the lesser of 30D and base plan billing period. If not specified, a default value will be used based on the billing period. The sum of gracePeriodDuration and accountHoldDuration must be between P30D and P60D days, inclusive. */
  gracePeriodDuration?: string;
  /** Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified. */
  resubscribeState?:
    | "RESUBSCRIBE_STATE_UNSPECIFIED"
    | "RESUBSCRIBE_STATE_ACTIVE"
    | "RESUBSCRIBE_STATE_INACTIVE"
    | (string & {});
}

export const InstallmentsBasePlanType: Schema.Codec<InstallmentsBasePlanType> =
  /*@__PURE__*/ Schema.Struct({
    prorationMode: Schema.optional(Schema.String),
    accountHoldDuration: Schema.optional(Schema.String),
    billingPeriodDuration: Schema.optional(Schema.String),
    committedPaymentsCount: Schema.optional(Schema.Number),
    renewalType: Schema.optional(Schema.String),
    gracePeriodDuration: Schema.optional(Schema.String),
    resubscribeState: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstallmentsBasePlanType" });

export interface AutoRenewingBasePlanType {
  /** The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE. */
  prorationMode?:
    | "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED"
    | "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE"
    | "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
    | (string & {});
  /** Required. Immutable. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. The duration is immutable after the base plan is created. */
  billingPeriodDuration?: string;
  /** Optional. Custom account hold period of the subscription, specified in ISO 8601 format. Acceptable values must be in days and between P0D and P60D. An empty field represents a recommended account hold, calculated as 60 days minus grace period. The sum of gracePeriodDuration and accountHoldDuration must be between P30D and P60D days, inclusive. */
  accountHoldDuration?: string;
  /** Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string. */
  legacyCompatibleSubscriptionOfferId?: string;
  /** Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified. */
  resubscribeState?:
    | "RESUBSCRIBE_STATE_UNSPECIFIED"
    | "RESUBSCRIBE_STATE_ACTIVE"
    | "RESUBSCRIBE_STATE_INACTIVE"
    | (string & {});
  /** Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription. */
  legacyCompatible?: boolean;
  /** Grace period of the subscription, specified in ISO 8601 format. Acceptable values must be in days and between P0D and the lesser of 30D and base plan billing period. If not specified, a default value will be used based on the billing period. The sum of gracePeriodDuration and accountHoldDuration must be between P30D and P60D days, inclusive. */
  gracePeriodDuration?: string;
}

export const AutoRenewingBasePlanType: Schema.Codec<AutoRenewingBasePlanType> =
  /*@__PURE__*/ Schema.Struct({
    prorationMode: Schema.optional(Schema.String),
    billingPeriodDuration: Schema.optional(Schema.String),
    accountHoldDuration: Schema.optional(Schema.String),
    legacyCompatibleSubscriptionOfferId: Schema.optional(Schema.String),
    resubscribeState: Schema.optional(Schema.String),
    legacyCompatible: Schema.optional(Schema.Boolean),
    gracePeriodDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoRenewingBasePlanType" });

export interface PrepaidBasePlanType {
  /** Required. Immutable. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. The duration is immutable after the base plan is created. */
  billingPeriodDuration?: string;
  /** Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified. */
  timeExtension?:
    | "TIME_EXTENSION_UNSPECIFIED"
    | "TIME_EXTENSION_ACTIVE"
    | "TIME_EXTENSION_INACTIVE"
    | (string & {});
}

export const PrepaidBasePlanType: Schema.Codec<PrepaidBasePlanType> =
  /*@__PURE__*/ Schema.Struct({
    billingPeriodDuration: Schema.optional(Schema.String),
    timeExtension: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrepaidBasePlanType" });

export interface BasePlan {
  /** Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. */
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Region-specific information for this base plan. */
  regionalConfigs?: ReadonlyArray<RegionalBasePlanConfig>;
  /** Pricing information for any new locations Play may launch in the future. If omitted, the BasePlan will not be automatically available any new locations Play may launch in the future. */
  otherRegionsConfig?: OtherRegionsBasePlanConfig;
  /** List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library. */
  offerTags?: ReadonlyArray<OfferTag>;
  /** Set for installments base plans where a user is committed to a specified number of payments. */
  installmentsBasePlanType?: InstallmentsBasePlanType;
  /** Set when the base plan automatically renews at a regular interval. */
  autoRenewingBasePlanType?: AutoRenewingBasePlanType;
  /** Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters. */
  basePlanId?: string;
  /** Set when the base plan does not automatically renew at the end of the billing period. */
  prepaidBasePlanType?: PrepaidBasePlanType;
}

export const BasePlan: Schema.Codec<BasePlan> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    regionalConfigs: Schema.optional(Schema.Array(RegionalBasePlanConfig)),
    otherRegionsConfig: Schema.optional(OtherRegionsBasePlanConfig),
    offerTags: Schema.optional(Schema.Array(OfferTag)),
    installmentsBasePlanType: Schema.optional(InstallmentsBasePlanType),
    autoRenewingBasePlanType: Schema.optional(AutoRenewingBasePlanType),
    basePlanId: Schema.optional(Schema.String),
    prepaidBasePlanType: Schema.optional(PrepaidBasePlanType),
  }).annotate({ identifier: "BasePlan" });

export interface ExpansionFile {
  /** If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes. */
  fileSize?: string;
  /** If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set. */
  referencesVersion?: number;
}

export const ExpansionFile: Schema.Codec<ExpansionFile> =
  /*@__PURE__*/ Schema.Struct({
    fileSize: Schema.optional(Schema.String),
    referencesVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExpansionFile" });

export interface ExpansionFilesUploadResponse {
  /** The uploaded expansion file configuration. */
  expansionFile?: ExpansionFile;
}

export const ExpansionFilesUploadResponse: Schema.Codec<ExpansionFilesUploadResponse> =
  /*@__PURE__*/ Schema.Struct({
    expansionFile: Schema.optional(ExpansionFile),
  }).annotate({ identifier: "ExpansionFilesUploadResponse" });

export interface ProductPurchase {
  /** The inapp product SKU. May not be present. */
  productId?: string;
  /** The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed */
  consumptionState?: number;
  /** The order id associated with the purchase of the inapp product. */
  orderId?: string;
  /** A developer-specified string that contains supplemental information about an order. */
  developerPayload?: string;
  /** The quantity associated with the purchase of the inapp product. If not present, the quantity is 1. */
  quantity?: number;
  /** The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code). Does not include Play Points purchases. 2. Rewarded (i.e. from watching a video ad instead of paying) */
  purchaseType?: number;
  /** The purchase token generated to identify this purchase. May not be present. */
  purchaseToken?: string;
  /** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
  obfuscatedExternalProfileId?: string;
  /** The quantity eligible for refund, i.e. quantity that hasn't been refunded. The value reflects quantity-based partial refunds and full refunds. */
  refundableQuantity?: number;
  /** The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending */
  purchaseState?: number;
  /** An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
  obfuscatedExternalAccountId?: string;
  /** This kind represents an inappPurchase object in the androidpublisher service. */
  kind?: string;
  /** The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
  acknowledgementState?: number;
  /** ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted. */
  regionCode?: string;
  /** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
  purchaseTimeMillis?: string;
}

export const ProductPurchase: Schema.Codec<ProductPurchase> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    consumptionState: Schema.optional(Schema.Number),
    orderId: Schema.optional(Schema.String),
    developerPayload: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    purchaseType: Schema.optional(Schema.Number),
    purchaseToken: Schema.optional(Schema.String),
    obfuscatedExternalProfileId: Schema.optional(Schema.String),
    refundableQuantity: Schema.optional(Schema.Number),
    purchaseState: Schema.optional(Schema.Number),
    obfuscatedExternalAccountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    acknowledgementState: Schema.optional(Schema.Number),
    regionCode: Schema.optional(Schema.String),
    purchaseTimeMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductPurchase" });

export interface AddTargetingResponse {}

export const AddTargetingResponse: Schema.Codec<AddTargetingResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AddTargetingResponse",
  });

export interface Price {
  /** Price in 1/million of the currency base unit, represented as a string. */
  priceMicros?: string;
  /** 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java */
  currency?: string;
}

export const Price: Schema.Codec<Price> =
  /*@__PURE__*/ Schema.Struct({
    priceMicros: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
  }).annotate({ identifier: "Price" });

export interface PartialRefund {
  /** Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction. */
  refundId?: string;
  /** Required. The pre-tax amount of the partial refund. Should be less than the remaining pre-tax amount of the transaction. */
  refundPreTaxAmount?: Price;
}

export const PartialRefund: Schema.Codec<PartialRefund> =
  /*@__PURE__*/ Schema.Struct({
    refundId: Schema.optional(Schema.String),
    refundPreTaxAmount: Schema.optional(Price),
  }).annotate({ identifier: "PartialRefund" });

export interface FullRefund {}

export const FullRefund: Schema.Codec<FullRefund> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FullRefund",
  });

export interface RefundExternalTransactionRequest {
  /** A partial refund. */
  partialRefund?: PartialRefund;
  /** Required. The time that the transaction was refunded. */
  refundTime?: string;
  /** A full-amount refund. */
  fullRefund?: FullRefund;
}

export const RefundExternalTransactionRequest: Schema.Codec<RefundExternalTransactionRequest> =
  /*@__PURE__*/ Schema.Struct({
    partialRefund: Schema.optional(PartialRefund),
    refundTime: Schema.optional(Schema.String),
    fullRefund: Schema.optional(FullRefund),
  }).annotate({ identifier: "RefundExternalTransactionRequest" });

export interface OneTimeProductPreOrderOffer {
  /** Required. Time when the pre-order will stop being available. */
  endTime?: string;
  /** Required. Immutable. Specifies how price changes affect pre-existing pre-orders. */
  priceChangeBehavior?:
    | "PRE_ORDER_PRICE_CHANGE_BEHAVIOR_UNSPECIFIED"
    | "PRE_ORDER_PRICE_CHANGE_BEHAVIOR_TWO_POINT_LOWEST"
    | "PRE_ORDER_PRICE_CHANGE_BEHAVIOR_NEW_ORDERS_ONLY"
    | (string & {});
  /** Required. Time when the pre-order will start being available. */
  startTime?: string;
  /** Required. Time on which the product associated with the pre-order will be released and the pre-order orders fulfilled. */
  releaseTime?: string;
}

export const OneTimeProductPreOrderOffer: Schema.Codec<OneTimeProductPreOrderOffer> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    priceChangeBehavior: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    releaseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeProductPreOrderOffer" });

export interface OneTimeProductOfferNoPriceOverrideOptions {}

export const OneTimeProductOfferNoPriceOverrideOptions: Schema.Codec<OneTimeProductOfferNoPriceOverrideOptions> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OneTimeProductOfferNoPriceOverrideOptions",
  });

export interface OneTimeProductOfferRegionalPricingAndAvailabilityConfig {
  /** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g., "US". */
  regionCode?: string;
  /** Required. The availability for this region. */
  availability?:
    | "AVAILABILITY_UNSPECIFIED"
    | "AVAILABLE"
    | "NO_LONGER_AVAILABLE"
    | (string & {});
  /** The price defined in the purchase option for this region will be used. */
  noOverride?: OneTimeProductOfferNoPriceOverrideOptions;
  /** The fraction of the purchase option price that the user pays for this offer. For example, if the purchase option price for this region is $12, then a 50% discount would correspond to a price of $6. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region. */
  relativeDiscount?: number;
  /** The absolute value of the discount that is subtracted from the purchase option price. It should be between 0 and the purchase option price. */
  absoluteDiscount?: Money;
}

export const OneTimeProductOfferRegionalPricingAndAvailabilityConfig: Schema.Codec<OneTimeProductOfferRegionalPricingAndAvailabilityConfig> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    availability: Schema.optional(Schema.String),
    noOverride: Schema.optional(OneTimeProductOfferNoPriceOverrideOptions),
    relativeDiscount: Schema.optional(Schema.Number),
    absoluteDiscount: Schema.optional(Money),
  }).annotate({
    identifier: "OneTimeProductOfferRegionalPricingAndAvailabilityConfig",
  });

export interface RegionsVersion {
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  version?: string;
}

export const RegionsVersion: Schema.Codec<RegionsVersion> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionsVersion" });

export interface OneTimeProductDiscountedOffer {
  /** Time when the offer will start being available. */
  startTime?: string;
  /** Time when the offer will stop being available. */
  endTime?: string;
  /** Optional. The number of times this offer can be redeemed. If unset or set to 0, allows for unlimited offer redemptions. Otherwise must be a number between 1 and 50 inclusive. */
  redemptionLimit?: string;
}

export const OneTimeProductDiscountedOffer: Schema.Codec<OneTimeProductDiscountedOffer> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    redemptionLimit: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeProductDiscountedOffer" });

export interface OneTimeProductOffer {
  /** Required. Immutable. The package name of the app the parent product belongs to. */
  packageName?: string;
  /** Output only. The current state of this offer. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. */
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "ACTIVE"
    | "CANCELLED"
    | "INACTIVE"
    | (string & {});
  /** A pre-order offer. */
  preOrderOffer?: OneTimeProductPreOrderOffer;
  /** Set of regional pricing and availability information for this offer. Must not have duplicate entries with the same region_code. */
  regionalPricingAndAvailabilityConfigs?: ReadonlyArray<OneTimeProductOfferRegionalPricingAndAvailabilityConfig>;
  /** Required. Immutable. The ID of this product offer. Must be unique within the purchase option. It must start with a number or lower-case letter, and can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-). The maximum length is 63 characters. */
  offerId?: string;
  /** Required. Immutable. The ID of the parent product this offer belongs to. */
  productId?: string;
  /** Optional. List of up to 20 custom tags specified for this offer, and returned to the app through the billing library. */
  offerTags?: ReadonlyArray<OfferTag>;
  /** Output only. The version of the regions configuration that was used to generate the one-time product offer. */
  regionsVersion?: RegionsVersion;
  /** A discounted offer. */
  discountedOffer?: OneTimeProductDiscountedOffer;
  /** Required. Immutable. The ID of the purchase option to which this offer is an extension. */
  purchaseOptionId?: string;
}

export const OneTimeProductOffer: Schema.Codec<OneTimeProductOffer> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    preOrderOffer: Schema.optional(OneTimeProductPreOrderOffer),
    regionalPricingAndAvailabilityConfigs: Schema.optional(
      Schema.Array(OneTimeProductOfferRegionalPricingAndAvailabilityConfig),
    ),
    offerId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    offerTags: Schema.optional(Schema.Array(OfferTag)),
    regionsVersion: Schema.optional(RegionsVersion),
    discountedOffer: Schema.optional(OneTimeProductDiscountedOffer),
    purchaseOptionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeProductOffer" });

export interface BatchUpdateOneTimeProductOffersResponse {
  /** The list of updated one-time product offers, in the same order as the request. */
  oneTimeProductOffers?: ReadonlyArray<OneTimeProductOffer>;
}

export const BatchUpdateOneTimeProductOffersResponse: Schema.Codec<BatchUpdateOneTimeProductOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProductOffers: Schema.optional(Schema.Array(OneTimeProductOffer)),
  }).annotate({ identifier: "BatchUpdateOneTimeProductOffersResponse" });

export interface AppVersionList {
  /** List of app version codes. */
  versionCodes?: ReadonlyArray<string>;
}

export const AppVersionList: Schema.Codec<AppVersionList> =
  /*@__PURE__*/ Schema.Struct({
    versionCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AppVersionList" });

export interface AppVersionRange {
  /** Lowest app version in the range, inclusive. */
  versionCodeStart?: string;
  /** Highest app version in the range, inclusive. */
  versionCodeEnd?: string;
}

export const AppVersionRange: Schema.Codec<AppVersionRange> =
  /*@__PURE__*/ Schema.Struct({
    versionCodeStart: Schema.optional(Schema.String),
    versionCodeEnd: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppVersionRange" });

export interface Targeting {
  /** Targeting is based on the user account region. */
  regions?: Regions;
  /** All users are targeted. */
  allUsers?: AllUsers;
  /** Targeting is based on android api levels of devices. */
  androidSdks?: AndroidSdks;
  /** Target version codes as a list. */
  versionList?: AppVersionList;
  /** Target version codes as a range. */
  versionRange?: AppVersionRange;
}

export const Targeting: Schema.Codec<Targeting> =
  /*@__PURE__*/ Schema.Struct({
    regions: Schema.optional(Regions),
    allUsers: Schema.optional(AllUsers),
    androidSdks: Schema.optional(AndroidSdks),
    versionList: Schema.optional(AppVersionList),
    versionRange: Schema.optional(AppVersionRange),
  }).annotate({ identifier: "Targeting" });

export interface RemoteInAppUpdateDataPerBundle {
  /** Total number of devices affected by this recovery action associated with bundle of the app. */
  totalDeviceCount?: string;
  /** Total number of devices which have been rescued. */
  recoveredDeviceCount?: string;
  /** Version Code corresponding to the target bundle. */
  versionCode?: string;
}

export const RemoteInAppUpdateDataPerBundle: Schema.Codec<RemoteInAppUpdateDataPerBundle> =
  /*@__PURE__*/ Schema.Struct({
    totalDeviceCount: Schema.optional(Schema.String),
    recoveredDeviceCount: Schema.optional(Schema.String),
    versionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteInAppUpdateDataPerBundle" });

export interface RemoteInAppUpdateData {
  /** Data related to the recovery action at bundle level. */
  remoteAppUpdateDataPerBundle?: ReadonlyArray<RemoteInAppUpdateDataPerBundle>;
}

export const RemoteInAppUpdateData: Schema.Codec<RemoteInAppUpdateData> =
  /*@__PURE__*/ Schema.Struct({
    remoteAppUpdateDataPerBundle: Schema.optional(
      Schema.Array(RemoteInAppUpdateDataPerBundle),
    ),
  }).annotate({ identifier: "RemoteInAppUpdateData" });

export interface AppRecoveryAction {
  /** ID corresponding to the app recovery action. */
  appRecoveryId?: string;
  /** Specifies targeting criteria for the recovery action such as regions, android sdk versions, app versions etc. */
  targeting?: Targeting;
  /** Timestamp of when the app recovery action is canceled by the developer. Only set if the recovery action has been canceled. */
  cancelTime?: string;
  /** Timestamp of when the developer last updated recovery action. In case the action is cancelled, it corresponds to cancellation time. It is always set after creation of the recovery action. */
  lastUpdateTime?: string;
  /** The status of the recovery action. */
  status?:
    | "RECOVERY_STATUS_UNSPECIFIED"
    | "RECOVERY_STATUS_ACTIVE"
    | "RECOVERY_STATUS_CANCELED"
    | "RECOVERY_STATUS_DRAFT"
    | "RECOVERY_STATUS_GENERATION_IN_PROGRESS"
    | "RECOVERY_STATUS_GENERATION_FAILED"
    | (string & {});
  /** Timestamp of when the app recovery action is created by the developer. It is always set after creation of the recovery action. */
  createTime?: string;
  /** Data about the remote in-app update action such as such as recovered user base, recoverable user base etc. Set only if the recovery action type is Remote In-App Update. */
  remoteInAppUpdateData?: RemoteInAppUpdateData;
  /** Timestamp of when the app recovery action is deployed to the users. Only set if the recovery action has been deployed. */
  deployTime?: string;
}

export const AppRecoveryAction: Schema.Codec<AppRecoveryAction> =
  /*@__PURE__*/ Schema.Struct({
    appRecoveryId: Schema.optional(Schema.String),
    targeting: Schema.optional(Targeting),
    cancelTime: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    remoteInAppUpdateData: Schema.optional(RemoteInAppUpdateData),
    deployTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppRecoveryAction" });

export interface ListAppRecoveriesResponse {
  /** List of recovery actions associated with the requested package name. */
  recoveryActions?: ReadonlyArray<AppRecoveryAction>;
}

export const ListAppRecoveriesResponse: Schema.Codec<ListAppRecoveriesResponse> =
  /*@__PURE__*/ Schema.Struct({
    recoveryActions: Schema.optional(Schema.Array(AppRecoveryAction)),
  }).annotate({ identifier: "ListAppRecoveriesResponse" });

export interface TrackTargetedCountry {
  /** The country that can be targeted, as a two-letter CLDR code. */
  countryCode?: string;
}

export const TrackTargetedCountry: Schema.Codec<TrackTargetedCountry> =
  /*@__PURE__*/ Schema.Struct({
    countryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrackTargetedCountry" });

export interface TrackCountryAvailability {
  /** Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track. */
  syncWithProduction?: boolean;
  /** A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country. */
  countries?: ReadonlyArray<TrackTargetedCountry>;
  /** Whether artifacts in this track are available to "rest of the world" countries. */
  restOfWorld?: boolean;
}

export const TrackCountryAvailability: Schema.Codec<TrackCountryAvailability> =
  /*@__PURE__*/ Schema.Struct({
    syncWithProduction: Schema.optional(Schema.Boolean),
    countries: Schema.optional(Schema.Array(TrackTargetedCountry)),
    restOfWorld: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TrackCountryAvailability" });

export interface Listing {
  /** Short description of the app. */
  shortDescription?: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language?: string;
  /** Localized title of the app. */
  title?: string;
  /** URL of a promotional YouTube video for the app. */
  video?: string;
  /** Full description of the app. */
  fullDescription?: string;
}

export const Listing: Schema.Codec<Listing> =
  /*@__PURE__*/ Schema.Struct({
    shortDescription: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    video: Schema.optional(Schema.String),
    fullDescription: Schema.optional(Schema.String),
  }).annotate({ identifier: "Listing" });

export interface ExternalOfferDetails {
  /** Optional. The type of content being reported by this transaction. Required when reporting app downloads or purchased digital content offers made in app installed through Google Play. */
  linkType?:
    | "EXTERNAL_OFFER_LINK_TYPE_UNSPECIFIED"
    | "LINK_TO_DIGITAL_CONTENT_OFFER"
    | "LINK_TO_APP_DOWNLOAD"
    | (string & {});
  /** Optional. The category of the downloaded app though this transaction. This must match the category provided in Play Console during the external app verification process. Only required for app downloads. */
  installedAppCategory?:
    | "EXTERNAL_OFFER_APP_CATEGORY_UNSPECIFIED"
    | "APP"
    | "GAME"
    | (string & {});
  /** Optional. The external transaction id associated with the app download event through an external link. Required when reporting transactions made in externally installed apps. */
  appDownloadEventExternalTransactionId?: string;
  /** Optional. The package name of the app downloaded through this transaction. Required when link_type is LINK_TO_APP_DOWNLOAD. */
  installedAppPackage?: string;
}

export const ExternalOfferDetails: Schema.Codec<ExternalOfferDetails> =
  /*@__PURE__*/ Schema.Struct({
    linkType: Schema.optional(Schema.String),
    installedAppCategory: Schema.optional(Schema.String),
    appDownloadEventExternalTransactionId: Schema.optional(Schema.String),
    installedAppPackage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalOfferDetails" });

export interface ListSubscriptionOffersResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The subscription offers from the specified subscription. */
  subscriptionOffers?: ReadonlyArray<SubscriptionOffer>;
}

export const ListSubscriptionOffersResponse: Schema.Codec<ListSubscriptionOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    subscriptionOffers: Schema.optional(Schema.Array(SubscriptionOffer)),
  }).annotate({ identifier: "ListSubscriptionOffersResponse" });

export interface ActivateSubscriptionOfferRequest {
  /** Required. The parent app (package name) of the offer to activate. */
  packageName?: string;
  /** Required. The unique offer ID of the offer to activate. */
  offerId?: string;
  /** Required. The parent base plan (ID) of the offer to activate. */
  basePlanId?: string;
  /** Required. The parent subscription (ID) of the offer to activate. */
  productId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const ActivateSubscriptionOfferRequest: Schema.Codec<ActivateSubscriptionOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivateSubscriptionOfferRequest" });

export interface DeactivateSubscriptionOfferRequest {
  /** Required. The parent app (package name) of the offer to deactivate. */
  packageName?: string;
  /** Required. The unique offer ID of the offer to deactivate. */
  offerId?: string;
  /** Required. The parent base plan (ID) of the offer to deactivate. */
  basePlanId?: string;
  /** Required. The parent subscription (ID) of the offer to deactivate. */
  productId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const DeactivateSubscriptionOfferRequest: Schema.Codec<DeactivateSubscriptionOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeactivateSubscriptionOfferRequest" });

export interface UpdateSubscriptionOfferStateRequest {
  /** Activates an offer. Once activated, the offer will be available to new subscribers. */
  activateSubscriptionOfferRequest?: ActivateSubscriptionOfferRequest;
  /** Deactivates an offer. Once deactivated, the offer will become unavailable to new subscribers, but existing subscribers will maintain their subscription */
  deactivateSubscriptionOfferRequest?: DeactivateSubscriptionOfferRequest;
}

export const UpdateSubscriptionOfferStateRequest: Schema.Codec<UpdateSubscriptionOfferStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    activateSubscriptionOfferRequest: Schema.optional(
      ActivateSubscriptionOfferRequest,
    ),
    deactivateSubscriptionOfferRequest: Schema.optional(
      DeactivateSubscriptionOfferRequest,
    ),
  }).annotate({ identifier: "UpdateSubscriptionOfferStateRequest" });

export interface DeployAppRecoveryRequest {}

export const DeployAppRecoveryRequest: Schema.Codec<DeployAppRecoveryRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeployAppRecoveryRequest",
  });

export interface PreorderDetails {}

export const PreorderDetails: Schema.Codec<PreorderDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PreorderDetails",
  });

export interface RentalDetails {}

export const RentalDetails: Schema.Codec<RentalDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RentalDetails",
  });

export interface OneTimePurchaseDetails {
  /** The offer ID of the one-time purchase offer. */
  offerId?: string;
  /** The details of a pre-order purchase. Only set if it is a pre-order purchase. Note that this field will be set even after pre-order is fulfilled. */
  preorderDetails?: PreorderDetails;
  /** The number of items purchased (for multi-quantity item purchases). */
  quantity?: number;
  /** ID of the purchase option. This field is set for both purchase options and variant offers. For purchase options, this ID identifies the purchase option itself. For variant offers, this ID refers to the associated purchase option, and in conjunction with offer_id it identifies the variant offer. */
  purchaseOptionId?: string;
  /** The details of a rent purchase. Only set if it is a rent purchase. */
  rentalDetails?: RentalDetails;
}

export const OneTimePurchaseDetails: Schema.Codec<OneTimePurchaseDetails> =
  /*@__PURE__*/ Schema.Struct({
    offerId: Schema.optional(Schema.String),
    preorderDetails: Schema.optional(PreorderDetails),
    quantity: Schema.optional(Schema.Number),
    purchaseOptionId: Schema.optional(Schema.String),
    rentalDetails: Schema.optional(RentalDetails),
  }).annotate({ identifier: "OneTimePurchaseDetails" });

export interface ProrationPeriodDetails {
  /** Represent the original offer phase from the purchased the line item if the proration period contains any of them. For example, a proration period from CHARGE_FULL_PRICE plan change may merge the 1st offer phase of the subscription offer of the new product user purchased. In this case, the original offer phase will be set here. */
  originalOfferPhase?:
    | "OFFER_PHASE_UNSPECIFIED"
    | "BASE"
    | "INTRODUCTORY"
    | "FREE_TRIAL"
    | (string & {});
}

export const ProrationPeriodDetails: Schema.Codec<ProrationPeriodDetails> =
  /*@__PURE__*/ Schema.Struct({
    originalOfferPhase: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProrationPeriodDetails" });

export interface FreeTrialDetails {}

export const FreeTrialDetails: Schema.Codec<FreeTrialDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FreeTrialDetails",
  });

export interface IntroductoryPriceDetails {}

export const IntroductoryPriceDetails: Schema.Codec<IntroductoryPriceDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "IntroductoryPriceDetails",
  });

export interface BaseDetails {}

export const BaseDetails: Schema.Codec<BaseDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BaseDetails",
  });

export interface OfferPhaseDetails {
  /** The order funds a proration period. */
  prorationPeriodDetails?: ProrationPeriodDetails;
  /** The order funds a free trial period. */
  freeTrialDetails?: FreeTrialDetails;
  /** The order funds an introductory pricing period. */
  introductoryPriceDetails?: IntroductoryPriceDetails;
  /** The order funds a base price period. */
  baseDetails?: BaseDetails;
}

export const OfferPhaseDetails: Schema.Codec<OfferPhaseDetails> =
  /*@__PURE__*/ Schema.Struct({
    prorationPeriodDetails: Schema.optional(ProrationPeriodDetails),
    freeTrialDetails: Schema.optional(FreeTrialDetails),
    introductoryPriceDetails: Schema.optional(IntroductoryPriceDetails),
    baseDetails: Schema.optional(BaseDetails),
  }).annotate({ identifier: "OfferPhaseDetails" });

export interface SubscriptionDetails {
  /** The offer ID for the current subscription offer. */
  offerId?: string;
  /** Deprecated: Use offer_phase_details instead. The pricing phase for the billing period funded by this order. */
  offerPhase?:
    | "OFFER_PHASE_UNSPECIFIED"
    | "BASE"
    | "INTRODUCTORY"
    | "FREE_TRIAL"
    | (string & {});
  /** The pricing phase details for the entitlement period funded by this order. */
  offerPhaseDetails?: OfferPhaseDetails;
  /** The start of the billing period funded by this order. This is a snapshot of the billing/service period start time at the moment the order was processed, and should be used only for accounting. */
  servicePeriodStartTime?: string;
  /** The end of the billing period funded by this order. This is a snapshot of the billing/service period end time at the moment the order was processed, and should be used only for accounting. To get the current end time of the subscription service period, use purchases.subscriptionsv2.get. */
  servicePeriodEndTime?: string;
  /** The base plan ID of the subscription. */
  basePlanId?: string;
}

export const SubscriptionDetails: Schema.Codec<SubscriptionDetails> =
  /*@__PURE__*/ Schema.Struct({
    offerId: Schema.optional(Schema.String),
    offerPhase: Schema.optional(Schema.String),
    offerPhaseDetails: Schema.optional(OfferPhaseDetails),
    servicePeriodStartTime: Schema.optional(Schema.String),
    servicePeriodEndTime: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionDetails" });

export interface LineItem {
  /** The tax paid for this line item. */
  tax?: Money;
  /** Details of a paid app purchase. */
  paidAppDetails?: PaidAppDetails;
  /** The purchased product ID or in-app SKU (for example, 'monthly001' or 'com.some.thing.inapp1'). */
  productId?: string;
  /** Details of a one-time purchase. */
  oneTimePurchaseDetails?: OneTimePurchaseDetails;
  /** Details of a subscription purchase. */
  subscriptionDetails?: SubscriptionDetails;
  /** The total amount paid by the user for this line item, taking into account discounts and tax. */
  total?: Money;
  /** Developer-specified name of the product. Displayed in buyer's locale. Example: coins, monthly subscription, etc. */
  productTitle?: string;
  /** Item's listed price on Play Store, this may or may not include tax. Excludes Google-funded discounts only. */
  listingPrice?: Money;
}

export const LineItem: Schema.Codec<LineItem> =
  /*@__PURE__*/ Schema.Struct({
    tax: Schema.optional(Money),
    paidAppDetails: Schema.optional(PaidAppDetails),
    productId: Schema.optional(Schema.String),
    oneTimePurchaseDetails: Schema.optional(OneTimePurchaseDetails),
    subscriptionDetails: Schema.optional(SubscriptionDetails),
    total: Schema.optional(Money),
    productTitle: Schema.optional(Schema.String),
    listingPrice: Schema.optional(Money),
  }).annotate({ identifier: "LineItem" });

export interface AssetModuleMetadata {
  /** Module name. */
  name?: string;
  /** Indicates the delivery type for persistent install. */
  deliveryType?:
    | "UNKNOWN_DELIVERY_TYPE"
    | "INSTALL_TIME"
    | "ON_DEMAND"
    | "FAST_FOLLOW"
    | (string & {});
}

export const AssetModuleMetadata: Schema.Codec<AssetModuleMetadata> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    deliveryType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetModuleMetadata" });

export interface AssetSliceSet {
  /** Module level metadata. */
  assetModuleMetadata?: AssetModuleMetadata;
  /** Asset slices. */
  apkDescription?: ReadonlyArray<ApkDescription>;
}

export const AssetSliceSet: Schema.Codec<AssetSliceSet> =
  /*@__PURE__*/ Schema.Struct({
    assetModuleMetadata: Schema.optional(AssetModuleMetadata),
    apkDescription: Schema.optional(Schema.Array(ApkDescription)),
  }).annotate({ identifier: "AssetSliceSet" });

export interface TargetingInfo {
  /** List of the created variants. */
  variant?: ReadonlyArray<SplitApkVariant>;
  /** The package name of this app. */
  packageName?: string;
  /** List of created asset slices. */
  assetSliceSet?: ReadonlyArray<AssetSliceSet>;
}

export const TargetingInfo: Schema.Codec<TargetingInfo> =
  /*@__PURE__*/ Schema.Struct({
    variant: Schema.optional(Schema.Array(SplitApkVariant)),
    packageName: Schema.optional(Schema.String),
    assetSliceSet: Schema.optional(Schema.Array(AssetSliceSet)),
  }).annotate({ identifier: "TargetingInfo" });

export interface RegionalProductAgeRatingInfo {
  /** Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
  regionCode?: string;
  /** The age rating tier of a product for the given region. */
  productAgeRatingTier?:
    | "PRODUCT_AGE_RATING_TIER_UNKNOWN"
    | "PRODUCT_AGE_RATING_TIER_EVERYONE"
    | "PRODUCT_AGE_RATING_TIER_THIRTEEN_AND_ABOVE"
    | "PRODUCT_AGE_RATING_TIER_SIXTEEN_AND_ABOVE"
    | "PRODUCT_AGE_RATING_TIER_EIGHTEEN_AND_ABOVE"
    | (string & {});
}

export const RegionalProductAgeRatingInfo: Schema.Codec<RegionalProductAgeRatingInfo> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    productAgeRatingTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalProductAgeRatingInfo" });

export interface RegionalTaxRateInfo {
  /** Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498). */
  taxTier?:
    | "TAX_TIER_UNSPECIFIED"
    | "TAX_TIER_BOOKS_1"
    | "TAX_TIER_NEWS_1"
    | "TAX_TIER_NEWS_2"
    | "TAX_TIER_MUSIC_OR_AUDIO_1"
    | "TAX_TIER_LIVE_OR_BROADCAST_1"
    | (string & {});
  /** You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in the United States. */
  eligibleForStreamingServiceTaxRate?: boolean;
  /** To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax). */
  streamingTaxType?:
    | "STREAMING_TAX_TYPE_UNSPECIFIED"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"
    | (string & {});
}

export const RegionalTaxRateInfo: Schema.Codec<RegionalTaxRateInfo> =
  /*@__PURE__*/ Schema.Struct({
    taxTier: Schema.optional(Schema.String),
    eligibleForStreamingServiceTaxRate: Schema.optional(Schema.Boolean),
    streamingTaxType: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalTaxRateInfo" });

export interface SubscriptionTaxAndComplianceSettings {
  /** Regional age rating information. Currently this field is only supported for region code `US`. */
  regionalProductAgeRatingInfos?: ReadonlyArray<RegionalProductAgeRatingInfo>;
  /** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
  eeaWithdrawalRightType?:
    | "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    | "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    | "WITHDRAWAL_RIGHT_SERVICE"
    | (string & {});
  /** Product tax category code to assign to the subscription. Product tax category determines the transaction tax rates applied to the subscription. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/16408159) for more information. */
  productTaxCategoryCode?: string;
  /** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
  taxRateInfoByRegionCode?: Record<string, RegionalTaxRateInfo>;
  /** Whether this subscription is declared as a product representing a tokenized digital asset. */
  isTokenizedDigitalAsset?: boolean;
}

export const SubscriptionTaxAndComplianceSettings: Schema.Codec<SubscriptionTaxAndComplianceSettings> =
  /*@__PURE__*/ Schema.Struct({
    regionalProductAgeRatingInfos: Schema.optional(
      Schema.Array(RegionalProductAgeRatingInfo),
    ),
    eeaWithdrawalRightType: Schema.optional(Schema.String),
    productTaxCategoryCode: Schema.optional(Schema.String),
    taxRateInfoByRegionCode: Schema.optional(
      Schema.Record(Schema.String, RegionalTaxRateInfo),
    ),
    isTokenizedDigitalAsset: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SubscriptionTaxAndComplianceSettings" });

export interface RestrictedPaymentCountries {
  /** Required. Region codes to impose payment restrictions on, as defined by ISO 3166-2, e.g. "US". */
  regionCodes?: ReadonlyArray<string>;
}

export const RestrictedPaymentCountries: Schema.Codec<RestrictedPaymentCountries> =
  /*@__PURE__*/ Schema.Struct({
    regionCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RestrictedPaymentCountries" });

export interface SubscriptionListing {
  /** Required. The title of this subscription in the language of this listing. Plain text. */
  title?: string;
  /** The description of this subscription in the language of this listing. Maximum length - 200 characters. Plain text. */
  description?: string;
  /** Required. The language of this listing, as defined by BCP-47, e.g. "en-US". */
  languageCode?: string;
  /** A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits. */
  benefits?: ReadonlyArray<string>;
}

export const SubscriptionListing: Schema.Codec<SubscriptionListing> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    benefits: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SubscriptionListing" });

export interface Subscription {
  /** Output only. Deprecated: subscription archiving is not supported. */
  archived?: boolean;
  /** Details about taxes and legal compliance. */
  taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
  /** Immutable. Package name of the parent app. */
  packageName?: string;
  /** Optional. Countries where the purchase of this subscription is restricted to payment methods registered in the same country. If empty, no payment location restrictions are imposed. */
  restrictedPaymentCountries?: RestrictedPaymentCountries;
  /** Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. */
  productId?: string;
  /** Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app. */
  listings?: ReadonlyArray<SubscriptionListing>;
  /** The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply. */
  basePlans?: ReadonlyArray<BasePlan>;
}

export const Subscription: Schema.Codec<Subscription> =
  /*@__PURE__*/ Schema.Struct({
    archived: Schema.optional(Schema.Boolean),
    taxAndComplianceSettings: Schema.optional(
      SubscriptionTaxAndComplianceSettings,
    ),
    packageName: Schema.optional(Schema.String),
    restrictedPaymentCountries: Schema.optional(RestrictedPaymentCountries),
    productId: Schema.optional(Schema.String),
    listings: Schema.optional(Schema.Array(SubscriptionListing)),
    basePlans: Schema.optional(Schema.Array(BasePlan)),
  }).annotate({ identifier: "Subscription" });

export interface ItemExpiryTimeDetails {
  /** The product ID of the subscription item (for example, 'premium_plan'). */
  productId?: string;
  /** The new expiry time for this subscription item. */
  expiryTime?: string;
}

export const ItemExpiryTimeDetails: Schema.Codec<ItemExpiryTimeDetails> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemExpiryTimeDetails" });

export interface DeferSubscriptionPurchaseResponse {
  /** The new expiry time for each subscription items. */
  itemExpiryTimeDetails?: ReadonlyArray<ItemExpiryTimeDetails>;
}

export const DeferSubscriptionPurchaseResponse: Schema.Codec<DeferSubscriptionPurchaseResponse> =
  /*@__PURE__*/ Schema.Struct({
    itemExpiryTimeDetails: Schema.optional(Schema.Array(ItemExpiryTimeDetails)),
  }).annotate({ identifier: "DeferSubscriptionPurchaseResponse" });

export interface UsesPermission {
  /** The name of the permission requested. */
  name?: string;
  /** Optionally, the maximum SDK version for which the permission is required. */
  maxSdkVersion?: number;
}

export const UsesPermission: Schema.Codec<UsesPermission> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    maxSdkVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UsesPermission" });

export interface ApkBinary {
  /** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
  sha256?: string;
  /** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
  sha1?: string;
}

export const ApkBinary: Schema.Codec<ApkBinary> =
  /*@__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    sha1: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApkBinary" });

export interface Apk {
  /** The version code of the APK, as specified in the manifest file. */
  versionCode?: number;
  /** Information about the binary payload of this APK. */
  binary?: ApkBinary;
}

export const Apk: Schema.Codec<Apk> = /*@__PURE__*/ Schema.Struct({
  versionCode: Schema.optional(Schema.Number),
  binary: Schema.optional(ApkBinary),
}).annotate({ identifier: "Apk" });

export interface LocalizedText {
  /** The text in the given language. */
  text?: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language?: string;
}

export const LocalizedText: Schema.Codec<LocalizedText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedText" });

export interface ExternalSubscription {
  /** Required. The type of the external subscription. */
  subscriptionType?:
    | "SUBSCRIPTION_TYPE_UNSPECIFIED"
    | "RECURRING"
    | "PREPAID"
    | (string & {});
}

export const ExternalSubscription: Schema.Codec<ExternalSubscription> =
  /*@__PURE__*/ Schema.Struct({
    subscriptionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalSubscription" });

export interface CancelSurveyResult {
  /** The reason the user selected in the cancel survey. */
  reason?:
    | "CANCEL_SURVEY_REASON_UNSPECIFIED"
    | "CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE"
    | "CANCEL_SURVEY_REASON_TECHNICAL_ISSUES"
    | "CANCEL_SURVEY_REASON_COST_RELATED"
    | "CANCEL_SURVEY_REASON_FOUND_BETTER_APP"
    | "CANCEL_SURVEY_REASON_OTHERS"
    | (string & {});
  /** Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey. */
  reasonUserInput?: string;
}

export const CancelSurveyResult: Schema.Codec<CancelSurveyResult> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    reasonUserInput: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelSurveyResult" });

export interface DeviceMetadata {
  /** Device CPU model, e.g. "MSM8974" */
  cpuModel?: string;
  /** Screen density in DPI */
  screenDensityDpi?: number;
  /** Comma separated list of native platforms (e.g. "arm", "arm7") */
  nativePlatform?: string;
  /** Device CPU make, e.g. "Qualcomm" */
  cpuMake?: string;
  /** Device class (e.g. tablet) */
  deviceClass?: string;
  /** Device manufacturer (e.g. Motorola) */
  manufacturer?: string;
  /** Screen width in pixels */
  screenWidthPx?: number;
  /** OpenGL version */
  glEsVersion?: number;
  /** Screen height in pixels */
  screenHeightPx?: number;
  /** Device model name (e.g. Droid) */
  productName?: string;
  /** Device RAM in Megabytes, e.g. "2048" */
  ramMb?: number;
}

export const DeviceMetadata: Schema.Codec<DeviceMetadata> =
  /*@__PURE__*/ Schema.Struct({
    cpuModel: Schema.optional(Schema.String),
    screenDensityDpi: Schema.optional(Schema.Number),
    nativePlatform: Schema.optional(Schema.String),
    cpuMake: Schema.optional(Schema.String),
    deviceClass: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    screenWidthPx: Schema.optional(Schema.Number),
    glEsVersion: Schema.optional(Schema.Number),
    screenHeightPx: Schema.optional(Schema.Number),
    productName: Schema.optional(Schema.String),
    ramMb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeviceMetadata" });

export interface UserComment {
  /** Number of users who have given this review a thumbs up. */
  thumbsUpCount?: number;
  /** Number of users who have given this review a thumbs down. */
  thumbsDownCount?: number;
  /** The star rating associated with the review, from 1 to 5. */
  starRating?: number;
  /** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
  reviewerLanguage?: string;
  /** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
  text?: string;
  /** String version name of the app as installed at the time the review was written. May be absent. */
  appVersionName?: string;
  /** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
  androidOsVersion?: number;
  /** The last time at which this comment was updated. */
  lastModified?: Timestamp;
  /** Integer version code of the app as installed at the time the review was written. May be absent. */
  appVersionCode?: number;
  /** Untranslated text of the review, where the review was translated. If the review was not translated this is left blank. */
  originalText?: string;
  /** Information about the characteristics of the user's device. */
  deviceMetadata?: DeviceMetadata;
  /** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
  device?: string;
}

export const UserComment: Schema.Codec<UserComment> =
  /*@__PURE__*/ Schema.Struct({
    thumbsUpCount: Schema.optional(Schema.Number),
    thumbsDownCount: Schema.optional(Schema.Number),
    starRating: Schema.optional(Schema.Number),
    reviewerLanguage: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    appVersionName: Schema.optional(Schema.String),
    androidOsVersion: Schema.optional(Schema.Number),
    lastModified: Schema.optional(Timestamp),
    appVersionCode: Schema.optional(Schema.Number),
    originalText: Schema.optional(Schema.String),
    deviceMetadata: Schema.optional(DeviceMetadata),
    device: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserComment" });

export interface Comment {
  /** A comment from a user. */
  userComment?: UserComment;
  /** A comment from a developer. */
  developerComment?: DeveloperComment;
}

export const Comment: Schema.Codec<Comment> =
  /*@__PURE__*/ Schema.Struct({
    userComment: Schema.optional(UserComment),
    developerComment: Schema.optional(DeveloperComment),
  }).annotate({ identifier: "Comment" });

export interface Review {
  /** The name of the user who wrote the review. */
  authorName?: string;
  /** Unique identifier for this review. */
  reviewId?: string;
  /** A repeated field containing comments for the review. */
  comments?: ReadonlyArray<Comment>;
}

export const Review: Schema.Codec<Review> =
  /*@__PURE__*/ Schema.Struct({
    authorName: Schema.optional(Schema.String),
    reviewId: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.Array(Comment)),
  }).annotate({ identifier: "Review" });

export interface TokenPagination {
  previousPageToken?: string;
  /** Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index. */
  nextPageToken?: string;
}

export const TokenPagination: Schema.Codec<TokenPagination> =
  /*@__PURE__*/ Schema.Struct({
    previousPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "TokenPagination" });

export interface PageInfo {
  /** Index of the first result returned in the current page. */
  startIndex?: number;
  /** Total number of results available on the backend ! The total number of results in the result set. */
  totalResults?: number;
  /** Maximum number of results returned in one page. ! The number of results included in the API response. */
  resultPerPage?: number;
}

export const PageInfo: Schema.Codec<PageInfo> =
  /*@__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    totalResults: Schema.optional(Schema.Number),
    resultPerPage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PageInfo" });

export interface ReviewsListResponse {
  /** List of reviews. */
  reviews?: ReadonlyArray<Review>;
  /** Pagination token, to handle a number of products that is over one page. */
  tokenPagination?: TokenPagination;
  /** Information about the current page. */
  pageInfo?: PageInfo;
}

export const ReviewsListResponse: Schema.Codec<ReviewsListResponse> =
  /*@__PURE__*/ Schema.Struct({
    reviews: Schema.optional(Schema.Array(Review)),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
  }).annotate({ identifier: "ReviewsListResponse" });

export interface SubscriptionCancelSurveyResult {
  /** The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app */
  cancelSurveyReason?: number;
  /** The customized input cancel reason from the user. Only present when cancelReason is 0. */
  userInputCancelReason?: string;
}

export const SubscriptionCancelSurveyResult: Schema.Codec<SubscriptionCancelSurveyResult> =
  /*@__PURE__*/ Schema.Struct({
    cancelSurveyReason: Schema.optional(Schema.Number),
    userInputCancelReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionCancelSurveyResult" });

export interface BatchUpdateBasePlanStatesResponse {
  /** The list of updated subscriptions. This list will match the requests one to one, in the same order. */
  subscriptions?: ReadonlyArray<Subscription>;
}

export const BatchUpdateBasePlanStatesResponse: Schema.Codec<BatchUpdateBasePlanStatesResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
  }).annotate({ identifier: "BatchUpdateBasePlanStatesResponse" });

export interface RentOfferDetails {}

export const RentOfferDetails: Schema.Codec<RentOfferDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RentOfferDetails",
  });

export interface PreorderOfferDetails {
  /** The time when a preordered item is released for a preorder purchase. */
  preorderReleaseTime?: string;
}

export const PreorderOfferDetails: Schema.Codec<PreorderOfferDetails> =
  /*@__PURE__*/ Schema.Struct({
    preorderReleaseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreorderOfferDetails" });

export interface ProductOfferDetails {
  /** The quantity eligible for refund, i.e. quantity that hasn't been refunded. The value reflects quantity-based partial refunds and full refunds. */
  refundableQuantity?: number;
  /** The latest offer tags associated with the offer. It includes tags inherited from the purchase option. */
  offerTags?: ReadonlyArray<string>;
  /** Offer details about rent offers. This will only be set for rental line items. */
  rentOfferDetails?: RentOfferDetails;
  /** The per-transaction offer token used to make this purchase line item. */
  offerToken?: string;
  /** The purchase option ID. */
  purchaseOptionId?: string;
  /** The quantity associated with the purchase of the inapp product. */
  quantity?: number;
  /** The offer ID. Only present for offers. */
  offerId?: string;
  /** Output only. The consumption state of the purchase. */
  consumptionState?:
    | "CONSUMPTION_STATE_UNSPECIFIED"
    | "CONSUMPTION_STATE_YET_TO_BE_CONSUMED"
    | "CONSUMPTION_STATE_CONSUMED"
    | (string & {});
  /** Offer details for a preorder offer. This will only be set for preorders. */
  preorderOfferDetails?: PreorderOfferDetails;
}

export const ProductOfferDetails: Schema.Codec<ProductOfferDetails> =
  /*@__PURE__*/ Schema.Struct({
    refundableQuantity: Schema.optional(Schema.Number),
    offerTags: Schema.optional(Schema.Array(Schema.String)),
    rentOfferDetails: Schema.optional(RentOfferDetails),
    offerToken: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    offerId: Schema.optional(Schema.String),
    consumptionState: Schema.optional(Schema.String),
    preorderOfferDetails: Schema.optional(PreorderOfferDetails),
  }).annotate({ identifier: "ProductOfferDetails" });

export interface RevocationContextProratedRefund {}

export const RevocationContextProratedRefund: Schema.Codec<RevocationContextProratedRefund> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RevocationContextProratedRefund",
  });

export interface Image {
  /** A unique id representing this image. */
  id?: string;
  /** A sha256 hash of the image. */
  sha256?: string;
  /** Optional. Whether the image was generated by AI. Attested by the developer. */
  aiGeneratedState?:
    | "aiGeneratedStateUnspecified"
    | "aiGeneratedStateNotAiGenerated"
    | "aiGeneratedStateAiGeneratedDeveloperAttested"
    | (string & {});
  /** A sha1 hash of the image. */
  sha1?: string;
  /** A URL that will serve a preview of the image. */
  url?: string;
}

export const Image: Schema.Codec<Image> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    aiGeneratedState: Schema.optional(Schema.String),
    sha1: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Image" });

export interface ImagesDeleteAllResponse {
  /** The deleted images. */
  deleted?: ReadonlyArray<Image>;
}

export const ImagesDeleteAllResponse: Schema.Codec<ImagesDeleteAllResponse> =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.optional(Schema.Array(Image)),
  }).annotate({ identifier: "ImagesDeleteAllResponse" });

export interface VoidedPurchase {
  /** This kind represents a voided purchase object in the androidpublisher service. */
  kind?: string;
  /** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
  purchaseToken?: string;
  /** The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google */
  voidedSource?: number;
  /** The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal. */
  orderId?: string;
  /** The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback 8. Unacknowledged_purchase */
  voidedReason?: number;
  /** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
  purchaseTimeMillis?: string;
  /** The voided quantity as the result of a quantity-based partial refund. Voided purchases of quantity-based partial refunds may only be returned when includeQuantityBasedPartialRefund is set to true. */
  voidedQuantity?: number;
  /** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
  voidedTimeMillis?: string;
}

export const VoidedPurchase: Schema.Codec<VoidedPurchase> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    purchaseToken: Schema.optional(Schema.String),
    voidedSource: Schema.optional(Schema.Number),
    orderId: Schema.optional(Schema.String),
    voidedReason: Schema.optional(Schema.Number),
    purchaseTimeMillis: Schema.optional(Schema.String),
    voidedQuantity: Schema.optional(Schema.Number),
    voidedTimeMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "VoidedPurchase" });

export interface VoidedPurchasesListResponse {
  /** Pagination information for token pagination. */
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  voidedPurchases?: ReadonlyArray<VoidedPurchase>;
}

export const VoidedPurchasesListResponse: Schema.Codec<VoidedPurchasesListResponse> =
  /*@__PURE__*/ Schema.Struct({
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    voidedPurchases: Schema.optional(Schema.Array(VoidedPurchase)),
  }).annotate({ identifier: "VoidedPurchasesListResponse" });

export interface ImagesUploadResponse {
  /** The uploaded image. */
  image?: Image;
}

export const ImagesUploadResponse: Schema.Codec<ImagesUploadResponse> =
  /*@__PURE__*/ Schema.Struct({
    image: Schema.optional(Image),
  }).annotate({ identifier: "ImagesUploadResponse" });

export interface InternalAppSharingArtifact {
  /** The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it. */
  downloadUrl?: string;
  /** The sha256 fingerprint of the certificate used to sign the generated artifact. */
  certificateFingerprint?: string;
  /** The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command. */
  sha256?: string;
}

export const InternalAppSharingArtifact: Schema.Codec<InternalAppSharingArtifact> =
  /*@__PURE__*/ Schema.Struct({
    downloadUrl: Schema.optional(Schema.String),
    certificateFingerprint: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "InternalAppSharingArtifact" });

export interface CountryTargeting {
  /** Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html). */
  countries?: ReadonlyArray<string>;
  /** Include "rest of world" as well as explicitly targeted countries. */
  includeRestOfWorld?: boolean;
}

export const CountryTargeting: Schema.Codec<CountryTargeting> =
  /*@__PURE__*/ Schema.Struct({
    countries: Schema.optional(Schema.Array(Schema.String)),
    includeRestOfWorld: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CountryTargeting" });

export interface TrackRelease {
  /** A description of what is new in this release. */
  releaseNotes?: ReadonlyArray<LocalizedText>;
  /** In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates. */
  inAppUpdatePriority?: number;
  /** Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted". */
  userFraction?: number;
  /** Version codes of all APKs in the release. Must include version codes to retain from previous releases. */
  versionCodes?: ReadonlyArray<string>;
  /** The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date. */
  name?: string;
  /** The status of the release. */
  status?:
    | "statusUnspecified"
    | "draft"
    | "inProgress"
    | "halted"
    | "completed"
    | (string & {});
  /** Restricts a release to a specific set of countries. Note this is only allowed to be set for inProgress releases in the production track. */
  countryTargeting?: CountryTargeting;
}

export const TrackRelease: Schema.Codec<TrackRelease> =
  /*@__PURE__*/ Schema.Struct({
    releaseNotes: Schema.optional(Schema.Array(LocalizedText)),
    inAppUpdatePriority: Schema.optional(Schema.Number),
    userFraction: Schema.optional(Schema.Number),
    versionCodes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    countryTargeting: Schema.optional(CountryTargeting),
  }).annotate({ identifier: "TrackRelease" });

export interface Track {
  /** Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
  track?: string;
  /** In a read request, represents all active releases in the track. In an update request, represents desired changes. */
  releases?: ReadonlyArray<TrackRelease>;
}

export const Track: Schema.Codec<Track> =
  /*@__PURE__*/ Schema.Struct({
    track: Schema.optional(Schema.String),
    releases: Schema.optional(Schema.Array(TrackRelease)),
  }).annotate({ identifier: "Track" });

export interface TracksListResponse {
  /** All tracks (including tracks with no releases). */
  tracks?: ReadonlyArray<Track>;
  /** The kind of this response ("androidpublisher#tracksListResponse"). */
  kind?: string;
}

export const TracksListResponse: Schema.Codec<TracksListResponse> =
  /*@__PURE__*/ Schema.Struct({
    tracks: Schema.optional(Schema.Array(Track)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TracksListResponse" });

export interface UpdateOneTimeProductOfferRequest {
  /** Required. The version of the available regions being used for the offer. */
  regionsVersion?: RegionsVersion;
  /** Optional. If set to true, and the offer with the given package_name, product_id, purchase_option_id and offer_id doesn't exist, an offer will be created. If a new offer is created, the update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Required. The one-time product offer to update. */
  oneTimeProductOffer?: OneTimeProductOffer;
  /** Optional. The latency tolerance for the propagation of this offer update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const UpdateOneTimeProductOfferRequest: Schema.Codec<UpdateOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    regionsVersion: Schema.optional(RegionsVersion),
    allowMissing: Schema.optional(Schema.Boolean),
    updateMask: Schema.optional(Schema.String),
    oneTimeProductOffer: Schema.optional(OneTimeProductOffer),
    latencyTolerance: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateOneTimeProductOfferRequest" });

export interface BatchUpdateOneTimeProductOffersRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must update different offers. */
  requests?: ReadonlyArray<UpdateOneTimeProductOfferRequest>;
}

export const BatchUpdateOneTimeProductOffersRequest: Schema.Codec<BatchUpdateOneTimeProductOffersRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateOneTimeProductOfferRequest)),
  }).annotate({ identifier: "BatchUpdateOneTimeProductOffersRequest" });

export interface CreateDraftAppRecoveryRequest {
  /** Action type is remote in-app update. As a consequence of this action, a downloadable recovery module is also created for testing purposes. */
  remoteInAppUpdate?: RemoteInAppUpdate;
  /** Specifies targeting criteria for the recovery action such as regions, android sdk versions, app versions etc. */
  targeting?: Targeting;
}

export const CreateDraftAppRecoveryRequest: Schema.Codec<CreateDraftAppRecoveryRequest> =
  /*@__PURE__*/ Schema.Struct({
    remoteInAppUpdate: Schema.optional(RemoteInAppUpdate),
    targeting: Schema.optional(Targeting),
  }).annotate({ identifier: "CreateDraftAppRecoveryRequest" });

export interface ConvertedRegionPrice {
  /** The converted price tax inclusive. */
  price?: Money;
  /** The region code of the region. */
  regionCode?: string;
  /** The tax amount of the converted price. */
  taxAmount?: Money;
}

export const ConvertedRegionPrice: Schema.Codec<ConvertedRegionPrice> =
  /*@__PURE__*/ Schema.Struct({
    price: Schema.optional(Money),
    regionCode: Schema.optional(Schema.String),
    taxAmount: Schema.optional(Money),
  }).annotate({ identifier: "ConvertedRegionPrice" });

export interface ConvertedOtherRegionsPrice {
  /** Price in EUR to use for the "Other regions" location exclusive of taxes. */
  eurPrice?: Money;
  /** Price in USD to use for the "Other regions" location exclusive of taxes. */
  usdPrice?: Money;
}

export const ConvertedOtherRegionsPrice: Schema.Codec<ConvertedOtherRegionsPrice> =
  /*@__PURE__*/ Schema.Struct({
    eurPrice: Schema.optional(Money),
    usdPrice: Schema.optional(Money),
  }).annotate({ identifier: "ConvertedOtherRegionsPrice" });

export interface ConvertRegionPricesResponse {
  /** Map from region code to converted region price. */
  convertedRegionPrices?: Record<string, ConvertedRegionPrice>;
  /** Converted other regions prices in USD and EUR, to use for countries where Play doesn't support a country's local currency. */
  convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;
  /** The region version at which the prices were generated. */
  regionVersion?: RegionsVersion;
}

export const ConvertRegionPricesResponse: Schema.Codec<ConvertRegionPricesResponse> =
  /*@__PURE__*/ Schema.Struct({
    convertedRegionPrices: Schema.optional(
      Schema.Record(Schema.String, ConvertedRegionPrice),
    ),
    convertedOtherRegionsPrice: Schema.optional(ConvertedOtherRegionsPrice),
    regionVersion: Schema.optional(RegionsVersion),
  }).annotate({ identifier: "ConvertRegionPricesResponse" });

export interface SystemApkOptions {
  /** Whether system APK was generated with uncompressed dex files. */
  uncompressedDexFiles?: boolean;
  /** Whether to use the rotated key for signing the system APK. */
  rotated?: boolean;
  /** Whether system APK was generated with uncompressed native libraries. */
  uncompressedNativeLibraries?: boolean;
}

export const SystemApkOptions: Schema.Codec<SystemApkOptions> =
  /*@__PURE__*/ Schema.Struct({
    uncompressedDexFiles: Schema.optional(Schema.Boolean),
    rotated: Schema.optional(Schema.Boolean),
    uncompressedNativeLibraries: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SystemApkOptions" });

export interface DeviceSpec {
  /** Screen dpi. */
  screenDensity?: number;
  /** Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64". */
  supportedAbis?: ReadonlyArray<string>;
  /** All installed locales represented as BCP-47 strings, e.g. "en-US". */
  supportedLocales?: ReadonlyArray<string>;
}

export const DeviceSpec: Schema.Codec<DeviceSpec> =
  /*@__PURE__*/ Schema.Struct({
    screenDensity: Schema.optional(Schema.Number),
    supportedAbis: Schema.optional(Schema.Array(Schema.String)),
    supportedLocales: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DeviceSpec" });

export interface Variant {
  /** Optional. Options applied to the generated APK. */
  options?: SystemApkOptions;
  /** The device spec used to generate the APK. */
  deviceSpec?: DeviceSpec;
  /** Output only. The ID of a previously created system APK variant. */
  variantId?: number;
}

export const Variant: Schema.Codec<Variant> =
  /*@__PURE__*/ Schema.Struct({
    options: Schema.optional(SystemApkOptions),
    deviceSpec: Schema.optional(DeviceSpec),
    variantId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Variant" });

export interface SystemApksListResponse {
  /** All system APK variants created. */
  variants?: ReadonlyArray<Variant>;
}

export const SystemApksListResponse: Schema.Codec<SystemApksListResponse> =
  /*@__PURE__*/ Schema.Struct({
    variants: Schema.optional(Schema.Array(Variant)),
  }).annotate({ identifier: "SystemApksListResponse" });

export interface ArtifactSummary {
  /** Artifact's version code */
  versionCode?: number;
}

export const ArtifactSummary: Schema.Codec<ArtifactSummary> =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ArtifactSummary" });

export interface DeviceTier {
  /** Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration. */
  deviceGroupNames?: ReadonlyArray<string>;
  /** The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration. */
  level?: number;
}

export const DeviceTier: Schema.Codec<DeviceTier> =
  /*@__PURE__*/ Schema.Struct({
    deviceGroupNames: Schema.optional(Schema.Array(Schema.String)),
    level: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeviceTier" });

export interface RegionalTaxConfig {
  /** Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498). */
  taxTier?:
    | "TAX_TIER_UNSPECIFIED"
    | "TAX_TIER_BOOKS_1"
    | "TAX_TIER_NEWS_1"
    | "TAX_TIER_NEWS_2"
    | "TAX_TIER_MUSIC_OR_AUDIO_1"
    | "TAX_TIER_LIVE_OR_BROADCAST_1"
    | (string & {});
  /** You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in the United States. */
  eligibleForStreamingServiceTaxRate?: boolean;
  /** To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax). */
  streamingTaxType?:
    | "STREAMING_TAX_TYPE_UNSPECIFIED"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES"
    | "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES"
    | "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"
    | (string & {});
  /** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
  regionCode?: string;
}

export const RegionalTaxConfig: Schema.Codec<RegionalTaxConfig> =
  /*@__PURE__*/ Schema.Struct({
    taxTier: Schema.optional(Schema.String),
    eligibleForStreamingServiceTaxRate: Schema.optional(Schema.Boolean),
    streamingTaxType: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalTaxConfig" });

export interface OneTimeProductRentPurchaseOption {
  /** Optional. The amount of time the user has after starting consuming the entitlement before it is revoked. Specified in ISO 8601 format. */
  expirationPeriod?: string;
  /** Required. The amount of time a user has the entitlement for. Starts at purchase flow completion. Specified in ISO 8601 format. */
  rentalPeriod?: string;
}

export const OneTimeProductRentPurchaseOption: Schema.Codec<OneTimeProductRentPurchaseOption> =
  /*@__PURE__*/ Schema.Struct({
    expirationPeriod: Schema.optional(Schema.String),
    rentalPeriod: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeProductRentPurchaseOption" });

export interface OneTimeProductPurchaseOptionNewRegionsConfig {
  /** Required. Price in EUR to use for any new regions Play may launch in. */
  eurPrice?: Money;
  /** Required. The regional availability for the new regions config. When set to AVAILABLE, the pricing information will be used for any new regions Play may launch in the future. */
  availability?:
    | "AVAILABILITY_UNSPECIFIED"
    | "AVAILABLE"
    | "NO_LONGER_AVAILABLE"
    | (string & {});
  /** Required. Price in USD to use for any new regions Play may launch in. */
  usdPrice?: Money;
}

export const OneTimeProductPurchaseOptionNewRegionsConfig: Schema.Codec<OneTimeProductPurchaseOptionNewRegionsConfig> =
  /*@__PURE__*/ Schema.Struct({
    eurPrice: Schema.optional(Money),
    availability: Schema.optional(Schema.String),
    usdPrice: Schema.optional(Money),
  }).annotate({ identifier: "OneTimeProductPurchaseOptionNewRegionsConfig" });

export interface OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig {
  /** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g., "US". */
  regionCode?: string;
  /** The price of the purchase option in the specified region. Must be set in the currency that is linked to the specified region. */
  price?: Money;
  /** The availability of the purchase option. */
  availability?:
    | "AVAILABILITY_UNSPECIFIED"
    | "AVAILABLE"
    | "NO_LONGER_AVAILABLE"
    | "AVAILABLE_IF_RELEASED"
    | "AVAILABLE_FOR_OFFERS_ONLY"
    | (string & {});
}

export const OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig: Schema.Codec<OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    price: Schema.optional(Money),
    availability: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig",
  });

export interface PurchaseOptionTaxAndComplianceSettings {
  /** Optional. Digital content or service classification for products distributed to users in eligible regions. If unset, it defaults to `WITHDRAWAL_RIGHT_DIGITAL_CONTENT`. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
  withdrawalRightType?:
    | "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    | "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    | "WITHDRAWAL_RIGHT_SERVICE"
    | (string & {});
}

export const PurchaseOptionTaxAndComplianceSettings: Schema.Codec<PurchaseOptionTaxAndComplianceSettings> =
  /*@__PURE__*/ Schema.Struct({
    withdrawalRightType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PurchaseOptionTaxAndComplianceSettings" });

export interface OneTimeProductBuyPurchaseOption {
  /** Optional. Whether this purchase option will be available in legacy PBL flows that do not support one-time products model. Up to one "buy" purchase option can be marked as backwards compatible. */
  legacyCompatible?: boolean;
  /** Optional. Whether this purchase option allows multi-quantity. Multi-quantity allows buyer to purchase more than one item in a single checkout. */
  multiQuantityEnabled?: boolean;
}

export const OneTimeProductBuyPurchaseOption: Schema.Codec<OneTimeProductBuyPurchaseOption> =
  /*@__PURE__*/ Schema.Struct({
    legacyCompatible: Schema.optional(Schema.Boolean),
    multiQuantityEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OneTimeProductBuyPurchaseOption" });

export interface OneTimeProductPurchaseOption {
  /** Required. Immutable. The unique identifier of this purchase option. Must be unique within the one-time product. It must start with a number or lower-case letter, and can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-). The maximum length is 63 characters. */
  purchaseOptionId?: string;
  /** A purchase option that can be rented. */
  rentOption?: OneTimeProductRentPurchaseOption;
  /** Pricing information for any new locations Play may launch in the future. If omitted, the purchase option will not be automatically available in any new locations Play may launch in the future. */
  newRegionsConfig?: OneTimeProductPurchaseOptionNewRegionsConfig;
  /** Output only. The state of the purchase option, i.e., whether it's active. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. */
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "ACTIVE"
    | "INACTIVE"
    | "INACTIVE_PUBLISHED"
    | (string & {});
  /** Regional pricing and availability information for this purchase option. */
  regionalPricingAndAvailabilityConfigs?: ReadonlyArray<OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig>;
  /** Optional. Details about taxes and legal compliance. */
  taxAndComplianceSettings?: PurchaseOptionTaxAndComplianceSettings;
  /** A purchase option that can be bought. */
  buyOption?: OneTimeProductBuyPurchaseOption;
  /** Optional. List of up to 20 custom tags specified for this purchase option, and returned to the app through the billing library. Offers for this purchase option will also receive these tags in the billing library. */
  offerTags?: ReadonlyArray<OfferTag>;
}

export const OneTimeProductPurchaseOption: Schema.Codec<OneTimeProductPurchaseOption> =
  /*@__PURE__*/ Schema.Struct({
    purchaseOptionId: Schema.optional(Schema.String),
    rentOption: Schema.optional(OneTimeProductRentPurchaseOption),
    newRegionsConfig: Schema.optional(
      OneTimeProductPurchaseOptionNewRegionsConfig,
    ),
    state: Schema.optional(Schema.String),
    regionalPricingAndAvailabilityConfigs: Schema.optional(
      Schema.Array(
        OneTimeProductPurchaseOptionRegionalPricingAndAvailabilityConfig,
      ),
    ),
    taxAndComplianceSettings: Schema.optional(
      PurchaseOptionTaxAndComplianceSettings,
    ),
    buyOption: Schema.optional(OneTimeProductBuyPurchaseOption),
    offerTags: Schema.optional(Schema.Array(OfferTag)),
  }).annotate({ identifier: "OneTimeProductPurchaseOption" });

export interface CancelAppRecoveryResponse {}

export const CancelAppRecoveryResponse: Schema.Codec<CancelAppRecoveryResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelAppRecoveryResponse",
  });

export interface RevocationContextFullRefund {}

export const RevocationContextFullRefund: Schema.Codec<RevocationContextFullRefund> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RevocationContextFullRefund",
  });

export interface RevocationContextItemBasedRefund {
  /** Required. If the subscription is a subscription with add-ons, the product id of the subscription item to revoke. */
  productId?: string;
}

export const RevocationContextItemBasedRefund: Schema.Codec<RevocationContextItemBasedRefund> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevocationContextItemBasedRefund" });

export interface RevocationContext {
  /** Optional. Used when users should be refunded the full amount of latest charge on each item in the subscription. */
  fullRefund?: RevocationContextFullRefund;
  /** Optional. Used when a specific item should be refunded in a subscription with add-on items. */
  itemBasedRefund?: RevocationContextItemBasedRefund;
  /** Optional. Used when users should be refunded a prorated amount they paid for their subscription based on the amount of time remaining in a subscription. */
  proratedRefund?: RevocationContextProratedRefund;
}

export const RevocationContext: Schema.Codec<RevocationContext> =
  /*@__PURE__*/ Schema.Struct({
    fullRefund: Schema.optional(RevocationContextFullRefund),
    itemBasedRefund: Schema.optional(RevocationContextItemBasedRefund),
    proratedRefund: Schema.optional(RevocationContextProratedRefund),
  }).annotate({ identifier: "RevocationContext" });

export interface ExternalAccountIds {
  /** Optional. Specifies an optional obfuscated string that is uniquely associated with the purchaser's user account in your app. If you pass this value, Google Play can use it to detect irregular activity. Do not use this field to store any Personally Identifiable Information (PII) such as emails in cleartext. Attempting to store PII in this field will result in purchases being blocked. Google Play recommends that you use either encryption or a one-way hash to generate an obfuscated identifier to send to Google Play. This identifier is limited to 64 characters. This field can only be set for resubscription purchases. See https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid to set this field for purchases made using the standard in-app billing flow. */
  obfuscatedAccountId?: string;
  /** Optional. Specifies an optional obfuscated string that is uniquely associated with the purchaser's user profile in your app. If you pass this value, Google Play can use it to detect irregular activity. Do not use this field to store any Personally Identifiable Information (PII) such as emails in cleartext. Attempting to store PII in this field will result in purchases being blocked. Google Play recommends that you use either encryption or a one-way hash to generate an obfuscated identifier to send to Google Play. This identifier is limited to 64 characters. This field can only be set for resubscription purchases. See https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid to set this field for purchases made using the standard in-app billing flow. */
  obfuscatedProfileId?: string;
}

export const ExternalAccountIds: Schema.Codec<ExternalAccountIds> =
  /*@__PURE__*/ Schema.Struct({
    obfuscatedAccountId: Schema.optional(Schema.String),
    obfuscatedProfileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalAccountIds" });

export interface PausedStateContext {
  /** Time at which the subscription will be automatically resumed. */
  autoResumeTime?: string;
}

export const PausedStateContext: Schema.Codec<PausedStateContext> =
  /*@__PURE__*/ Schema.Struct({
    autoResumeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PausedStateContext" });

export interface PendingCancellation {}

export const PendingCancellation: Schema.Codec<PendingCancellation> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PendingCancellation",
  });

export interface DeleteOneTimeProductOfferRequest {
  /** Required. The unique offer ID of the offer to delete. */
  offerId?: string;
  /** Required. The parent app (package name) of the offer to delete. */
  packageName?: string;
  /** Required. The parent one-time product (ID) of the offer to delete. */
  productId?: string;
  /** Required. The parent purchase option (ID) of the offer to delete. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const DeleteOneTimeProductOfferRequest: Schema.Codec<DeleteOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    offerId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteOneTimeProductOfferRequest" });

export interface CancellationEvent {
  /** The time when the order was canceled. */
  eventTime?: string;
}

export const CancellationEvent: Schema.Codec<CancellationEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancellationEvent" });

export interface RefundDetails {
  /** The amount of tax refunded. */
  tax?: Money;
  /** The total amount refunded, including tax. */
  total?: Money;
}

export const RefundDetails: Schema.Codec<RefundDetails> =
  /*@__PURE__*/ Schema.Struct({
    tax: Schema.optional(Money),
    total: Schema.optional(Money),
  }).annotate({ identifier: "RefundDetails" });

export interface RefundEvent {
  /** The reason the order was refunded. */
  refundReason?:
    | "REFUND_REASON_UNSPECIFIED"
    | "OTHER"
    | "CHARGEBACK"
    | (string & {});
  /** The time when the order was fully refunded. */
  eventTime?: string;
  /** Details for the full refund. */
  refundDetails?: RefundDetails;
}

export const RefundEvent: Schema.Codec<RefundEvent> =
  /*@__PURE__*/ Schema.Struct({
    refundReason: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    refundDetails: Schema.optional(RefundDetails),
  }).annotate({ identifier: "RefundEvent" });

export interface PartialRefundEvent {
  /** The state of the partial refund. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "PROCESSED_SUCCESSFULLY"
    | (string & {});
  /** Details for the partial refund. */
  refundDetails?: RefundDetails;
  /** The time when the partial refund was created. */
  createTime?: string;
  /** The time when the partial refund was processed. */
  processTime?: string;
}

export const PartialRefundEvent: Schema.Codec<PartialRefundEvent> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    refundDetails: Schema.optional(RefundDetails),
    createTime: Schema.optional(Schema.String),
    processTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartialRefundEvent" });

export interface ProcessedEvent {
  /** The time when the order was processed. */
  eventTime?: string;
}

export const ProcessedEvent: Schema.Codec<ProcessedEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProcessedEvent" });

export interface OrderHistory {
  /** Details of when the order was canceled. */
  cancellationEvent?: CancellationEvent;
  /** Details of when the order was fully refunded. */
  refundEvent?: RefundEvent;
  /** Details of the partial refund events for this order. */
  partialRefundEvents?: ReadonlyArray<PartialRefundEvent>;
  /** Details of when the order was processed. */
  processedEvent?: ProcessedEvent;
}

export const OrderHistory: Schema.Codec<OrderHistory> =
  /*@__PURE__*/ Schema.Struct({
    cancellationEvent: Schema.optional(CancellationEvent),
    refundEvent: Schema.optional(RefundEvent),
    partialRefundEvents: Schema.optional(Schema.Array(PartialRefundEvent)),
    processedEvent: Schema.optional(ProcessedEvent),
  }).annotate({ identifier: "OrderHistory" });

export interface ProductLineItem {
  /** The offer details for this item. */
  productOfferDetails?: ProductOfferDetails;
  /** The purchased product ID (for example, 'monthly001'). */
  productId?: string;
}

export const ProductLineItem: Schema.Codec<ProductLineItem> =
  /*@__PURE__*/ Schema.Struct({
    productOfferDetails: Schema.optional(ProductOfferDetails),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductLineItem" });

export interface InappproductsDeleteRequest {
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Package name of the app. */
  packageName?: string;
  /** Unique identifier for the in-app product. */
  sku?: string;
}

export const InappproductsDeleteRequest: Schema.Codec<InappproductsDeleteRequest> =
  /*@__PURE__*/ Schema.Struct({
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
  }).annotate({ identifier: "InappproductsDeleteRequest" });

export interface DeletePurchaseOptionRequest {
  /** Required. The parent one-time product (ID) of the purchase option to delete. */
  productId?: string;
  /** Required. The purchase option ID of the purchase option to delete. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Optional. This field has no effect for purchase options with no offers under them. For purchase options with associated offers: * If `force` is set to false (default), an error will be returned. * If `force` is set to true, any associated offers under the purchase option will be deleted. */
  force?: boolean;
  /** Required. The parent app (package name) of the purchase option to delete. */
  packageName?: string;
}

export const DeletePurchaseOptionRequest: Schema.Codec<DeletePurchaseOptionRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeletePurchaseOptionRequest" });

export interface UpdateSubscriptionRequest {
  /** Required. The subscription to update. */
  subscription?: Subscription;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The version of the available regions being used for the subscription. */
  regionsVersion?: RegionsVersion;
  /** Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
}

export const UpdateSubscriptionRequest: Schema.Codec<UpdateSubscriptionRequest> =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(Subscription),
    latencyTolerance: Schema.optional(Schema.String),
    regionsVersion: Schema.optional(RegionsVersion),
    allowMissing: Schema.optional(Schema.Boolean),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateSubscriptionRequest" });

export interface BatchUpdateSubscriptionsRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. */
  requests?: ReadonlyArray<UpdateSubscriptionRequest>;
}

export const BatchUpdateSubscriptionsRequest: Schema.Codec<BatchUpdateSubscriptionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateSubscriptionRequest)),
  }).annotate({ identifier: "BatchUpdateSubscriptionsRequest" });

export interface UserInitiatedCancellation {
  /** The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access. */
  cancelTime?: string;
  /** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
  cancelSurveyResult?: CancelSurveyResult;
}

export const UserInitiatedCancellation: Schema.Codec<UserInitiatedCancellation> =
  /*@__PURE__*/ Schema.Struct({
    cancelTime: Schema.optional(Schema.String),
    cancelSurveyResult: Schema.optional(CancelSurveyResult),
  }).annotate({ identifier: "UserInitiatedCancellation" });

export interface SystemInitiatedCancellation {}

export const SystemInitiatedCancellation: Schema.Codec<SystemInitiatedCancellation> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SystemInitiatedCancellation",
  });

export interface DeveloperInitiatedCancellation {}

export const DeveloperInitiatedCancellation: Schema.Codec<DeveloperInitiatedCancellation> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeveloperInitiatedCancellation",
  });

export interface ReplacementCancellation {}

export const ReplacementCancellation: Schema.Codec<ReplacementCancellation> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReplacementCancellation",
  });

export interface CanceledStateContext {
  /** Subscription was canceled by user. */
  userInitiatedCancellation?: UserInitiatedCancellation;
  /** Subscription was canceled by the system, for example because of a billing problem. */
  systemInitiatedCancellation?: SystemInitiatedCancellation;
  /** Subscription was canceled by the developer. */
  developerInitiatedCancellation?: DeveloperInitiatedCancellation;
  /** Subscription was replaced by a new subscription. */
  replacementCancellation?: ReplacementCancellation;
}

export const CanceledStateContext: Schema.Codec<CanceledStateContext> =
  /*@__PURE__*/ Schema.Struct({
    userInitiatedCancellation: Schema.optional(UserInitiatedCancellation),
    systemInitiatedCancellation: Schema.optional(SystemInitiatedCancellation),
    developerInitiatedCancellation: Schema.optional(
      DeveloperInitiatedCancellation,
    ),
    replacementCancellation: Schema.optional(ReplacementCancellation),
  }).annotate({ identifier: "CanceledStateContext" });

export interface SubscriptionPurchasesAcknowledgeRequest {
  /** Payload to attach to the purchase. */
  developerPayload?: string;
  /** Optional. User account identifier in your app. */
  externalAccountIds?: ExternalAccountIds;
}

export const SubscriptionPurchasesAcknowledgeRequest: Schema.Codec<SubscriptionPurchasesAcknowledgeRequest> =
  /*@__PURE__*/ Schema.Struct({
    developerPayload: Schema.optional(Schema.String),
    externalAccountIds: Schema.optional(ExternalAccountIds),
  }).annotate({ identifier: "SubscriptionPurchasesAcknowledgeRequest" });

export interface InAppProductListing {
  /** Localized entitlement benefits for a subscription. */
  benefits?: ReadonlyArray<string>;
  /** Title for the store listing. */
  title?: string;
  /** Description for the store listing. */
  description?: string;
}

export const InAppProductListing: Schema.Codec<InAppProductListing> =
  /*@__PURE__*/ Schema.Struct({
    benefits: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "InAppProductListing" });

export interface ManagedProductTaxAndComplianceSettings {
  /** Regional age rating information. Currently this field is only supported for region code `US`. */
  regionalProductAgeRatingInfos?: ReadonlyArray<RegionalProductAgeRatingInfo>;
  /** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
  eeaWithdrawalRightType?:
    | "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    | "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    | "WITHDRAWAL_RIGHT_SERVICE"
    | (string & {});
  /** Product tax category code to assign to the in-app product. Product tax category determines the transaction tax rates applied to the product. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/16408159) for more information. */
  productTaxCategoryCode?: string;
  /** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
  taxRateInfoByRegionCode?: Record<string, RegionalTaxRateInfo>;
  /** Whether this in-app product is declared as a product representing a tokenized digital asset. */
  isTokenizedDigitalAsset?: boolean;
}

export const ManagedProductTaxAndComplianceSettings: Schema.Codec<ManagedProductTaxAndComplianceSettings> =
  /*@__PURE__*/ Schema.Struct({
    regionalProductAgeRatingInfos: Schema.optional(
      Schema.Array(RegionalProductAgeRatingInfo),
    ),
    eeaWithdrawalRightType: Schema.optional(Schema.String),
    productTaxCategoryCode: Schema.optional(Schema.String),
    taxRateInfoByRegionCode: Schema.optional(
      Schema.Record(Schema.String, RegionalTaxRateInfo),
    ),
    isTokenizedDigitalAsset: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ManagedProductTaxAndComplianceSettings" });

export interface InAppProduct {
  /** The status of the product, e.g. whether it's active. */
  status?: "statusUnspecified" | "active" | "inactive" | (string & {});
  /** Details about taxes and legal compliance. Only applicable to subscription products. */
  subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
  /** List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US". */
  listings?: Record<string, InAppProductListing>;
  /** Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency. */
  defaultPrice?: Price;
  /** Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days). */
  trialPeriod?: string;
  /** Details about taxes and legal compliance. Only applicable to managed products. */
  managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings;
  /** Package name of the parent app. */
  packageName?: string;
  /** The type of the product, e.g. a recurring subscription. */
  purchaseType?:
    | "purchaseTypeUnspecified"
    | "managedUser"
    | "subscription"
    | (string & {});
  /** Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year). */
  subscriptionPeriod?: string;
  /** Stock-keeping-unit (SKU) of the product, unique within an app. */
  sku?: string;
  /** Default language of the localized data, as defined by BCP-47. e.g. "en-US". */
  defaultLanguage?: string;
  /** Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days). */
  gracePeriod?: string;
  /** Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2. */
  prices?: Record<string, Price>;
}

export const InAppProduct: Schema.Codec<InAppProduct> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    subscriptionTaxesAndComplianceSettings: Schema.optional(
      SubscriptionTaxAndComplianceSettings,
    ),
    listings: Schema.optional(
      Schema.Record(Schema.String, InAppProductListing),
    ),
    defaultPrice: Schema.optional(Price),
    trialPeriod: Schema.optional(Schema.String),
    managedProductTaxesAndComplianceSettings: Schema.optional(
      ManagedProductTaxAndComplianceSettings,
    ),
    packageName: Schema.optional(Schema.String),
    purchaseType: Schema.optional(Schema.String),
    subscriptionPeriod: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
    gracePeriod: Schema.optional(Schema.String),
    prices: Schema.optional(Schema.Record(Schema.String, Price)),
  }).annotate({ identifier: "InAppProduct" });

export interface InappproductsUpdateRequest {
  /** The new in-app product. */
  inappproduct?: InAppProduct;
  /** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
  autoConvertMissingPrices?: boolean;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Unique identifier for the in-app product. */
  sku?: string;
  /** Package name of the app. */
  packageName?: string;
  /** If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created. */
  allowMissing?: boolean;
}

export const InappproductsUpdateRequest: Schema.Codec<InappproductsUpdateRequest> =
  /*@__PURE__*/ Schema.Struct({
    inappproduct: Schema.optional(InAppProduct),
    autoConvertMissingPrices: Schema.optional(Schema.Boolean),
    latencyTolerance: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    allowMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InappproductsUpdateRequest" });

export interface InappproductsBatchUpdateRequest {
  /** Required. Individual update requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products. */
  requests?: ReadonlyArray<InappproductsUpdateRequest>;
}

export const InappproductsBatchUpdateRequest: Schema.Codec<InappproductsBatchUpdateRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(InappproductsUpdateRequest)),
  }).annotate({ identifier: "InappproductsBatchUpdateRequest" });

export interface ReviewReplyResult {
  /** The reply text that was applied. */
  replyText?: string;
  /** The time at which the reply took effect. */
  lastEdited?: Timestamp;
}

export const ReviewReplyResult: Schema.Codec<ReviewReplyResult> =
  /*@__PURE__*/ Schema.Struct({
    replyText: Schema.optional(Schema.String),
    lastEdited: Schema.optional(Timestamp),
  }).annotate({ identifier: "ReviewReplyResult" });

export interface BatchUpdateSubscriptionsResponse {
  /** The updated subscriptions list. */
  subscriptions?: ReadonlyArray<Subscription>;
}

export const BatchUpdateSubscriptionsResponse: Schema.Codec<BatchUpdateSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
  }).annotate({ identifier: "BatchUpdateSubscriptionsResponse" });

export interface DeferralContext {
  /** If set to "true", the request is a dry run to validate the effect of Defer, the subscription would not be impacted. */
  validateOnly?: boolean;
  /** Required. The API will fail if the etag does not match the latest etag for this subscription. The etag is retrieved from purchases.subscriptionsv2.get: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptionsv2/get */
  etag?: string;
  /** Required. The duration by which all subscription items should be deferred. */
  deferDuration?: string;
}

export const DeferralContext: Schema.Codec<DeferralContext> =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    deferDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeferralContext" });

export interface OneTimeCode {}

export const OneTimeCode: Schema.Codec<OneTimeCode> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OneTimeCode",
  });

export interface CancellationContext {
  /** Required. The type of cancellation for the purchased subscription. */
  cancellationType?:
    | "CANCELLATION_TYPE_UNSPECIFIED"
    | "USER_REQUESTED_STOP_RENEWALS"
    | "DEVELOPER_REQUESTED_STOP_PAYMENTS"
    | (string & {});
}

export const CancellationContext: Schema.Codec<CancellationContext> =
  /*@__PURE__*/ Schema.Struct({
    cancellationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancellationContext" });

export interface CancelSubscriptionPurchaseRequest {
  /** Required. Additional details around the subscription revocation. */
  cancellationContext?: CancellationContext;
}

export const CancelSubscriptionPurchaseRequest: Schema.Codec<CancelSubscriptionPurchaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    cancellationContext: Schema.optional(CancellationContext),
  }).annotate({ identifier: "CancelSubscriptionPurchaseRequest" });

export interface OrderDetails {
  /** Indicates whether the listed price was tax inclusive or not. */
  taxInclusive?: boolean;
}

export const OrderDetails: Schema.Codec<OrderDetails> =
  /*@__PURE__*/ Schema.Struct({
    taxInclusive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OrderDetails" });

export interface BuyerAddress {
  /** Top-level administrative subdivision of the buyer address country. When Google is the Merchant of Record for the order, this information is not included. */
  buyerState?: string;
  /** Two letter country code based on ISO-3166-1 Alpha-2 (UN country codes). */
  buyerCountry?: string;
  /** Postal code of an address. When Google is the Merchant of Record for the order, this information is not included. */
  buyerPostcode?: string;
}

export const BuyerAddress: Schema.Codec<BuyerAddress> =
  /*@__PURE__*/ Schema.Struct({
    buyerState: Schema.optional(Schema.String),
    buyerCountry: Schema.optional(Schema.String),
    buyerPostcode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuyerAddress" });

export interface PointsDetails {
  /** The percentage rate which the Play Points promotion reduces the cost by. E.g. for a 100 points for $2 coupon, this is 500,000. Since $2 has an estimate of 200 points, but the actual Points required, 100, is 50% of this, and 50% in micros is 500,000. Between 0 and 1,000,000. */
  pointsDiscountRateMicros?: string;
  /** The monetary value of a Play Points coupon. This is the discount the coupon provides, which may not be the total amount. Only set when Play Points coupons have been used. E.g. for a 100 points for $2 coupon, this is $2. */
  pointsCouponValue?: Money;
  /** The number of Play Points applied in this order. E.g. for a 100 points for $2 coupon, this is 100. For coupon stacked with base offer, this is the total points spent across both. */
  pointsSpent?: string;
  /** ID unique to the play points offer in use for this order. */
  pointsOfferId?: string;
}

export const PointsDetails: Schema.Codec<PointsDetails> =
  /*@__PURE__*/ Schema.Struct({
    pointsDiscountRateMicros: Schema.optional(Schema.String),
    pointsCouponValue: Schema.optional(Money),
    pointsSpent: Schema.optional(Schema.String),
    pointsOfferId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PointsDetails" });

export interface Order {
  /** Detailed information about the order at creation time. */
  orderDetails?: OrderDetails;
  /** The individual line items making up this order. */
  lineItems?: ReadonlyArray<LineItem>;
  /** The originating sales channel of the order. */
  salesChannel?:
    | "SALES_CHANNEL_UNSPECIFIED"
    | "IN_APP"
    | "PC_EMULATOR"
    | "NATIVE_PC"
    | "PLAY_STORE"
    | "OUTSIDE_PLAY_STORE"
    | (string & {});
  /** The time when the order was created. */
  createTime?: string;
  /** The state of the order. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "PROCESSED"
    | "CANCELED"
    | "PENDING_REFUND"
    | "PARTIALLY_REFUNDED"
    | "REFUNDED"
    | (string & {});
  /** The time of the last event that occurred on the order. */
  lastEventTime?: string;
  /** Address information for the customer, for use in tax computation. When Google is the Merchant of Record for the order, only country is shown. */
  buyerAddress?: BuyerAddress;
  /** Play points applied to the order, including offer information, discount rate and point values. */
  pointsDetails?: PointsDetails;
  /** Your revenue for this order in the buyer's currency, including deductions of partial refunds, taxes and fees. Google deducts standard transaction and third party fees from each sale, including VAT in some regions. */
  developerRevenueInBuyerCurrency?: Money;
  /** The order ID. */
  orderId?: string;
  /** The total tax paid as a part of this order. */
  tax?: Money;
  /** Details about events which modified the order. */
  orderHistory?: OrderHistory;
  /** The token provided to the user's device when the subscription or item was purchased. */
  purchaseToken?: string;
  /** The final amount paid by the customer, taking into account discounts and taxes. */
  total?: Money;
}

export const Order: Schema.Codec<Order> =
  /*@__PURE__*/ Schema.Struct({
    orderDetails: Schema.optional(OrderDetails),
    lineItems: Schema.optional(Schema.Array(LineItem)),
    salesChannel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    lastEventTime: Schema.optional(Schema.String),
    buyerAddress: Schema.optional(BuyerAddress),
    pointsDetails: Schema.optional(PointsDetails),
    developerRevenueInBuyerCurrency: Schema.optional(Money),
    orderId: Schema.optional(Schema.String),
    tax: Schema.optional(Money),
    orderHistory: Schema.optional(OrderHistory),
    purchaseToken: Schema.optional(Schema.String),
    total: Schema.optional(Money),
  }).annotate({ identifier: "Order" });

export interface BatchGetOrdersResponse {
  /** Details for the requested order IDs. */
  orders?: ReadonlyArray<Order>;
}

export const BatchGetOrdersResponse: Schema.Codec<BatchGetOrdersResponse> =
  /*@__PURE__*/ Schema.Struct({
    orders: Schema.optional(Schema.Array(Order)),
  }).annotate({ identifier: "BatchGetOrdersResponse" });

export interface ActivatePurchaseOptionRequest {
  /** Required. The parent one-time product (ID) of the purchase option to activate. */
  productId?: string;
  /** Required. The purchase option ID of the purchase option to activate. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The parent app (package name) of the purchase option to activate. */
  packageName?: string;
}

export const ActivatePurchaseOptionRequest: Schema.Codec<ActivatePurchaseOptionRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivatePurchaseOptionRequest" });

export interface DeactivateOneTimeProductOfferRequest {
  /** Required. The parent one-time product (ID) of the offer to deactivate. */
  productId?: string;
  /** Required. The parent purchase option (ID) of the offer to deactivate. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The parent app (package name) of the offer to deactivate. */
  packageName?: string;
  /** Required. The offer ID of the offer to deactivate. */
  offerId?: string;
}

export const DeactivateOneTimeProductOfferRequest: Schema.Codec<DeactivateOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeactivateOneTimeProductOfferRequest" });

export interface ActivateOneTimeProductOfferRequest {
  /** Required. The parent one-time product (ID) of the offer to activate. */
  productId?: string;
  /** Required. The parent purchase option (ID) of the offer to activate. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The parent app (package name) of the offer to activate. */
  packageName?: string;
  /** Required. The offer ID of the offer to activate. */
  offerId?: string;
}

export const ActivateOneTimeProductOfferRequest: Schema.Codec<ActivateOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivateOneTimeProductOfferRequest" });

export interface CancelOneTimeProductOfferRequest {
  /** Required. The parent one-time product (ID) of the offer to cancel. */
  productId?: string;
  /** Required. The parent purchase option (ID) of the offer to cancel. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The offer ID of the offer to cancel. */
  offerId?: string;
  /** Required. The parent app (package name) of the offer to cancel. */
  packageName?: string;
}

export const CancelOneTimeProductOfferRequest: Schema.Codec<CancelOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelOneTimeProductOfferRequest" });

export interface UpdateOneTimeProductOfferStateRequest {
  /** Deactivates an offer. Once deactivated, the offer is no longer available to users. This state transition is specific to discounted offers. */
  deactivateOneTimeProductOfferRequest?: DeactivateOneTimeProductOfferRequest;
  /** Activates an offer. Once activated, the offer is available to users, as long as its conditions are met. */
  activateOneTimeProductOfferRequest?: ActivateOneTimeProductOfferRequest;
  /** Cancels an offer. Once cancelled, the offer is not available to users. Any pending orders related to this offer will be cancelled. This state transition is specific to pre-orders. */
  cancelOneTimeProductOfferRequest?: CancelOneTimeProductOfferRequest;
}

export const UpdateOneTimeProductOfferStateRequest: Schema.Codec<UpdateOneTimeProductOfferStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    deactivateOneTimeProductOfferRequest: Schema.optional(
      DeactivateOneTimeProductOfferRequest,
    ),
    activateOneTimeProductOfferRequest: Schema.optional(
      ActivateOneTimeProductOfferRequest,
    ),
    cancelOneTimeProductOfferRequest: Schema.optional(
      CancelOneTimeProductOfferRequest,
    ),
  }).annotate({ identifier: "UpdateOneTimeProductOfferStateRequest" });

export interface BatchUpdateOneTimeProductOfferStatesRequest {
  /** Required. The update request list of up to 100 elements. All requests must update different offers. */
  requests?: ReadonlyArray<UpdateOneTimeProductOfferStateRequest>;
}

export const BatchUpdateOneTimeProductOfferStatesRequest: Schema.Codec<BatchUpdateOneTimeProductOfferStatesRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(UpdateOneTimeProductOfferStateRequest),
    ),
  }).annotate({ identifier: "BatchUpdateOneTimeProductOfferStatesRequest" });

export interface SubscriptionPriceChange {
  /** The new price the subscription will renew with if the price change is accepted by the user. */
  newPrice?: Price;
  /** The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next. */
  state?: number;
}

export const SubscriptionPriceChange: Schema.Codec<SubscriptionPriceChange> =
  /*@__PURE__*/ Schema.Struct({
    newPrice: Schema.optional(Price),
    state: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SubscriptionPriceChange" });

export interface OneTimeProductListing {
  /** Required. The language of this listing, as defined by BCP-47, e.g., "en-US". */
  languageCode?: string;
  /** Required. The title of this product in the language of this listing. The maximum length is 55 characters. */
  title?: string;
  /** Required. The description of this product in the language of this listing. The maximum length is 200 characters. */
  description?: string;
}

export const OneTimeProductListing: Schema.Codec<OneTimeProductListing> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeProductListing" });

export interface OneTimeProductTaxAndComplianceSettings {
  /** Regional tax configuration. */
  regionalTaxConfigs?: ReadonlyArray<RegionalTaxConfig>;
  /** Product tax category code to assign to the one-time product. Product tax category determines the transaction tax rates applied to the product. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/16408159) for more information. */
  productTaxCategoryCode?: string;
  /** Regional age rating information. Currently this field is only supported for region code `US`. */
  regionalProductAgeRatingInfos?: ReadonlyArray<RegionalProductAgeRatingInfo>;
  /** Whether this one-time product is declared as a product representing a tokenized digital asset. */
  isTokenizedDigitalAsset?: boolean;
}

export const OneTimeProductTaxAndComplianceSettings: Schema.Codec<OneTimeProductTaxAndComplianceSettings> =
  /*@__PURE__*/ Schema.Struct({
    regionalTaxConfigs: Schema.optional(Schema.Array(RegionalTaxConfig)),
    productTaxCategoryCode: Schema.optional(Schema.String),
    regionalProductAgeRatingInfos: Schema.optional(
      Schema.Array(RegionalProductAgeRatingInfo),
    ),
    isTokenizedDigitalAsset: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OneTimeProductTaxAndComplianceSettings" });

export interface OneTimeProduct {
  /** Required. Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must start with a number or lowercase letter, and can contain numbers (0-9), lowercase letters (a-z), underscores (_), and periods (.). */
  productId?: string;
  /** Required. Set of localized title and description data. Must not have duplicate entries with the same language_code. */
  listings?: ReadonlyArray<OneTimeProductListing>;
  /** Details about taxes and legal compliance. */
  taxAndComplianceSettings?: OneTimeProductTaxAndComplianceSettings;
  /** Required. Immutable. Package name of the parent app. */
  packageName?: string;
  /** Required. The set of purchase options for this one-time product. */
  purchaseOptions?: ReadonlyArray<OneTimeProductPurchaseOption>;
  /** Optional. Countries where the purchase of this one-time product is restricted to payment methods registered in the same country. If empty, no payment location restrictions are imposed. */
  restrictedPaymentCountries?: RestrictedPaymentCountries;
  /** Optional. List of up to 20 custom tags specified for this one-time product, and returned to the app through the billing library. Purchase options and offers for this product will also receive these tags in the billing library. */
  offerTags?: ReadonlyArray<OfferTag>;
  /** Output only. The version of the regions configuration that was used to generate the one-time product. */
  regionsVersion?: RegionsVersion;
}

export const OneTimeProduct: Schema.Codec<OneTimeProduct> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    listings: Schema.optional(Schema.Array(OneTimeProductListing)),
    taxAndComplianceSettings: Schema.optional(
      OneTimeProductTaxAndComplianceSettings,
    ),
    packageName: Schema.optional(Schema.String),
    purchaseOptions: Schema.optional(
      Schema.Array(OneTimeProductPurchaseOption),
    ),
    restrictedPaymentCountries: Schema.optional(RestrictedPaymentCountries),
    offerTags: Schema.optional(Schema.Array(OfferTag)),
    regionsVersion: Schema.optional(RegionsVersion),
  }).annotate({ identifier: "OneTimeProduct" });

export interface ListOneTimeProductsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The one-time products from the specified app. */
  oneTimeProducts?: ReadonlyArray<OneTimeProduct>;
}

export const ListOneTimeProductsResponse: Schema.Codec<ListOneTimeProductsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    oneTimeProducts: Schema.optional(Schema.Array(OneTimeProduct)),
  }).annotate({ identifier: "ListOneTimeProductsResponse" });

export interface DeactivateBasePlanRequest {
  /** Required. The parent subscription (ID) of the base plan to deactivate. */
  productId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The unique base plan ID of the base plan to deactivate. */
  basePlanId?: string;
  /** Required. The parent app (package name) of the base plan to deactivate. */
  packageName?: string;
}

export const DeactivateBasePlanRequest: Schema.Codec<DeactivateBasePlanRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeactivateBasePlanRequest" });

export interface CancelAppRecoveryRequest {}

export const CancelAppRecoveryRequest: Schema.Codec<CancelAppRecoveryRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelAppRecoveryRequest",
  });

export interface InappproductsBatchDeleteRequest {
  /** Individual delete requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products. */
  requests?: ReadonlyArray<InappproductsDeleteRequest>;
}

export const InappproductsBatchDeleteRequest: Schema.Codec<InappproductsBatchDeleteRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(InappproductsDeleteRequest)),
  }).annotate({ identifier: "InappproductsBatchDeleteRequest" });

export interface GeneratedSplitApk {
  /** Split ID. Empty for the main split of the base module. */
  splitId?: string;
  /** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
  downloadId?: string;
  /** ID of the generated variant. */
  variantId?: number;
  /** Name of the module that this APK belongs to. */
  moduleName?: string;
}

export const GeneratedSplitApk: Schema.Codec<GeneratedSplitApk> =
  /*@__PURE__*/ Schema.Struct({
    splitId: Schema.optional(Schema.String),
    downloadId: Schema.optional(Schema.String),
    variantId: Schema.optional(Schema.Number),
    moduleName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedSplitApk" });

export interface DeviceId {
  /** Value of Build.BRAND. */
  buildBrand?: string;
  /** Value of Build.DEVICE. */
  buildDevice?: string;
}

export const DeviceId: Schema.Codec<DeviceId> =
  /*@__PURE__*/ Schema.Struct({
    buildBrand: Schema.optional(Schema.String),
    buildDevice: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceId" });

export interface ImagesListResponse {
  /** All listed Images. */
  images?: ReadonlyArray<Image>;
}

export const ImagesListResponse: Schema.Codec<ImagesListResponse> =
  /*@__PURE__*/ Schema.Struct({
    images: Schema.optional(Schema.Array(Image)),
  }).annotate({ identifier: "ImagesListResponse" });

export interface BatchUpdatePurchaseOptionStatesResponse {
  /** The list of updated one-time products. This list will match the requests one to one, in the same order. */
  oneTimeProducts?: ReadonlyArray<OneTimeProduct>;
}

export const BatchUpdatePurchaseOptionStatesResponse: Schema.Codec<BatchUpdatePurchaseOptionStatesResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProducts: Schema.optional(Schema.Array(OneTimeProduct)),
  }).annotate({ identifier: "BatchUpdatePurchaseOptionStatesResponse" });

export interface BatchDeletePurchaseOptionsRequest {
  /** Required. A list of delete requests of up to 100 elements. All requests must delete purchase options from different one-time products. */
  requests?: ReadonlyArray<DeletePurchaseOptionRequest>;
}

export const BatchDeletePurchaseOptionsRequest: Schema.Codec<BatchDeletePurchaseOptionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(DeletePurchaseOptionRequest)),
  }).annotate({ identifier: "BatchDeletePurchaseOptionsRequest" });

export interface PurchaseStateContext {
  /** Output only. The purchase state of the purchase. */
  purchaseState?:
    | "PURCHASE_STATE_UNSPECIFIED"
    | "PURCHASED"
    | "CANCELLED"
    | "PENDING"
    | (string & {});
}

export const PurchaseStateContext: Schema.Codec<PurchaseStateContext> =
  /*@__PURE__*/ Schema.Struct({
    purchaseState: Schema.optional(Schema.String),
  }).annotate({ identifier: "PurchaseStateContext" });

export interface TestPurchaseContext {
  /** The fop type of the test purchase. */
  fopType?: "FOP_TYPE_UNSPECIFIED" | "TEST" | (string & {});
}

export const TestPurchaseContext: Schema.Codec<TestPurchaseContext> =
  /*@__PURE__*/ Schema.Struct({
    fopType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestPurchaseContext" });

export interface ProductPurchaseV2 {
  /** Information about the purchase state of the purchase. */
  purchaseStateContext?: PurchaseStateContext;
  /** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
  obfuscatedExternalProfileId?: string;
  /** The time when the purchase was successful, i.e., when the PurchaseState has changed to PURCHASED. This field will not be present until the payment is complete. For example, if the user initiated a pending transaction (https://developer.android.com/google/play/billing/integrate#pending), this field will not be populated until the user successfully completes the steps required to complete the transaction. */
  purchaseCompletionTime?: string;
  /** This kind represents a ProductPurchaseV2 object in the androidpublisher service. */
  kind?: string;
  /** Information related to test purchases. This will only be set for test purchases. */
  testPurchaseContext?: TestPurchaseContext;
  /** Contains item-level info for a ProductPurchaseV2. */
  productLineItem?: ReadonlyArray<ProductLineItem>;
  /** The order id associated with the purchase of the inapp product. May not be set if there is no order associated with the purchase. */
  orderId?: string;
  /** Output only. The acknowledgement state of the purchase. */
  acknowledgementState?:
    | "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
    | "ACKNOWLEDGEMENT_STATE_PENDING"
    | "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
    | (string & {});
  /** ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted. */
  regionCode?: string;
  /** An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
  obfuscatedExternalAccountId?: string;
}

export const ProductPurchaseV2: Schema.Codec<ProductPurchaseV2> =
  /*@__PURE__*/ Schema.Struct({
    purchaseStateContext: Schema.optional(PurchaseStateContext),
    obfuscatedExternalProfileId: Schema.optional(Schema.String),
    purchaseCompletionTime: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    testPurchaseContext: Schema.optional(TestPurchaseContext),
    productLineItem: Schema.optional(Schema.Array(ProductLineItem)),
    orderId: Schema.optional(Schema.String),
    acknowledgementState: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    obfuscatedExternalAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductPurchaseV2" });

export interface UpdateOneTimeProductRequest {
  /** Optional. The latency tolerance for the propagation of this product upsert. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The version of the available regions being used for the one-time product. */
  regionsVersion?: RegionsVersion;
  /** Required. The one-time product to upsert. */
  oneTimeProduct?: OneTimeProduct;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. If set to true, and the one-time product with the given package_name and product_id doesn't exist, the one-time product will be created. If a new one-time product is created, update_mask is ignored. */
  allowMissing?: boolean;
}

export const UpdateOneTimeProductRequest: Schema.Codec<UpdateOneTimeProductRequest> =
  /*@__PURE__*/ Schema.Struct({
    latencyTolerance: Schema.optional(Schema.String),
    regionsVersion: Schema.optional(RegionsVersion),
    oneTimeProduct: Schema.optional(OneTimeProduct),
    updateMask: Schema.optional(Schema.String),
    allowMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpdateOneTimeProductRequest" });

export interface OtherRecurringProduct {}

export const OtherRecurringProduct: Schema.Codec<OtherRecurringProduct> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OtherRecurringProduct",
  });

export interface ExternalTransactionTestPurchase {}

export const ExternalTransactionTestPurchase: Schema.Codec<ExternalTransactionTestPurchase> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExternalTransactionTestPurchase",
  });

export interface ActivateBasePlanRequest {
  /** Required. The parent app (package name) of the base plan to activate. */
  packageName?: string;
  /** Required. The unique base plan ID of the base plan to activate. */
  basePlanId?: string;
  /** Required. The parent subscription (ID) of the base plan to activate. */
  productId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const ActivateBasePlanRequest: Schema.Codec<ActivateBasePlanRequest> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivateBasePlanRequest" });

export interface UpdateBasePlanStateRequest {
  /** Activates a base plan. Once activated, base plans will be available to new subscribers. */
  activateBasePlanRequest?: ActivateBasePlanRequest;
  /** Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription */
  deactivateBasePlanRequest?: DeactivateBasePlanRequest;
}

export const UpdateBasePlanStateRequest: Schema.Codec<UpdateBasePlanStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    activateBasePlanRequest: Schema.optional(ActivateBasePlanRequest),
    deactivateBasePlanRequest: Schema.optional(DeactivateBasePlanRequest),
  }).annotate({ identifier: "UpdateBasePlanStateRequest" });

export interface Grant {
  /** The permissions granted to the user for this app. */
  appLevelPermissions?: ReadonlyArray<
    | "APP_LEVEL_PERMISSION_UNSPECIFIED"
    | "CAN_ACCESS_APP"
    | "CAN_VIEW_FINANCIAL_DATA"
    | "CAN_MANAGE_PERMISSIONS"
    | "CAN_REPLY_TO_REVIEWS"
    | "CAN_MANAGE_PUBLIC_APKS"
    | "CAN_MANAGE_TRACK_APKS"
    | "CAN_MANAGE_TRACK_USERS"
    | "CAN_MANAGE_PUBLIC_LISTING"
    | "CAN_MANAGE_DRAFT_APPS"
    | "CAN_MANAGE_ORDERS"
    | "CAN_MANAGE_APP_CONTENT"
    | "CAN_VIEW_NON_FINANCIAL_DATA"
    | "CAN_VIEW_APP_QUALITY"
    | "CAN_MANAGE_DEEPLINKS"
    | (string & {})
  >;
  /** Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. */
  name?: string;
  /** Immutable. The package name of the app. This will be empty for draft apps. */
  packageName?: string;
}

export const Grant: Schema.Codec<Grant> =
  /*@__PURE__*/ Schema.Struct({
    appLevelPermissions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Grant" });

export interface User {
  /** Permissions for the user which apply across the developer account. */
  developerAccountPermissions?: ReadonlyArray<
    | "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
    | "CAN_SEE_ALL_APPS"
    | "CAN_VIEW_FINANCIAL_DATA_GLOBAL"
    | "CAN_MANAGE_PERMISSIONS_GLOBAL"
    | "CAN_EDIT_GAMES_GLOBAL"
    | "CAN_PUBLISH_GAMES_GLOBAL"
    | "CAN_REPLY_TO_REVIEWS_GLOBAL"
    | "CAN_MANAGE_PUBLIC_APKS_GLOBAL"
    | "CAN_MANAGE_TRACK_APKS_GLOBAL"
    | "CAN_MANAGE_TRACK_USERS_GLOBAL"
    | "CAN_MANAGE_PUBLIC_LISTING_GLOBAL"
    | "CAN_MANAGE_DRAFT_APPS_GLOBAL"
    | "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL"
    | "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL"
    | "CAN_MANAGE_ORDERS_GLOBAL"
    | "CAN_MANAGE_APP_CONTENT_GLOBAL"
    | "CAN_VIEW_NON_FINANCIAL_DATA_GLOBAL"
    | "CAN_VIEW_APP_QUALITY_GLOBAL"
    | "CAN_MANAGE_DEEPLINKS_GLOBAL"
    | "CAN_VIEW_CONNECTED_APPS_GLOBAL"
    | "CAN_EDIT_CONNECTED_APPS_GLOBAL"
    | (string & {})
  >;
  /** Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}". */
  name?: string;
  /** Immutable. The user's email address. */
  email?: string;
  /** Output only. The state of the user's access to the Play Console. */
  accessState?:
    | "ACCESS_STATE_UNSPECIFIED"
    | "INVITED"
    | "INVITATION_EXPIRED"
    | "ACCESS_GRANTED"
    | "ACCESS_EXPIRED"
    | (string & {});
  /** The time at which the user's access expires, if set. When setting this value, it must always be in the future. */
  expirationTime?: string;
  /** Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner. */
  partial?: boolean;
  /** Output only. Per-app permissions for the user. */
  grants?: ReadonlyArray<Grant>;
}

export const User: Schema.Codec<User> =
  /*@__PURE__*/ Schema.Struct({
    developerAccountPermissions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    accessState: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    partial: Schema.optional(Schema.Boolean),
    grants: Schema.optional(Schema.Array(Grant)),
  }).annotate({ identifier: "User" });

export interface ListUsersResponse {
  /** The resulting users. */
  users?: ReadonlyArray<User>;
  /** A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return. */
  nextPageToken?: string;
}

export const ListUsersResponse: Schema.Codec<ListUsersResponse> =
  /*@__PURE__*/ Schema.Struct({
    users: Schema.optional(Schema.Array(User)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUsersResponse" });

export interface DeviceTierSet {
  /** Device tiers belonging to the set. */
  deviceTiers?: ReadonlyArray<DeviceTier>;
}

export const DeviceTierSet: Schema.Codec<DeviceTierSet> =
  /*@__PURE__*/ Schema.Struct({
    deviceTiers: Schema.optional(Schema.Array(DeviceTier)),
  }).annotate({ identifier: "DeviceTierSet" });

export interface DeviceRam {
  /** Minimum RAM in bytes (bound included). */
  minBytes?: string;
  /** Maximum RAM in bytes (bound excluded). */
  maxBytes?: string;
}

export const DeviceRam: Schema.Codec<DeviceRam> =
  /*@__PURE__*/ Schema.Struct({
    minBytes: Schema.optional(Schema.String),
    maxBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceRam" });

export interface SystemFeature {
  /** The name of the feature. */
  name?: string;
}

export const SystemFeature: Schema.Codec<SystemFeature> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemFeature" });

export interface DeviceSelector {
  /** Conditions on the device's RAM. */
  deviceRam?: DeviceRam;
  /** A device that has any of these system features is excluded by this selector, even if it matches all other conditions. */
  forbiddenSystemFeatures?: ReadonlyArray<SystemFeature>;
  /** A device needs to have all these system features to be included by the selector. */
  requiredSystemFeatures?: ReadonlyArray<SystemFeature>;
  /** Device models excluded by this selector, even if they match all other conditions. */
  excludedDeviceIds?: ReadonlyArray<DeviceId>;
  /** Device models included by this selector. */
  includedDeviceIds?: ReadonlyArray<DeviceId>;
  /** Optional. The SoCs included by this selector. Only works for Android S+ devices. */
  systemOnChips?: ReadonlyArray<SystemOnChip>;
}

export const DeviceSelector: Schema.Codec<DeviceSelector> =
  /*@__PURE__*/ Schema.Struct({
    deviceRam: Schema.optional(DeviceRam),
    forbiddenSystemFeatures: Schema.optional(Schema.Array(SystemFeature)),
    requiredSystemFeatures: Schema.optional(Schema.Array(SystemFeature)),
    excludedDeviceIds: Schema.optional(Schema.Array(DeviceId)),
    includedDeviceIds: Schema.optional(Schema.Array(DeviceId)),
    systemOnChips: Schema.optional(Schema.Array(SystemOnChip)),
  }).annotate({ identifier: "DeviceSelector" });

export interface DeviceGroup {
  /** The name of the group. */
  name?: string;
  /** Device selectors for this group. A device matching any of the selectors is included in this group. */
  deviceSelectors?: ReadonlyArray<DeviceSelector>;
}

export const DeviceGroup: Schema.Codec<DeviceGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    deviceSelectors: Schema.optional(Schema.Array(DeviceSelector)),
  }).annotate({ identifier: "DeviceGroup" });

export interface UserCountrySet {
  /** Country set name. */
  name?: string;
  /** List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia. */
  countryCodes?: ReadonlyArray<string>;
}

export const UserCountrySet: Schema.Codec<UserCountrySet> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    countryCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UserCountrySet" });

export interface DeviceTierConfig {
  /** Definition of the set of device tiers for the app. */
  deviceTierSet?: DeviceTierSet;
  /** Definition of device groups for the app. */
  deviceGroups?: ReadonlyArray<DeviceGroup>;
  /** Output only. The device tier config ID. */
  deviceTierConfigId?: string;
  /** Definition of user country sets for the app. */
  userCountrySets?: ReadonlyArray<UserCountrySet>;
}

export const DeviceTierConfig: Schema.Codec<DeviceTierConfig> =
  /*@__PURE__*/ Schema.Struct({
    deviceTierSet: Schema.optional(DeviceTierSet),
    deviceGroups: Schema.optional(Schema.Array(DeviceGroup)),
    deviceTierConfigId: Schema.optional(Schema.String),
    userCountrySets: Schema.optional(Schema.Array(UserCountrySet)),
  }).annotate({ identifier: "DeviceTierConfig" });

export interface ListDeviceTierConfigsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Device tier configs created by the developer. */
  deviceTierConfigs?: ReadonlyArray<DeviceTierConfig>;
}

export const ListDeviceTierConfigsResponse: Schema.Codec<ListDeviceTierConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    deviceTierConfigs: Schema.optional(Schema.Array(DeviceTierConfig)),
  }).annotate({ identifier: "ListDeviceTierConfigsResponse" });

export interface GeneratedRecoveryApk {
  /** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
  downloadId?: string;
  /** The status of the recovery action corresponding to the recovery apk. */
  recoveryStatus?:
    | "RECOVERY_STATUS_UNSPECIFIED"
    | "RECOVERY_STATUS_ACTIVE"
    | "RECOVERY_STATUS_CANCELED"
    | "RECOVERY_STATUS_DRAFT"
    | "RECOVERY_STATUS_GENERATION_IN_PROGRESS"
    | "RECOVERY_STATUS_GENERATION_FAILED"
    | (string & {});
  /** ID of the recovery action. */
  recoveryId?: string;
  /** Name of the module which recovery apk belongs to. */
  moduleName?: string;
}

export const GeneratedRecoveryApk: Schema.Codec<GeneratedRecoveryApk> =
  /*@__PURE__*/ Schema.Struct({
    downloadId: Schema.optional(Schema.String),
    recoveryStatus: Schema.optional(Schema.String),
    recoveryId: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedRecoveryApk" });

export interface GeneratedStandaloneApk {
  /** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
  downloadId?: string;
  /** ID of the generated variant. */
  variantId?: number;
}

export const GeneratedStandaloneApk: Schema.Codec<GeneratedStandaloneApk> =
  /*@__PURE__*/ Schema.Struct({
    downloadId: Schema.optional(Schema.String),
    variantId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GeneratedStandaloneApk" });

export interface GeneratedAssetPackSlice {
  /** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
  downloadId?: string;
  /** Asset slice ID. */
  sliceId?: string;
  /** Asset module version. */
  version?: string;
  /** Name of the module that this asset slice belongs to. */
  moduleName?: string;
}

export const GeneratedAssetPackSlice: Schema.Codec<GeneratedAssetPackSlice> =
  /*@__PURE__*/ Schema.Struct({
    downloadId: Schema.optional(Schema.String),
    sliceId: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedAssetPackSlice" });

export interface GeneratedUniversalApk {
  /** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
  downloadId?: string;
}

export const GeneratedUniversalApk: Schema.Codec<GeneratedUniversalApk> =
  /*@__PURE__*/ Schema.Struct({
    downloadId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedUniversalApk" });

export interface GeneratedApksPerSigningKey {
  /** Generated recovery apks for recovery actions signed with a key corresponding to certificate_sha256_hash. This includes all generated recovery APKs, also those in draft or cancelled state. This field is not set if no recovery actions were created for this signing key. */
  generatedRecoveryModules?: ReadonlyArray<GeneratedRecoveryApk>;
  /** List of generated split APKs, signed with a key corresponding to certificate_sha256_hash. */
  generatedSplitApks?: ReadonlyArray<GeneratedSplitApk>;
  /** List of generated split APKs without automatic protection, signed with a key corresponding to certificate_sha256_hash. This field is only present if the app uses automatic protection. In this case, `generated_split_apks` contains APKs with automatic protection enabled, whereas this field contains APKs without automatic protection. */
  unprotectedGeneratedSplitApks?: ReadonlyArray<GeneratedSplitApk>;
  /** Contains targeting information about the generated apks. */
  targetingInfo?: TargetingInfo;
  /** List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash. */
  generatedStandaloneApks?: ReadonlyArray<GeneratedStandaloneApk>;
  /** SHA256 hash of the APK signing public key certificate. */
  certificateSha256Hash?: string;
  /** List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash. */
  generatedAssetPackSlices?: ReadonlyArray<GeneratedAssetPackSlice>;
  /** Generated universal APK, signed with a key corresponding to certificate_sha256_hash. This field is not set if no universal APK was generated for this signing key. */
  generatedUniversalApk?: GeneratedUniversalApk;
  /** List of generated standalone APKs without automatic protection, signed with a key corresponding to certificate_sha256_hash. This field is only present if the app uses automatic protection. In this case, `generated_standalone_apks` contains APKs with automatic protection enabled, whereas this field contains APKs without automatic protection. */
  unprotectedGeneratedStandaloneApks?: ReadonlyArray<GeneratedStandaloneApk>;
}

export const GeneratedApksPerSigningKey: Schema.Codec<GeneratedApksPerSigningKey> =
  /*@__PURE__*/ Schema.Struct({
    generatedRecoveryModules: Schema.optional(
      Schema.Array(GeneratedRecoveryApk),
    ),
    generatedSplitApks: Schema.optional(Schema.Array(GeneratedSplitApk)),
    unprotectedGeneratedSplitApks: Schema.optional(
      Schema.Array(GeneratedSplitApk),
    ),
    targetingInfo: Schema.optional(TargetingInfo),
    generatedStandaloneApks: Schema.optional(
      Schema.Array(GeneratedStandaloneApk),
    ),
    certificateSha256Hash: Schema.optional(Schema.String),
    generatedAssetPackSlices: Schema.optional(
      Schema.Array(GeneratedAssetPackSlice),
    ),
    generatedUniversalApk: Schema.optional(GeneratedUniversalApk),
    unprotectedGeneratedStandaloneApks: Schema.optional(
      Schema.Array(GeneratedStandaloneApk),
    ),
  }).annotate({ identifier: "GeneratedApksPerSigningKey" });

export interface Bundle {
  /** The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file. */
  versionCode?: number;
  /** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
  sha256?: string;
  /** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
  sha1?: string;
}

export const Bundle: Schema.Codec<Bundle> =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.optional(Schema.Number),
    sha256: Schema.optional(Schema.String),
    sha1: Schema.optional(Schema.String),
  }).annotate({ identifier: "Bundle" });

export interface TrackConfig {
  /** Required. Identifier of the new track. For default tracks, this field consists of the track alias only. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. This prefix must match the value of the `form_factor` field, if it is not a default track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
  track?: string;
  /** Required. Type of the new track. Currently, the only supported value is closedTesting. */
  type?: "TRACK_TYPE_UNSPECIFIED" | "CLOSED_TESTING" | (string & {});
  /** Required. Form factor of the new track. Defaults to the default track. */
  formFactor?:
    | "FORM_FACTOR_UNSPECIFIED"
    | "DEFAULT"
    | "WEAR"
    | "AUTOMOTIVE"
    | (string & {});
}

export const TrackConfig: Schema.Codec<TrackConfig> =
  /*@__PURE__*/ Schema.Struct({
    track: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    formFactor: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrackConfig" });

export interface DeobfuscationFile {
  /** The type of the deobfuscation file. */
  symbolType?:
    | "deobfuscationFileTypeUnspecified"
    | "proguard"
    | "nativeCode"
    | (string & {});
}

export const DeobfuscationFile: Schema.Codec<DeobfuscationFile> =
  /*@__PURE__*/ Schema.Struct({
    symbolType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeobfuscationFile" });

export interface DeobfuscationFilesUploadResponse {
  /** The uploaded Deobfuscation File configuration. */
  deobfuscationFile?: DeobfuscationFile;
}

export const DeobfuscationFilesUploadResponse: Schema.Codec<DeobfuscationFilesUploadResponse> =
  /*@__PURE__*/ Schema.Struct({
    deobfuscationFile: Schema.optional(DeobfuscationFile),
  }).annotate({ identifier: "DeobfuscationFilesUploadResponse" });

export interface DeferredItemRemoval {}

export const DeferredItemRemoval: Schema.Codec<DeferredItemRemoval> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeferredItemRemoval",
  });

export interface DeferSubscriptionPurchaseRequest {
  /** Required. Details about the subscription deferral. */
  deferralContext?: DeferralContext;
}

export const DeferSubscriptionPurchaseRequest: Schema.Codec<DeferSubscriptionPurchaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    deferralContext: Schema.optional(DeferralContext),
  }).annotate({ identifier: "DeferSubscriptionPurchaseRequest" });

export interface SubscriptionPurchasesDeferResponse {
  /** The new expiry time for the subscription in milliseconds since the Epoch. */
  newExpiryTimeMillis?: string;
}

export const SubscriptionPurchasesDeferResponse: Schema.Codec<SubscriptionPurchasesDeferResponse> =
  /*@__PURE__*/ Schema.Struct({
    newExpiryTimeMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionPurchasesDeferResponse" });

export interface SubscriptionDeferralInfo {
  /** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
  expectedExpiryTimeMillis?: string;
  /** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
  desiredExpiryTimeMillis?: string;
}

export const SubscriptionDeferralInfo: Schema.Codec<SubscriptionDeferralInfo> =
  /*@__PURE__*/ Schema.Struct({
    expectedExpiryTimeMillis: Schema.optional(Schema.String),
    desiredExpiryTimeMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionDeferralInfo" });

export interface SubscriptionPurchasesDeferRequest {
  /** The information about the new desired expiry time for the subscription. */
  deferralInfo?: SubscriptionDeferralInfo;
}

export const SubscriptionPurchasesDeferRequest: Schema.Codec<SubscriptionPurchasesDeferRequest> =
  /*@__PURE__*/ Schema.Struct({
    deferralInfo: Schema.optional(SubscriptionDeferralInfo),
  }).annotate({ identifier: "SubscriptionPurchasesDeferRequest" });

export interface DeferredItemReplacement {
  /** The product_id going to replace the existing product_id. */
  productId?: string;
}

export const DeferredItemReplacement: Schema.Codec<DeferredItemReplacement> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeferredItemReplacement" });

export interface VanityCode {
  /** The promotion code. */
  promotionCode?: string;
}

export const VanityCode: Schema.Codec<VanityCode> =
  /*@__PURE__*/ Schema.Struct({
    promotionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "VanityCode" });

export interface SignupPromotion {
  /** A one-time code was applied. */
  oneTimeCode?: OneTimeCode;
  /** A vanity code was applied. */
  vanityCode?: VanityCode;
}

export const SignupPromotion: Schema.Codec<SignupPromotion> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeCode: Schema.optional(OneTimeCode),
    vanityCode: Schema.optional(VanityCode),
  }).annotate({ identifier: "SignupPromotion" });

export interface AppEdit {
  /** Output only. Identifier of the edit. Can be used in subsequent API calls. */
  id?: string;
  /** Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use. */
  expiryTimeSeconds?: string;
}

export const AppEdit: Schema.Codec<AppEdit> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    expiryTimeSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppEdit" });

export interface BatchGetOneTimeProductsResponse {
  /** The list of requested one-time products, in the same order as the request. */
  oneTimeProducts?: ReadonlyArray<OneTimeProduct>;
}

export const BatchGetOneTimeProductsResponse: Schema.Codec<BatchGetOneTimeProductsResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProducts: Schema.optional(Schema.Array(OneTimeProduct)),
  }).annotate({ identifier: "BatchGetOneTimeProductsResponse" });

export interface InstallmentPlan {
  /** Total number of payments the user will be committed for after each commitment period. Empty means the installment plan will fall back to a normal auto-renew subscription after initial commitment. */
  subsequentCommittedPaymentsCount?: number;
  /** If present, this installment plan is pending to be canceled. The cancellation will happen only after the user finished all committed payments. */
  pendingCancellation?: PendingCancellation;
  /** Total number of payments the user is initially committed for. */
  initialCommittedPaymentsCount?: number;
  /** Total number of committed payments remaining to be paid for in this renewal cycle. */
  remainingCommittedPaymentsCount?: number;
}

export const InstallmentPlan: Schema.Codec<InstallmentPlan> =
  /*@__PURE__*/ Schema.Struct({
    subsequentCommittedPaymentsCount: Schema.optional(Schema.Number),
    pendingCancellation: Schema.optional(PendingCancellation),
    initialCommittedPaymentsCount: Schema.optional(Schema.Number),
    remainingCommittedPaymentsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InstallmentPlan" });

export interface DeleteOneTimeProductRequest {
  /** Required. The one-time product ID of the one-time product to delete. */
  productId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The parent app (package name) of the one-time product to delete. */
  packageName?: string;
}

export const DeleteOneTimeProductRequest: Schema.Codec<DeleteOneTimeProductRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteOneTimeProductRequest" });

export interface ListOneTimeProductOffersResponse {
  /** The one_time_product offers from the specified request. */
  oneTimeProductOffers?: ReadonlyArray<OneTimeProductOffer>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListOneTimeProductOffersResponse: Schema.Codec<ListOneTimeProductOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProductOffers: Schema.optional(Schema.Array(OneTimeProductOffer)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOneTimeProductOffersResponse" });

export interface BatchGetOneTimeProductOffersResponse {
  /** The list of updated one-time product offers, in the same order as the request. */
  oneTimeProductOffers?: ReadonlyArray<OneTimeProductOffer>;
}

export const BatchGetOneTimeProductOffersResponse: Schema.Codec<BatchGetOneTimeProductOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProductOffers: Schema.optional(Schema.Array(OneTimeProductOffer)),
  }).annotate({ identifier: "BatchGetOneTimeProductOffersResponse" });

export interface ReviewsReplyRequest {
  /** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
  replyText?: string;
}

export const ReviewsReplyRequest: Schema.Codec<ReviewsReplyRequest> =
  /*@__PURE__*/ Schema.Struct({
    replyText: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReviewsReplyRequest" });

export interface InappproductsListResponse {
  /** Deprecated and unset. */
  pageInfo?: PageInfo;
  /** All in-app products. */
  inappproduct?: ReadonlyArray<InAppProduct>;
  /** Pagination token, to handle a number of products that is over one page. */
  tokenPagination?: TokenPagination;
  /** The kind of this response ("androidpublisher#inappproductsListResponse"). */
  kind?: string;
}

export const InappproductsListResponse: Schema.Codec<InappproductsListResponse> =
  /*@__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(PageInfo),
    inappproduct: Schema.optional(Schema.Array(InAppProduct)),
    tokenPagination: Schema.optional(TokenPagination),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "InappproductsListResponse" });

export interface BatchUpdateBasePlanStatesRequest {
  /** Required. The update request list of up to 100 elements. All requests must update different base plans. */
  requests?: ReadonlyArray<UpdateBasePlanStateRequest>;
}

export const BatchUpdateBasePlanStatesRequest: Schema.Codec<BatchUpdateBasePlanStatesRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateBasePlanStateRequest)),
  }).annotate({ identifier: "BatchUpdateBasePlanStatesRequest" });

export interface GetSubscriptionOfferRequest {
  /** Required. The parent subscription (ID) of the offer to get. */
  productId?: string;
  /** Required. The unique offer ID of the offer to get. */
  offerId?: string;
  /** Required. The parent base plan (ID) of the offer to get. */
  basePlanId?: string;
  /** Required. The parent app (package name) of the offer to get. */
  packageName?: string;
}

export const GetSubscriptionOfferRequest: Schema.Codec<GetSubscriptionOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetSubscriptionOfferRequest" });

export interface BatchGetSubscriptionOffersRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. */
  requests?: ReadonlyArray<GetSubscriptionOfferRequest>;
}

export const BatchGetSubscriptionOffersRequest: Schema.Codec<BatchGetSubscriptionOffersRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(GetSubscriptionOfferRequest)),
  }).annotate({ identifier: "BatchGetSubscriptionOffersRequest" });

export interface PrepaidPlan {
  /** If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans. */
  allowExtendAfterTime?: string;
}

export const PrepaidPlan: Schema.Codec<PrepaidPlan> =
  /*@__PURE__*/ Schema.Struct({
    allowExtendAfterTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrepaidPlan" });

export interface OfferDetails {
  /** The base plan ID. Present for all base plan and offers. */
  basePlanId?: string;
  /** The latest offer tags associated with the offer. It includes tags inherited from the base plan. */
  offerTags?: ReadonlyArray<string>;
  /** The offer ID. Only present for discounted offers. */
  offerId?: string;
}

export const OfferDetails: Schema.Codec<OfferDetails> =
  /*@__PURE__*/ Schema.Struct({
    basePlanId: Schema.optional(Schema.String),
    offerTags: Schema.optional(Schema.Array(Schema.String)),
    offerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OfferDetails" });

export interface ProrationPeriodOfferPhase {
  /** The original offer phase type before the proration period. Only set when the proration period is updated from an existing offer phase. */
  originalOfferPhaseType?:
    | "ORIGINAL_OFFER_PHASE_TYPE_UNSPECIFIED"
    | "BASE"
    | "INTRODUCTORY"
    | "FREE_TRIAL"
    | (string & {});
}

export const ProrationPeriodOfferPhase: Schema.Codec<ProrationPeriodOfferPhase> =
  /*@__PURE__*/ Schema.Struct({
    originalOfferPhaseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProrationPeriodOfferPhase" });

export interface FreeTrialOfferPhase {}

export const FreeTrialOfferPhase: Schema.Codec<FreeTrialOfferPhase> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FreeTrialOfferPhase",
  });

export interface BasePriceOfferPhase {}

export const BasePriceOfferPhase: Schema.Codec<BasePriceOfferPhase> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BasePriceOfferPhase",
  });

export interface OfferPhase {
  /** Set when the offer phase is a proration period. */
  prorationPeriod?: ProrationPeriodOfferPhase;
  /** Set when the offer phase is an introductory price offer phase. */
  introductoryPrice?: IntroductoryPriceOfferPhase;
  /** Set when the offer phase is a free trial. */
  freeTrial?: FreeTrialOfferPhase;
  /** Set when the offer phase is a base plan pricing phase. */
  basePrice?: BasePriceOfferPhase;
}

export const OfferPhase: Schema.Codec<OfferPhase> =
  /*@__PURE__*/ Schema.Struct({
    prorationPeriod: Schema.optional(ProrationPeriodOfferPhase),
    introductoryPrice: Schema.optional(IntroductoryPriceOfferPhase),
    freeTrial: Schema.optional(FreeTrialOfferPhase),
    basePrice: Schema.optional(BasePriceOfferPhase),
  }).annotate({ identifier: "OfferPhase" });

export interface PriceStepUpConsentDetails {
  /** Output only. The state of the price step-up consent. */
  state?:
    | "CONSENT_STATE_UNSPECIFIED"
    | "PENDING"
    | "CONFIRMED"
    | "COMPLETED"
    | (string & {});
  /** The deadline by which the user must provide consent. If consent is not provided by this time, the subscription will be canceled. */
  consentDeadlineTime?: string;
  /** The new price which requires user consent. */
  newPrice?: Money;
}

export const PriceStepUpConsentDetails: Schema.Codec<PriceStepUpConsentDetails> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    consentDeadlineTime: Schema.optional(Schema.String),
    newPrice: Schema.optional(Money),
  }).annotate({ identifier: "PriceStepUpConsentDetails" });

export interface SubscriptionItemPriceChangeDetails {
  /** State the price change is currently in. */
  priceChangeState?:
    | "PRICE_CHANGE_STATE_UNSPECIFIED"
    | "OUTSTANDING"
    | "CONFIRMED"
    | "APPLIED"
    | "CANCELED"
    | (string & {});
  /** New recurring price for the subscription item. */
  newPrice?: Money;
  /** The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause. This field is only populated if the price change has not taken effect. */
  expectedNewPriceChargeTime?: string;
  /** Price change mode specifies how the subscription item price is changing. */
  priceChangeMode?:
    | "PRICE_CHANGE_MODE_UNSPECIFIED"
    | "PRICE_DECREASE"
    | "PRICE_INCREASE"
    | "OPT_OUT_PRICE_INCREASE"
    | (string & {});
}

export const SubscriptionItemPriceChangeDetails: Schema.Codec<SubscriptionItemPriceChangeDetails> =
  /*@__PURE__*/ Schema.Struct({
    priceChangeState: Schema.optional(Schema.String),
    newPrice: Schema.optional(Money),
    expectedNewPriceChargeTime: Schema.optional(Schema.String),
    priceChangeMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionItemPriceChangeDetails" });

export interface AutoRenewingPlan {
  /** The current recurring price of the auto renewing plan. Note that the price does not take into account discounts and does not include taxes. For tax-exclusive pricing, please call orders.get API instead if transaction details are needed. */
  recurringPrice?: Money;
  /** If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription */
  autoRenewEnabled?: boolean;
  /** The information of the latest price step-up consent. */
  priceStepUpConsentDetails?: PriceStepUpConsentDetails;
  /** The installment plan commitment and state related info for the auto renewing plan. */
  installmentDetails?: InstallmentPlan;
  /** The information of the last price change for the item since subscription signup. */
  priceChangeDetails?: SubscriptionItemPriceChangeDetails;
}

export const AutoRenewingPlan: Schema.Codec<AutoRenewingPlan> =
  /*@__PURE__*/ Schema.Struct({
    recurringPrice: Schema.optional(Money),
    autoRenewEnabled: Schema.optional(Schema.Boolean),
    priceStepUpConsentDetails: Schema.optional(PriceStepUpConsentDetails),
    installmentDetails: Schema.optional(InstallmentPlan),
    priceChangeDetails: Schema.optional(SubscriptionItemPriceChangeDetails),
  }).annotate({ identifier: "AutoRenewingPlan" });

export interface ItemReplacement {
  /** The product ID of the subscription line item being replaced. */
  productId?: string;
  /** The offer ID of the subscription line item being replaced, if applicable. */
  offerId?: string;
  /** The replacement mode applied during the purchase. */
  replacementMode?:
    | "REPLACEMENT_MODE_UNSPECIFIED"
    | "WITH_TIME_PRORATION"
    | "CHARGE_PRORATED_PRICE"
    | "WITHOUT_PRORATION"
    | "CHARGE_FULL_PRICE"
    | "DEFERRED"
    | "KEEP_EXISTING"
    | (string & {});
  /** The base plan ID of the subscription line item being replaced. */
  basePlanId?: string;
}

export const ItemReplacement: Schema.Codec<ItemReplacement> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    replacementMode: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemReplacement" });

export interface SubscriptionPurchaseLineItem {
  /** The item is prepaid. */
  prepaidPlan?: PrepaidPlan;
  /** The offer details for this item. */
  offerDetails?: OfferDetails;
  /** Current offer phase details for this item. */
  offerPhase?: OfferPhase;
  /** Time at which the subscription expired or will expire unless the access is extended (ex. renews). */
  expiryTime?: string;
  /** Information for deferred item removal. */
  deferredItemRemoval?: DeferredItemRemoval;
  /** Promotion details about this item. Only set if a promotion was applied during signup. */
  signupPromotion?: SignupPromotion;
  /** The purchased product ID (for example, 'monthly001'). */
  productId?: string;
  /** The order id of the latest successful order associated with this item. Not present if the item is not owned by the user yet (e.g. the item being deferred replaced to). */
  latestSuccessfulOrderId?: string;
  /** The item is auto renewing. */
  autoRenewingPlan?: AutoRenewingPlan;
  /** Information for deferred item replacement. */
  deferredItemReplacement?: DeferredItemReplacement;
  /** Details of the item being replaced. This field is only populated if this item replaced another item in a previous subscription and is only available for 60 days after the purchase time. */
  itemReplacement?: ItemReplacement;
}

export const SubscriptionPurchaseLineItem: Schema.Codec<SubscriptionPurchaseLineItem> =
  /*@__PURE__*/ Schema.Struct({
    prepaidPlan: Schema.optional(PrepaidPlan),
    offerDetails: Schema.optional(OfferDetails),
    offerPhase: Schema.optional(OfferPhase),
    expiryTime: Schema.optional(Schema.String),
    deferredItemRemoval: Schema.optional(DeferredItemRemoval),
    signupPromotion: Schema.optional(SignupPromotion),
    productId: Schema.optional(Schema.String),
    latestSuccessfulOrderId: Schema.optional(Schema.String),
    autoRenewingPlan: Schema.optional(AutoRenewingPlan),
    deferredItemReplacement: Schema.optional(DeferredItemReplacement),
    itemReplacement: Schema.optional(ItemReplacement),
  }).annotate({ identifier: "SubscriptionPurchaseLineItem" });

export interface ArchiveSubscriptionRequest {}

export const ArchiveSubscriptionRequest: Schema.Codec<ArchiveSubscriptionRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ArchiveSubscriptionRequest",
  });

export interface ReviewsReplyResponse {
  /** The result of replying/updating a reply to review. */
  result?: ReviewReplyResult;
}

export const ReviewsReplyResponse: Schema.Codec<ReviewsReplyResponse> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(ReviewReplyResult),
  }).annotate({ identifier: "ReviewsReplyResponse" });

export interface GetOneTimeProductOfferRequest {
  /** Required. The parent one-time product (ID) of the offer to get. */
  productId?: string;
  /** Required. The parent purchase option (ID) of the offer to get. */
  purchaseOptionId?: string;
  /** Required. The unique offer ID of the offer to get. */
  offerId?: string;
  /** Required. The parent app (package name) of the offer to get. */
  packageName?: string;
}

export const GetOneTimeProductOfferRequest: Schema.Codec<GetOneTimeProductOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetOneTimeProductOfferRequest" });

export interface BatchGetOneTimeProductOffersRequest {
  /** Required. A list of get requests of up to 100 elements. All requests must retrieve different offers. */
  requests?: ReadonlyArray<GetOneTimeProductOfferRequest>;
}

export const BatchGetOneTimeProductOffersRequest: Schema.Codec<BatchGetOneTimeProductOffersRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(GetOneTimeProductOfferRequest)),
  }).annotate({ identifier: "BatchGetOneTimeProductOffersRequest" });

export interface RegionalPriceMigrationConfig {
  /** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
  regionCode?: string;
  /** Required. Subscribers in all legacy price cohorts before this time will be migrated to the current price. Subscribers in any newer price cohorts are unaffected. Affected subscribers will receive one or more notifications from Google Play about the price change. Price decreases occur at the subscriber's next billing date. Price increases occur at the subscriber's next billing date following a notification period that varies by region and price increase type. */
  oldestAllowedPriceVersionTime?: string;
  /** Optional. The requested type of price increase */
  priceIncreaseType?:
    | "PRICE_INCREASE_TYPE_UNSPECIFIED"
    | "PRICE_INCREASE_TYPE_OPT_IN"
    | "PRICE_INCREASE_TYPE_OPT_OUT"
    | (string & {});
}

export const RegionalPriceMigrationConfig: Schema.Codec<RegionalPriceMigrationConfig> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    oldestAllowedPriceVersionTime: Schema.optional(Schema.String),
    priceIncreaseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalPriceMigrationConfig" });

export interface MigrateBasePlanPricesRequest {
  /** Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. */
  productId?: string;
  /** Required. The regional prices to update. */
  regionalPriceMigrations?: ReadonlyArray<RegionalPriceMigrationConfig>;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The unique base plan ID of the base plan to update prices on. */
  basePlanId?: string;
  /** Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. */
  packageName?: string;
  /** Required. The version of the available regions being used for the regional_price_migrations. */
  regionsVersion?: RegionsVersion;
}

export const MigrateBasePlanPricesRequest: Schema.Codec<MigrateBasePlanPricesRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    regionalPriceMigrations: Schema.optional(
      Schema.Array(RegionalPriceMigrationConfig),
    ),
    latencyTolerance: Schema.optional(Schema.String),
    basePlanId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    regionsVersion: Schema.optional(RegionsVersion),
  }).annotate({ identifier: "MigrateBasePlanPricesRequest" });

export interface OneTimeExternalTransaction {
  /** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. */
  externalTransactionToken?: string;
}

export const OneTimeExternalTransaction: Schema.Codec<OneTimeExternalTransaction> =
  /*@__PURE__*/ Schema.Struct({
    externalTransactionToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeExternalTransaction" });

export interface IntroductoryPriceInfo {
  /** ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
  introductoryPriceCurrencyCode?: string;
  /** The number of billing period to offer introductory pricing. */
  introductoryPriceCycles?: number;
  /** Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
  introductoryPriceAmountMicros?: string;
  /** Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
  introductoryPricePeriod?: string;
}

export const IntroductoryPriceInfo: Schema.Codec<IntroductoryPriceInfo> =
  /*@__PURE__*/ Schema.Struct({
    introductoryPriceCurrencyCode: Schema.optional(Schema.String),
    introductoryPriceCycles: Schema.optional(Schema.Number),
    introductoryPriceAmountMicros: Schema.optional(Schema.String),
    introductoryPricePeriod: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntroductoryPriceInfo" });

export interface SafetyLabelsUpdateRequest {
  /** Required. Contents of the CSV file containing Data Safety responses. For the format of this file, see the Help Center documentation at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy=%2Cunderstand-the-csv-format To download an up to date template, follow the steps at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy=%2Cexport-to-a-csv-file */
  safetyLabels?: string;
}

export const SafetyLabelsUpdateRequest: Schema.Codec<SafetyLabelsUpdateRequest> =
  /*@__PURE__*/ Schema.Struct({
    safetyLabels: Schema.optional(Schema.String),
  }).annotate({ identifier: "SafetyLabelsUpdateRequest" });

export interface Testers {
  /** All testing Google Groups, as email addresses. */
  googleGroups?: ReadonlyArray<string>;
}

export const Testers: Schema.Codec<Testers> =
  /*@__PURE__*/ Schema.Struct({
    googleGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Testers" });

export interface ExternallyHostedApk {
  /** The minimum SDK targeted by this APK. */
  minimumSdk?: number;
  /** The native code environments supported by this APK (optional). */
  nativeCodes?: ReadonlyArray<string>;
  /** The file size in bytes of this APK. */
  fileSize?: string;
  /** A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array. */
  certificateBase64s?: ReadonlyArray<string>;
  /** The sha1 checksum of this APK, represented as a base64 encoded byte array. */
  fileSha1Base64?: string;
  /** The version code of this APK. */
  versionCode?: number;
  /** The features required by this APK (optional). */
  usesFeatures?: ReadonlyArray<string>;
  /** The version name of this APK. */
  versionName?: string;
  /** The icon image from the APK, as a base64 encoded byte array. */
  iconBase64?: string;
  /** The package name. */
  packageName?: string;
  /** The application label. */
  applicationLabel?: string;
  /** The sha256 checksum of this APK, represented as a base64 encoded byte array. */
  fileSha256Base64?: string;
  /** The permissions requested by this APK. */
  usesPermissions?: ReadonlyArray<UsesPermission>;
  /** The maximum SDK supported by this APK (optional). */
  maximumSdk?: number;
  /** The URL at which the APK is hosted. This must be an https URL. */
  externallyHostedUrl?: string;
}

export const ExternallyHostedApk: Schema.Codec<ExternallyHostedApk> =
  /*@__PURE__*/ Schema.Struct({
    minimumSdk: Schema.optional(Schema.Number),
    nativeCodes: Schema.optional(Schema.Array(Schema.String)),
    fileSize: Schema.optional(Schema.String),
    certificateBase64s: Schema.optional(Schema.Array(Schema.String)),
    fileSha1Base64: Schema.optional(Schema.String),
    versionCode: Schema.optional(Schema.Number),
    usesFeatures: Schema.optional(Schema.Array(Schema.String)),
    versionName: Schema.optional(Schema.String),
    iconBase64: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    applicationLabel: Schema.optional(Schema.String),
    fileSha256Base64: Schema.optional(Schema.String),
    usesPermissions: Schema.optional(Schema.Array(UsesPermission)),
    maximumSdk: Schema.optional(Schema.Number),
    externallyHostedUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternallyHostedApk" });

export interface ApksAddExternallyHostedResponse {
  /** The definition of the externally-hosted APK and where it is located. */
  externallyHostedApk?: ExternallyHostedApk;
}

export const ApksAddExternallyHostedResponse: Schema.Codec<ApksAddExternallyHostedResponse> =
  /*@__PURE__*/ Schema.Struct({
    externallyHostedApk: Schema.optional(ExternallyHostedApk),
  }).annotate({ identifier: "ApksAddExternallyHostedResponse" });

export interface MigrateBasePlanPricesResponse {}

export const MigrateBasePlanPricesResponse: Schema.Codec<MigrateBasePlanPricesResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MigrateBasePlanPricesResponse",
  });

export interface BatchDeleteOneTimeProductOffersRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must correspond to different offers. */
  requests?: ReadonlyArray<DeleteOneTimeProductOfferRequest>;
}

export const BatchDeleteOneTimeProductOffersRequest: Schema.Codec<BatchDeleteOneTimeProductOffersRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(DeleteOneTimeProductOfferRequest)),
  }).annotate({ identifier: "BatchDeleteOneTimeProductOffersRequest" });

export interface BatchUpdateSubscriptionOffersResponse {
  /** The updated subscription offers list. */
  subscriptionOffers?: ReadonlyArray<SubscriptionOffer>;
}

export const BatchUpdateSubscriptionOffersResponse: Schema.Codec<BatchUpdateSubscriptionOffersResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptionOffers: Schema.optional(Schema.Array(SubscriptionOffer)),
  }).annotate({ identifier: "BatchUpdateSubscriptionOffersResponse" });

export interface BatchUpdateOneTimeProductsResponse {
  /** The list of updated one-time products list, in the same order as the request. */
  oneTimeProducts?: ReadonlyArray<OneTimeProduct>;
}

export const BatchUpdateOneTimeProductsResponse: Schema.Codec<BatchUpdateOneTimeProductsResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProducts: Schema.optional(Schema.Array(OneTimeProduct)),
  }).annotate({ identifier: "BatchUpdateOneTimeProductsResponse" });

export interface ExternalTransactionAddress {
  /** Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes). */
  regionCode?: string;
  /** Optional. Top-level administrative subdivision of the country/region. Only required for transactions in India. Valid values are "ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", and "WEST BENGAL". */
  administrativeArea?: string;
}

export const ExternalTransactionAddress: Schema.Codec<ExternalTransactionAddress> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    administrativeArea: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalTransactionAddress" });

export interface SafetyLabelsUpdateResponse {}

export const SafetyLabelsUpdateResponse: Schema.Codec<SafetyLabelsUpdateResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SafetyLabelsUpdateResponse",
  });

export interface AddTargetingRequest {
  /** Specifies targeting updates such as regions, android sdk versions etc. */
  targetingUpdate?: TargetingUpdate;
}

export const AddTargetingRequest: Schema.Codec<AddTargetingRequest> =
  /*@__PURE__*/ Schema.Struct({
    targetingUpdate: Schema.optional(TargetingUpdate),
  }).annotate({ identifier: "AddTargetingRequest" });

export interface ApksListResponse {
  /** The kind of this response ("androidpublisher#apksListResponse"). */
  kind?: string;
  /** All APKs. */
  apks?: ReadonlyArray<Apk>;
}

export const ApksListResponse: Schema.Codec<ApksListResponse> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    apks: Schema.optional(Schema.Array(Apk)),
  }).annotate({ identifier: "ApksListResponse" });

export interface DeactivatePurchaseOptionRequest {
  /** Required. The parent one-time product (ID) of the purchase option to deactivate. */
  productId?: string;
  /** Required. The purchase option ID of the purchase option to deactivate. */
  purchaseOptionId?: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The parent app (package name) of the purchase option to deactivate. */
  packageName?: string;
}

export const DeactivatePurchaseOptionRequest: Schema.Codec<DeactivatePurchaseOptionRequest> =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    purchaseOptionId: Schema.optional(Schema.String),
    latencyTolerance: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeactivatePurchaseOptionRequest" });

export interface UpdatePurchaseOptionStateRequest {
  /** Activates a purchase option. Once activated, the purchase option will be available. */
  activatePurchaseOptionRequest?: ActivatePurchaseOptionRequest;
  /** Deactivates a purchase option. Once deactivated, the purchase option will become unavailable. */
  deactivatePurchaseOptionRequest?: DeactivatePurchaseOptionRequest;
}

export const UpdatePurchaseOptionStateRequest: Schema.Codec<UpdatePurchaseOptionStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    activatePurchaseOptionRequest: Schema.optional(
      ActivatePurchaseOptionRequest,
    ),
    deactivatePurchaseOptionRequest: Schema.optional(
      DeactivatePurchaseOptionRequest,
    ),
  }).annotate({ identifier: "UpdatePurchaseOptionStateRequest" });

export interface TestPurchase {}

export const TestPurchase: Schema.Codec<TestPurchase> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TestPurchase",
  });

export interface RevokeSubscriptionPurchaseResponse {}

export const RevokeSubscriptionPurchaseResponse: Schema.Codec<RevokeSubscriptionPurchaseResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RevokeSubscriptionPurchaseResponse",
  });

export interface RenewalDeclinedContext {
  /** Required. The ID of the pending or failed order causing the state. */
  pendingOrderId?: string;
}

export const RenewalDeclinedContext: Schema.Codec<RenewalDeclinedContext> =
  /*@__PURE__*/ Schema.Struct({
    pendingOrderId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RenewalDeclinedContext" });

export interface OnHoldStateContext {
  /** Optional. The payment for the renewal was declined. */
  renewalDeclined?: RenewalDeclinedContext;
}

export const OnHoldStateContext: Schema.Codec<OnHoldStateContext> =
  /*@__PURE__*/ Schema.Struct({
    renewalDeclined: Schema.optional(RenewalDeclinedContext),
  }).annotate({ identifier: "OnHoldStateContext" });

export interface ProductPurchasesAcknowledgeRequest {
  /** Payload to attach to the purchase. */
  developerPayload?: string;
}

export const ProductPurchasesAcknowledgeRequest: Schema.Codec<ProductPurchasesAcknowledgeRequest> =
  /*@__PURE__*/ Schema.Struct({
    developerPayload: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductPurchasesAcknowledgeRequest" });

export interface InappproductsBatchUpdateResponse {
  /** The updated or inserted in-app products. */
  inappproducts?: ReadonlyArray<InAppProduct>;
}

export const InappproductsBatchUpdateResponse: Schema.Codec<InappproductsBatchUpdateResponse> =
  /*@__PURE__*/ Schema.Struct({
    inappproducts: Schema.optional(Schema.Array(InAppProduct)),
  }).annotate({ identifier: "InappproductsBatchUpdateResponse" });

export interface BundlesListResponse {
  /** The kind of this response ("androidpublisher#bundlesListResponse"). */
  kind?: string;
  /** All app bundles. */
  bundles?: ReadonlyArray<Bundle>;
}

export const BundlesListResponse: Schema.Codec<BundlesListResponse> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    bundles: Schema.optional(Schema.Array(Bundle)),
  }).annotate({ identifier: "BundlesListResponse" });

export interface BatchUpdatePurchaseOptionStatesRequest {
  /** Required. The update request list of up to 100 elements. All requests must update different purchase options. */
  requests?: ReadonlyArray<UpdatePurchaseOptionStateRequest>;
}

export const BatchUpdatePurchaseOptionStatesRequest: Schema.Codec<BatchUpdatePurchaseOptionStatesRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdatePurchaseOptionStateRequest)),
  }).annotate({ identifier: "BatchUpdatePurchaseOptionStatesRequest" });

export interface ReleaseSummary {
  /** The lifecycle state of a release. */
  releaseLifecycleState?:
    | "RELEASE_LIFECYCLE_STATE_UNSPECIFIED"
    | "RELEASE_LIFECYCLE_STATE_DRAFT"
    | "RELEASE_LIFECYCLE_STATE_NOT_SENT_FOR_REVIEW"
    | "RELEASE_LIFECYCLE_STATE_IN_REVIEW"
    | "RELEASE_LIFECYCLE_STATE_APPROVED_NOT_PUBLISHED"
    | "RELEASE_LIFECYCLE_STATE_NOT_APPROVED"
    | "RELEASE_LIFECYCLE_STATE_PUBLISHED"
    | (string & {});
  /** Identifier for the track. [Learn more about track names.](https://developers.google.com/android-publisher/tracks). */
  track?: string;
  /** Name of the release. */
  releaseName?: string;
  /** List of active artifacts on this release */
  activeArtifacts?: ReadonlyArray<ArtifactSummary>;
}

export const ReleaseSummary: Schema.Codec<ReleaseSummary> =
  /*@__PURE__*/ Schema.Struct({
    releaseLifecycleState: Schema.optional(Schema.String),
    track: Schema.optional(Schema.String),
    releaseName: Schema.optional(Schema.String),
    activeArtifacts: Schema.optional(Schema.Array(ArtifactSummary)),
  }).annotate({ identifier: "ReleaseSummary" });

export interface BatchUpdateSubscriptionOfferStatesResponse {
  /** The updated subscription offers list. */
  subscriptionOffers?: ReadonlyArray<SubscriptionOffer>;
}

export const BatchUpdateSubscriptionOfferStatesResponse: Schema.Codec<BatchUpdateSubscriptionOfferStatesResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptionOffers: Schema.optional(Schema.Array(SubscriptionOffer)),
  }).annotate({ identifier: "BatchUpdateSubscriptionOfferStatesResponse" });

export interface ListReleaseSummariesResponse {
  /** List of releases for this track. A maximum of 20 releases can be returned. */
  releases?: ReadonlyArray<ReleaseSummary>;
}

export const ListReleaseSummariesResponse: Schema.Codec<ListReleaseSummariesResponse> =
  /*@__PURE__*/ Schema.Struct({
    releases: Schema.optional(Schema.Array(ReleaseSummary)),
  }).annotate({ identifier: "ListReleaseSummariesResponse" });

export interface RecurringExternalTransaction {
  /** The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions. */
  initialExternalTransactionId?: string;
  /** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase. */
  externalTransactionToken?: string;
  /** Input only. Provided during the call to Create. Must only be used when migrating a subscription from manual monthly reporting to automated reporting. */
  migratedTransactionProgram?:
    | "EXTERNAL_TRANSACTION_PROGRAM_UNSPECIFIED"
    | "USER_CHOICE_BILLING"
    | "ALTERNATIVE_BILLING_ONLY"
    | (string & {});
  /** Details of a recurring external transaction product which doesn't belong to any other specific category. */
  otherRecurringProduct?: OtherRecurringProduct;
  /** Details of an external subscription. */
  externalSubscription?: ExternalSubscription;
}

export const RecurringExternalTransaction: Schema.Codec<RecurringExternalTransaction> =
  /*@__PURE__*/ Schema.Struct({
    initialExternalTransactionId: Schema.optional(Schema.String),
    externalTransactionToken: Schema.optional(Schema.String),
    migratedTransactionProgram: Schema.optional(Schema.String),
    otherRecurringProduct: Schema.optional(OtherRecurringProduct),
    externalSubscription: Schema.optional(ExternalSubscription),
  }).annotate({ identifier: "RecurringExternalTransaction" });

export interface ExternalTransaction {
  /** Optional. The transaction program code, used to help determine service fee for eligible apps participating in partner programs. Developers participating in the Play Media Experience Program (https://play.google.com/console/about/programs/mediaprogram/) must provide the program code when reporting alternative billing transactions. If you are an eligible developer, please contact your BDM for more information on how to set this field. Note: this field can not be used for external offers transactions. */
  transactionProgramCode?: number;
  /** Output only. The time when this transaction was created. This is the time when Google was notified of the transaction. */
  createTime?: string;
  /** Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app'). */
  packageName?: string;
  /** Output only. The current tax amount. This represents the current tax amount including any refunds that may have been applied to this transaction. */
  currentTaxAmount?: Price;
  /** Required. The time when the transaction was completed. */
  transactionTime?: string;
  /** Output only. The current transaction amount before tax. This represents the current pre-tax amount including any refunds that may have been applied to this transaction. */
  currentPreTaxAmount?: Price;
  /** Optional. Details necessary to accurately report external offers transactions. */
  externalOfferDetails?: ExternalOfferDetails;
  /** This transaction is part of a recurring series of transactions. */
  recurringTransaction?: RecurringExternalTransaction;
  /** Required. User address for tax computation. */
  userTaxAddress?: ExternalTransactionAddress;
  /** Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied. */
  originalPreTaxAmount?: Price;
  /** This is a one-time transaction and not part of a subscription. */
  oneTimeTransaction?: OneTimeExternalTransaction;
  /** Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction. */
  externalTransactionId?: string;
  /** Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied. */
  originalTaxAmount?: Price;
  /** Output only. If set, this transaction was a test purchase. Google will not charge for a test transaction. */
  testPurchase?: ExternalTransactionTestPurchase;
  /** Output only. The current state of the transaction. */
  transactionState?:
    | "TRANSACTION_STATE_UNSPECIFIED"
    | "TRANSACTION_REPORTED"
    | "TRANSACTION_CANCELED"
    | (string & {});
}

export const ExternalTransaction: Schema.Codec<ExternalTransaction> =
  /*@__PURE__*/ Schema.Struct({
    transactionProgramCode: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    currentTaxAmount: Schema.optional(Price),
    transactionTime: Schema.optional(Schema.String),
    currentPreTaxAmount: Schema.optional(Price),
    externalOfferDetails: Schema.optional(ExternalOfferDetails),
    recurringTransaction: Schema.optional(RecurringExternalTransaction),
    userTaxAddress: Schema.optional(ExternalTransactionAddress),
    originalPreTaxAmount: Schema.optional(Price),
    oneTimeTransaction: Schema.optional(OneTimeExternalTransaction),
    externalTransactionId: Schema.optional(Schema.String),
    originalTaxAmount: Schema.optional(Price),
    testPurchase: Schema.optional(ExternalTransactionTestPurchase),
    transactionState: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalTransaction" });

export interface GeneratedApksListResponse {
  /** All generated APKs, grouped by the APK signing key. */
  generatedApks?: ReadonlyArray<GeneratedApksPerSigningKey>;
}

export const GeneratedApksListResponse: Schema.Codec<GeneratedApksListResponse> =
  /*@__PURE__*/ Schema.Struct({
    generatedApks: Schema.optional(Schema.Array(GeneratedApksPerSigningKey)),
  }).annotate({ identifier: "GeneratedApksListResponse" });

export interface SubscriptionPurchase {
  /** Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price. This field does not indicate the subscription is currently in introductory price period. */
  introductoryPriceInfo?: IntroductoryPriceInfo;
  /** Time at which the subscription will expire, in milliseconds since the Epoch. */
  expiryTimeMillis?: string;
  /** The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased. */
  promotionCode?: string;
  /** A developer-specified string that contains supplemental information about an order. */
  developerPayload?: string;
  /** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
  priceCurrencyCode?: string;
  /** The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied. Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned. */
  priceChange?: SubscriptionPriceChange;
  /** Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
  priceAmountMicros?: string;
  /** The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions. */
  paymentState?: number;
  /** The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
  acknowledgementState?: number;
  /** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
  emailAddress?: string;
  /** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
  familyName?: string;
  /** The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) */
  purchaseType?: number;
  /** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
  obfuscatedExternalProfileId?: string;
  /** The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer */
  cancelReason?: number;
  /** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
  profileName?: string;
  /** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
  cancelSurveyResult?: SubscriptionCancelSurveyResult;
  /** The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order. */
  orderId?: string;
  /** Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription. */
  autoResumeTimeMillis?: string;
  /** The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code */
  promotionType?: number;
  /** Time at which the subscription was granted, in milliseconds since the Epoch. */
  startTimeMillis?: string;
  /** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
  externalAccountId?: string;
  /** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
  autoRenewing?: boolean;
  /** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
  countryCode?: string;
  /** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
  userCancellationTimeMillis?: string;
  /** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
  profileId?: string;
  /** The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set. */
  linkedPurchaseToken?: string;
  /** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
  obfuscatedExternalAccountId?: string;
  /** This kind represents a subscriptionPurchase object in the androidpublisher service. */
  kind?: string;
  /** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
  givenName?: string;
}

export const SubscriptionPurchase: Schema.Codec<SubscriptionPurchase> =
  /*@__PURE__*/ Schema.Struct({
    introductoryPriceInfo: Schema.optional(IntroductoryPriceInfo),
    expiryTimeMillis: Schema.optional(Schema.String),
    promotionCode: Schema.optional(Schema.String),
    developerPayload: Schema.optional(Schema.String),
    priceCurrencyCode: Schema.optional(Schema.String),
    priceChange: Schema.optional(SubscriptionPriceChange),
    priceAmountMicros: Schema.optional(Schema.String),
    paymentState: Schema.optional(Schema.Number),
    acknowledgementState: Schema.optional(Schema.Number),
    emailAddress: Schema.optional(Schema.String),
    familyName: Schema.optional(Schema.String),
    purchaseType: Schema.optional(Schema.Number),
    obfuscatedExternalProfileId: Schema.optional(Schema.String),
    cancelReason: Schema.optional(Schema.Number),
    profileName: Schema.optional(Schema.String),
    cancelSurveyResult: Schema.optional(SubscriptionCancelSurveyResult),
    orderId: Schema.optional(Schema.String),
    autoResumeTimeMillis: Schema.optional(Schema.String),
    promotionType: Schema.optional(Schema.Number),
    startTimeMillis: Schema.optional(Schema.String),
    externalAccountId: Schema.optional(Schema.String),
    autoRenewing: Schema.optional(Schema.Boolean),
    countryCode: Schema.optional(Schema.String),
    userCancellationTimeMillis: Schema.optional(Schema.String),
    profileId: Schema.optional(Schema.String),
    linkedPurchaseToken: Schema.optional(Schema.String),
    obfuscatedExternalAccountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    givenName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionPurchase" });

export interface RevokeSubscriptionPurchaseRequest {
  /** Required. Additional details around the subscription revocation. */
  revocationContext?: RevocationContext;
}

export const RevokeSubscriptionPurchaseRequest: Schema.Codec<RevokeSubscriptionPurchaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    revocationContext: Schema.optional(RevocationContext),
  }).annotate({ identifier: "RevokeSubscriptionPurchaseRequest" });

export interface BatchUpdateSubscriptionOfferStatesRequest {
  /** Required. The update request list of up to 100 elements. All requests must update different offers. */
  requests?: ReadonlyArray<UpdateSubscriptionOfferStateRequest>;
}

export const BatchUpdateSubscriptionOfferStatesRequest: Schema.Codec<BatchUpdateSubscriptionOfferStatesRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(UpdateSubscriptionOfferStateRequest),
    ),
  }).annotate({ identifier: "BatchUpdateSubscriptionOfferStatesRequest" });

export interface SubscribeWithGoogleInfo {
  /** The Google profile id of the user when the subscription was purchased. */
  profileId?: string;
  /** The profile name of the user when the subscription was purchased. */
  profileName?: string;
  /** The email address of the user when the subscription was purchased. */
  emailAddress?: string;
  /** The given name of the user when the subscription was purchased. */
  givenName?: string;
  /** The family name of the user when the subscription was purchased. */
  familyName?: string;
}

export const SubscribeWithGoogleInfo: Schema.Codec<SubscribeWithGoogleInfo> =
  /*@__PURE__*/ Schema.Struct({
    profileId: Schema.optional(Schema.String),
    profileName: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
    givenName: Schema.optional(Schema.String),
    familyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscribeWithGoogleInfo" });

export interface InGracePeriodStateContext {
  /** Optional. The payment for the renewal was declined. */
  renewalDeclined?: RenewalDeclinedContext;
}

export const InGracePeriodStateContext: Schema.Codec<InGracePeriodStateContext> =
  /*@__PURE__*/ Schema.Struct({
    renewalDeclined: Schema.optional(RenewalDeclinedContext),
  }).annotate({ identifier: "InGracePeriodStateContext" });

export interface SubscriptionPurchaseV2 {
  /** The acknowledgement state of the subscription. */
  acknowledgementState?:
    | "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
    | "ACKNOWLEDGEMENT_STATE_PENDING"
    | "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
    | (string & {});
  /** This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service. */
  kind?: string;
  /** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
  regionCode?: string;
  /** The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription. */
  linkedPurchaseToken?: string;
  /** Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan. */
  lineItems?: ReadonlyArray<SubscriptionPurchaseLineItem>;
  /** Entity tag representing the current state of the subscription. The developer will provide this etag for subscription actions. This etag is always present for auto-renewing and prepaid subscriptions. */
  etag?: string;
  /** User account identifier in the third-party service. */
  externalAccountIdentifiers?: ExternalAccountIdentifiers;
  /** User profile associated with purchases made with 'Subscribe with Google'. */
  subscribeWithGoogleInfo?: SubscribeWithGoogleInfo;
  /** Optional. Additional context around subscriptions in IN_GRACE_PERIOD state. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_IN_GRACE_PERIOD. */
  inGracePeriodStateContext?: InGracePeriodStateContext;
  /** Deprecated: Use line_items.latest_successful_order_id instead. The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token. */
  latestOrderId?: string;
  /** The current state of the subscription. */
  subscriptionState?:
    | "SUBSCRIPTION_STATE_UNSPECIFIED"
    | "SUBSCRIPTION_STATE_PENDING"
    | "SUBSCRIPTION_STATE_ACTIVE"
    | "SUBSCRIPTION_STATE_PAUSED"
    | "SUBSCRIPTION_STATE_IN_GRACE_PERIOD"
    | "SUBSCRIPTION_STATE_ON_HOLD"
    | "SUBSCRIPTION_STATE_CANCELED"
    | "SUBSCRIPTION_STATE_EXPIRED"
    | "SUBSCRIPTION_STATE_PENDING_PURCHASE_CANCELED"
    | (string & {});
  /** Additional context around canceled subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_CANCELED or SUBSCRIPTION_STATE_EXPIRED. */
  canceledStateContext?: CanceledStateContext;
  /** Only present if this subscription purchase is a test purchase. */
  testPurchase?: TestPurchase;
  /** Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup). */
  startTime?: string;
  /** Additional context around paused subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_PAUSED. */
  pausedStateContext?: PausedStateContext;
  /** Optional. Additional context around subscriptions in ON_HOLD state. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_ON_HOLD. */
  onHoldStateContext?: OnHoldStateContext;
  /** Additional context for out of app purchases. This information is only present for re-subscription purchases (subscription purchases made after the previous subscription of the same product has expired) made through the Google Play subscriptions center. This field will be removed after you acknowledge the subscription. */
  outOfAppPurchaseContext?: OutOfAppPurchaseContext;
}

export const SubscriptionPurchaseV2: Schema.Codec<SubscriptionPurchaseV2> =
  /*@__PURE__*/ Schema.Struct({
    acknowledgementState: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    linkedPurchaseToken: Schema.optional(Schema.String),
    lineItems: Schema.optional(Schema.Array(SubscriptionPurchaseLineItem)),
    etag: Schema.optional(Schema.String),
    externalAccountIdentifiers: Schema.optional(ExternalAccountIdentifiers),
    subscribeWithGoogleInfo: Schema.optional(SubscribeWithGoogleInfo),
    inGracePeriodStateContext: Schema.optional(InGracePeriodStateContext),
    latestOrderId: Schema.optional(Schema.String),
    subscriptionState: Schema.optional(Schema.String),
    canceledStateContext: Schema.optional(CanceledStateContext),
    testPurchase: Schema.optional(TestPurchase),
    startTime: Schema.optional(Schema.String),
    pausedStateContext: Schema.optional(PausedStateContext),
    onHoldStateContext: Schema.optional(OnHoldStateContext),
    outOfAppPurchaseContext: Schema.optional(OutOfAppPurchaseContext),
  }).annotate({ identifier: "SubscriptionPurchaseV2" });

export interface UpdateSubscriptionOfferRequest {
  /** Required. The version of the available regions being used for the subscription_offer. */
  regionsVersion?: RegionsVersion;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored. */
  allowMissing?: boolean;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. The subscription offer to update. */
  subscriptionOffer?: SubscriptionOffer;
}

export const UpdateSubscriptionOfferRequest: Schema.Codec<UpdateSubscriptionOfferRequest> =
  /*@__PURE__*/ Schema.Struct({
    regionsVersion: Schema.optional(RegionsVersion),
    updateMask: Schema.optional(Schema.String),
    allowMissing: Schema.optional(Schema.Boolean),
    latencyTolerance: Schema.optional(Schema.String),
    subscriptionOffer: Schema.optional(SubscriptionOffer),
  }).annotate({ identifier: "UpdateSubscriptionOfferRequest" });

export interface DeployAppRecoveryResponse {}

export const DeployAppRecoveryResponse: Schema.Codec<DeployAppRecoveryResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeployAppRecoveryResponse",
  });

export interface BatchUpdateOneTimeProductsRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must update different one-time products. */
  requests?: ReadonlyArray<UpdateOneTimeProductRequest>;
}

export const BatchUpdateOneTimeProductsRequest: Schema.Codec<BatchUpdateOneTimeProductsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateOneTimeProductRequest)),
  }).annotate({ identifier: "BatchUpdateOneTimeProductsRequest" });

export interface ApksAddExternallyHostedRequest {
  /** The definition of the externally-hosted APK and where it is located. */
  externallyHostedApk?: ExternallyHostedApk;
}

export const ApksAddExternallyHostedRequest: Schema.Codec<ApksAddExternallyHostedRequest> =
  /*@__PURE__*/ Schema.Struct({
    externallyHostedApk: Schema.optional(ExternallyHostedApk),
  }).annotate({ identifier: "ApksAddExternallyHostedRequest" });

export interface ListSubscriptionsResponse {
  /** The subscriptions from the specified app. */
  subscriptions?: ReadonlyArray<Subscription>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSubscriptionsResponse: Schema.Codec<ListSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSubscriptionsResponse" });

export interface BatchUpdateSubscriptionOffersRequest {
  /** Required. A list of update requests of up to 100 elements. All requests must update different subscription offers. */
  requests?: ReadonlyArray<UpdateSubscriptionOfferRequest>;
}

export const BatchUpdateSubscriptionOffersRequest: Schema.Codec<BatchUpdateSubscriptionOffersRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateSubscriptionOfferRequest)),
  }).annotate({ identifier: "BatchUpdateSubscriptionOffersRequest" });

export interface InappproductsBatchGetResponse {
  /** The list of requested in-app products, in the same order as the request. */
  inappproduct?: ReadonlyArray<InAppProduct>;
}

export const InappproductsBatchGetResponse: Schema.Codec<InappproductsBatchGetResponse> =
  /*@__PURE__*/ Schema.Struct({
    inappproduct: Schema.optional(Schema.Array(InAppProduct)),
  }).annotate({ identifier: "InappproductsBatchGetResponse" });

export interface ListingsListResponse {
  /** The kind of this response ("androidpublisher#listingsListResponse"). */
  kind?: string;
  /** All localized listings. */
  listings?: ReadonlyArray<Listing>;
}

export const ListingsListResponse: Schema.Codec<ListingsListResponse> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    listings: Schema.optional(Schema.Array(Listing)),
  }).annotate({ identifier: "ListingsListResponse" });

export interface BatchDeleteOneTimeProductsRequest {
  /** Required. A list of delete requests of up to 100 elements. All requests must delete different one-time products. */
  requests?: ReadonlyArray<DeleteOneTimeProductRequest>;
}

export const BatchDeleteOneTimeProductsRequest: Schema.Codec<BatchDeleteOneTimeProductsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(DeleteOneTimeProductRequest)),
  }).annotate({ identifier: "BatchDeleteOneTimeProductsRequest" });

export interface BatchMigrateBasePlanPricesRequest {
  /** Required. Up to 100 price migration requests. All requests must update different base plans. */
  requests?: ReadonlyArray<MigrateBasePlanPricesRequest>;
}

export const BatchMigrateBasePlanPricesRequest: Schema.Codec<BatchMigrateBasePlanPricesRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(MigrateBasePlanPricesRequest)),
  }).annotate({ identifier: "BatchMigrateBasePlanPricesRequest" });

export interface ConvertRegionPricesRequest {
  /** Optional. Product tax category code in context. Product tax category determines the transaction tax rates applied to the product that will be factored into the price calculation. If not set, tax rates for the default product tax category will be used. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/16408159) for more information. */
  productTaxCategoryCode?: string;
  /** The intital price to convert other regions from. Tax exclusive. */
  price?: Money;
}

export const ConvertRegionPricesRequest: Schema.Codec<ConvertRegionPricesRequest> =
  /*@__PURE__*/ Schema.Struct({
    productTaxCategoryCode: Schema.optional(Schema.String),
    price: Schema.optional(Money),
  }).annotate({ identifier: "ConvertRegionPricesRequest" });

export interface BatchMigrateBasePlanPricesResponse {
  /** Contains one response per requested price migration, in the same order as the request. */
  responses?: ReadonlyArray<MigrateBasePlanPricesResponse>;
}

export const BatchMigrateBasePlanPricesResponse: Schema.Codec<BatchMigrateBasePlanPricesResponse> =
  /*@__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(MigrateBasePlanPricesResponse)),
  }).annotate({ identifier: "BatchMigrateBasePlanPricesResponse" });

export interface BatchGetSubscriptionsResponse {
  /** The list of requested subscriptions, in the same order as the request. */
  subscriptions?: ReadonlyArray<Subscription>;
}

export const BatchGetSubscriptionsResponse: Schema.Codec<BatchGetSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
  }).annotate({ identifier: "BatchGetSubscriptionsResponse" });

export interface BatchUpdateOneTimeProductOfferStatesResponse {
  /** The updated one-time product offers list, in the same order as the request. */
  oneTimeProductOffers?: ReadonlyArray<OneTimeProductOffer>;
}

export const BatchUpdateOneTimeProductOfferStatesResponse: Schema.Codec<BatchUpdateOneTimeProductOfferStatesResponse> =
  /*@__PURE__*/ Schema.Struct({
    oneTimeProductOffers: Schema.optional(Schema.Array(OneTimeProductOffer)),
  }).annotate({ identifier: "BatchUpdateOneTimeProductOfferStatesResponse" });

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

export interface CommitEditsRequest {
  /** When a rejection happens, the parameter will make sure that the changes in this edit won't be reviewed until they are explicitly sent for review from within the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review. */
  changesNotSentForReview?: boolean;
  /** Optional. Specify how the API should behave if there are changes currently in review. If this value is not set, it will default to "CANCEL_IN_REVIEW_AND_SUBMIT", which will cancel the changes in review and then send all the changes for publishing. */
  changesInReviewBehavior?:
    | "CHANGES_IN_REVIEW_BEHAVIOR_TYPE_UNSPECIFIED"
    | "CANCEL_IN_REVIEW_AND_SUBMIT"
    | "ERROR_IF_IN_REVIEW"
    | (string & {});
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
}

export const CommitEditsRequest = /*@__PURE__*/ Schema.Struct({
  changesNotSentForReview: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("changesNotSentForReview"),
  ),
  changesInReviewBehavior: Schema.optional(Schema.String).pipe(
    T.HttpQuery("changesInReviewBehavior"),
  ),
  editId: Schema.String.pipe(T.HttpPath("editId")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}:commit",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<CommitEditsRequest>;

export type CommitEditsResponse = AppEdit;
export const CommitEditsResponse = /*@__PURE__*/ AppEdit;

export type CommitEditsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Commits an app edit. */
export const commitEdits: API.OperationMethod<
  CommitEditsRequest,
  CommitEditsResponse,
  CommitEditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CommitEditsRequest,
  output: CommitEditsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
}

export const GetEditsRequest = /*@__PURE__*/ Schema.Struct({
  editId: Schema.String.pipe(T.HttpPath("editId")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}",
  }),
  svc,
) as unknown as Schema.Codec<GetEditsRequest>;

export type GetEditsResponse = AppEdit;
export const GetEditsResponse = /*@__PURE__*/ AppEdit;

export type GetEditsError = DefaultErrors | NotFound | Forbidden;

/** Gets an app edit. */
export const getEdits: API.OperationMethod<
  GetEditsRequest,
  GetEditsResponse,
  GetEditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsRequest,
  output: GetEditsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertEditsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: AppEdit;
}

export const InsertEditsRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  body: Schema.optional(AppEdit).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/edits",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<InsertEditsRequest>;

export type InsertEditsResponse = AppEdit;
export const InsertEditsResponse = /*@__PURE__*/ AppEdit;

export type InsertEditsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new edit for an app. */
export const insertEdits: API.OperationMethod<
  InsertEditsRequest,
  InsertEditsResponse,
  InsertEditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InsertEditsRequest,
  output: InsertEditsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEditsRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
}

export const DeleteEditsRequest = /*@__PURE__*/ Schema.Struct({
  editId: Schema.String.pipe(T.HttpPath("editId")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}",
  }),
  svc,
) as unknown as Schema.Codec<DeleteEditsRequest>;

export interface DeleteEditsResponse {}
export const DeleteEditsResponse: Schema.Codec<DeleteEditsResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<DeleteEditsResponse>;

export type DeleteEditsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an app edit. */
export const deleteEdits: API.OperationMethod<
  DeleteEditsRequest,
  DeleteEditsResponse,
  DeleteEditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEditsRequest,
  output: DeleteEditsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateEditsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const ValidateEditsRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}:validate",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<ValidateEditsRequest>;

export type ValidateEditsResponse = AppEdit;
export const ValidateEditsResponse = /*@__PURE__*/ AppEdit;

export type ValidateEditsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates an app edit. */
export const validateEdits: API.OperationMethod<
  ValidateEditsRequest,
  ValidateEditsResponse,
  ValidateEditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateEditsRequest,
  output: ValidateEditsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddexternallyhostedEditsApksRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: ApksAddExternallyHostedRequest;
}

export const AddexternallyhostedEditsApksRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(ApksAddExternallyHostedRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AddexternallyhostedEditsApksRequest>;

export type AddexternallyhostedEditsApksResponse =
  ApksAddExternallyHostedResponse;
export const AddexternallyhostedEditsApksResponse =
  /*@__PURE__*/ ApksAddExternallyHostedResponse;

export type AddexternallyhostedEditsApksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations. */
export const addexternallyhostedEditsApks: API.OperationMethod<
  AddexternallyhostedEditsApksRequest,
  AddexternallyhostedEditsApksResponse,
  AddexternallyhostedEditsApksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddexternallyhostedEditsApksRequest,
  output: AddexternallyhostedEditsApksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadEditsApksRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const UploadEditsApksRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UploadEditsApksRequest>;

export type UploadEditsApksResponse = Apk;
export const UploadEditsApksResponse = /*@__PURE__*/ Apk;

export type UploadEditsApksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads an APK and adds to the current edit. */
export const uploadEditsApks: API.OperationMethod<
  UploadEditsApksRequest,
  UploadEditsApksResponse,
  UploadEditsApksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEditsApksRequest,
  output: UploadEditsApksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEditsApksRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const ListEditsApksRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks",
  }),
  svc,
) as unknown as Schema.Codec<ListEditsApksRequest>;

export type ListEditsApksResponse = ApksListResponse;
export const ListEditsApksResponse = /*@__PURE__*/ ApksListResponse;

export type ListEditsApksError = DefaultErrors | NotFound | Forbidden;

/** Lists all current APKs of the app and edit. */
export const listEditsApks: API.OperationMethod<
  ListEditsApksRequest,
  ListEditsApksResponse,
  ListEditsApksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEditsApksRequest,
  output: ListEditsApksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEditsBundlesRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const ListEditsBundlesRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles",
    }),
    svc,
  ) as unknown as Schema.Codec<ListEditsBundlesRequest>;

export type ListEditsBundlesResponse = BundlesListResponse;
export const ListEditsBundlesResponse = /*@__PURE__*/ BundlesListResponse;

export type ListEditsBundlesError = DefaultErrors | NotFound | Forbidden;

/** Lists all current Android App Bundles of the app and edit. */
export const listEditsBundles: API.OperationMethod<
  ListEditsBundlesRequest,
  ListEditsBundlesResponse,
  ListEditsBundlesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEditsBundlesRequest,
  output: ListEditsBundlesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadEditsBundlesRequest {
  /** Package name of the app. */
  packageName: string;
  /** Deprecated. The installation warning has been removed, it's not necessary to set this field anymore. */
  ackBundleInstallationWarning?: boolean;
  /** Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC. */
  deviceTierConfigId?: string;
  /** Identifier of the edit. */
  editId: string;
}

export const UploadEditsBundlesRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    ackBundleInstallationWarning: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ackBundleInstallationWarning"),
    ),
    deviceTierConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deviceTierConfigId"),
    ),
    editId: Schema.String.pipe(T.HttpPath("editId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadEditsBundlesRequest>;

export type UploadEditsBundlesResponse = Bundle;
export const UploadEditsBundlesResponse = /*@__PURE__*/ Bundle;

export type UploadEditsBundlesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java. */
export const uploadEditsBundles: API.OperationMethod<
  UploadEditsBundlesRequest,
  UploadEditsBundlesResponse,
  UploadEditsBundlesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEditsBundlesRequest,
  output: UploadEditsBundlesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEditsTestersRequest {
  /** The track to update. */
  track: string;
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Request body */
  body?: Testers;
}

export const PatchEditsTestersRequest =
  /*@__PURE__*/ Schema.Struct({
    track: Schema.String.pipe(T.HttpPath("track")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    body: Schema.optional(Testers).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchEditsTestersRequest>;

export type PatchEditsTestersResponse = Testers;
export const PatchEditsTestersResponse = /*@__PURE__*/ Testers;

export type PatchEditsTestersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches testers. Note: Testers resource does not support email lists. */
export const patchEditsTesters: API.OperationMethod<
  PatchEditsTestersRequest,
  PatchEditsTestersResponse,
  PatchEditsTestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEditsTestersRequest,
  output: PatchEditsTestersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsTestersRequest {
  /** The track to read from. */
  track: string;
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const GetEditsTestersRequest = /*@__PURE__*/ Schema.Struct({
  track: Schema.String.pipe(T.HttpPath("track")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
  }),
  svc,
) as unknown as Schema.Codec<GetEditsTestersRequest>;

export type GetEditsTestersResponse = Testers;
export const GetEditsTestersResponse = /*@__PURE__*/ Testers;

export type GetEditsTestersError = DefaultErrors | NotFound | Forbidden;

/** Gets testers. Note: Testers resource does not support email lists. */
export const getEditsTesters: API.OperationMethod<
  GetEditsTestersRequest,
  GetEditsTestersResponse,
  GetEditsTestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsTestersRequest,
  output: GetEditsTestersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEditsTestersRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
  /** The track to update. */
  track: string;
  /** Request body */
  body?: Testers;
}

export const UpdateEditsTestersRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    track: Schema.String.pipe(T.HttpPath("track")),
    body: Schema.optional(Testers).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateEditsTestersRequest>;

export type UpdateEditsTestersResponse = Testers;
export const UpdateEditsTestersResponse = /*@__PURE__*/ Testers;

export type UpdateEditsTestersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates testers. Note: Testers resource does not support email lists. */
export const updateEditsTesters: API.OperationMethod<
  UpdateEditsTestersRequest,
  UpdateEditsTestersResponse,
  UpdateEditsTestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEditsTestersRequest,
  output: UpdateEditsTestersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsExpansionfilesRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** The file type of the file configuration which is being read or modified. */
  expansionFileType:
    | "expansionFileTypeUnspecified"
    | "main"
    | "patch"
    | (string & {});
  /** The version code of the APK whose expansion file configuration is being read or modified. */
  apkVersionCode: number;
}

export const GetEditsExpansionfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    expansionFileType: Schema.String.pipe(T.HttpPath("expansionFileType")),
    apkVersionCode: Schema.Number.pipe(T.HttpPath("apkVersionCode")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetEditsExpansionfilesRequest>;

export type GetEditsExpansionfilesResponse = ExpansionFile;
export const GetEditsExpansionfilesResponse = /*@__PURE__*/ ExpansionFile;

export type GetEditsExpansionfilesError = DefaultErrors | NotFound | Forbidden;

/** Fetches the expansion file configuration for the specified APK. */
export const getEditsExpansionfiles: API.OperationMethod<
  GetEditsExpansionfilesRequest,
  GetEditsExpansionfilesResponse,
  GetEditsExpansionfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsExpansionfilesRequest,
  output: GetEditsExpansionfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEditsExpansionfilesRequest {
  /** The version code of the APK whose expansion file configuration is being read or modified. */
  apkVersionCode: number;
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** The file type of the file configuration which is being read or modified. */
  expansionFileType:
    | "expansionFileTypeUnspecified"
    | "main"
    | "patch"
    | (string & {});
  /** Request body */
  body?: ExpansionFile;
}

export const UpdateEditsExpansionfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    apkVersionCode: Schema.Number.pipe(T.HttpPath("apkVersionCode")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    expansionFileType: Schema.String.pipe(T.HttpPath("expansionFileType")),
    body: Schema.optional(ExpansionFile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateEditsExpansionfilesRequest>;

export type UpdateEditsExpansionfilesResponse = ExpansionFile;
export const UpdateEditsExpansionfilesResponse = /*@__PURE__*/ ExpansionFile;

export type UpdateEditsExpansionfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method. */
export const updateEditsExpansionfiles: API.OperationMethod<
  UpdateEditsExpansionfilesRequest,
  UpdateEditsExpansionfilesResponse,
  UpdateEditsExpansionfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEditsExpansionfilesRequest,
  output: UpdateEditsExpansionfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadEditsExpansionfilesRequest {
  /** The version code of the APK whose expansion file configuration is being read or modified. */
  apkVersionCode: number;
  /** Identifier of the edit. */
  editId: string;
  /** The file type of the expansion file configuration which is being updated. */
  expansionFileType:
    | "expansionFileTypeUnspecified"
    | "main"
    | "patch"
    | (string & {});
  /** Package name of the app. */
  packageName: string;
}

export const UploadEditsExpansionfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    apkVersionCode: Schema.Number.pipe(T.HttpPath("apkVersionCode")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    expansionFileType: Schema.String.pipe(T.HttpPath("expansionFileType")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadEditsExpansionfilesRequest>;

export type UploadEditsExpansionfilesResponse = ExpansionFilesUploadResponse;
export const UploadEditsExpansionfilesResponse =
  /*@__PURE__*/ ExpansionFilesUploadResponse;

export type UploadEditsExpansionfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a new expansion file and attaches to the specified APK. */
export const uploadEditsExpansionfiles: API.OperationMethod<
  UploadEditsExpansionfilesRequest,
  UploadEditsExpansionfilesResponse,
  UploadEditsExpansionfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEditsExpansionfilesRequest,
  output: UploadEditsExpansionfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEditsExpansionfilesRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** The file type of the expansion file configuration which is being updated. */
  expansionFileType:
    | "expansionFileTypeUnspecified"
    | "main"
    | "patch"
    | (string & {});
  /** The version code of the APK whose expansion file configuration is being read or modified. */
  apkVersionCode: number;
  /** Request body */
  body?: ExpansionFile;
}

export const PatchEditsExpansionfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    expansionFileType: Schema.String.pipe(T.HttpPath("expansionFileType")),
    apkVersionCode: Schema.Number.pipe(T.HttpPath("apkVersionCode")),
    body: Schema.optional(ExpansionFile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchEditsExpansionfilesRequest>;

export type PatchEditsExpansionfilesResponse = ExpansionFile;
export const PatchEditsExpansionfilesResponse = /*@__PURE__*/ ExpansionFile;

export type PatchEditsExpansionfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method. */
export const patchEditsExpansionfiles: API.OperationMethod<
  PatchEditsExpansionfilesRequest,
  PatchEditsExpansionfilesResponse,
  PatchEditsExpansionfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEditsExpansionfilesRequest,
  output: PatchEditsExpansionfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsDetailsRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
}

export const GetEditsDetailsRequest = /*@__PURE__*/ Schema.Struct({
  editId: Schema.String.pipe(T.HttpPath("editId")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
  }),
  svc,
) as unknown as Schema.Codec<GetEditsDetailsRequest>;

export type GetEditsDetailsResponse = AppDetails;
export const GetEditsDetailsResponse = /*@__PURE__*/ AppDetails;

export type GetEditsDetailsError = DefaultErrors | NotFound | Forbidden;

/** Gets details of an app. */
export const getEditsDetails: API.OperationMethod<
  GetEditsDetailsRequest,
  GetEditsDetailsResponse,
  GetEditsDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsDetailsRequest,
  output: GetEditsDetailsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEditsDetailsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Request body */
  body?: AppDetails;
}

export const UpdateEditsDetailsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    body: Schema.optional(AppDetails).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateEditsDetailsRequest>;

export type UpdateEditsDetailsResponse = AppDetails;
export const UpdateEditsDetailsResponse = /*@__PURE__*/ AppDetails;

export type UpdateEditsDetailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates details of an app. */
export const updateEditsDetails: API.OperationMethod<
  UpdateEditsDetailsRequest,
  UpdateEditsDetailsResponse,
  UpdateEditsDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEditsDetailsRequest,
  output: UpdateEditsDetailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEditsDetailsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Request body */
  body?: AppDetails;
}

export const PatchEditsDetailsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    body: Schema.optional(AppDetails).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchEditsDetailsRequest>;

export type PatchEditsDetailsResponse = AppDetails;
export const PatchEditsDetailsResponse = /*@__PURE__*/ AppDetails;

export type PatchEditsDetailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches details of an app. */
export const patchEditsDetails: API.OperationMethod<
  PatchEditsDetailsRequest,
  PatchEditsDetailsResponse,
  PatchEditsDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEditsDetailsRequest,
  output: PatchEditsDetailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEditsTracksRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const ListEditsTracksRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks",
  }),
  svc,
) as unknown as Schema.Codec<ListEditsTracksRequest>;

export type ListEditsTracksResponse = TracksListResponse;
export const ListEditsTracksResponse = /*@__PURE__*/ TracksListResponse;

export type ListEditsTracksError = DefaultErrors | NotFound | Forbidden;

/** Lists all tracks. */
export const listEditsTracks: API.OperationMethod<
  ListEditsTracksRequest,
  ListEditsTracksResponse,
  ListEditsTracksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEditsTracksRequest,
  output: ListEditsTracksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateEditsTracksRequest {
  /** Required. Identifier of the edit. */
  editId: string;
  /** Required. Package name of the app. */
  packageName: string;
  /** Request body */
  body?: TrackConfig;
}

export const CreateEditsTracksRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(TrackConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateEditsTracksRequest>;

export type CreateEditsTracksResponse = Track;
export const CreateEditsTracksResponse = /*@__PURE__*/ Track;

export type CreateEditsTracksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new track. */
export const createEditsTracks: API.OperationMethod<
  CreateEditsTracksRequest,
  CreateEditsTracksResponse,
  CreateEditsTracksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEditsTracksRequest,
  output: CreateEditsTracksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEditsTracksRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
  track: string;
  /** Request body */
  body?: Track;
}

export const PatchEditsTracksRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    track: Schema.String.pipe(T.HttpPath("track")),
    body: Schema.optional(Track).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchEditsTracksRequest>;

export type PatchEditsTracksResponse = Track;
export const PatchEditsTracksResponse = /*@__PURE__*/ Track;

export type PatchEditsTracksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches a track. */
export const patchEditsTracks: API.OperationMethod<
  PatchEditsTracksRequest,
  PatchEditsTracksResponse,
  PatchEditsTracksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEditsTracksRequest,
  output: PatchEditsTracksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsTracksRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
  track: string;
}

export const GetEditsTracksRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
  track: Schema.String.pipe(T.HttpPath("track")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
  }),
  svc,
) as unknown as Schema.Codec<GetEditsTracksRequest>;

export type GetEditsTracksResponse = Track;
export const GetEditsTracksResponse = /*@__PURE__*/ Track;

export type GetEditsTracksError = DefaultErrors | NotFound | Forbidden;

/** Gets a track. */
export const getEditsTracks: API.OperationMethod<
  GetEditsTracksRequest,
  GetEditsTracksResponse,
  GetEditsTracksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsTracksRequest,
  output: GetEditsTracksResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEditsTracksRequest {
  /** Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
  track: string;
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: Track;
}

export const UpdateEditsTracksRequest =
  /*@__PURE__*/ Schema.Struct({
    track: Schema.String.pipe(T.HttpPath("track")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(Track).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateEditsTracksRequest>;

export type UpdateEditsTracksResponse = Track;
export const UpdateEditsTracksResponse = /*@__PURE__*/ Track;

export type UpdateEditsTracksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a track. */
export const updateEditsTracks: API.OperationMethod<
  UpdateEditsTracksRequest,
  UpdateEditsTracksResponse,
  UpdateEditsTracksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEditsTracksRequest,
  output: UpdateEditsTracksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsCountryavailabilityRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
  /** The track to read from. */
  track: string;
}

export const GetEditsCountryavailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    track: Schema.String.pipe(T.HttpPath("track")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetEditsCountryavailabilityRequest>;

export type GetEditsCountryavailabilityResponse = TrackCountryAvailability;
export const GetEditsCountryavailabilityResponse =
  /*@__PURE__*/ TrackCountryAvailability;

export type GetEditsCountryavailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets country availability. */
export const getEditsCountryavailability: API.OperationMethod<
  GetEditsCountryavailabilityRequest,
  GetEditsCountryavailabilityResponse,
  GetEditsCountryavailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsCountryavailabilityRequest,
  output: GetEditsCountryavailabilityResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadEditsDeobfuscationfilesRequest {
  /** Unique identifier for this edit. */
  editId: string;
  /** Unique identifier for the Android app. */
  packageName: string;
  /** The version code of the APK whose Deobfuscation File is being uploaded. */
  apkVersionCode: number;
  /** The type of the deobfuscation file. */
  deobfuscationFileType:
    | "deobfuscationFileTypeUnspecified"
    | "proguard"
    | "nativeCode"
    | (string & {});
}

export const UploadEditsDeobfuscationfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    apkVersionCode: Schema.Number.pipe(T.HttpPath("apkVersionCode")),
    deobfuscationFileType: Schema.String.pipe(
      T.HttpPath("deobfuscationFileType"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadEditsDeobfuscationfilesRequest>;

export type UploadEditsDeobfuscationfilesResponse =
  DeobfuscationFilesUploadResponse;
export const UploadEditsDeobfuscationfilesResponse =
  /*@__PURE__*/ DeobfuscationFilesUploadResponse;

export type UploadEditsDeobfuscationfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a new deobfuscation file and attaches to the specified APK. */
export const uploadEditsDeobfuscationfiles: API.OperationMethod<
  UploadEditsDeobfuscationfilesRequest,
  UploadEditsDeobfuscationfilesResponse,
  UploadEditsDeobfuscationfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEditsDeobfuscationfilesRequest,
  output: UploadEditsDeobfuscationfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEditsImagesRequest {
  /** Type of the Image. Providing an image type that refers to no images will return an empty response. */
  imageType:
    | "appImageTypeUnspecified"
    | "phoneScreenshots"
    | "sevenInchScreenshots"
    | "tenInchScreenshots"
    | "tvScreenshots"
    | "wearScreenshots"
    | "icon"
    | "featureGraphic"
    | "tvBanner"
    | (string & {});
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language. */
  language: string;
  /** Package name of the app. */
  packageName: string;
}

export const ListEditsImagesRequest = /*@__PURE__*/ Schema.Struct({
  imageType: Schema.String.pipe(T.HttpPath("imageType")),
  editId: Schema.String.pipe(T.HttpPath("editId")),
  language: Schema.String.pipe(T.HttpPath("language")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
  }),
  svc,
) as unknown as Schema.Codec<ListEditsImagesRequest>;

export type ListEditsImagesResponse = ImagesListResponse;
export const ListEditsImagesResponse = /*@__PURE__*/ ImagesListResponse;

export type ListEditsImagesError = DefaultErrors | NotFound | Forbidden;

/** Lists all images. The response may be empty. */
export const listEditsImages: API.OperationMethod<
  ListEditsImagesRequest,
  ListEditsImagesResponse,
  ListEditsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEditsImagesRequest,
  output: ListEditsImagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteallEditsImagesRequest {
  /** Type of the Image. Providing an image type that refers to no images is a no-op. */
  imageType:
    | "appImageTypeUnspecified"
    | "phoneScreenshots"
    | "sevenInchScreenshots"
    | "tenInchScreenshots"
    | "tvScreenshots"
    | "wearScreenshots"
    | "icon"
    | "featureGraphic"
    | "tvBanner"
    | (string & {});
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op. */
  language: string;
  /** Package name of the app. */
  packageName: string;
}

export const DeleteallEditsImagesRequest =
  /*@__PURE__*/ Schema.Struct({
    imageType: Schema.String.pipe(T.HttpPath("imageType")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    language: Schema.String.pipe(T.HttpPath("language")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteallEditsImagesRequest>;

export type DeleteallEditsImagesResponse = ImagesDeleteAllResponse;
export const DeleteallEditsImagesResponse =
  /*@__PURE__*/ ImagesDeleteAllResponse;

export type DeleteallEditsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes all images for the specified language and image type. Returns an empty response if no images are found. */
export const deleteallEditsImages: API.OperationMethod<
  DeleteallEditsImagesRequest,
  DeleteallEditsImagesResponse,
  DeleteallEditsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteallEditsImagesRequest,
  output: DeleteallEditsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadEditsImagesRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Type of the Image. */
  imageType:
    | "appImageTypeUnspecified"
    | "phoneScreenshots"
    | "sevenInchScreenshots"
    | "tenInchScreenshots"
    | "tvScreenshots"
    | "wearScreenshots"
    | "icon"
    | "featureGraphic"
    | "tvBanner"
    | (string & {});
  /** Optional. Whether the image was generated by AI. Attested by the developer. */
  aiGeneratedState?:
    | "aiGeneratedStateUnspecified"
    | "aiGeneratedStateNotAiGenerated"
    | "aiGeneratedStateAiGeneratedDeveloperAttested"
    | (string & {});
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op. */
  language: string;
  /** Package name of the app. */
  packageName: string;
}

export const UploadEditsImagesRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    imageType: Schema.String.pipe(T.HttpPath("imageType")),
    aiGeneratedState: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aiGeneratedState"),
    ),
    language: Schema.String.pipe(T.HttpPath("language")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadEditsImagesRequest>;

export type UploadEditsImagesResponse = ImagesUploadResponse;
export const UploadEditsImagesResponse = /*@__PURE__*/ ImagesUploadResponse;

export type UploadEditsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads an image of the specified language and image type, and adds to the edit. */
export const uploadEditsImages: API.OperationMethod<
  UploadEditsImagesRequest,
  UploadEditsImagesResponse,
  UploadEditsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEditsImagesRequest,
  output: UploadEditsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEditsImagesRequest {
  /** Unique identifier an image within the set of images attached to this edit. */
  imageId: string;
  /** Identifier of the edit. */
  editId: string;
  /** Package name of the app. */
  packageName: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language: string;
  /** Type of the Image. */
  imageType:
    | "appImageTypeUnspecified"
    | "phoneScreenshots"
    | "sevenInchScreenshots"
    | "tenInchScreenshots"
    | "tvScreenshots"
    | "wearScreenshots"
    | "icon"
    | "featureGraphic"
    | "tvBanner"
    | (string & {});
}

export const DeleteEditsImagesRequest =
  /*@__PURE__*/ Schema.Struct({
    imageId: Schema.String.pipe(T.HttpPath("imageId")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    language: Schema.String.pipe(T.HttpPath("language")),
    imageType: Schema.String.pipe(T.HttpPath("imageType")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteEditsImagesRequest>;

export interface DeleteEditsImagesResponse {}
export const DeleteEditsImagesResponse: Schema.Codec<DeleteEditsImagesResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteEditsImagesResponse>;

export type DeleteEditsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the image (specified by id) from the edit. */
export const deleteEditsImages: API.OperationMethod<
  DeleteEditsImagesRequest,
  DeleteEditsImagesResponse,
  DeleteEditsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEditsImagesRequest,
  output: DeleteEditsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEditsListingsRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language: string;
  /** Package name of the app. */
  packageName: string;
}

export const DeleteEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    language: Schema.String.pipe(T.HttpPath("language")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteEditsListingsRequest>;

export interface DeleteEditsListingsResponse {}
export const DeleteEditsListingsResponse: Schema.Codec<DeleteEditsListingsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteEditsListingsResponse>;

export type DeleteEditsListingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a localized store listing. */
export const deleteEditsListings: API.OperationMethod<
  DeleteEditsListingsRequest,
  DeleteEditsListingsResponse,
  DeleteEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEditsListingsRequest,
  output: DeleteEditsListingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEditsListingsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const ListEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings",
    }),
    svc,
  ) as unknown as Schema.Codec<ListEditsListingsRequest>;

export type ListEditsListingsResponse = ListingsListResponse;
export const ListEditsListingsResponse = /*@__PURE__*/ ListingsListResponse;

export type ListEditsListingsError = DefaultErrors | NotFound | Forbidden;

/** Lists all localized store listings. */
export const listEditsListings: API.OperationMethod<
  ListEditsListingsRequest,
  ListEditsListingsResponse,
  ListEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEditsListingsRequest,
  output: ListEditsListingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteallEditsListingsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
}

export const DeleteallEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteallEditsListingsRequest>;

export interface DeleteallEditsListingsResponse {}
export const DeleteallEditsListingsResponse: Schema.Codec<DeleteallEditsListingsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteallEditsListingsResponse>;

export type DeleteallEditsListingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes all store listings. */
export const deleteallEditsListings: API.OperationMethod<
  DeleteallEditsListingsRequest,
  DeleteallEditsListingsResponse,
  DeleteallEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteallEditsListingsRequest,
  output: DeleteallEditsListingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEditsListingsRequest {
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language: string;
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: Listing;
}

export const PatchEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    editId: Schema.String.pipe(T.HttpPath("editId")),
    language: Schema.String.pipe(T.HttpPath("language")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(Listing).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchEditsListingsRequest>;

export type PatchEditsListingsResponse = Listing;
export const PatchEditsListingsResponse = /*@__PURE__*/ Listing;

export type PatchEditsListingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches a localized store listing. */
export const patchEditsListings: API.OperationMethod<
  PatchEditsListingsRequest,
  PatchEditsListingsResponse,
  PatchEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEditsListingsRequest,
  output: PatchEditsListingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateEditsListingsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language: string;
  /** Request body */
  body?: Listing;
}

export const UpdateEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    language: Schema.String.pipe(T.HttpPath("language")),
    body: Schema.optional(Listing).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateEditsListingsRequest>;

export type UpdateEditsListingsResponse = Listing;
export const UpdateEditsListingsResponse = /*@__PURE__*/ Listing;

export type UpdateEditsListingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a localized store listing. */
export const updateEditsListings: API.OperationMethod<
  UpdateEditsListingsRequest,
  UpdateEditsListingsResponse,
  UpdateEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEditsListingsRequest,
  output: UpdateEditsListingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEditsListingsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Identifier of the edit. */
  editId: string;
  /** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
  language: string;
}

export const GetEditsListingsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    editId: Schema.String.pipe(T.HttpPath("editId")),
    language: Schema.String.pipe(T.HttpPath("language")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetEditsListingsRequest>;

export type GetEditsListingsResponse = Listing;
export const GetEditsListingsResponse = /*@__PURE__*/ Listing;

export type GetEditsListingsError = DefaultErrors | NotFound | Forbidden;

/** Gets a localized store listing. */
export const getEditsListings: API.OperationMethod<
  GetEditsListingsRequest,
  GetEditsListingsResponse,
  GetEditsListingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEditsListingsRequest,
  output: GetEditsListingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListApprecoveryRequest {
  /** Required. Package name of the app for which list of recovery actions is requested. */
  packageName: string;
  /** Required. Version code targeted by the list of recovery actions. */
  versionCode?: string;
}

export const ListApprecoveryRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  versionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("versionCode")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/appRecoveries",
  }),
  svc,
) as unknown as Schema.Codec<ListApprecoveryRequest>;

export type ListApprecoveryResponse = ListAppRecoveriesResponse;
export const ListApprecoveryResponse = /*@__PURE__*/ ListAppRecoveriesResponse;

export type ListApprecoveryError = DefaultErrors | NotFound | Forbidden;

/** List all app recovery action resources associated with a particular package name and app version. */
export const listApprecovery: API.OperationMethod<
  ListApprecoveryRequest,
  ListApprecoveryResponse,
  ListApprecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListApprecoveryRequest,
  output: ListApprecoveryResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddTargetingApprecoveryRequest {
  /** Required. Package name of the app for which recovery action is to be updated. */
  packageName: string;
  /** Required. ID corresponding to the app recovery action. */
  appRecoveryId: string;
  /** Request body */
  body?: AddTargetingRequest;
}

export const AddTargetingApprecoveryRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    appRecoveryId: Schema.String.pipe(T.HttpPath("appRecoveryId")),
    body: Schema.optional(AddTargetingRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AddTargetingApprecoveryRequest>;

export type AddTargetingApprecoveryResponse = AddTargetingResponse;
export const AddTargetingApprecoveryResponse =
  /*@__PURE__*/ AddTargetingResponse;

export type AddTargetingApprecoveryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded. */
export const addTargetingApprecovery: API.OperationMethod<
  AddTargetingApprecoveryRequest,
  AddTargetingApprecoveryResponse,
  AddTargetingApprecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTargetingApprecoveryRequest,
  output: AddTargetingApprecoveryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateApprecoveryRequest {
  /** Required. Package name of the app on which recovery action is performed. */
  packageName: string;
  /** Request body */
  body?: CreateDraftAppRecoveryRequest;
}

export const CreateApprecoveryRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(CreateDraftAppRecoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/appRecoveries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateApprecoveryRequest>;

export type CreateApprecoveryResponse = AppRecoveryAction;
export const CreateApprecoveryResponse = /*@__PURE__*/ AppRecoveryAction;

export type CreateApprecoveryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action. */
export const createApprecovery: API.OperationMethod<
  CreateApprecoveryRequest,
  CreateApprecoveryResponse,
  CreateApprecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApprecoveryRequest,
  output: CreateApprecoveryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeployApprecoveryRequest {
  /** Required. Package name of the app for which recovery action is deployed. */
  packageName: string;
  /** Required. ID corresponding to the app recovery action to deploy. */
  appRecoveryId: string;
  /** Request body */
  body?: DeployAppRecoveryRequest;
}

export const DeployApprecoveryRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    appRecoveryId: Schema.String.pipe(T.HttpPath("appRecoveryId")),
    body: Schema.optional(DeployAppRecoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeployApprecoveryRequest>;

export type DeployApprecoveryResponse = DeployAppRecoveryResponse;
export const DeployApprecoveryResponse =
  /*@__PURE__*/ DeployAppRecoveryResponse;

export type DeployApprecoveryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE. */
export const deployApprecovery: API.OperationMethod<
  DeployApprecoveryRequest,
  DeployApprecoveryResponse,
  DeployApprecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeployApprecoveryRequest,
  output: DeployApprecoveryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelApprecoveryRequest {
  /** Required. Package name of the app for which recovery action cancellation is requested. */
  packageName: string;
  /** Required. ID corresponding to the app recovery action. */
  appRecoveryId: string;
  /** Request body */
  body?: CancelAppRecoveryRequest;
}

export const CancelApprecoveryRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    appRecoveryId: Schema.String.pipe(T.HttpPath("appRecoveryId")),
    body: Schema.optional(CancelAppRecoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CancelApprecoveryRequest>;

export type CancelApprecoveryResponse = CancelAppRecoveryResponse;
export const CancelApprecoveryResponse =
  /*@__PURE__*/ CancelAppRecoveryResponse;

export type CancelApprecoveryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED. */
export const cancelApprecovery: API.OperationMethod<
  CancelApprecoveryRequest,
  CancelApprecoveryResponse,
  CancelApprecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelApprecoveryRequest,
  output: CancelApprecoveryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DataSafetyApplicationsRequest {
  /** Required. Package name of the app. */
  packageName: string;
  /** Request body */
  body?: SafetyLabelsUpdateRequest;
}

export const DataSafetyApplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(SafetyLabelsUpdateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/dataSafety",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DataSafetyApplicationsRequest>;

export type DataSafetyApplicationsResponse = SafetyLabelsUpdateResponse;
export const DataSafetyApplicationsResponse =
  /*@__PURE__*/ SafetyLabelsUpdateResponse;

export type DataSafetyApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Writes the Safety Labels declaration of an app. */
export const dataSafetyApplications: API.OperationMethod<
  DataSafetyApplicationsRequest,
  DataSafetyApplicationsResponse,
  DataSafetyApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DataSafetyApplicationsRequest,
  output: DataSafetyApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetApplicationsDeviceTierConfigsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Required. Id of an existing device tier config. */
  deviceTierConfigId: string;
}

export const GetApplicationsDeviceTierConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    deviceTierConfigId: Schema.String.pipe(T.HttpPath("deviceTierConfigId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetApplicationsDeviceTierConfigsRequest>;

export type GetApplicationsDeviceTierConfigsResponse = DeviceTierConfig;
export const GetApplicationsDeviceTierConfigsResponse =
  /*@__PURE__*/ DeviceTierConfig;

export type GetApplicationsDeviceTierConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a particular device tier config. */
export const getApplicationsDeviceTierConfigs: API.OperationMethod<
  GetApplicationsDeviceTierConfigsRequest,
  GetApplicationsDeviceTierConfigsResponse,
  GetApplicationsDeviceTierConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationsDeviceTierConfigsRequest,
  output: GetApplicationsDeviceTierConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListApplicationsDeviceTierConfigsRequest {
  /** A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Package name of the app. */
  packageName: string;
  /** The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time. */
  pageSize?: number;
}

export const ListApplicationsDeviceTierConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/deviceTierConfigs",
    }),
    svc,
  ) as unknown as Schema.Codec<ListApplicationsDeviceTierConfigsRequest>;

export type ListApplicationsDeviceTierConfigsResponse =
  ListDeviceTierConfigsResponse;
export const ListApplicationsDeviceTierConfigsResponse =
  /*@__PURE__*/ ListDeviceTierConfigsResponse;

export type ListApplicationsDeviceTierConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns created device tier configs, ordered by descending creation time. */
export const listApplicationsDeviceTierConfigs: API.PaginatedOperationMethod<
  ListApplicationsDeviceTierConfigsRequest,
  ListApplicationsDeviceTierConfigsResponse,
  ListApplicationsDeviceTierConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationsDeviceTierConfigsRequest,
  output: ListApplicationsDeviceTierConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateApplicationsDeviceTierConfigsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Whether the service should accept device IDs that are unknown to Play's device catalog. */
  allowUnknownDevices?: boolean;
  /** Request body */
  body?: DeviceTierConfig;
}

export const CreateApplicationsDeviceTierConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    allowUnknownDevices: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowUnknownDevices"),
    ),
    body: Schema.optional(DeviceTierConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/deviceTierConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateApplicationsDeviceTierConfigsRequest>;

export type CreateApplicationsDeviceTierConfigsResponse = DeviceTierConfig;
export const CreateApplicationsDeviceTierConfigsResponse =
  /*@__PURE__*/ DeviceTierConfig;

export type CreateApplicationsDeviceTierConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new device tier config for an app. */
export const createApplicationsDeviceTierConfigs: API.OperationMethod<
  CreateApplicationsDeviceTierConfigsRequest,
  CreateApplicationsDeviceTierConfigsResponse,
  CreateApplicationsDeviceTierConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApplicationsDeviceTierConfigsRequest,
  output: CreateApplicationsDeviceTierConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListApplicationsTracksReleasesRequest {
  /** Required. The parent track, which owns this collection of releases. Format: applications/{package_name}/tracks/{track} */
  parent: string;
}

export const ListApplicationsTracksReleasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "androidpublisher/v3/{+parent}/releases" }),
    svc,
  ) as unknown as Schema.Codec<ListApplicationsTracksReleasesRequest>;

export type ListApplicationsTracksReleasesResponse =
  ListReleaseSummariesResponse;
export const ListApplicationsTracksReleasesResponse =
  /*@__PURE__*/ ListReleaseSummariesResponse;

export type ListApplicationsTracksReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the list of all releases for a given track. This excludes any releases that are obsolete. */
export const listApplicationsTracksReleases: API.OperationMethod<
  ListApplicationsTracksReleasesRequest,
  ListApplicationsTracksReleasesResponse,
  ListApplicationsTracksReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListApplicationsTracksReleasesRequest,
  output: ListApplicationsTracksReleasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSystemapksVariantsRequest {
  /** The version code of the App Bundle. */
  versionCode: string;
  /** Package name of the app. */
  packageName: string;
}

export const ListSystemapksVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.String.pipe(T.HttpPath("versionCode")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants",
    }),
    svc,
  ) as unknown as Schema.Codec<ListSystemapksVariantsRequest>;

export type ListSystemapksVariantsResponse = SystemApksListResponse;
export const ListSystemapksVariantsResponse =
  /*@__PURE__*/ SystemApksListResponse;

export type ListSystemapksVariantsError = DefaultErrors | NotFound | Forbidden;

/** Returns the list of previously created system APK variants. */
export const listSystemapksVariants: API.OperationMethod<
  ListSystemapksVariantsRequest,
  ListSystemapksVariantsResponse,
  ListSystemapksVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSystemapksVariantsRequest,
  output: ListSystemapksVariantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSystemapksVariantsRequest {
  /** Package name of the app. */
  packageName: string;
  /** The version code of the App Bundle. */
  versionCode: string;
  /** The ID of a previously created system APK variant. */
  variantId: number;
}

export const GetSystemapksVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    versionCode: Schema.String.pipe(T.HttpPath("versionCode")),
    variantId: Schema.Number.pipe(T.HttpPath("variantId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetSystemapksVariantsRequest>;

export type GetSystemapksVariantsResponse = Variant;
export const GetSystemapksVariantsResponse = /*@__PURE__*/ Variant;

export type GetSystemapksVariantsError = DefaultErrors | NotFound | Forbidden;

/** Returns a previously created system APK variant. */
export const getSystemapksVariants: API.OperationMethod<
  GetSystemapksVariantsRequest,
  GetSystemapksVariantsResponse,
  GetSystemapksVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSystemapksVariantsRequest,
  output: GetSystemapksVariantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadSystemapksVariantsRequest {
  /** Package name of the app. */
  packageName: string;
  /** The version code of the App Bundle. */
  versionCode: string;
  /** The ID of a previously created system APK variant. */
  variantId: number;
}

export const DownloadSystemapksVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    versionCode: Schema.String.pipe(T.HttpPath("versionCode")),
    variantId: Schema.Number.pipe(T.HttpPath("variantId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download",
    }),
    svc,
  ) as unknown as Schema.Codec<DownloadSystemapksVariantsRequest>;

export interface DownloadSystemapksVariantsResponse {}
export const DownloadSystemapksVariantsResponse: Schema.Codec<DownloadSystemapksVariantsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DownloadSystemapksVariantsResponse>;

export type DownloadSystemapksVariantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Downloads a previously created system APK which is suitable for inclusion in a system image. */
export const downloadSystemapksVariants: API.OperationMethod<
  DownloadSystemapksVariantsRequest,
  DownloadSystemapksVariantsResponse,
  DownloadSystemapksVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DownloadSystemapksVariantsRequest,
  output: DownloadSystemapksVariantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSystemapksVariantsRequest {
  /** The version code of the App Bundle. */
  versionCode: string;
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: Variant;
}

export const CreateSystemapksVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.String.pipe(T.HttpPath("versionCode")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(Variant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSystemapksVariantsRequest>;

export type CreateSystemapksVariantsResponse = Variant;
export const CreateSystemapksVariantsResponse = /*@__PURE__*/ Variant;

export type CreateSystemapksVariantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle. */
export const createSystemapksVariants: API.OperationMethod<
  CreateSystemapksVariantsRequest,
  CreateSystemapksVariantsResponse,
  CreateSystemapksVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSystemapksVariantsRequest,
  output: CreateSystemapksVariantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ConvertRegionPricesMonetizationRequest {
  /** Required. The app package name. */
  packageName: string;
  /** Request body */
  body?: ConvertRegionPricesRequest;
}

export const ConvertRegionPricesMonetizationRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(ConvertRegionPricesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ConvertRegionPricesMonetizationRequest>;

export type ConvertRegionPricesMonetizationResponse =
  ConvertRegionPricesResponse;
export const ConvertRegionPricesMonetizationResponse =
  /*@__PURE__*/ ConvertRegionPricesResponse;

export type ConvertRegionPricesMonetizationError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions. */
export const convertRegionPricesMonetization: API.OperationMethod<
  ConvertRegionPricesMonetizationRequest,
  ConvertRegionPricesMonetizationResponse,
  ConvertRegionPricesMonetizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConvertRegionPricesMonetizationRequest,
  output: ConvertRegionPricesMonetizationResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) of the product to retrieve. */
  packageName: string;
  /** Required. The product ID of the product to retrieve. */
  productId: string;
}

export const GetMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetMonetizationOnetimeproductsRequest>;

export type GetMonetizationOnetimeproductsResponse = OneTimeProduct;
export const GetMonetizationOnetimeproductsResponse =
  /*@__PURE__*/ OneTimeProduct;

export type GetMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reads a single one-time product. */
export const getMonetizationOnetimeproducts: API.OperationMethod<
  GetMonetizationOnetimeproductsRequest,
  GetMonetizationOnetimeproductsResponse,
  GetMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMonetizationOnetimeproductsRequest,
  output: GetMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchUpdateMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) for which the one-time products should be updated. Must be equal to the package_name field on all the OneTimeProduct resources. */
  packageName: string;
  /** Request body */
  body?: BatchUpdateOneTimeProductsRequest;
}

export const BatchUpdateMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(BatchUpdateOneTimeProductsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateMonetizationOnetimeproductsRequest>;

export type BatchUpdateMonetizationOnetimeproductsResponse =
  BatchUpdateOneTimeProductsResponse;
export const BatchUpdateMonetizationOnetimeproductsResponse =
  /*@__PURE__*/ BatchUpdateOneTimeProductsResponse;

export type BatchUpdateMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates one or more one-time products. */
export const batchUpdateMonetizationOnetimeproducts: API.OperationMethod<
  BatchUpdateMonetizationOnetimeproductsRequest,
  BatchUpdateMonetizationOnetimeproductsResponse,
  BatchUpdateMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMonetizationOnetimeproductsRequest,
  output: BatchUpdateMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchMonetizationOnetimeproductsRequest {
  /** Required. Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must start with a number or lowercase letter, and can contain numbers (0-9), lowercase letters (a-z), underscores (_), and periods (.). */
  productId: string;
  /** Optional. The latency tolerance for the propagation of this product upsert. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  "regionsVersion.version"?: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. If set to true, and the one-time product with the given package_name and product_id doesn't exist, the one-time product will be created. If a new one-time product is created, update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. Immutable. Package name of the parent app. */
  packageName: string;
  /** Request body */
  body?: OneTimeProduct;
}

export const PatchMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    "regionsVersion.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionsVersion.version"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(OneTimeProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchMonetizationOnetimeproductsRequest>;

export type PatchMonetizationOnetimeproductsResponse = OneTimeProduct;
export const PatchMonetizationOnetimeproductsResponse =
  /*@__PURE__*/ OneTimeProduct;

export type PatchMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a one-time product. */
export const patchMonetizationOnetimeproducts: API.OperationMethod<
  PatchMonetizationOnetimeproductsRequest,
  PatchMonetizationOnetimeproductsResponse,
  PatchMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchMonetizationOnetimeproductsRequest,
  output: PatchMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) for which the one-time products should be deleted. Must be equal to the package_name field on all the OneTimeProduct resources. */
  packageName: string;
  /** Request body */
  body?: BatchDeleteOneTimeProductsRequest;
}

export const BatchDeleteMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(BatchDeleteOneTimeProductsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteMonetizationOnetimeproductsRequest>;

export interface BatchDeleteMonetizationOnetimeproductsResponse {}
export const BatchDeleteMonetizationOnetimeproductsResponse: Schema.Codec<BatchDeleteMonetizationOnetimeproductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<BatchDeleteMonetizationOnetimeproductsResponse>;

export type BatchDeleteMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes one or more one-time products. */
export const batchDeleteMonetizationOnetimeproducts: API.OperationMethod<
  BatchDeleteMonetizationOnetimeproductsRequest,
  BatchDeleteMonetizationOnetimeproductsResponse,
  BatchDeleteMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteMonetizationOnetimeproductsRequest,
  output: BatchDeleteMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) for which the products should be retrieved. Must be equal to the package_name field on all requests. */
  packageName: string;
  /** Required. A list of up to 100 product IDs to retrieve. All IDs must be different. */
  productIds?: string[];
}

export const BatchGetMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("productIds"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet",
    }),
    svc,
  ) as unknown as Schema.Codec<BatchGetMonetizationOnetimeproductsRequest>;

export type BatchGetMonetizationOnetimeproductsResponse =
  BatchGetOneTimeProductsResponse;
export const BatchGetMonetizationOnetimeproductsResponse =
  /*@__PURE__*/ BatchGetOneTimeProductsResponse;

export type BatchGetMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reads one or more one-time products. */
export const batchGetMonetizationOnetimeproducts: API.OperationMethod<
  BatchGetMonetizationOnetimeproductsRequest,
  BatchGetMonetizationOnetimeproductsResponse,
  BatchGetMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMonetizationOnetimeproductsRequest,
  output: BatchGetMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) for which the one-time product should be read. */
  packageName: string;
  /** Optional. A page token, received from a previous `ListOneTimeProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOneTimeProducts` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of one-time product to return. The service may return fewer than this value. If unspecified, at most 50 one-time products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts",
    }),
    svc,
  ) as unknown as Schema.Codec<ListMonetizationOnetimeproductsRequest>;

export type ListMonetizationOnetimeproductsResponse =
  ListOneTimeProductsResponse;
export const ListMonetizationOnetimeproductsResponse =
  /*@__PURE__*/ ListOneTimeProductsResponse;

export type ListMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all one-time products under a given app. */
export const listMonetizationOnetimeproducts: API.PaginatedOperationMethod<
  ListMonetizationOnetimeproductsRequest,
  ListMonetizationOnetimeproductsResponse,
  ListMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMonetizationOnetimeproductsRequest,
  output: ListMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteMonetizationOnetimeproductsRequest {
  /** Required. The parent app (package name) of the one-time product to delete. */
  packageName: string;
  /** Required. The one-time product ID of the one-time product to delete. */
  productId: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
}

export const DeleteMonetizationOnetimeproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteMonetizationOnetimeproductsRequest>;

export interface DeleteMonetizationOnetimeproductsResponse {}
export const DeleteMonetizationOnetimeproductsResponse: Schema.Codec<DeleteMonetizationOnetimeproductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteMonetizationOnetimeproductsResponse>;

export type DeleteMonetizationOnetimeproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a one-time product. */
export const deleteMonetizationOnetimeproducts: API.OperationMethod<
  DeleteMonetizationOnetimeproductsRequest,
  DeleteMonetizationOnetimeproductsResponse,
  DeleteMonetizationOnetimeproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMonetizationOnetimeproductsRequest,
  output: DeleteMonetizationOnetimeproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsRequest {
  /** Required. The parent app (package name) of the updated purchase options. */
  packageName: string;
  /** Required. The product ID of the parent one-time product, if all updated purchase options belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Request body */
  body?: BatchUpdatePurchaseOptionStatesRequest;
}

export const BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(BatchUpdatePurchaseOptionStatesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsRequest>;

export type BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsResponse =
  BatchUpdatePurchaseOptionStatesResponse;
export const BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsResponse =
  /*@__PURE__*/ BatchUpdatePurchaseOptionStatesResponse;

export type BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates or deactivates purchase options across one or multiple one-time products. */
export const batchUpdateStatesMonetizationOnetimeproductsPurchaseOptions: API.OperationMethod<
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsRequest,
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsResponse,
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsRequest,
  output: BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteMonetizationOnetimeproductsPurchaseOptionsRequest {
  /** Required. The parent app (package name) of the purchase options to delete. */
  packageName: string;
  /** Required. The product ID of the parent one-time product, if all purchase options to delete belong to the same one-time product. If this batch delete spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Request body */
  body?: BatchDeletePurchaseOptionsRequest;
}

export const BatchDeleteMonetizationOnetimeproductsPurchaseOptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(BatchDeletePurchaseOptionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsRequest>;

export interface BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse {}
export const BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse: Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse>;

export type BatchDeleteMonetizationOnetimeproductsPurchaseOptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes purchase options across one or multiple one-time products. By default this operation will fail if there are any existing offers under the deleted purchase options. Use the force parameter to override the default behavior. */
export const batchDeleteMonetizationOnetimeproductsPurchaseOptions: API.OperationMethod<
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsRequest,
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse,
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteMonetizationOnetimeproductsPurchaseOptionsRequest,
  output: BatchDeleteMonetizationOnetimeproductsPurchaseOptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) for which the offers should be read. */
  packageName: string;
  /** Optional. A page token, received from a previous `ListOneTimeProductsOffers` call. Provide this to retrieve the subsequent page. When paginating, product_id, package_name and purchase_option_id provided to `ListOneTimeProductsOffersRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of offers to return. The service may return fewer than this value. If unspecified, at most 50 offers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent one-time product (ID) for which the offers should be read. May be specified as '-' to read all offers under an app. */
  productId: string;
  /** Required. The parent purchase option (ID) for which the offers should be read. May be specified as '-' to read all offers under a one-time product or an app. Must be specified as '-' if product_id is specified as '-'. */
  purchaseOptionId: string;
}

export const ListMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers",
    }),
    svc,
  ) as unknown as Schema.Codec<ListMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type ListMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  ListOneTimeProductOffersResponse;
export const ListMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ ListOneTimeProductOffersResponse;

export type ListMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all offers under a given app, product, or purchase option. */
export const listMonetizationOnetimeproductsPurchaseOptionsOffers: API.PaginatedOperationMethod<
  ListMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  ListMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  ListMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: ListMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources. */
  packageName: string;
  /** Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options. */
  purchaseOptionId: string;
  /** Request body */
  body?: BatchGetOneTimeProductOffersRequest;
}

export const BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    body: Schema.optional(BatchGetOneTimeProductOffersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  BatchGetOneTimeProductOffersResponse;
export const BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ BatchGetOneTimeProductOffersResponse;

export type BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reads one or more one-time product offers. */
export const batchGetMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: BatchGetMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) of the updated one-time product offers. */
  packageName: string;
  /** Required. The product ID of the parent one-time product, if all updated offers belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Required. The purchase option ID of the parent purchase option, if all updated offers belong to the same purchase option. If this batch update spans multiple purchase options, set this field to "-". */
  purchaseOptionId: string;
  /** Request body */
  body?: BatchUpdateOneTimeProductOfferStatesRequest;
}

export const BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    body: Schema.optional(BatchUpdateOneTimeProductOfferStatesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  BatchUpdateOneTimeProductOfferStatesResponse;
export const BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ BatchUpdateOneTimeProductOfferStatesResponse;

export type BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a batch of one-time product offer states. */
export const batchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output:
    BatchUpdateStatesMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) of the offer to deactivate. */
  packageName: string;
  /** Required. The parent one-time product (ID) of the offer to deactivate. */
  productId: string;
  /** Required. The parent purchase option (ID) of the offer to deactivate. */
  purchaseOptionId: string;
  /** Required. The offer ID of the offer to deactivate. */
  offerId: string;
  /** Request body */
  body?: DeactivateOneTimeProductOfferRequest;
}

export const DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    body: Schema.optional(DeactivateOneTimeProductOfferRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  OneTimeProductOffer;
export const DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ OneTimeProductOffer;

export type DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates a one-time product offer. */
export const deactivateMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: DeactivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options. */
  purchaseOptionId: string;
  /** Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources. */
  packageName: string;
  /** Request body */
  body?: BatchUpdateOneTimeProductOffersRequest;
}

export const BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(BatchUpdateOneTimeProductOffersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  BatchUpdateOneTimeProductOffersResponse;
export const BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ BatchUpdateOneTimeProductOffersResponse;

export type BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates one or more one-time product offers. */
export const batchUpdateMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: BatchUpdateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) of the offer to cancel. */
  packageName: string;
  /** Required. The parent one-time product (ID) of the offer to cancel. */
  productId: string;
  /** Required. The parent purchase option (ID) of the offer to cancel. */
  purchaseOptionId: string;
  /** Required. The offer ID of the offer to cancel. */
  offerId: string;
  /** Request body */
  body?: CancelOneTimeProductOfferRequest;
}

export const CancelMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    body: Schema.optional(CancelOneTimeProductOfferRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CancelMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type CancelMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  OneTimeProductOffer;
export const CancelMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ OneTimeProductOffer;

export type CancelMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a one-time product offer. */
export const cancelMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  CancelMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  CancelMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  CancelMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: CancelMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent one-time product (ID) of the offer to activate. */
  productId: string;
  /** Required. The parent purchase option (ID) of the offer to activate. */
  purchaseOptionId: string;
  /** Required. The offer ID of the offer to activate. */
  offerId: string;
  /** Required. The parent app (package name) of the offer to activate. */
  packageName: string;
  /** Request body */
  body?: ActivateOneTimeProductOfferRequest;
}

export const ActivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(ActivateOneTimeProductOfferRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ActivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export type ActivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  OneTimeProductOffer;
export const ActivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse =
  /*@__PURE__*/ OneTimeProductOffer;

export type ActivateMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates a one-time product offer. */
export const activateMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  ActivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  ActivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  ActivateMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: ActivateMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersRequest {
  /** Required. The parent app (package name) of the offers to delete. Must be equal to the package_name field on all the OneTimeProductOffer resources. */
  packageName: string;
  /** Required. The product ID of the parent one-time product, if all offers to delete belong to the same product. If this request spans multiple one-time products, set this field to "-". */
  productId: string;
  /** Required. The parent purchase option (ID) for which the offers should be deleted. May be specified as '-' to update offers from multiple purchase options. */
  purchaseOptionId: string;
  /** Request body */
  body?: BatchDeleteOneTimeProductOffersRequest;
}

export const BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    purchaseOptionId: Schema.String.pipe(T.HttpPath("purchaseOptionId")),
    body: Schema.optional(BatchDeleteOneTimeProductOffersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersRequest>;

export interface BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse {}
export const BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse: Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse>;

export type BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes one or more one-time product offers. */
export const batchDeleteMonetizationOnetimeproductsPurchaseOptionsOffers: API.OperationMethod<
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersRequest,
  output: BatchDeleteMonetizationOnetimeproductsPurchaseOptionsOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchMonetizationSubscriptionsRequest {
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  "regionsVersion.version"?: string;
  /** Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. */
  productId: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Immutable. Package name of the parent app. */
  packageName: string;
  /** Request body */
  body?: Subscription;
}

export const PatchMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    "regionsVersion.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionsVersion.version"),
    ),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchMonetizationSubscriptionsRequest>;

export type PatchMonetizationSubscriptionsResponse = Subscription;
export const PatchMonetizationSubscriptionsResponse =
  /*@__PURE__*/ Subscription;

export type PatchMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing subscription. */
export const patchMonetizationSubscriptions: API.OperationMethod<
  PatchMonetizationSubscriptionsRequest,
  PatchMonetizationSubscriptionsResponse,
  PatchMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchMonetizationSubscriptionsRequest,
  output: PatchMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMonetizationSubscriptionsRequest {
  /** Required. The parent app (package name) of the subscription to get. */
  packageName: string;
  /** Required. The unique product ID of the subscription to get. */
  productId: string;
}

export const GetMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetMonetizationSubscriptionsRequest>;

export type GetMonetizationSubscriptionsResponse = Subscription;
export const GetMonetizationSubscriptionsResponse = /*@__PURE__*/ Subscription;

export type GetMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reads a single subscription. */
export const getMonetizationSubscriptions: API.OperationMethod<
  GetMonetizationSubscriptionsRequest,
  GetMonetizationSubscriptionsResponse,
  GetMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMonetizationSubscriptionsRequest,
  output: GetMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchUpdateMonetizationSubscriptionsRequest {
  /** Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources. */
  packageName: string;
  /** Request body */
  body?: BatchUpdateSubscriptionsRequest;
}

export const BatchUpdateMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(BatchUpdateSubscriptionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateMonetizationSubscriptionsRequest>;

export type BatchUpdateMonetizationSubscriptionsResponse =
  BatchUpdateSubscriptionsResponse;
export const BatchUpdateMonetizationSubscriptionsResponse =
  /*@__PURE__*/ BatchUpdateSubscriptionsResponse;

export type BatchUpdateMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. */
export const batchUpdateMonetizationSubscriptions: API.OperationMethod<
  BatchUpdateMonetizationSubscriptionsRequest,
  BatchUpdateMonetizationSubscriptionsResponse,
  BatchUpdateMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMonetizationSubscriptionsRequest,
  output: BatchUpdateMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ArchiveMonetizationSubscriptionsRequest {
  /** Required. The parent app (package name) of the app of the subscription to delete. */
  packageName: string;
  /** Required. The unique product ID of the subscription to delete. */
  productId: string;
  /** Request body */
  body?: ArchiveSubscriptionRequest;
}

export const ArchiveMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(ArchiveSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ArchiveMonetizationSubscriptionsRequest>;

export type ArchiveMonetizationSubscriptionsResponse = Subscription;
export const ArchiveMonetizationSubscriptionsResponse =
  /*@__PURE__*/ Subscription;

export type ArchiveMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: subscription archiving is not supported. */
export const archiveMonetizationSubscriptions: API.OperationMethod<
  ArchiveMonetizationSubscriptionsRequest,
  ArchiveMonetizationSubscriptionsResponse,
  ArchiveMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ArchiveMonetizationSubscriptionsRequest,
  output: ArchiveMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMonetizationSubscriptionsRequest {
  /** Required. The parent app (package name) of the app of the subscription to delete. */
  packageName: string;
  /** Required. The unique product ID of the subscription to delete. */
  productId: string;
}

export const DeleteMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteMonetizationSubscriptionsRequest>;

export interface DeleteMonetizationSubscriptionsResponse {}
export const DeleteMonetizationSubscriptionsResponse: Schema.Codec<DeleteMonetizationSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteMonetizationSubscriptionsResponse>;

export type DeleteMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a subscription. A subscription can only be deleted if it has never had a base plan published. */
export const deleteMonetizationSubscriptions: API.OperationMethod<
  DeleteMonetizationSubscriptionsRequest,
  DeleteMonetizationSubscriptionsResponse,
  DeleteMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMonetizationSubscriptionsRequest,
  output: DeleteMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateMonetizationSubscriptionsRequest {
  /** Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource. */
  productId?: string;
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  "regionsVersion.version"?: string;
  /** Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource. */
  packageName: string;
  /** Request body */
  body?: Subscription;
}

export const CreateMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String).pipe(T.HttpQuery("productId")),
    "regionsVersion.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionsVersion.version"),
    ),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateMonetizationSubscriptionsRequest>;

export type CreateMonetizationSubscriptionsResponse = Subscription;
export const CreateMonetizationSubscriptionsResponse =
  /*@__PURE__*/ Subscription;

export type CreateMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new subscription. Newly added base plans will remain in draft state until activated. */
export const createMonetizationSubscriptions: API.OperationMethod<
  CreateMonetizationSubscriptionsRequest,
  CreateMonetizationSubscriptionsResponse,
  CreateMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMonetizationSubscriptionsRequest,
  output: CreateMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetMonetizationSubscriptionsRequest {
  /** Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests. */
  packageName: string;
  /** Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different. */
  productIds?: string[];
}

export const BatchGetMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("productIds"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions:batchGet",
    }),
    svc,
  ) as unknown as Schema.Codec<BatchGetMonetizationSubscriptionsRequest>;

export type BatchGetMonetizationSubscriptionsResponse =
  BatchGetSubscriptionsResponse;
export const BatchGetMonetizationSubscriptionsResponse =
  /*@__PURE__*/ BatchGetSubscriptionsResponse;

export type BatchGetMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reads one or more subscriptions. */
export const batchGetMonetizationSubscriptions: API.OperationMethod<
  BatchGetMonetizationSubscriptionsRequest,
  BatchGetMonetizationSubscriptionsResponse,
  BatchGetMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMonetizationSubscriptionsRequest,
  output: BatchGetMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMonetizationSubscriptionsRequest {
  /** The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Deprecated: subscription archiving is not supported. */
  showArchived?: boolean;
  /** Required. The parent app (package name) for which the subscriptions should be read. */
  packageName: string;
  /** A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListMonetizationSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showArchived: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showArchived"),
    ),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions",
    }),
    svc,
  ) as unknown as Schema.Codec<ListMonetizationSubscriptionsRequest>;

export type ListMonetizationSubscriptionsResponse = ListSubscriptionsResponse;
export const ListMonetizationSubscriptionsResponse =
  /*@__PURE__*/ ListSubscriptionsResponse;

export type ListMonetizationSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all subscriptions under a given app. */
export const listMonetizationSubscriptions: API.PaginatedOperationMethod<
  ListMonetizationSubscriptionsRequest,
  ListMonetizationSubscriptionsResponse,
  ListMonetizationSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMonetizationSubscriptionsRequest,
  output: ListMonetizationSubscriptionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchMigratePricesMonetizationSubscriptionsBasePlansRequest {
  /** Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources. */
  packageName: string;
  /** Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set. */
  productId: string;
  /** Request body */
  body?: BatchMigrateBasePlanPricesRequest;
}

export const BatchMigratePricesMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(BatchMigrateBasePlanPricesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchMigratePricesMonetizationSubscriptionsBasePlansRequest>;

export type BatchMigratePricesMonetizationSubscriptionsBasePlansResponse =
  BatchMigrateBasePlanPricesResponse;
export const BatchMigratePricesMonetizationSubscriptionsBasePlansResponse =
  /*@__PURE__*/ BatchMigrateBasePlanPricesResponse;

export type BatchMigratePricesMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. */
export const batchMigratePricesMonetizationSubscriptionsBasePlans: API.OperationMethod<
  BatchMigratePricesMonetizationSubscriptionsBasePlansRequest,
  BatchMigratePricesMonetizationSubscriptionsBasePlansResponse,
  BatchMigratePricesMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchMigratePricesMonetizationSubscriptionsBasePlansRequest,
  output: BatchMigratePricesMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMonetizationSubscriptionsBasePlansRequest {
  /** Required. The parent app (package name) of the base plan to delete. */
  packageName: string;
  /** Required. The unique offer ID of the base plan to delete. */
  basePlanId: string;
  /** Required. The parent subscription (ID) of the base plan to delete. */
  productId: string;
}

export const DeleteMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteMonetizationSubscriptionsBasePlansRequest>;

export interface DeleteMonetizationSubscriptionsBasePlansResponse {}
export const DeleteMonetizationSubscriptionsBasePlansResponse: Schema.Codec<DeleteMonetizationSubscriptionsBasePlansResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteMonetizationSubscriptionsBasePlansResponse>;

export type DeleteMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a base plan. Can only be done for draft base plans. This action is irreversible. */
export const deleteMonetizationSubscriptionsBasePlans: API.OperationMethod<
  DeleteMonetizationSubscriptionsBasePlansRequest,
  DeleteMonetizationSubscriptionsBasePlansResponse,
  DeleteMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMonetizationSubscriptionsBasePlansRequest,
  output: DeleteMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MigratePricesMonetizationSubscriptionsBasePlansRequest {
  /** Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. */
  productId: string;
  /** Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. */
  packageName: string;
  /** Required. The unique base plan ID of the base plan to update prices on. */
  basePlanId: string;
  /** Request body */
  body?: MigrateBasePlanPricesRequest;
}

export const MigratePricesMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    body: Schema.optional(MigrateBasePlanPricesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MigratePricesMonetizationSubscriptionsBasePlansRequest>;

export type MigratePricesMonetizationSubscriptionsBasePlansResponse =
  MigrateBasePlanPricesResponse;
export const MigratePricesMonetizationSubscriptionsBasePlansResponse =
  /*@__PURE__*/ MigrateBasePlanPricesResponse;

export type MigratePricesMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Migrates subscribers from one or more legacy price cohorts to the current price. Requests result in Google Play notifying affected subscribers. Only up to 250 simultaneous legacy price cohorts are supported. */
export const migratePricesMonetizationSubscriptionsBasePlans: API.OperationMethod<
  MigratePricesMonetizationSubscriptionsBasePlansRequest,
  MigratePricesMonetizationSubscriptionsBasePlansResponse,
  MigratePricesMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MigratePricesMonetizationSubscriptionsBasePlansRequest,
  output: MigratePricesMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateMonetizationSubscriptionsBasePlansRequest {
  /** Required. The parent subscription (ID) of the base plan to deactivate. */
  productId: string;
  /** Required. The parent app (package name) of the base plan to deactivate. */
  packageName: string;
  /** Required. The unique base plan ID of the base plan to deactivate. */
  basePlanId: string;
  /** Request body */
  body?: DeactivateBasePlanRequest;
}

export const DeactivateMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    body: Schema.optional(DeactivateBasePlanRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeactivateMonetizationSubscriptionsBasePlansRequest>;

export type DeactivateMonetizationSubscriptionsBasePlansResponse = Subscription;
export const DeactivateMonetizationSubscriptionsBasePlansResponse =
  /*@__PURE__*/ Subscription;

export type DeactivateMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription */
export const deactivateMonetizationSubscriptionsBasePlans: API.OperationMethod<
  DeactivateMonetizationSubscriptionsBasePlansRequest,
  DeactivateMonetizationSubscriptionsBasePlansResponse,
  DeactivateMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeactivateMonetizationSubscriptionsBasePlansRequest,
  output: DeactivateMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateStatesMonetizationSubscriptionsBasePlansRequest {
  /** Required. The parent app (package name) of the updated base plans. */
  packageName: string;
  /** Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set. */
  productId: string;
  /** Request body */
  body?: BatchUpdateBasePlanStatesRequest;
}

export const BatchUpdateStatesMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(BatchUpdateBasePlanStatesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateStatesMonetizationSubscriptionsBasePlansRequest>;

export type BatchUpdateStatesMonetizationSubscriptionsBasePlansResponse =
  BatchUpdateBasePlanStatesResponse;
export const BatchUpdateStatesMonetizationSubscriptionsBasePlansResponse =
  /*@__PURE__*/ BatchUpdateBasePlanStatesResponse;

export type BatchUpdateStatesMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. */
export const batchUpdateStatesMonetizationSubscriptionsBasePlans: API.OperationMethod<
  BatchUpdateStatesMonetizationSubscriptionsBasePlansRequest,
  BatchUpdateStatesMonetizationSubscriptionsBasePlansResponse,
  BatchUpdateStatesMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateStatesMonetizationSubscriptionsBasePlansRequest,
  output: BatchUpdateStatesMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateMonetizationSubscriptionsBasePlansRequest {
  /** Required. The parent app (package name) of the base plan to activate. */
  packageName: string;
  /** Required. The unique base plan ID of the base plan to activate. */
  basePlanId: string;
  /** Required. The parent subscription (ID) of the base plan to activate. */
  productId: string;
  /** Request body */
  body?: ActivateBasePlanRequest;
}

export const ActivateMonetizationSubscriptionsBasePlansRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(ActivateBasePlanRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ActivateMonetizationSubscriptionsBasePlansRequest>;

export type ActivateMonetizationSubscriptionsBasePlansResponse = Subscription;
export const ActivateMonetizationSubscriptionsBasePlansResponse =
  /*@__PURE__*/ Subscription;

export type ActivateMonetizationSubscriptionsBasePlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates a base plan. Once activated, base plans will be available to new subscribers. */
export const activateMonetizationSubscriptionsBasePlans: API.OperationMethod<
  ActivateMonetizationSubscriptionsBasePlansRequest,
  ActivateMonetizationSubscriptionsBasePlansResponse,
  ActivateMonetizationSubscriptionsBasePlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateMonetizationSubscriptionsBasePlansRequest,
  output: ActivateMonetizationSubscriptionsBasePlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource. */
  packageName: string;
  /** Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource. */
  offerId?: string;
  /** Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource. */
  basePlanId: string;
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  "regionsVersion.version"?: string;
  /** Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource. */
  productId: string;
  /** Request body */
  body?: SubscriptionOffer;
}

export const CreateMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    offerId: Schema.optional(Schema.String).pipe(T.HttpQuery("offerId")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    "regionsVersion.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionsVersion.version"),
    ),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(SubscriptionOffer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateMonetizationSubscriptionsBasePlansOffersRequest>;

export type CreateMonetizationSubscriptionsBasePlansOffersResponse =
  SubscriptionOffer;
export const CreateMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ SubscriptionOffer;

export type CreateMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated. */
export const createMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  CreateMonetizationSubscriptionsBasePlansOffersRequest,
  CreateMonetizationSubscriptionsBasePlansOffersResponse,
  CreateMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMonetizationSubscriptionsBasePlansOffersRequest,
  output: CreateMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. */
  productId: string;
  /** Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests. */
  packageName: string;
  /** Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans. */
  basePlanId: string;
  /** Request body */
  body?: BatchGetSubscriptionOffersRequest;
}

export const BatchGetMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    body: Schema.optional(BatchGetSubscriptionOffersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchGetMonetizationSubscriptionsBasePlansOffersRequest>;

export type BatchGetMonetizationSubscriptionsBasePlansOffersResponse =
  BatchGetSubscriptionOffersResponse;
export const BatchGetMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ BatchGetSubscriptionOffersResponse;

export type BatchGetMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reads one or more subscription offers. */
export const batchGetMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  BatchGetMonetizationSubscriptionsBasePlansOffersRequest,
  BatchGetMonetizationSubscriptionsBasePlansOffersResponse,
  BatchGetMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMonetizationSubscriptionsBasePlansOffersRequest,
  output: BatchGetMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent app (package name) for which the subscriptions should be read. */
  packageName: string;
  /** A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'. */
  basePlanId: string;
  /** Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app. */
  productId: string;
}

export const ListMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers",
    }),
    svc,
  ) as unknown as Schema.Codec<ListMonetizationSubscriptionsBasePlansOffersRequest>;

export type ListMonetizationSubscriptionsBasePlansOffersResponse =
  ListSubscriptionOffersResponse;
export const ListMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ ListSubscriptionOffersResponse;

export type ListMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all offers under a given subscription. */
export const listMonetizationSubscriptionsBasePlansOffers: API.PaginatedOperationMethod<
  ListMonetizationSubscriptionsBasePlansOffersRequest,
  ListMonetizationSubscriptionsBasePlansOffersResponse,
  ListMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMonetizationSubscriptionsBasePlansOffersRequest,
  output: ListMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeactivateMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent subscription (ID) of the offer to deactivate. */
  productId: string;
  /** Required. The unique offer ID of the offer to deactivate. */
  offerId: string;
  /** Required. The parent base plan (ID) of the offer to deactivate. */
  basePlanId: string;
  /** Required. The parent app (package name) of the offer to deactivate. */
  packageName: string;
  /** Request body */
  body?: DeactivateSubscriptionOfferRequest;
}

export const DeactivateMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(DeactivateSubscriptionOfferRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeactivateMonetizationSubscriptionsBasePlansOffersRequest>;

export type DeactivateMonetizationSubscriptionsBasePlansOffersResponse =
  SubscriptionOffer;
export const DeactivateMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ SubscriptionOffer;

export type DeactivateMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers. */
export const deactivateMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  DeactivateMonetizationSubscriptionsBasePlansOffersRequest,
  DeactivateMonetizationSubscriptionsBasePlansOffersResponse,
  DeactivateMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeactivateMonetizationSubscriptionsBasePlansOffersRequest,
  output: DeactivateMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. */
  "regionsVersion.version"?: string;
  /** Required. Immutable. The ID of the parent subscription this offer belongs to. */
  productId: string;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Required. Immutable. The ID of the base plan to which this offer is an extension. */
  basePlanId: string;
  /** Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. */
  offerId: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Required. Immutable. The package name of the app the parent subscription belongs to. */
  packageName: string;
  /** Request body */
  body?: SubscriptionOffer;
}

export const PatchMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    "regionsVersion.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionsVersion.version"),
    ),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(SubscriptionOffer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchMonetizationSubscriptionsBasePlansOffersRequest>;

export type PatchMonetizationSubscriptionsBasePlansOffersResponse =
  SubscriptionOffer;
export const PatchMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ SubscriptionOffer;

export type PatchMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing subscription offer. */
export const patchMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  PatchMonetizationSubscriptionsBasePlansOffersRequest,
  PatchMonetizationSubscriptionsBasePlansOffersResponse,
  PatchMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchMonetizationSubscriptionsBasePlansOffersRequest,
  output: PatchMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent base plan (ID) of the offer to activate. */
  basePlanId: string;
  /** Required. The parent app (package name) of the offer to activate. */
  packageName: string;
  /** Required. The parent subscription (ID) of the offer to activate. */
  productId: string;
  /** Required. The unique offer ID of the offer to activate. */
  offerId: string;
  /** Request body */
  body?: ActivateSubscriptionOfferRequest;
}

export const ActivateMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    body: Schema.optional(ActivateSubscriptionOfferRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ActivateMonetizationSubscriptionsBasePlansOffersRequest>;

export type ActivateMonetizationSubscriptionsBasePlansOffersResponse =
  SubscriptionOffer;
export const ActivateMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ SubscriptionOffer;

export type ActivateMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates a subscription offer. Once activated, subscription offers will be available to new subscribers. */
export const activateMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  ActivateMonetizationSubscriptionsBasePlansOffersRequest,
  ActivateMonetizationSubscriptionsBasePlansOffersResponse,
  ActivateMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateMonetizationSubscriptionsBasePlansOffersRequest,
  output: ActivateMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources. */
  packageName: string;
  /** Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans. */
  basePlanId: string;
  /** Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. */
  productId: string;
  /** Request body */
  body?: BatchUpdateSubscriptionOfferStatesRequest;
}

export const BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(BatchUpdateSubscriptionOfferStatesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersRequest>;

export type BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersResponse =
  BatchUpdateSubscriptionOfferStatesResponse;
export const BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ BatchUpdateSubscriptionOfferStatesResponse;

export type BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. */
export const batchUpdateStatesMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersRequest,
  BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersResponse,
  BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersRequest,
  output: BatchUpdateStatesMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent subscription (ID) of the offer to delete. */
  productId: string;
  /** Required. The unique offer ID of the offer to delete. */
  offerId: string;
  /** Required. The parent app (package name) of the offer to delete. */
  packageName: string;
  /** Required. The parent base plan (ID) of the offer to delete. */
  basePlanId: string;
}

export const DeleteMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteMonetizationSubscriptionsBasePlansOffersRequest>;

export interface DeleteMonetizationSubscriptionsBasePlansOffersResponse {}
export const DeleteMonetizationSubscriptionsBasePlansOffersResponse: Schema.Codec<DeleteMonetizationSubscriptionsBasePlansOffersResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteMonetizationSubscriptionsBasePlansOffersResponse>;

export type DeleteMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a subscription offer. Can only be done for draft offers. This action is irreversible. */
export const deleteMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  DeleteMonetizationSubscriptionsBasePlansOffersRequest,
  DeleteMonetizationSubscriptionsBasePlansOffersResponse,
  DeleteMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMonetizationSubscriptionsBasePlansOffersRequest,
  output: DeleteMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The parent app (package name) of the offer to get. */
  packageName: string;
  /** Required. The parent base plan (ID) of the offer to get. */
  basePlanId: string;
  /** Required. The parent subscription (ID) of the offer to get. */
  productId: string;
  /** Required. The unique offer ID of the offer to get. */
  offerId: string;
}

export const GetMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    offerId: Schema.String.pipe(T.HttpPath("offerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetMonetizationSubscriptionsBasePlansOffersRequest>;

export type GetMonetizationSubscriptionsBasePlansOffersResponse =
  SubscriptionOffer;
export const GetMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ SubscriptionOffer;

export type GetMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reads a single offer */
export const getMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  GetMonetizationSubscriptionsBasePlansOffersRequest,
  GetMonetizationSubscriptionsBasePlansOffersResponse,
  GetMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMonetizationSubscriptionsBasePlansOffersRequest,
  output: GetMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchUpdateMonetizationSubscriptionsBasePlansOffersRequest {
  /** Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. */
  productId: string;
  /** Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources. */
  packageName: string;
  /** Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans. */
  basePlanId: string;
  /** Request body */
  body?: BatchUpdateSubscriptionOffersRequest;
}

export const BatchUpdateMonetizationSubscriptionsBasePlansOffersRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    basePlanId: Schema.String.pipe(T.HttpPath("basePlanId")),
    body: Schema.optional(BatchUpdateSubscriptionOffersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateMonetizationSubscriptionsBasePlansOffersRequest>;

export type BatchUpdateMonetizationSubscriptionsBasePlansOffersResponse =
  BatchUpdateSubscriptionOffersResponse;
export const BatchUpdateMonetizationSubscriptionsBasePlansOffersResponse =
  /*@__PURE__*/ BatchUpdateSubscriptionOffersResponse;

export type BatchUpdateMonetizationSubscriptionsBasePlansOffersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. */
export const batchUpdateMonetizationSubscriptionsBasePlansOffers: API.OperationMethod<
  BatchUpdateMonetizationSubscriptionsBasePlansOffersRequest,
  BatchUpdateMonetizationSubscriptionsBasePlansOffersResponse,
  BatchUpdateMonetizationSubscriptionsBasePlansOffersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMonetizationSubscriptionsBasePlansOffersRequest,
  output: BatchUpdateMonetizationSubscriptionsBasePlansOffersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersRequest {
  /** A token received from a previous call to this method, in order to retrieve further results. */
  pageToken?: string;
  /** Required. The developer account to fetch users from. Format: developers/{developer} */
  parent: string;
  /** The maximum number of results to return. This must be set to -1 to disable pagination. */
  pageSize?: number;
}

export const ListUsersRequest = /*@__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  parent: Schema.String.pipe(T.HttpPath("parent")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "androidpublisher/v3/{+parent}/users" }),
  svc,
) as unknown as Schema.Codec<ListUsersRequest>;

export type ListUsersResponse_Op = ListUsersResponse;
export const ListUsersResponse_Op = /*@__PURE__*/ ListUsersResponse;

export type ListUsersError = DefaultErrors | NotFound | Forbidden;

/** Lists all users with access to a developer account. */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse_Op,
  ListUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateUsersRequest {
  /** Required. The developer account to add the user to. Format: developers/{developer} */
  parent: string;
  /** Request body */
  body?: User;
}

export const CreateUsersRequest = /*@__PURE__*/ Schema.Struct({
  parent: Schema.String.pipe(T.HttpPath("parent")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/{+parent}/users",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<CreateUsersRequest>;

export type CreateUsersResponse = User;
export const CreateUsersResponse = /*@__PURE__*/ User;

export type CreateUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Grant access for a user to the given developer account. */
export const createUsers: API.OperationMethod<
  CreateUsersRequest,
  CreateUsersResponse,
  CreateUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsersRequest,
  output: CreateUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersRequest {
  /** Required. The name of the user to delete. Format: developers/{developer}/users/{email} */
  name: string;
}

export const DeleteUsersRequest = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "androidpublisher/v3/{+name}" }),
  svc,
) as unknown as Schema.Codec<DeleteUsersRequest>;

export interface DeleteUsersResponse {}
export const DeleteUsersResponse: Schema.Codec<DeleteUsersResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<DeleteUsersResponse>;

export type DeleteUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes all access for the user to the given developer account. */
export const deleteUsers: API.OperationMethod<
  DeleteUsersRequest,
  DeleteUsersResponse,
  DeleteUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsersRequest,
  output: DeleteUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchUsersRequest {
  /** Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}". */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: User;
}

export const PatchUsersRequest = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "androidpublisher/v3/{+name}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchUsersRequest>;

export type PatchUsersResponse = User;
export const PatchUsersResponse = /*@__PURE__*/ User;

export type PatchUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates access for the user to the developer account. */
export const patchUsers: API.OperationMethod<
  PatchUsersRequest,
  PatchUsersResponse,
  PatchUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUsersRequest,
  output: PatchUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReplyReviewsRequest {
  /** Unique identifier for a review. */
  reviewId: string;
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: ReviewsReplyRequest;
}

export const ReplyReviewsRequest = /*@__PURE__*/ Schema.Struct({
  reviewId: Schema.String.pipe(T.HttpPath("reviewId")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  body: Schema.optional(ReviewsReplyRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<ReplyReviewsRequest>;

export type ReplyReviewsResponse = ReviewsReplyResponse;
export const ReplyReviewsResponse = /*@__PURE__*/ ReviewsReplyResponse;

export type ReplyReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replies to a single review, or updates an existing reply. */
export const replyReviews: API.OperationMethod<
  ReplyReviewsRequest,
  ReplyReviewsResponse,
  ReplyReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReplyReviewsRequest,
  output: ReplyReviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetReviewsRequest {
  /** Unique identifier for a review. */
  reviewId: string;
  /** Language localization code. */
  translationLanguage?: string;
  /** Package name of the app. */
  packageName: string;
}

export const GetReviewsRequest = /*@__PURE__*/ Schema.Struct({
  reviewId: Schema.String.pipe(T.HttpPath("reviewId")),
  translationLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("translationLanguage"),
  ),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/reviews/{reviewId}",
  }),
  svc,
) as unknown as Schema.Codec<GetReviewsRequest>;

export type GetReviewsResponse = Review;
export const GetReviewsResponse = /*@__PURE__*/ Review;

export type GetReviewsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single review. */
export const getReviews: API.OperationMethod<
  GetReviewsRequest,
  GetReviewsResponse,
  GetReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReviewsRequest,
  output: GetReviewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListReviewsRequest {
  /** The index of the first element to return. */
  startIndex?: number;
  /** Package name of the app. */
  packageName: string;
  /** Language localization code. */
  translationLanguage?: string;
  /** Pagination token. If empty, list starts at the first review. */
  token?: string;
  /** How many results the list operation should return. */
  maxResults?: number;
}

export const ListReviewsRequest = /*@__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  translationLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("translationLanguage"),
  ),
  token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/reviews",
  }),
  svc,
) as unknown as Schema.Codec<ListReviewsRequest>;

export type ListReviewsResponse = ReviewsListResponse;
export const ListReviewsResponse = /*@__PURE__*/ ReviewsListResponse;

export type ListReviewsError = DefaultErrors | NotFound | Forbidden;

/** Lists all reviews. */
export const listReviews: API.OperationMethod<
  ListReviewsRequest,
  ListReviewsResponse,
  ListReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReviewsRequest,
  output: ListReviewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RefundPurchasesSubscriptionsRequest {
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** "The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
}

export const RefundPurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
    token: Schema.String.pipe(T.HttpPath("token")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RefundPurchasesSubscriptionsRequest>;

export interface RefundPurchasesSubscriptionsResponse {}
export const RefundPurchasesSubscriptionsResponse: Schema.Codec<RefundPurchasesSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<RefundPurchasesSubscriptionsResponse>;

export type RefundPurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use orders.refund instead. Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur. */
export const refundPurchasesSubscriptions: API.OperationMethod<
  RefundPurchasesSubscriptionsRequest,
  RefundPurchasesSubscriptionsResponse,
  RefundPurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RefundPurchasesSubscriptionsRequest,
  output: RefundPurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPurchasesSubscriptionsRequest {
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
}

export const GetPurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
    token: Schema.String.pipe(T.HttpPath("token")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetPurchasesSubscriptionsRequest>;

export type GetPurchasesSubscriptionsResponse = SubscriptionPurchase;
export const GetPurchasesSubscriptionsResponse =
  /*@__PURE__*/ SubscriptionPurchase;

export type GetPurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Deprecated: Use purchases.subscriptionsv2.get instead. Checks whether a user's subscription purchase is valid and returns its expiry time. */
export const getPurchasesSubscriptions: API.OperationMethod<
  GetPurchasesSubscriptionsRequest,
  GetPurchasesSubscriptionsResponse,
  GetPurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPurchasesSubscriptionsRequest,
  output: GetPurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelPurchasesSubscriptionsRequest {
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
}

export const CancelPurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CancelPurchasesSubscriptionsRequest>;

export interface CancelPurchasesSubscriptionsResponse {}
export const CancelPurchasesSubscriptionsResponse: Schema.Codec<CancelPurchasesSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<CancelPurchasesSubscriptionsResponse>;

export type CancelPurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use purchases.subscriptionsv2.cancel instead. Cancels a user's subscription purchase. The subscription remains valid until its expiration time. Newer version is available at purchases.subscriptionsv2.cancel for better client library support. */
export const cancelPurchasesSubscriptions: API.OperationMethod<
  CancelPurchasesSubscriptionsRequest,
  CancelPurchasesSubscriptionsResponse,
  CancelPurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelPurchasesSubscriptionsRequest,
  output: CancelPurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeferPurchasesSubscriptionsRequest {
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
  /** Request body */
  body?: SubscriptionPurchasesDeferRequest;
}

export const DeferPurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
    body: Schema.optional(SubscriptionPurchasesDeferRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeferPurchasesSubscriptionsRequest>;

export type DeferPurchasesSubscriptionsResponse =
  SubscriptionPurchasesDeferResponse;
export const DeferPurchasesSubscriptionsResponse =
  /*@__PURE__*/ SubscriptionPurchasesDeferResponse;

export type DeferPurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use purchases.subscriptionsv2.defer instead. Defers a user's subscription purchase until a specified future expiration time. */
export const deferPurchasesSubscriptions: API.OperationMethod<
  DeferPurchasesSubscriptionsRequest,
  DeferPurchasesSubscriptionsResponse,
  DeferPurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeferPurchasesSubscriptionsRequest,
  output: DeferPurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AcknowledgePurchasesSubscriptionsRequest {
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
  /** Request body */
  body?: SubscriptionPurchasesAcknowledgeRequest;
}

export const AcknowledgePurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
    body: Schema.optional(SubscriptionPurchasesAcknowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AcknowledgePurchasesSubscriptionsRequest>;

export interface AcknowledgePurchasesSubscriptionsResponse {}
export const AcknowledgePurchasesSubscriptionsResponse: Schema.Codec<AcknowledgePurchasesSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<AcknowledgePurchasesSubscriptionsResponse>;

export type AcknowledgePurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Acknowledges a subscription purchase. */
export const acknowledgePurchasesSubscriptions: API.OperationMethod<
  AcknowledgePurchasesSubscriptionsRequest,
  AcknowledgePurchasesSubscriptionsResponse,
  AcknowledgePurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcknowledgePurchasesSubscriptionsRequest,
  output: AcknowledgePurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevokePurchasesSubscriptionsRequest {
  /** The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** The purchased subscription ID (for example, 'monthly001'). */
  subscriptionId: string;
}

export const RevokePurchasesSubscriptionsRequest =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    subscriptionId: Schema.String.pipe(T.HttpPath("subscriptionId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RevokePurchasesSubscriptionsRequest>;

export interface RevokePurchasesSubscriptionsResponse {}
export const RevokePurchasesSubscriptionsResponse: Schema.Codec<RevokePurchasesSubscriptionsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<RevokePurchasesSubscriptionsResponse>;

export type RevokePurchasesSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use purchases.subscriptionsv2.revoke instead. Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring. */
export const revokePurchasesSubscriptions: API.OperationMethod<
  RevokePurchasesSubscriptionsRequest,
  RevokePurchasesSubscriptionsResponse,
  RevokePurchasesSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokePurchasesSubscriptionsRequest,
  output: RevokePurchasesSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPurchasesVoidedpurchasesRequest {
  /** Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled. */
  token?: string;
  /** The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken. */
  type?: number;
  /** Optional. Whether to include voided purchases of quantity-based partial refunds, which are applicable only to multi-quantity purchases. If true, additional voided purchases may be returned with voidedQuantity that indicates the refund quantity of a quantity-based partial refund. The default value is false. */
  includeQuantityBasedPartialRefund?: boolean;
  /** Defines how many results the list operation should return. The default number depends on the resource collection. */
  maxResults?: number;
  /** The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response. */
  endTime?: string;
  /** Defines the index of the first element to return. This can only be used if indexed paging is enabled. */
  startIndex?: number;
  /** The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response. */
  startTime?: string;
  /** The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing'). */
  packageName: string;
}

export const ListPurchasesVoidedpurchasesRequest =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
    type: Schema.optional(Schema.Number).pipe(T.HttpQuery("type")),
    includeQuantityBasedPartialRefund: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeQuantityBasedPartialRefund"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases",
    }),
    svc,
  ) as unknown as Schema.Codec<ListPurchasesVoidedpurchasesRequest>;

export type ListPurchasesVoidedpurchasesResponse = VoidedPurchasesListResponse;
export const ListPurchasesVoidedpurchasesResponse =
  /*@__PURE__*/ VoidedPurchasesListResponse;

export type ListPurchasesVoidedpurchasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the purchases that were canceled, refunded or charged-back. */
export const listPurchasesVoidedpurchases: API.OperationMethod<
  ListPurchasesVoidedpurchasesRequest,
  ListPurchasesVoidedpurchasesResponse,
  ListPurchasesVoidedpurchasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPurchasesVoidedpurchasesRequest,
  output: ListPurchasesVoidedpurchasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface Getproductpurchasev2PurchasesProductsv2Request {
  /** The token provided to the user's device when the inapp product was purchased. */
  token: string;
  /** The package name of the application the inapp product was sold in (for example, 'com.some.thing'). */
  packageName: string;
}

export const Getproductpurchasev2PurchasesProductsv2Request =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}",
    }),
    svc,
  ) as unknown as Schema.Codec<Getproductpurchasev2PurchasesProductsv2Request>;

export type Getproductpurchasev2PurchasesProductsv2Response = ProductPurchaseV2;
export const Getproductpurchasev2PurchasesProductsv2Response =
  /*@__PURE__*/ ProductPurchaseV2;

export type Getproductpurchasev2PurchasesProductsv2Error =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks the purchase and consumption status of an inapp item. */
export const getproductpurchasev2PurchasesProductsv2: API.OperationMethod<
  Getproductpurchasev2PurchasesProductsv2Request,
  Getproductpurchasev2PurchasesProductsv2Response,
  Getproductpurchasev2PurchasesProductsv2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: Getproductpurchasev2PurchasesProductsv2Request,
  output: Getproductpurchasev2PurchasesProductsv2Response,
  errors: [NotFound, Forbidden],
}));

export interface AcknowledgePurchasesProductsRequest {
  /** The inapp product SKU (for example, 'com.some.thing.inapp1'). */
  productId: string;
  /** The token provided to the user's device when the inapp product was purchased. */
  token: string;
  /** The package name of the application the inapp product was sold in (for example, 'com.some.thing'). */
  packageName: string;
  /** Request body */
  body?: ProductPurchasesAcknowledgeRequest;
}

export const AcknowledgePurchasesProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(ProductPurchasesAcknowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AcknowledgePurchasesProductsRequest>;

export interface AcknowledgePurchasesProductsResponse {}
export const AcknowledgePurchasesProductsResponse: Schema.Codec<AcknowledgePurchasesProductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<AcknowledgePurchasesProductsResponse>;

export type AcknowledgePurchasesProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Acknowledges a purchase of an inapp item. */
export const acknowledgePurchasesProducts: API.OperationMethod<
  AcknowledgePurchasesProductsRequest,
  AcknowledgePurchasesProductsResponse,
  AcknowledgePurchasesProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcknowledgePurchasesProductsRequest,
  output: AcknowledgePurchasesProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPurchasesProductsRequest {
  /** The package name of the application the inapp product was sold in (for example, 'com.some.thing'). */
  packageName: string;
  /** The inapp product SKU (for example, 'com.some.thing.inapp1'). */
  productId: string;
  /** The token provided to the user's device when the inapp product was purchased. */
  token: string;
}

export const GetPurchasesProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    token: Schema.String.pipe(T.HttpPath("token")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetPurchasesProductsRequest>;

export type GetPurchasesProductsResponse = ProductPurchase;
export const GetPurchasesProductsResponse = /*@__PURE__*/ ProductPurchase;

export type GetPurchasesProductsError = DefaultErrors | NotFound | Forbidden;

/** Checks the purchase and consumption status of an inapp item. */
export const getPurchasesProducts: API.OperationMethod<
  GetPurchasesProductsRequest,
  GetPurchasesProductsResponse,
  GetPurchasesProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPurchasesProductsRequest,
  output: GetPurchasesProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ConsumePurchasesProductsRequest {
  /** The package name of the application the inapp product was sold in (for example, 'com.some.thing'). */
  packageName: string;
  /** The inapp product SKU (for example, 'com.some.thing.inapp1'). */
  productId: string;
  /** The token provided to the user's device when the inapp product was purchased. */
  token: string;
}

export const ConsumePurchasesProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    token: Schema.String.pipe(T.HttpPath("token")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ConsumePurchasesProductsRequest>;

export interface ConsumePurchasesProductsResponse {}
export const ConsumePurchasesProductsResponse: Schema.Codec<ConsumePurchasesProductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<ConsumePurchasesProductsResponse>;

export type ConsumePurchasesProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Consumes a purchase for an inapp item. */
export const consumePurchasesProducts: API.OperationMethod<
  ConsumePurchasesProductsRequest,
  ConsumePurchasesProductsResponse,
  ConsumePurchasesProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConsumePurchasesProductsRequest,
  output: ConsumePurchasesProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPurchasesSubscriptionsv2Request {
  /** The package of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Required. The token provided to the user's device when the subscription was purchased. */
  token: string;
}

export const GetPurchasesSubscriptionsv2Request =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    token: Schema.String.pipe(T.HttpPath("token")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetPurchasesSubscriptionsv2Request>;

export type GetPurchasesSubscriptionsv2Response = SubscriptionPurchaseV2;
export const GetPurchasesSubscriptionsv2Response =
  /*@__PURE__*/ SubscriptionPurchaseV2;

export type GetPurchasesSubscriptionsv2Error =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get metadata about a subscription */
export const getPurchasesSubscriptionsv2: API.OperationMethod<
  GetPurchasesSubscriptionsv2Request,
  GetPurchasesSubscriptionsv2Response,
  GetPurchasesSubscriptionsv2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPurchasesSubscriptionsv2Request,
  output: GetPurchasesSubscriptionsv2Response,
  errors: [NotFound, Forbidden],
}));

export interface CancelPurchasesSubscriptionsv2Request {
  /** Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Required. The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** Request body */
  body?: CancelSubscriptionPurchaseRequest;
}

export const CancelPurchasesSubscriptionsv2Request =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    token: Schema.String.pipe(T.HttpPath("token")),
    body: Schema.optional(CancelSubscriptionPurchaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CancelPurchasesSubscriptionsv2Request>;

export type CancelPurchasesSubscriptionsv2Response =
  CancelSubscriptionPurchaseResponse;
export const CancelPurchasesSubscriptionsv2Response =
  /*@__PURE__*/ CancelSubscriptionPurchaseResponse;

export type CancelPurchasesSubscriptionsv2Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel a subscription purchase for the user. */
export const cancelPurchasesSubscriptionsv2: API.OperationMethod<
  CancelPurchasesSubscriptionsv2Request,
  CancelPurchasesSubscriptionsv2Response,
  CancelPurchasesSubscriptionsv2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelPurchasesSubscriptionsv2Request,
  output: CancelPurchasesSubscriptionsv2Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeferPurchasesSubscriptionsv2Request {
  /** Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Required. The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** Request body */
  body?: DeferSubscriptionPurchaseRequest;
}

export const DeferPurchasesSubscriptionsv2Request =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    token: Schema.String.pipe(T.HttpPath("token")),
    body: Schema.optional(DeferSubscriptionPurchaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:defer",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeferPurchasesSubscriptionsv2Request>;

export type DeferPurchasesSubscriptionsv2Response =
  DeferSubscriptionPurchaseResponse;
export const DeferPurchasesSubscriptionsv2Response =
  /*@__PURE__*/ DeferSubscriptionPurchaseResponse;

export type DeferPurchasesSubscriptionsv2Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Defers the renewal of a subscription. */
export const deferPurchasesSubscriptionsv2: API.OperationMethod<
  DeferPurchasesSubscriptionsv2Request,
  DeferPurchasesSubscriptionsv2Response,
  DeferPurchasesSubscriptionsv2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeferPurchasesSubscriptionsv2Request,
  output: DeferPurchasesSubscriptionsv2Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevokePurchasesSubscriptionsv2Request {
  /** Required. The token provided to the user's device when the subscription was purchased. */
  token: string;
  /** Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Request body */
  body?: RevokeSubscriptionPurchaseRequest;
}

export const RevokePurchasesSubscriptionsv2Request =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(RevokeSubscriptionPurchaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RevokePurchasesSubscriptionsv2Request>;

export type RevokePurchasesSubscriptionsv2Response =
  RevokeSubscriptionPurchaseResponse;
export const RevokePurchasesSubscriptionsv2Response =
  /*@__PURE__*/ RevokeSubscriptionPurchaseResponse;

export type RevokePurchasesSubscriptionsv2Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revoke a subscription purchase for the user. */
export const revokePurchasesSubscriptionsv2: API.OperationMethod<
  RevokePurchasesSubscriptionsv2Request,
  RevokePurchasesSubscriptionsv2Response,
  RevokePurchasesSubscriptionsv2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokePurchasesSubscriptionsv2Request,
  output: RevokePurchasesSubscriptionsv2Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListGeneratedapksRequest {
  /** Version code of the app bundle. */
  versionCode: number;
  /** Package name of the app. */
  packageName: string;
}

export const ListGeneratedapksRequest =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.Number.pipe(T.HttpPath("versionCode")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}",
    }),
    svc,
  ) as unknown as Schema.Codec<ListGeneratedapksRequest>;

export type ListGeneratedapksResponse = GeneratedApksListResponse;
export const ListGeneratedapksResponse =
  /*@__PURE__*/ GeneratedApksListResponse;

export type ListGeneratedapksError = DefaultErrors | NotFound | Forbidden;

/** Returns download metadata for all APKs that were generated from a given app bundle. */
export const listGeneratedapks: API.OperationMethod<
  ListGeneratedapksRequest,
  ListGeneratedapksResponse,
  ListGeneratedapksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListGeneratedapksRequest,
  output: ListGeneratedapksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadGeneratedapksRequest {
  /** Version code of the app bundle. */
  versionCode: number;
  /** Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method. */
  downloadId: string;
  /** Package name of the app. */
  packageName: string;
}

export const DownloadGeneratedapksRequest =
  /*@__PURE__*/ Schema.Struct({
    versionCode: Schema.Number.pipe(T.HttpPath("versionCode")),
    downloadId: Schema.String.pipe(T.HttpPath("downloadId")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download",
    }),
    svc,
  ) as unknown as Schema.Codec<DownloadGeneratedapksRequest>;

export interface DownloadGeneratedapksResponse {}
export const DownloadGeneratedapksResponse: Schema.Codec<DownloadGeneratedapksResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DownloadGeneratedapksResponse>;

export type DownloadGeneratedapksError = DefaultErrors | NotFound | Forbidden;

/** Downloads a single signed APK generated from an app bundle. */
export const downloadGeneratedapks: API.OperationMethod<
  DownloadGeneratedapksRequest,
  DownloadGeneratedapksResponse,
  DownloadGeneratedapksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DownloadGeneratedapksRequest,
  output: DownloadGeneratedapksResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchGrantsRequest {
  /** Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Grant;
}

export const PatchGrantsRequest = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(Grant).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "androidpublisher/v3/{+name}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchGrantsRequest>;

export type PatchGrantsResponse = Grant;
export const PatchGrantsResponse = /*@__PURE__*/ Grant;

export type PatchGrantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates access for the user to the given package. */
export const patchGrants: API.OperationMethod<
  PatchGrantsRequest,
  PatchGrantsResponse,
  PatchGrantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchGrantsRequest,
  output: PatchGrantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteGrantsRequest {
  /** Required. The name of the grant to delete. Format: developers/{developer}/users/{email}/grants/{package_name} */
  name: string;
}

export const DeleteGrantsRequest = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "androidpublisher/v3/{+name}" }),
  svc,
) as unknown as Schema.Codec<DeleteGrantsRequest>;

export interface DeleteGrantsResponse {}
export const DeleteGrantsResponse: Schema.Codec<DeleteGrantsResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<DeleteGrantsResponse>;

export type DeleteGrantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes all access for the user to the given package or developer account. */
export const deleteGrants: API.OperationMethod<
  DeleteGrantsRequest,
  DeleteGrantsResponse,
  DeleteGrantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGrantsRequest,
  output: DeleteGrantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateGrantsRequest {
  /** Required. The user which needs permission. Format: developers/{developer}/users/{user} */
  parent: string;
  /** Request body */
  body?: Grant;
}

export const CreateGrantsRequest = /*@__PURE__*/ Schema.Struct({
  parent: Schema.String.pipe(T.HttpPath("parent")),
  body: Schema.optional(Grant).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/{+parent}/grants",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<CreateGrantsRequest>;

export type CreateGrantsResponse = Grant;
export const CreateGrantsResponse = /*@__PURE__*/ Grant;

export type CreateGrantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Grant access for a user to the given package. */
export const createGrants: API.OperationMethod<
  CreateGrantsRequest,
  CreateGrantsResponse,
  CreateGrantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGrantsRequest,
  output: CreateGrantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
  autoConvertMissingPrices?: boolean;
  /** Request body */
  body?: InAppProduct;
}

export const InsertInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    autoConvertMissingPrices: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("autoConvertMissingPrices"),
    ),
    body: Schema.optional(InAppProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertInappproductsRequest>;

export type InsertInappproductsResponse = InAppProduct;
export const InsertInappproductsResponse = /*@__PURE__*/ InAppProduct;

export type InsertInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const insertInappproducts: API.OperationMethod<
  InsertInappproductsRequest,
  InsertInappproductsResponse,
  InsertInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InsertInappproductsRequest,
  output: InsertInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Unique identifier for the in-app products. */
  sku?: string[];
}

export const BatchGetInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    sku: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("sku")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts:batchGet",
    }),
    svc,
  ) as unknown as Schema.Codec<BatchGetInappproductsRequest>;

export type BatchGetInappproductsResponse = InappproductsBatchGetResponse;
export const BatchGetInappproductsResponse =
  /*@__PURE__*/ InappproductsBatchGetResponse;

export type BatchGetInappproductsError = DefaultErrors | NotFound | Forbidden;

/** Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const batchGetInappproducts: API.OperationMethod<
  BatchGetInappproductsRequest,
  BatchGetInappproductsResponse,
  BatchGetInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetInappproductsRequest,
  output: BatchGetInappproductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Deprecated and ignored. The page size is determined by the server. */
  maxResults?: number;
  /** Deprecated and ignored. Set the `token` parameter to retrieve the next page. */
  startIndex?: number;
  /** Pagination token. If empty, list starts at the first product. */
  token?: string;
}

export const ListInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
    token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts",
    }),
    svc,
  ) as unknown as Schema.Codec<ListInappproductsRequest>;

export type ListInappproductsResponse = InappproductsListResponse;
export const ListInappproductsResponse =
  /*@__PURE__*/ InappproductsListResponse;

export type ListInappproductsError = DefaultErrors | NotFound | Forbidden;

/** Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const listInappproducts: API.OperationMethod<
  ListInappproductsRequest,
  ListInappproductsResponse,
  ListInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListInappproductsRequest,
  output: ListInappproductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Unique identifier for the in-app product. */
  sku: string;
  /** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
  autoConvertMissingPrices?: boolean;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Request body */
  body?: InAppProduct;
}

export const PatchInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    sku: Schema.String.pipe(T.HttpPath("sku")),
    autoConvertMissingPrices: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("autoConvertMissingPrices"),
    ),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    body: Schema.optional(InAppProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchInappproductsRequest>;

export type PatchInappproductsResponse = InAppProduct;
export const PatchInappproductsResponse = /*@__PURE__*/ InAppProduct;

export type PatchInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const patchInappproducts: API.OperationMethod<
  PatchInappproductsRequest,
  PatchInappproductsResponse,
  PatchInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchInappproductsRequest,
  output: PatchInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInappproductsRequest {
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Unique identifier for the in-app product. */
  sku: string;
  /** Package name of the app. */
  packageName: string;
}

export const DeleteInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    sku: Schema.String.pipe(T.HttpPath("sku")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteInappproductsRequest>;

export interface DeleteInappproductsResponse {}
export const DeleteInappproductsResponse: Schema.Codec<DeleteInappproductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteInappproductsResponse>;

export type DeleteInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const deleteInappproducts: API.OperationMethod<
  DeleteInappproductsRequest,
  DeleteInappproductsResponse,
  DeleteInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInappproductsRequest,
  output: DeleteInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: InappproductsBatchDeleteRequest;
}

export const BatchDeleteInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(InappproductsBatchDeleteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteInappproductsRequest>;

export interface BatchDeleteInappproductsResponse {}
export const BatchDeleteInappproductsResponse: Schema.Codec<BatchDeleteInappproductsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<BatchDeleteInappproductsResponse>;

export type BatchDeleteInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const batchDeleteInappproducts: API.OperationMethod<
  BatchDeleteInappproductsRequest,
  BatchDeleteInappproductsResponse,
  BatchDeleteInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteInappproductsRequest,
  output: BatchDeleteInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Unique identifier for the in-app product. */
  sku: string;
}

export const GetInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    sku: Schema.String.pipe(T.HttpPath("sku")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetInappproductsRequest>;

export type GetInappproductsResponse = InAppProduct;
export const GetInappproductsResponse = /*@__PURE__*/ InAppProduct;

export type GetInappproductsError = DefaultErrors | NotFound | Forbidden;

/** Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const getInappproducts: API.OperationMethod<
  GetInappproductsRequest,
  GetInappproductsResponse,
  GetInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInappproductsRequest,
  output: GetInappproductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateInappproductsRequest {
  /** Unique identifier for the in-app product. */
  sku: string;
  /** Package name of the app. */
  packageName: string;
  /** If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created. */
  allowMissing?: boolean;
  /** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
  autoConvertMissingPrices?: boolean;
  /** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
  latencyTolerance?:
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE"
    | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT"
    | (string & {});
  /** Request body */
  body?: InAppProduct;
}

export const UpdateInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    sku: Schema.String.pipe(T.HttpPath("sku")),
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    autoConvertMissingPrices: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("autoConvertMissingPrices"),
    ),
    latencyTolerance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("latencyTolerance"),
    ),
    body: Schema.optional(InAppProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateInappproductsRequest>;

export type UpdateInappproductsResponse = InAppProduct;
export const UpdateInappproductsResponse = /*@__PURE__*/ InAppProduct;

export type UpdateInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const updateInappproducts: API.OperationMethod<
  UpdateInappproductsRequest,
  UpdateInappproductsResponse,
  UpdateInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateInappproductsRequest,
  output: UpdateInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateInappproductsRequest {
  /** Package name of the app. */
  packageName: string;
  /** Request body */
  body?: InappproductsBatchUpdateRequest;
}

export const BatchUpdateInappproductsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(InappproductsBatchUpdateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateInappproductsRequest>;

export type BatchUpdateInappproductsResponse = InappproductsBatchUpdateResponse;
export const BatchUpdateInappproductsResponse =
  /*@__PURE__*/ InappproductsBatchUpdateResponse;

export type BatchUpdateInappproductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information. */
export const batchUpdateInappproducts: API.OperationMethod<
  BatchUpdateInappproductsRequest,
  BatchUpdateInappproductsResponse,
  BatchUpdateInappproductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateInappproductsRequest,
  output: BatchUpdateInappproductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RefundexternaltransactionExternaltransactionsRequest {
  /** Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction} */
  name: string;
  /** Request body */
  body?: RefundExternalTransactionRequest;
}

export const RefundexternaltransactionExternaltransactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RefundExternalTransactionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/{+name}:refund",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RefundexternaltransactionExternaltransactionsRequest>;

export type RefundexternaltransactionExternaltransactionsResponse =
  ExternalTransaction;
export const RefundexternaltransactionExternaltransactionsResponse =
  /*@__PURE__*/ ExternalTransaction;

export type RefundexternaltransactionExternaltransactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Refunds or partially refunds an existing external transaction. */
export const refundexternaltransactionExternaltransactions: API.OperationMethod<
  RefundexternaltransactionExternaltransactionsRequest,
  RefundexternaltransactionExternaltransactionsResponse,
  RefundexternaltransactionExternaltransactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RefundexternaltransactionExternaltransactionsRequest,
  output: RefundexternaltransactionExternaltransactionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetexternaltransactionExternaltransactionsRequest {
  /** Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction} */
  name: string;
}

export const GetexternaltransactionExternaltransactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "androidpublisher/v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetexternaltransactionExternaltransactionsRequest>;

export type GetexternaltransactionExternaltransactionsResponse =
  ExternalTransaction;
export const GetexternaltransactionExternaltransactionsResponse =
  /*@__PURE__*/ ExternalTransaction;

export type GetexternaltransactionExternaltransactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an existing external transaction. */
export const getexternaltransactionExternaltransactions: API.OperationMethod<
  GetexternaltransactionExternaltransactionsRequest,
  GetexternaltransactionExternaltransactionsResponse,
  GetexternaltransactionExternaltransactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetexternaltransactionExternaltransactionsRequest,
  output: GetexternaltransactionExternaltransactionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateexternaltransactionExternaltransactionsRequest {
  /** Required. The parent resource where this external transaction will be created. Format: applications/{package_name} */
  parent: string;
  /** Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-zA-Z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked. */
  externalTransactionId?: string;
  /** Request body */
  body?: ExternalTransaction;
}

export const CreateexternaltransactionExternaltransactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    externalTransactionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalTransactionId"),
    ),
    body: Schema.optional(ExternalTransaction).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/{+parent}/externalTransactions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateexternaltransactionExternaltransactionsRequest>;

export type CreateexternaltransactionExternaltransactionsResponse =
  ExternalTransaction;
export const CreateexternaltransactionExternaltransactionsResponse =
  /*@__PURE__*/ ExternalTransaction;

export type CreateexternaltransactionExternaltransactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new external transaction. */
export const createexternaltransactionExternaltransactions: API.OperationMethod<
  CreateexternaltransactionExternaltransactionsRequest,
  CreateexternaltransactionExternaltransactionsResponse,
  CreateexternaltransactionExternaltransactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateexternaltransactionExternaltransactionsRequest,
  output: CreateexternaltransactionExternaltransactionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadapkInternalappsharingartifactsRequest {
  /** Package name of the app. */
  packageName: string;
}

export const UploadapkInternalappsharingartifactsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadapkInternalappsharingartifactsRequest>;

export type UploadapkInternalappsharingartifactsResponse =
  InternalAppSharingArtifact;
export const UploadapkInternalappsharingartifactsResponse =
  /*@__PURE__*/ InternalAppSharingArtifact;

export type UploadapkInternalappsharingartifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java. */
export const uploadapkInternalappsharingartifacts: API.OperationMethod<
  UploadapkInternalappsharingartifactsRequest,
  UploadapkInternalappsharingartifactsResponse,
  UploadapkInternalappsharingartifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadapkInternalappsharingartifactsRequest,
  output: UploadapkInternalappsharingartifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadbundleInternalappsharingartifactsRequest {
  /** Package name of the app. */
  packageName: string;
}

export const UploadbundleInternalappsharingartifactsRequest =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UploadbundleInternalappsharingartifactsRequest>;

export type UploadbundleInternalappsharingartifactsResponse =
  InternalAppSharingArtifact;
export const UploadbundleInternalappsharingartifactsResponse =
  /*@__PURE__*/ InternalAppSharingArtifact;

export type UploadbundleInternalappsharingartifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java. */
export const uploadbundleInternalappsharingartifacts: API.OperationMethod<
  UploadbundleInternalappsharingartifactsRequest,
  UploadbundleInternalappsharingartifactsResponse,
  UploadbundleInternalappsharingartifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadbundleInternalappsharingartifactsRequest,
  output: UploadbundleInternalappsharingartifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchgetOrdersRequest {
  /** Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Required. The list of order IDs to retrieve order details for. There must be between 1 and 1000 (inclusive) order IDs per request. If any order ID is not found or does not match the provided package, the entire request will fail with an error. The order IDs must be distinct. */
  orderIds?: string[];
}

export const BatchgetOrdersRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  orderIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("orderIds"),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/orders:batchGet",
  }),
  svc,
) as unknown as Schema.Codec<BatchgetOrdersRequest>;

export type BatchgetOrdersResponse = BatchGetOrdersResponse;
export const BatchgetOrdersResponse = /*@__PURE__*/ BatchGetOrdersResponse;

export type BatchgetOrdersError = DefaultErrors | NotFound | Forbidden;

/** Get order details for a list of orders. */
export const batchgetOrders: API.OperationMethod<
  BatchgetOrdersRequest,
  BatchgetOrdersResponse,
  BatchgetOrdersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchgetOrdersRequest,
  output: BatchgetOrdersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrdersRequest {
  /** Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Required. The order ID provided to the user when the subscription or in-app order was purchased. */
  orderId: string;
}

export const GetOrdersRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  orderId: Schema.String.pipe(T.HttpPath("orderId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidpublisher/v3/applications/{packageName}/orders/{orderId}",
  }),
  svc,
) as unknown as Schema.Codec<GetOrdersRequest>;

export type GetOrdersResponse = Order;
export const GetOrdersResponse = /*@__PURE__*/ Order;

export type GetOrdersError = DefaultErrors | NotFound | Forbidden;

/** Get order details for a single order. */
export const getOrders: API.OperationMethod<
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrdersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrdersRequest,
  output: GetOrdersResponse,
  errors: [NotFound, Forbidden],
}));

export interface RefundOrdersRequest {
  /** The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). */
  packageName: string;
  /** Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional). */
  revoke?: boolean;
  /** The order ID provided to the user when the subscription or in-app order was purchased. */
  orderId: string;
}

export const RefundOrdersRequest = /*@__PURE__*/ Schema.Struct({
  packageName: Schema.String.pipe(T.HttpPath("packageName")),
  revoke: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revoke")),
  orderId: Schema.String.pipe(T.HttpPath("orderId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<RefundOrdersRequest>;

export interface RefundOrdersResponse {}
export const RefundOrdersResponse: Schema.Codec<RefundOrdersResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<RefundOrdersResponse>;

export type RefundOrdersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded. */
export const refundOrders: API.OperationMethod<
  RefundOrdersRequest,
  RefundOrdersResponse,
  RefundOrdersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RefundOrdersRequest,
  output: RefundOrdersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
