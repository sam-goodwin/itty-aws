// ==========================================================================
// Merchant API (merchantapi products_v1)
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
  version: "products_v1",
  rootUrl: "https://merchantapi.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ProductWeight {
  /** Required. The weight unit. Acceptable values are: * "`g`" * "`kg`" * "`oz`" * "`lb`" */
  unit?: string;
  /** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
  value?: number;
}

export const ProductWeight: Schema.Schema<ProductWeight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ProductWeight" });

export interface UnitPricingMeasure {
  /** The measure of an item. */
  value?: number;
  /** The unit of the measure. */
  unit?: string;
}

export const UnitPricingMeasure: Schema.Schema<UnitPricingMeasure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitPricingMeasure" });

export interface Price {
  /** The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros). */
  amountMicros?: string;
  /** The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217). */
  currencyCode?: string;
}

export const Price: Schema.Schema<Price> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountMicros: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Price" });

export interface FreeShippingThreshold {
  /** The minimum product price for the shipping cost to become free. Represented as a number. */
  priceThreshold?: Price;
  /** The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
}

export const FreeShippingThreshold: Schema.Schema<FreeShippingThreshold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priceThreshold: Schema.optional(Price),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "FreeShippingThreshold" });

export interface ShippingBusinessDaysConfig {
  /** The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
  /** Effective days of the week considered for the delivery time calculation. May not be empty. The more business days included the faster the delivery. Can be set through individual days (e.g. `MTWRF`), or day ranges (e.g. `Mon-Fri`). For more information about accepted formats, see [Shipping handling business days](https://support.google.com/merchants/answer/16072859). */
  businessDays?: string;
}

export const ShippingBusinessDaysConfig: Schema.Schema<ShippingBusinessDaysConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    businessDays: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingBusinessDaysConfig" });

export interface Mileage {
  /** The unit of the mileage. */
  unit?: "UNIT_UNSPECIFIED" | "MILES" | "KM" | (string & {});
  /** The distance value. */
  value?: string;
}

export const Mileage: Schema.Schema<Mileage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Mileage" });

export interface Interval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface LoyaltyProgram {
  /** The price for members of the given tier, that is, the instant discount price. Must be smaller or equal to the regular price. */
  price?: Price;
  /** The label of the shipping benefit. If the field has value, this offer has loyalty shipping benefit. If the field value isn't provided, the item is not eligible for loyalty shipping for the given loyalty tier. */
  shippingLabel?: string;
  /** The amount of loyalty points earned on a purchase. */
  loyaltyPoints?: string;
  /** The label of the loyalty program. This is an internal label that uniquely identifies the relationship between a business entity and a loyalty program entity. The label must be provided so that the system can associate the assets below (for example, price and points) with a business. The corresponding program must be linked to the Merchant Center account. */
  programLabel?: string;
  /** A date range during which the item is eligible for member price. If not specified, the member price is always applicable. The date range is represented by a pair of ISO 8601 dates separated by a space, comma, or slash. */
  memberPriceEffectiveDate?: Interval;
  /** The label of the tier within the loyalty program. Must match one of the labels within the program. */
  tierLabel?: string;
  /** The cashback that can be used for future purchases. */
  cashbackForFutureUse?: Price;
}

export const LoyaltyProgram: Schema.Schema<LoyaltyProgram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price: Schema.optional(Price),
    shippingLabel: Schema.optional(Schema.String),
    loyaltyPoints: Schema.optional(Schema.String),
    programLabel: Schema.optional(Schema.String),
    memberPriceEffectiveDate: Schema.optional(Interval),
    tierLabel: Schema.optional(Schema.String),
    cashbackForFutureUse: Schema.optional(Price),
  }).annotate({ identifier: "LoyaltyProgram" });

export interface ProductChange {
  /** The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  oldValue?: string;
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
  /** Countries that have the change (if applicable). Represented in the ISO 3166 format. */
  regionCode?: string;
  /** The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  newValue?: string;
}

export const ProductChange: Schema.Schema<ProductChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oldValue: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductChange" });

export interface AutomatedDiscounts {
  /** The price prior to the application of the first price reduction. Absent if the information about the prior price of the product is not available. */
  priorPrice?: Price;
  /** The price prior to the application of consecutive price reductions. Absent if the information about the prior price of the product is not available. */
  priorPriceProgressive?: Price;
  /** The current sale price for products with a price optimized using Google Automated Discounts (GAD). Absent if the information about the GAD_price of the product is not available. */
  gadPrice?: Price;
}

export const AutomatedDiscounts: Schema.Schema<AutomatedDiscounts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priorPrice: Schema.optional(Price),
    priorPriceProgressive: Schema.optional(Price),
    gadPrice: Schema.optional(Price),
  }).annotate({ identifier: "AutomatedDiscounts" });

export interface ProductDimension {
  /** Required. The dimension value represented as a number. The value can have a maximum precision of four decimal places. */
  value?: number;
  /** Required. The dimension units. Acceptable values are: * "`in`" * "`cm`" */
  unit?: string;
}

export const ProductDimension: Schema.Schema<ProductDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductDimension" });

export interface StructuredTitle {
  /** The title text Maximum length is 150 characters */
  content?: string;
  /** The digital source type. Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). */
  digitalSourceType?:
    | "DIGITAL_SOURCE_TYPE_UNSPECIFIED"
    | "TRAINED_ALGORITHMIC_MEDIA"
    | "DEFAULT"
    | (string & {});
}

export const StructuredTitle: Schema.Schema<StructuredTitle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    digitalSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StructuredTitle" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ItemLevelIssue {
  /** Whether the issue can be resolved by the business. */
  resolution?: string;
  /** A short issue description in English. */
  description?: string;
  /** The error code of the issue. */
  code?: string;
  /** How this issue affects serving of the offer. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "NOT_IMPACTED"
    | "DEMOTED"
    | "DISAPPROVED"
    | (string & {});
  /** The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** A detailed issue description in English. */
  detail?: string;
  /** List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer. */
  applicableCountries?: ReadonlyArray<string>;
  /** The reporting context the issue applies to. */
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
  /** The attribute's name, if the issue is caused by a single attribute. */
  attribute?: string;
}

export const ItemLevelIssue: Schema.Schema<ItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolution: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    applicableCountries: Schema.optional(Schema.Array(Schema.String)),
    reportingContext: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemLevelIssue" });

export interface ProductSustainabilityIncentive {
  /** Sustainability incentive program. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "EV_TAX_CREDIT"
    | "EV_PRICE_DISCOUNT"
    | (string & {});
  /** The percentage of the sale price that the incentive is applied to. */
  percentage?: number;
  /** The fixed amount of the incentive. */
  amount?: Price;
}

export const ProductSustainabilityIncentive: Schema.Schema<ProductSustainabilityIncentive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    percentage: Schema.optional(Schema.Number),
    amount: Schema.optional(Price),
  }).annotate({ identifier: "ProductSustainabilityIncentive" });

export interface Warranty {
  /** The warranty duration in months. */
  duration?: string;
  /** The warranty mileage. */
  mileage?: Mileage;
}

export const Warranty: Schema.Schema<Warranty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    mileage: Schema.optional(Mileage),
  }).annotate({ identifier: "Warranty" });

export interface UnitPricingBaseMeasure {
  /** The denominator of the unit price. */
  value?: string;
  /** The unit of the denominator. */
  unit?: string;
}

export const UnitPricingBaseMeasure: Schema.Schema<UnitPricingBaseMeasure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitPricingBaseMeasure" });

export interface StructuredDescription {
  /** The description text Maximum length is 5000 characters */
  content?: string;
  /** The digital source type. Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). */
  digitalSourceType?:
    | "DIGITAL_SOURCE_TYPE_UNSPECIFIED"
    | "TRAINED_ALGORITHMIC_MEDIA"
    | "DEFAULT"
    | (string & {});
}

export const StructuredDescription: Schema.Schema<StructuredDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    digitalSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StructuredDescription" });

export interface ProductMinimumOrderValue {
  /** The surface to which the minimum order value applies. Defaults to `ONLINE_LOCAL` if not configured. */
  surface?:
    | "SURFACE_UNSPECIFIED"
    | "ONLINE"
    | "LOCAL"
    | "ONLINE_LOCAL"
    | (string & {});
  /** Required. The minimum cart or basket value before the checkout is permitted. */
  price?: Price;
  /** A free-form description of the service class or delivery speed. This should match the service value set for the Shipping attribute. See service. */
  service?: string;
  /** Required. The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
}

export const ProductMinimumOrderValue: Schema.Schema<ProductMinimumOrderValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    surface: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    service: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductMinimumOrderValue" });

export interface ProductInstallment {
  /** The up-front down payment amount the buyer has to pay. */
  downpayment?: Price;
  /** The number of installments the buyer has to pay. */
  months?: string;
  /** The amount the buyer has to pay per month. */
  amount?: Price;
  /** Type of installment payments. */
  creditType?: "CREDIT_TYPE_UNSPECIFIED" | "FINANCE" | "LEASE" | (string & {});
  /** Optional. Annual percentage rate for `credit_type` finance */
  annualPercentageRate?: number;
  /** Optional. Total amount the buyer has to pay, including interest. */
  totalAmount?: Price;
}

export const ProductInstallment: Schema.Schema<ProductInstallment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downpayment: Schema.optional(Price),
    months: Schema.optional(Schema.String),
    amount: Schema.optional(Price),
    creditType: Schema.optional(Schema.String),
    annualPercentageRate: Schema.optional(Schema.Number),
    totalAmount: Schema.optional(Price),
  }).annotate({ identifier: "ProductInstallment" });

export interface SubscriptionCost {
  /** The amount the buyer has to pay per subscription period. */
  amount?: Price;
  /** The number of subscription periods the buyer has to pay. */
  periodLength?: string;
  /** The type of subscription period. Supported values are: * "`month`" * "`year`" * "`week`" */
  period?:
    | "SUBSCRIPTION_PERIOD_UNSPECIFIED"
    | "MONTH"
    | "YEAR"
    | "WEEK"
    | (string & {});
}

export const SubscriptionCost: Schema.Schema<SubscriptionCost> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.optional(Price),
    periodLength: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionCost" });

export interface HandlingCutoffTime {
  /** The handling cutoff time until which an order has to be placed to be processed in the same day. This is a string in format of HHMM (e.g. `1530`) for 3:30 PM. If not configured, the cutoff time will be defaulted to 8AM PST. */
  cutoffTime?: string;
  /** [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example 'Europe/Zurich'. If not set, the shipping destination timezone will be used. */
  cutoffTimezone?: string;
  /** This field only applies to same-day delivery. If true, prevents next-day delivery from being shown for this offer after the cutoff time. This field only applies to same-day delivery offers, for merchants who want to explicitly disable it. */
  disableDeliveryAfterCutoff?: boolean;
  /** The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which the handling cutoff time applies. */
  country?: string;
}

export const HandlingCutoffTime: Schema.Schema<HandlingCutoffTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cutoffTime: Schema.optional(Schema.String),
    cutoffTimezone: Schema.optional(Schema.String),
    disableDeliveryAfterCutoff: Schema.optional(Schema.Boolean),
    country: Schema.optional(Schema.String),
  }).annotate({ identifier: "HandlingCutoffTime" });

export interface ProductDetail {
  /** The section header used to group a set of product details. */
  sectionName?: string;
  /** The name of the product detail. */
  attributeName?: string;
  /** The value of the product detail. */
  attributeValue?: string;
}

export const ProductDetail: Schema.Schema<ProductDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionName: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
    attributeValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductDetail" });

export interface Shipping {
  /** The location where the shipping is applicable, represented by a location group name. */
  locationGroupName?: string;
  /** A free-form description of the service class or delivery speed. */
  service?: string;
  /** The numeric ID of a location that the shipping rate applies to as defined in the [AdWords API](https://developers.google.com/adwords/api/docs/appendix/geotargeting). */
  locationId?: string;
  /** The handling cutoff time until which an order has to be placed to be processed in the same day. This is a string in format of HHMM (e.g. `1530`) for 3:30 PM. If not configured, the cutoff time will be defaulted to 8AM PST and `handling_cutoff_timezone` will be ignored. */
  handlingCutoffTime?: string;
  /** Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minHandlingTime is optional if maxHandlingTime is present. */
  maxHandlingTime?: string;
  /** [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example `Europe/Zurich`. This field only applies if `handling_cutoff_time` is set. If `handling_cutoff_time` is set but this field is not set, the shipping destination timezone will be used. If both fields are not set, the handling cutoff time will default to 8AM PST. */
  handlingCutoffTimezone?: string;
  /** The geographic region to which a shipping rate applies. See [region](https://support.google.com/merchants/answer/6324484) for more information. */
  region?: string;
  /** Maximum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minTransitTime is optional if maxTransitTime is present. */
  maxTransitTime?: string;
  /** Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it is not required if maxHandlingTime is present. */
  minHandlingTime?: string;
  /** The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. */
  postalCode?: string;
  /** Minimum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it is not required if maxTransitTime is present. */
  minTransitTime?: string;
  /** Fixed shipping price, represented as a number. */
  price?: Price;
  /** The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
  /** Optional. The label of the [loyalty tier](https://support.google.com/merchants/answer/6324484) within the loyalty program. Must match one of the tiers set in the loyalty_programs. When set (in combination with [loyalty_program_label](https://support.google.com/merchants/answer/6324484)), this shipping option is only applicable to loyalty program members of the specified tier. */
  loyaltyTierLabel?: string;
  /** Optional. The label of the [loyalty program](https://support.google.com/merchants/answer/6324484). Must match one of the program labels set in loyalty_programs. When set (in combination with [loyalty_tier_label](https://support.google.com/merchants/answer/6324484)), this shipping option is only applicable to loyalty program members of the specified tier. */
  loyaltyProgramLabel?: string;
}

export const Shipping: Schema.Schema<Shipping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationGroupName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    handlingCutoffTime: Schema.optional(Schema.String),
    maxHandlingTime: Schema.optional(Schema.String),
    handlingCutoffTimezone: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    maxTransitTime: Schema.optional(Schema.String),
    minHandlingTime: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    minTransitTime: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    country: Schema.optional(Schema.String),
    loyaltyTierLabel: Schema.optional(Schema.String),
    loyaltyProgramLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "Shipping" });

export interface FuelConsumption {
  /** The fuel consumption value. */
  value?: number;
  /** The unit of the fuel consumption. */
  unit?: "UNIT_UNSPECIFIED" | "LPER100KM" | "KGPER100KM" | (string & {});
}

export const FuelConsumption: Schema.Schema<FuelConsumption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "FuelConsumption" });

export interface Co2Emissions {
  /** The unit of the co2 emission. */
  unit?: "UNIT_UNSPECIFIED" | "GPERKM" | (string & {});
  /** The co2 emission value. */
  value?: string;
}

export const Co2Emissions: Schema.Schema<Co2Emissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Co2Emissions" });

export interface ShippingWeight {
  /** The unit of value. */
  unit?: string;
  /** The weight of the product used to calculate the shipping cost of the item. */
  value?: number;
}

export const ShippingWeight: Schema.Schema<ShippingWeight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ShippingWeight" });

export interface LoyaltyPoints {
  /** Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. */
  name?: string;
  /** The retailer's loyalty points in absolute value. */
  pointsValue?: string;
  /** The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. */
  ratio?: number;
}

export const LoyaltyPoints: Schema.Schema<LoyaltyPoints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pointsValue: Schema.optional(Schema.String),
    ratio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LoyaltyPoints" });

export interface ShippingDimension {
  /** The dimension of the product used to calculate the shipping cost of the item. */
  value?: number;
  /** The unit of value. */
  unit?: string;
}

export const ShippingDimension: Schema.Schema<ShippingDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShippingDimension" });

export interface EnergyConsumption {
  /** The energy consumption value. */
  value?: number;
  /** The unit of the energy consumption. */
  unit?: "UNIT_UNSPECIFIED" | "KWHPER100KM" | (string & {});
}

export const EnergyConsumption: Schema.Schema<EnergyConsumption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnergyConsumption" });

export interface ProductCertification {
  /** The certification code. Maximum length is 2000 characters. */
  certificationCode?: string;
  /** The certification authority. */
  certificationAuthority?:
    | "CERTIFICATION_AUTHORITY_UNSPECIFIED"
    | "ADEME"
    | "BMWK"
    | "EPA"
    | "EC"
    | (string & {});
  /** The certification value (also known as class, level or grade), for example "A+", "C", "gold". Maximum length is 2000 characters. */
  certificationValue?: string;
  /** The name of the certification. */
  certificationName?:
    | "CERTIFICATION_NAME_UNSPECIFIED"
    | "ENERGY_STAR"
    | "ENERGY_STAR_MOST_EFFICIENT"
    | "EPREL"
    | "EU_ECOLABEL"
    | "VEHICLE_ENERGY_EFFICIENCY"
    | "VEHICLE_ENERGY_EFFICIENCY_DISCHARGED_BATTERY"
    | (string & {});
}

export const ProductCertification: Schema.Schema<ProductCertification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificationCode: Schema.optional(Schema.String),
    certificationAuthority: Schema.optional(Schema.String),
    certificationValue: Schema.optional(Schema.String),
    certificationName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductCertification" });

export interface CarrierShipping {
  /** Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. Both maxHandlingTime and fixedMaxTransitTime or carrierTransitTime are required if providing shipping speeds. */
  maxHandlingTime?: string;
  /** A percentual adjustment on the carrier price. Can be either positive or negative. Cannot be zero. Requires `carrier_price` to be present. Cannot be set together with flatPrice and carrierPriceFlatAdjustment. */
  carrierPricePercentageAdjustment?: number;
  /** The geographic region to which a shipping rate applies. See [region](https://support.google.com/merchants/answer/6324484) for more information. */
  region?: string;
  /** Fixed shipping price, represented as a number with currency. Cannot be set together with carrierPrice or its adjustments (carrierPriceFlatAdjustment, carrierPricePercentageAdjustment). */
  flatPrice?: Price;
  /** Minimum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. fixedMinTransitTime can only be set if fixedMaxTransitTime is set. Cannot be set if carrierTransitTime is present. */
  fixedMinTransitTime?: string;
  /** Maximum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. Needs to be provided together with maxHandlingTime. Cannot be set if carrierTransitTime is present. */
  fixedMaxTransitTime?: string;
  /** Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. minHandlingTime can only be set if maxHandlingTime is also set. */
  minHandlingTime?: string;
  /** The postal code range that the shipping rate applies to, represented by a postal code (eg. `94043`), a postal code prefix followed by a * wildcard (eg. `94*`), a range between two postal codes (eg. `94043-98033`) or two postal code prefixes of equal length (eg. `94*-98*`). */
  postalCode?: string;
  /** The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. */
  country?: string;
  /** Selected carrier to calculate the shipping price from. Select a carrier from the [available carriers list](https://support.google.com/merchants/answer/15449142#Supported), for example `AUSTRALIA_POST_REGULAR`. Price will be calculated by this selected carrier, the location expressed in originPostalCode, along with the user location to determine the accurate shipping price. Carrier is represented by a carrier service name or a carrier service ID. Cannot be set together with flatPrice. */
  carrierPrice?:
    | "CARRIER_PRICE_OPTION_UNSPECIFIED"
    | "AUSTRALIA_POST_REGULAR"
    | "AUSTRALIA_POST_EXPRESS"
    | "AUSTRALIA_POST_REGULAR_S"
    | "AUSTRALIA_POST_REGULAR_M"
    | "AUSTRALIA_POST_REGULAR_L"
    | "AUSTRALIA_POST_REGULAR_XL"
    | "AUSTRALIA_POST_EXPRESS_S"
    | "AUSTRALIA_POST_EXPRESS_M"
    | "AUSTRALIA_POST_EXPRESS_L"
    | "AUSTRALIA_POST_EXPRESS_XL"
    | "TNT_ROAD_EXPRESS"
    | "TNT_OVERNIGHT_EXPRESS"
    | "TOLL_ROAD_DELIVERY"
    | "TOLL_OVERNIGHT_PRIORITY"
    | "DHL_PAKET"
    | "DHL_PACKCHEN"
    | "DPD_EXPRESS_12"
    | "DPD_EXPRESS"
    | "DPD_CLASSIC_PARCEL"
    | "HERMES_PACKCHEN"
    | "HERMES_PAKETKLASSE_S"
    | "HERMES_PAKETKLASSE_M"
    | "HERMES_PAKETKLASSE_L"
    | "UPS_EXPRESS"
    | "UPS_EXPRESS_SAVER"
    | "UPS_EXPRESS_STANDARD"
    | "DHL_EXPRESS"
    | "DHL_EXPRESS_12"
    | "DPD_NEXT_DAY"
    | "DPD_STANDARD_NEXT_DAY"
    | "DPD_STANDARD_TWO_DAY"
    | "RMG_1ST_CLASS_SMALL"
    | "RMG_1ST_CLASS_MEDIUM"
    | "RMG_2ND_CLASS_SMALL"
    | "RMG_2ND_CLASS_MEDIUM"
    | "TNT_EXPRESS"
    | "TNT_EXPRESS_10"
    | "TNT_EXPRESS_12"
    | "YODEL_B2C_48HR"
    | "YODEL_B2C_72HR"
    | "YODEL_B2C_PACKET"
    | "FEDEX_GROUND"
    | "FEDEX_HOME_DELIVERY"
    | "FEDEX_EXPRESS_SAVER"
    | "FEDEX_FIRST_OVERNIGHT"
    | "FEDEX_PRIORITY_OVERNIGHT"
    | "FEDEX_STANDARD_OVERNIGHT"
    | "FEDEX_2DAY"
    | "UPS_STANDARD"
    | "UPS_2ND_DAY_AIR"
    | "UPS_2ND_DAY_AM"
    | "UPS_3_DAY_SELECT"
    | "UPS_GROUND"
    | "UPS_NEXT_DAY_AIR"
    | "UPS_NEXT_DAY_AIR_EARLY_AM"
    | "UPS_NEXT_DAY_AIR_SAVER"
    | "USPS_PRIORITY_MAIL_EXPRESS"
    | "USPS_MEDIA_MAIL"
    | "USPS_GROUND_ADVANTAGE_RETAIL"
    | "USPS_PRIORITY_MAIL"
    | "USPS_GROUND_ADVANTAGE_COMMERCIAL"
    | (string & {});
  /** Selected carrier to calculate the shipping speed from. Select a carrier from the [available carriers list](https://support.google.com/merchants/answer/15449142#Supported), for example `AUSTRALIA_POST_REGULAR`. Speed will be calculated by this selected carrier, the location expressed in originPostalCode, along with the user location to determine the accurate delivery speed. Carrier is represented by a carrier service name or a carrier service ID. Cannot be set together with fixedMaxTransitTime or fixedMinTransitTime. */
  carrierTransitTime?:
    | "CARRIER_TRANSIT_TIME_OPTION_UNSPECIFIED"
    | "DHL_PAKET"
    | "DHL_PACKCHEN"
    | "DHL_EXPRESSEASY"
    | "DPD_EXPRESS"
    | "DPD_CLASSIC_PARCEL"
    | "HERMES_HAUSTUR"
    | "HERMES_PAKETSHOP"
    | "GLS_BUSINESS"
    | "GLS_EXPRESS"
    | "GLS_PRIVATE"
    | "COLISSIMO_DOMICILE"
    | "DHL_EXPRESS_12AM"
    | "DHL_EXPRESS_9AM"
    | "GEODIS_EXPRESS"
    | "GEODIS_PACK_30"
    | "GEODIS_SAME_DAY"
    | "GEODIS_TOP_24"
    | "TNT_ESSENTIEL_24H"
    | "TNT_ESSENTIEL_FLEXIBILITE"
    | "FEDEX_GROUND"
    | "FEDEX_HOME_DELIVERY"
    | "FEDEX_EXPRESS_SAVER"
    | "FEDEX_FIRST_OVERNIGHT"
    | "FEDEX_PRIORITY_OVERNIGHT"
    | "FEDEX_STANDARD_OVERNIGHT"
    | "FEDEX_2DAY"
    | "UPS_2ND_DAY_AIR"
    | "UPS_2ND_DAY_AM"
    | "UPS_3_DAY_SELECT"
    | "UPS_GROUND"
    | "UPS_NEXT_DAY_AIR"
    | "UPS_NEXT_DAY_AIR_EARLY_AM"
    | "UPS_NEXT_DAY_AIR_SAVER"
    | "USPS_PRIORITY_MAIL_EXPRESS"
    | "USPS_MEDIA_MAIL"
    | "USPS_GROUND_ADVANTAGE_RETAIL"
    | "USPS_PRIORITY_MAIL"
    | "USPS_GROUND_ADVANTAGE_COMMERCIAL"
    | "USPS_FIRST_CLASS_MAIL"
    | (string & {});
  /** The source location postal code from which this offer ships. Represented only by a full-length postal code. */
  originPostalCode?: string;
  /** A flat adjustment on the carrier price. Can be either positive or negative. Cannot be zero. Requires `carrier_price` to be present. Cannot be set together with flatPrice and carrierPricePercentageAdjustment. */
  carrierPriceFlatAdjustment?: Price;
}

export const CarrierShipping: Schema.Schema<CarrierShipping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxHandlingTime: Schema.optional(Schema.String),
    carrierPricePercentageAdjustment: Schema.optional(Schema.Number),
    region: Schema.optional(Schema.String),
    flatPrice: Schema.optional(Price),
    fixedMinTransitTime: Schema.optional(Schema.String),
    fixedMaxTransitTime: Schema.optional(Schema.String),
    minHandlingTime: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    carrierPrice: Schema.optional(Schema.String),
    carrierTransitTime: Schema.optional(Schema.String),
    originPostalCode: Schema.optional(Schema.String),
    carrierPriceFlatAdjustment: Schema.optional(Price),
  }).annotate({ identifier: "CarrierShipping" });

export interface CloudExportAdditionalProperties {
  /** Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters. */
  textValue?: ReadonlyArray<string>;
  /** Integer values of the given property. For example, 1080 for a TV product's Screen Resolution. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. */
  intValue?: ReadonlyArray<string>;
  /** Maximum float value of the given property. For example for a TV product 100.00. */
  maxValue?: number;
  /** Minimum float value of the given property. For example for a TV product 1.00. */
  minValue?: number;
  /** Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD. */
  boolValue?: boolean;
  /** Float values of the given property. For example for a TV product 1.2345. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. */
  floatValue?: ReadonlyArray<number>;
  /** Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters. */
  propertyName?: string;
  /** Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256B. */
  unitCode?: string;
}

export const CloudExportAdditionalProperties: Schema.Schema<CloudExportAdditionalProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textValue: Schema.optional(Schema.Array(Schema.String)),
    intValue: Schema.optional(Schema.Array(Schema.String)),
    maxValue: Schema.optional(Schema.Number),
    minValue: Schema.optional(Schema.Number),
    boolValue: Schema.optional(Schema.Boolean),
    floatValue: Schema.optional(Schema.Array(Schema.Number)),
    propertyName: Schema.optional(Schema.String),
    unitCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudExportAdditionalProperties" });

export interface ProductAttributes {
  /** The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive). */
  productWeight?: ProductWeight;
  /** The list of sustainability incentive programs. */
  sustainabilityIncentives?: ReadonlyArray<ProductSustainabilityIncentive>;
  /** [Custom label 3](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. */
  customLabel3?: string;
  /** The [warranty](https://support.google.com/google-ads/answer/15957626) of the vehicle. */
  warranty?: Warranty;
  /** The preference of the denominator of the unit price. */
  unitPricingBaseMeasure?: UnitPricingBaseMeasure;
  /** Structured description, for algorithmically (AI)-generated descriptions. */
  structuredDescription?: StructuredDescription;
  /** The date the vehicle was first registered. Format: `YYYY-MM`. See the [Date first registered](https://support.google.com/google-ads/answer/14546138) for more information. */
  dateFirstRegistered?: string;
  /** The item's [pattern](https://support.google.com/merchants/answer/6324483). For example, polka dots. */
  pattern?: string;
  /** The MSRP (Manufacturer Suggested Retail Price) for the vehicle in its current configuration. See the [Vehicle MSRP](https://support.google.com/google-ads/answer/14154171) for more information. */
  vehicleMsrp?: Price;
  /** [Link template](https://support.google.com/merchants/answer/13870216) for business hosted local storefront optimized for mobile devices. */
  mobileLinkTemplate?: string;
  /** URL of the 3D image of the item. See the [Help Center article](https://support.google.com/merchants/answer/13674896) for more information. */
  virtualModelLink?: string;
  /** URL for the canonical version of your item's landing page. */
  canonicalLink?: string;
  /** The [Trim](https://support.google.com/google-ads/answer/14154176) of the vehicle model, such as `S`, `SV`, `SL` and others. */
  trim?: string;
  /** Advertised sale price of the item. */
  salePrice?: Price;
  /** [Link template](https://support.google.com/merchants/answer/13871172) for business hosted local storefront. */
  linkTemplate?: string;
  /** The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. */
  maxEnergyEfficiencyClass?:
    | "ENERGY_EFFICIENCY_CLASS_UNSPECIFIED"
    | "APPP"
    | "APP"
    | "AP"
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | (string & {});
  /** The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. */
  energyEfficiencyClass?:
    | "ENERGY_EFFICIENCY_CLASS_UNSPECIFIED"
    | "APPP"
    | "APP"
    | "AP"
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | (string & {});
  /** Description of the item. */
  description?: string;
  /** The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. For more information, see [Included destination](https://support.google.com/merchants/answer/7501026). Note: We recommend setting destinations on datasources level for most use cases. Use this field within products to only setup exceptions. */
  includedDestinations?: ReadonlyArray<
    | "DESTINATION_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LOCAL_LISTINGS"
    | "YOUTUBE_SHOPPING"
    | "YOUTUBE_SHOPPING_CHECKOUT"
    | "YOUTUBE_AFFILIATE"
    | "FREE_VEHICLE_LISTINGS"
    | "VEHICLE_ADS"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | (string & {})
  >;
  /** Target [age group](https://support.google.com/merchants/answer/6324463) of the item. */
  ageGroup?:
    | "AGE_GROUP_UNSPECIFIED"
    | "ADULT"
    | "KIDS"
    | "TODDLER"
    | "INFANT"
    | "NEWBORN"
    | (string & {});
  /** The [minimum value](https://support.google.com/merchants/answer/16989009) in the cart before a customer can initiate checkout. Supports multiple minimum order values. Different minimum order values can be specified per country, service and surface. Maximum entries: 100. */
  minimumOrderValues?: ReadonlyArray<ProductMinimumOrderValue>;
  /** Number and amount of installments to pay for an item. */
  installment?: ProductInstallment;
  /** URL of an image of the item. */
  imageLink?: string;
  /** Item store pickup timeline. For more information, see [Pickup SLA](https://support.google.com/merchants/answer/14635400). */
  pickupSla?:
    | "PICKUP_SLA_UNSPECIFIED"
    | "SAME_DAY"
    | "NEXT_DAY"
    | "TWO_DAY"
    | "THREE_DAY"
    | "FOUR_DAY"
    | "FIVE_DAY"
    | "SIX_DAY"
    | "MULTI_WEEK"
    | (string & {});
  /** Advertiser-specified recommendations. For more information, see [Display ads attribute specification](https://support.google.com/merchants/answer/6069387). */
  displayAdsSimilarIds?: ReadonlyArray<string>;
  /** Number of periods (weeks, months or years) and amount of payment per period for an item with an associated subscription contract. */
  subscriptionCost?: SubscriptionCost;
  /** Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value, see [Size](https://support.google.com/merchants/answer/6324492). */
  size?: string;
  /** Whether the item is a business-defined sub-API. A [sub-API] (https://support.google.com/merchants/answer/6324449) is a custom grouping of different products sold by a business for a single price. */
  isBundle?: boolean;
  /** Publication of this item will be temporarily [paused](https://support.google.com/merchants/answer/11909930). */
  pause?: "PAUSE_UNSPECIFIED" | "ADS" | "ALL" | (string & {});
  /** Price of the item. */
  price?: Price;
  /** Categories of the item (formatted as in [product data specification](https://support.google.com/merchants/answer/7052112#product_category)). */
  productTypes?: ReadonlyArray<string>;
  /** The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed. */
  shippingHandlingBusinessDays?: ReadonlyArray<ShippingBusinessDaysConfig>;
  /** The [engine](https://support.google.com/google-ads/answer/14156068) type of the vehicle. */
  engine?:
    | "ENGINE_TYPE_UNSPECIFIED"
    | "GASOLINE"
    | "DIESEL"
    | "ELECTRIC"
    | "HYBRID"
    | "PLUG_IN_HYBRID"
    | "NATURAL_GAS"
    | "LPG"
    | "METHANE"
    | "OTHER"
    | (string & {});
  /** The [Vehicle Identification Number (VIN)](https://support.google.com/google-ads/answer/14154510) of the vehicle. */
  vin?: string;
  /** Additional URLs of images of the item. */
  additionalImageLinks?: ReadonlyArray<string>;
  /** The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center). For more information, see [Excluded destination](https://support.google.com/merchants/answer/6324486). Note: We recommend setting destinations on datasources level for most use cases. Use this field within products to only setup exceptions. */
  excludedDestinations?: ReadonlyArray<
    | "DESTINATION_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LOCAL_LISTINGS"
    | "YOUTUBE_SHOPPING"
    | "YOUTUBE_SHOPPING_CHECKOUT"
    | "YOUTUBE_AFFILIATE"
    | "FREE_VEHICLE_LISTINGS"
    | "VEHICLE_ADS"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | (string & {})
  >;
  /** The handling cutoff times for shipping. */
  handlingCutoffTimes?: ReadonlyArray<HandlingCutoffTime>;
  /** The unique ID of a promotion. */
  promotionIds?: ReadonlyArray<string>;
  /** Set to true if the item is targeted towards adults. */
  adult?: boolean;
  /** URL directly to your item's landing page for dynamic remarketing campaigns. */
  displayAdsLink?: string;
  /** Optional. A list of video URLs for the item. Use this attribute to provide more visuals for your product beyond your image attributes. See the [Help Center article](https://support.google.com/merchants/answer/15216925) for more information. */
  videoLinks?: ReadonlyArray<string>;
  /** The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. */
  disclosureDate?: string;
  /** Technical specification or additional product details. */
  productDetails?: ReadonlyArray<ProductDetail>;
  /** The cut of the item. It can be used to represent combined size types for apparel items. Maximum two of size types can be provided, see [Size type](https://support.google.com/merchants/answer/6324497). */
  sizeTypes?: ReadonlyArray<
    | "SIZE_TYPE_UNSPECIFIED"
    | "REGULAR"
    | "PETITE"
    | "MATERNITY"
    | "BIG"
    | "TALL"
    | "PLUS"
    | (string & {})
  >;
  /** [Custom label 0](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. */
  customLabel0?: string;
  /** Shipping rules. */
  shipping?: ReadonlyArray<Shipping>;
  /** The [material](https://support.google.com/merchants/answer/6324410) of which the item is made. For example, "Leather" or "Cotton". */
  material?: string;
  /** The [fuel consumption](https://support.google.com/google-ads/answer/14543580) of the vehicle. */
  fuelConsumption?: FuelConsumption;
  /** The shipping label of the product, used to group products in account-level shipping rules. Max. 100 characters. For more information, see [Shipping label](https://support.google.com/merchants/answer/6324504). */
  shippingLabel?: string;
  /** Title of an item for dynamic remarketing campaigns. */
  displayAdsTitle?: string;
  /** [Condition](https://support.google.com/merchants/answer/6324469) or state of the item. */
  condition?:
    | "CONDITION_UNSPECIFIED"
    | "NEW"
    | "USED"
    | "REFURBISHED"
    | (string & {});
  /** The [co2 emission](https://support.google.com/google-ads/answer/14546146) of the vehicle. */
  co2Emissions?: Co2Emissions;
  /** [Custom label 2](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. */
  customLabel2?: string;
  /** The business days during which orders are in transit. If not provided, Monday to Friday business days will be assumed. */
  shippingTransitBusinessDays?: ReadonlyArray<ShippingBusinessDaysConfig>;
  /** List of country codes [(ISO 3166-1 alpha-2)](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in data source settings. */
  shoppingAdsExcludedCountries?: ReadonlyArray<string>;
  /** Weight of the item for shipping. */
  shippingWeight?: ShippingWeight;
  /** The [price type](https://support.google.com/google-ads/answer/14592783) of the vehicle. */
  vehiclePriceType?:
    | "VEHICLE_PRICE_TYPE_UNSPECIFIED"
    | "ALL_IN_PRICE"
    | "DRIVE_AWAY_PRICE"
    | "ESTIMATED_DRIVE_AWAY_PRICE"
    | "EXCLUDING_GOVERNMENT_CHARGES_PRICE"
    | "VEHICLE_BASE_PRICE"
    | (string & {});
  /** Target [gender](https://support.google.com/merchants/answer/6324479) of the item. */
  gender?: "GENDER_UNSPECIFIED" | "MALE" | "FEMALE" | "UNISEX" | (string & {});
  /** Loyalty points that users receive after purchasing the item. Japan only. */
  loyaltyPoints?: LoyaltyPoints;
  /** The measure and dimension of an item. */
  unitPricingMeasure?: UnitPricingMeasure;
  /** Whether the vehicle is OEM [certified pre-owned](https://support.google.com/google-ads/answer/14156475). */
  certifiedPreOwned?: boolean;
  /** Maximum retail price (MRP) of the item. Applicable to India only. */
  maximumRetailPrice?: Price;
  /** Length of the item for shipping. */
  shippingLength?: ShippingDimension;
  /** Date range during which the item is on sale, see [product data specification](https://support.google.com/merchants/answer/7052112#price_and_availability). */
  salePriceEffectiveDate?: Interval;
  /** Height of the item for shipping. */
  shippingHeight?: ShippingDimension;
  /** [Custom label 1](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. */
  customLabel1?: string;
  /** Whether the vehicle is sold with mandatory inspection and maintenance performed before delivery. See the [Vehicle mandatory inspection included](https://support.google.com/google-ads/answer/15956630) for more information.` */
  vehicleMandatoryInspectionIncluded?: boolean;
  /** The fuel consumption of the vehicle when the hybrid battery is discharged. See the [Help Center article](https://support.google.com/google-ads/answer/15162033) for more information. */
  fuelConsumptionDischargedBattery?: FuelConsumption;
  /** The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productLength?: ProductDimension;
  /** The [energy consumption](https://support.google.com/google-ads/answer/14546149) of the vehicle. */
  energyConsumption?: EnergyConsumption;
  /** [Color](https://support.google.com/merchants/answer/6324487) of the item. For example, "red". */
  color?: string;
  /** System in which the size is specified. Recommended for apparel items. For more information, see [Size system](https://support.google.com/merchants/answer/6324502). */
  sizeSystem?:
    | "SIZE_SYSTEM_UNSPECIFIED"
    | "AU"
    | "BR"
    | "CN"
    | "DE"
    | "EU"
    | "FR"
    | "IT"
    | "JP"
    | "MEX"
    | "UK"
    | "US"
    | (string & {});
  /** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. For more information, see [Display ads attribute](https://support.google.com/merchants/answer/6069387). */
  adsGrouping?: string;
  /** A list of loyalty program information that is used to surface loyalty benefits (for example, better pricing, points, etc) to the user of this item. */
  loyaltyPrograms?: ReadonlyArray<LoyaltyProgram>;
  /** Conditions to be met for a product to have free shipping. */
  freeShippingThreshold?: ReadonlyArray<FreeShippingThreshold>;
  /** Product Certifications, for example for energy efficiency labeling of products recorded in the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. See the [Help Center](https://support.google.com/merchants/answer/13528839) article for more information. */
  certifications?: ReadonlyArray<ProductCertification>;
  /** The [Year](https://support.google.com/google-ads/answer/14152816) of the vehicle model. */
  year?: string;
  /** URL directly linking to your item's page on your online store. */
  link?: string;
  /** The return label of the product, used to group products in account-level return policies. Max. 100 characters. For more information, see [Return policy label](https://support.google.com/merchants/answer/9445425). */
  returnPolicyLabel?: string;
  /** Allows advertisers to override the item URL when the product is shown within the context of Product ads. */
  adsRedirect?: string;
  /** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
  googleProductCategory?: string;
  /** Title of the item. */
  title?: string;
  /** The [body style](https://support.google.com/google-ads/answer/14157085) of the vehicle. */
  bodyStyle?:
    | "VEHICLE_BODY_STYLE_UNSPECIFIED"
    | "ATV_SPORT"
    | "ATV_TOURING"
    | "ATV_UTILITY"
    | "ATV_YOUTH"
    | "CITY_CAR"
    | "CLASS_A_MOTORHOME"
    | "CLASS_B_MOTORHOME"
    | "CLASS_C_MOTORHOME"
    | "COMPACT_SUV"
    | "CONVERTIBLE"
    | "COUPE"
    | "CROSSOVER"
    | "FIFTH_WHEEL"
    | "FULL_SIZE_VAN"
    | "HATCHBACK"
    | "LIMOUSINE"
    | "MINIVAN"
    | "NOTCHBACK"
    | "POP_UP_CAMPER"
    | "SEDAN"
    | "SIDE_BY_SIDE"
    | "STATION_WAGON"
    | "SUV"
    | "TRAVEL_TRAILER"
    | "TRUCK"
    | "TRUCK_CAMPER"
    | "UTE"
    | "UTV_RECREATIONAL_UTILITY"
    | "UTV_SPORT"
    | "UTV_UTILITY"
    | "UTV_YOUTH"
    | (string & {});
  /** Rules for carrier-based shipping. */
  carrierShipping?: ReadonlyArray<CarrierShipping>;
  /** The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. */
  minEnergyEfficiencyClass?:
    | "ENERGY_EFFICIENCY_CLASS_UNSPECIFIED"
    | "APPP"
    | "APP"
    | "AP"
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | (string & {});
  /** Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account. */
  externalSellerId?: string;
  /** Bullet points describing the most relevant [product highlights](https://support.google.com/merchants/answer/9216100). */
  productHighlights?: ReadonlyArray<string>;
  /** Additional URLs of lifestyle images of the item, used to explicitly identify images that showcase your item in a real-world context. See the [Help Center article](https://support.google.com/merchants/answer/9103186) for more information. */
  lifestyleImageLinks?: ReadonlyArray<string>;
  /** Similar to ads_grouping, but only works on CPC. */
  adsLabels?: ReadonlyArray<string>;
  /** Set this value to false when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Defaults to true, if not provided. */
  identifierExists?: boolean;
  /** Maximal product handling time (in business days). */
  maxHandlingTime?: string;
  /** The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productHeight?: ProductDimension;
  /** The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). */
  productWidth?: ProductDimension;
  /** Offer margin for dynamic remarketing campaigns. For more information, see [Display ads attribute](https://support.google.com/merchants/answer/6069387). */
  displayAdsValue?: number;
  /** The [electric range](https://support.google.com/google-ads/answer/15162232) of the vehicle in miles/kms. */
  electricRange?: Mileage;
  /** The miscellaneous expenses like insurance and registration fees of the vehicle. See the [Vehicle expenses](https://support.google.com/google-ads/answer/15957154) for more information. */
  vehicleExpenses?: Price;
  /** An identifier for an item for dynamic remarketing campaigns. */
  displayAdsId?: string;
  /** The all-in advertised price for a vehicle, which includes costs for the following – any accessories attached to the vehicle, environmental levies, extra warranty, fuel, freight, pre-delivery inspection (PDI), dealer fees for handling licensing, provincial regulatory fees, miscellaneous dealer charges for security etching and nitrogen tire fill, and factory-to-customer or dealer-to-customer discounts or incentives. See the [Vehicle all-in price](https://support.google.com/google-ads/answer/14156981) for more information. */
  vehicleAllInPrice?: Price;
  /** Shared identifier for all variants of the same product. */
  itemGroupId?: string;
  /** Minimal product handling time (in business days). */
  minHandlingTime?: string;
  /** The transit time label of the product, used to group product in account-level transit time tables. */
  transitTimeLabel?: string;
  /** The [Model](https://support.google.com/google-ads/answer/14154511) of the vehicle, such as `LX`, `EX`, and others. */
  model?: string;
  /** Width of the item for shipping. */
  shippingWidth?: ShippingDimension;
  /** The number of miles/kms on the vehicle. See the [Mileage](https://support.google.com/google-ads/answer/14156166) for more information. */
  mileage?: Mileage;
  /** Structured title, for algorithmically (AI)-generated titles. */
  structuredTitle?: StructuredTitle;
  /** Extra fields to export to the Cloud Retail program. */
  cloudExportAdditionalProperties?: ReadonlyArray<CloudExportAdditionalProperties>;
  /** The [emission standard](https://support.google.com/google-ads/answer/14869021) of the vehicle. */
  emissionsStandard?:
    | "EMISSIONS_STANDARD_UNSPECIFIED"
    | "ZERO_EMISSIONS"
    | "EURO1"
    | "EURO2"
    | "EURO3"
    | "EURO4"
    | "EURO5"
    | "EURO5B"
    | "EURO6"
    | "EURO6C"
    | "EURO6D"
    | "EURO6D_TEMP"
    | "EURO6E"
    | (string & {});
  /** Manufacturer Part Number ([MPN](https://support.google.com/merchants/answer/6324482)) of the item. */
  mpn?: string;
  /** The number of identical products in a business-defined multipack. */
  multipack?: string;
  /** The [pickup](https://support.google.com/merchants/answer/14634021) option for the item. */
  pickupMethod?:
    | "PICKUP_METHOD_UNSPECIFIED"
    | "NOT_SUPPORTED"
    | "BUY"
    | "RESERVE"
    | "SHIP_TO_STORE"
    | (string & {});
  /** A safeguard in the [automated discounts] (https://support.google.com/merchants/answer/10295759) and "Dynamic Promotions" (https://support.google.com/merchants/answer/13949249) projects, ensuring that discounts on business offers do not fall below this value, thereby preserving the offer's value and profitability. */
  autoPricingMinPrice?: Price;
  /** Global Trade Item Numbers ([GTIN](https://support.google.com/merchants/answer/6324461)) of the item. You can provide up to 10 GTINs. */
  gtins?: ReadonlyArray<string>;
  /** [Custom label 4](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. */
  customLabel4?: string;
  /** The quantity of the product that is available for selling on Google. Supported only for online products. */
  sellOnGoogleQuantity?: string;
  /** Cost of goods sold. Used for gross profit reporting. */
  costOfGoodsSold?: Price;
  /** Date on which the item should expire, as specified upon insertion, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. The actual expiration date is exposed in `productstatuses` as [googleExpirationDate](https://support.google.com/merchants/answer/6324499) and might be earlier if `expirationDate` is too far in the future. */
  expirationDate?: string;
  /** [Availability](https://support.google.com/merchants/answer/6324448) status of the item. */
  availability?:
    | "AVAILABILITY_UNSPECIFIED"
    | "IN_STOCK"
    | "OUT_OF_STOCK"
    | "PREORDER"
    | "LIMITED_AVAILABILITY"
    | "BACKORDER"
    | (string & {});
  /** [Brand](https://support.google.com/merchants/answer/6324351) of the item. For example, "Google". */
  brand?: string;
  /** URL for the mobile-optimized version of your item's landing page. */
  mobileLink?: string;
  /** The day a pre-ordered product becomes available for delivery, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  availabilityDate?: string;
}

export const ProductAttributes: Schema.Schema<ProductAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productWeight: Schema.optional(ProductWeight),
    sustainabilityIncentives: Schema.optional(
      Schema.Array(ProductSustainabilityIncentive),
    ),
    customLabel3: Schema.optional(Schema.String),
    warranty: Schema.optional(Warranty),
    unitPricingBaseMeasure: Schema.optional(UnitPricingBaseMeasure),
    structuredDescription: Schema.optional(StructuredDescription),
    dateFirstRegistered: Schema.optional(Schema.String),
    pattern: Schema.optional(Schema.String),
    vehicleMsrp: Schema.optional(Price),
    mobileLinkTemplate: Schema.optional(Schema.String),
    virtualModelLink: Schema.optional(Schema.String),
    canonicalLink: Schema.optional(Schema.String),
    trim: Schema.optional(Schema.String),
    salePrice: Schema.optional(Price),
    linkTemplate: Schema.optional(Schema.String),
    maxEnergyEfficiencyClass: Schema.optional(Schema.String),
    energyEfficiencyClass: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    includedDestinations: Schema.optional(Schema.Array(Schema.String)),
    ageGroup: Schema.optional(Schema.String),
    minimumOrderValues: Schema.optional(Schema.Array(ProductMinimumOrderValue)),
    installment: Schema.optional(ProductInstallment),
    imageLink: Schema.optional(Schema.String),
    pickupSla: Schema.optional(Schema.String),
    displayAdsSimilarIds: Schema.optional(Schema.Array(Schema.String)),
    subscriptionCost: Schema.optional(SubscriptionCost),
    size: Schema.optional(Schema.String),
    isBundle: Schema.optional(Schema.Boolean),
    pause: Schema.optional(Schema.String),
    price: Schema.optional(Price),
    productTypes: Schema.optional(Schema.Array(Schema.String)),
    shippingHandlingBusinessDays: Schema.optional(
      Schema.Array(ShippingBusinessDaysConfig),
    ),
    engine: Schema.optional(Schema.String),
    vin: Schema.optional(Schema.String),
    additionalImageLinks: Schema.optional(Schema.Array(Schema.String)),
    excludedDestinations: Schema.optional(Schema.Array(Schema.String)),
    handlingCutoffTimes: Schema.optional(Schema.Array(HandlingCutoffTime)),
    promotionIds: Schema.optional(Schema.Array(Schema.String)),
    adult: Schema.optional(Schema.Boolean),
    displayAdsLink: Schema.optional(Schema.String),
    videoLinks: Schema.optional(Schema.Array(Schema.String)),
    disclosureDate: Schema.optional(Schema.String),
    productDetails: Schema.optional(Schema.Array(ProductDetail)),
    sizeTypes: Schema.optional(Schema.Array(Schema.String)),
    customLabel0: Schema.optional(Schema.String),
    shipping: Schema.optional(Schema.Array(Shipping)),
    material: Schema.optional(Schema.String),
    fuelConsumption: Schema.optional(FuelConsumption),
    shippingLabel: Schema.optional(Schema.String),
    displayAdsTitle: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    co2Emissions: Schema.optional(Co2Emissions),
    customLabel2: Schema.optional(Schema.String),
    shippingTransitBusinessDays: Schema.optional(
      Schema.Array(ShippingBusinessDaysConfig),
    ),
    shoppingAdsExcludedCountries: Schema.optional(Schema.Array(Schema.String)),
    shippingWeight: Schema.optional(ShippingWeight),
    vehiclePriceType: Schema.optional(Schema.String),
    gender: Schema.optional(Schema.String),
    loyaltyPoints: Schema.optional(LoyaltyPoints),
    unitPricingMeasure: Schema.optional(UnitPricingMeasure),
    certifiedPreOwned: Schema.optional(Schema.Boolean),
    maximumRetailPrice: Schema.optional(Price),
    shippingLength: Schema.optional(ShippingDimension),
    salePriceEffectiveDate: Schema.optional(Interval),
    shippingHeight: Schema.optional(ShippingDimension),
    customLabel1: Schema.optional(Schema.String),
    vehicleMandatoryInspectionIncluded: Schema.optional(Schema.Boolean),
    fuelConsumptionDischargedBattery: Schema.optional(FuelConsumption),
    productLength: Schema.optional(ProductDimension),
    energyConsumption: Schema.optional(EnergyConsumption),
    color: Schema.optional(Schema.String),
    sizeSystem: Schema.optional(Schema.String),
    adsGrouping: Schema.optional(Schema.String),
    loyaltyPrograms: Schema.optional(Schema.Array(LoyaltyProgram)),
    freeShippingThreshold: Schema.optional(Schema.Array(FreeShippingThreshold)),
    certifications: Schema.optional(Schema.Array(ProductCertification)),
    year: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    returnPolicyLabel: Schema.optional(Schema.String),
    adsRedirect: Schema.optional(Schema.String),
    googleProductCategory: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    bodyStyle: Schema.optional(Schema.String),
    carrierShipping: Schema.optional(Schema.Array(CarrierShipping)),
    minEnergyEfficiencyClass: Schema.optional(Schema.String),
    externalSellerId: Schema.optional(Schema.String),
    productHighlights: Schema.optional(Schema.Array(Schema.String)),
    lifestyleImageLinks: Schema.optional(Schema.Array(Schema.String)),
    adsLabels: Schema.optional(Schema.Array(Schema.String)),
    identifierExists: Schema.optional(Schema.Boolean),
    maxHandlingTime: Schema.optional(Schema.String),
    productHeight: Schema.optional(ProductDimension),
    productWidth: Schema.optional(ProductDimension),
    displayAdsValue: Schema.optional(Schema.Number),
    electricRange: Schema.optional(Mileage),
    vehicleExpenses: Schema.optional(Price),
    displayAdsId: Schema.optional(Schema.String),
    vehicleAllInPrice: Schema.optional(Price),
    itemGroupId: Schema.optional(Schema.String),
    minHandlingTime: Schema.optional(Schema.String),
    transitTimeLabel: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    shippingWidth: Schema.optional(ShippingDimension),
    mileage: Schema.optional(Mileage),
    structuredTitle: Schema.optional(StructuredTitle),
    cloudExportAdditionalProperties: Schema.optional(
      Schema.Array(CloudExportAdditionalProperties),
    ),
    emissionsStandard: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.String),
    multipack: Schema.optional(Schema.String),
    pickupMethod: Schema.optional(Schema.String),
    autoPricingMinPrice: Schema.optional(Price),
    gtins: Schema.optional(Schema.Array(Schema.String)),
    customLabel4: Schema.optional(Schema.String),
    sellOnGoogleQuantity: Schema.optional(Schema.String),
    costOfGoodsSold: Schema.optional(Price),
    expirationDate: Schema.optional(Schema.String),
    availability: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    mobileLink: Schema.optional(Schema.String),
    availabilityDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductAttributes" });

export interface CustomAttribute {
  /** The value of the attribute. If `value` is not empty, `group_values` must be empty. */
  value?: string;
  /** The name of the attribute. */
  name?: string;
  /** Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty. */
  groupValues?: ReadonlyArray<CustomAttribute>;
}

export const CustomAttribute: Schema.Schema<CustomAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      value: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      groupValues: Schema.optional(Schema.Array(CustomAttribute)),
    }),
  ).annotate({
    identifier: "CustomAttribute",
  }) as any as Schema.Schema<CustomAttribute>;

export interface ProductInput {
  /** Output only. The **unpadded base64url encoded name** of the product input. Format: `accounts/{account}/productInputs/{productinput}` where the last section `productinput` is the unpadded base64url encoding of the `content_language~feed_label~offer_id` name. Example: `accounts/123/productInputs/ZW5-VVN-c2t1LzEyMw` for the decoded product input name `accounts/123/productInputs/en~US~sku/123`. This field can be used directly as input to the API methods that require the product input name to be encoded if it contains special characters, for example [`GetProductInput`](https://developers.google.com/merchant/api/reference/rest/products_v1/accounts.productInputs/get). */
  base64EncodedName?: string;
  /** Required. Immutable. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product. */
  contentLanguage?: string;
  /** Optional. Immutable. Represents the existing version (freshness) of the product, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing product. Re-insertion (for example, product refresh after 30 days) can be performed with the current `version_number`. Only supported for insertions into primary data sources. Do not set this field for updates. Do not set this field for insertions into supplemental data sources. If the operation is prevented, the aborted exception will be thrown. */
  versionNumber?: string;
  /** Identifier. The name of the product. Format: `accounts/{account}/productInputs/{productinput}` The {productinput} segment is a unique identifier for the product. This identifier must be unique within a merchant account and generally follows the structure: `content_language~feed_label~offer_id`. Example: `en~US~sku123` For legacy local products, the structure is: `local~content_language~feed_label~offer_id`. Example: `local~en~US~sku123` The format of the {productinput} segment in the URL is automatically detected by the server, supporting two options: 1. **Encoded Format**: The `{productinput}` segment is an unpadded base64url encoded string (RFC 4648 Section 5). The decoded string must result in the `content_language~feed_label~offer_id` structure. This encoding MUST be used if any part of the product identifier (like `offer_id`) contains characters such as `/`, `%`, or `~`. * Example: To represent the product ID `en~US~sku/123`, the `{productinput}` segment must be the unpadded base64url encoding of this string, which is `ZW5-VVN-c2t1LzEyMw`. The full resource name for the product would be `accounts/123/productInputs/ZW5-VVN-c2t1LzEyMw`. 2. **Plain Format**: The `{productinput}` segment is the tilde-separated string `content_language~feed_label~offer_id`. This format is suitable only when `content_language`, `feed_label`, and `offer_id` do not contain URL-problematic characters like `/`, `%`, or `~`. We recommend using the **Encoded Format** for all product IDs to ensure correct parsing, especially those containing special characters. The presence of tilde (`~`) characters in the `{productinput}` segment is used to differentiate between the two formats. */
  name?: string;
  /** Required. Immutable. The feed label that lets you categorize and identify your products. The maximum allowed characters are 20, and the supported characters are `A-Z`, `0-9`, hyphen, and underscore. The feed label must not include any spaces. For more information, see [Using feed labels](//support.google.com/merchants/answer/14994087). */
  feedLabel?: string;
  /** Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per product, with total size of 102.4kB. Underscores in custom attribute names are replaced by spaces upon insertion. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
  /** Immutable. Determines whether the product is **only** targeting local destinations and whether the product name should be distinguished with a `local~` prefix. For example, `accounts/123/productInputs/local~en~US~sku123`. If a product that is not `legacy_local` is already targeting local destinations, creating a `legacy_local` product with an otherwise matching name will fail. */
  legacyLocal?: boolean;
  /** Output only. The **unpadded base64url encoded name** of the processed product. Format: `accounts/{account}/products/{product}` where the last section `product` is the unpadded base64url encoding of the `content_language~feed_label~offer_id` name. Example: `accounts/123/products/ZW5-VVN-c2t1LzEyMw` for the decoded product name `accounts/123/products/en~US~sku/123`. This field can be used directly as input to the API methods that require the product name to be encoded if it contains special characters, for example [`GetProduct`](https://developers.google.com/merchant/api/reference/rest/products_v1/accounts.products/get). */
  base64EncodedProduct?: string;
  /** Required. Immutable. Your unique identifier for the product. This is the same for the product input and processed product. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. See the [products data specification](https://support.google.com/merchants/answer/188494#id) for details. */
  offerId?: string;
  /** Optional. A list of strongly-typed product attributes. */
  productAttributes?: ProductAttributes;
  /** Output only. The name of the processed product. Format: `accounts/{account}/products/{product}` */
  product?: string;
}

export const ProductInput: Schema.Schema<ProductInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    base64EncodedName: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    feedLabel: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
    legacyLocal: Schema.optional(Schema.Boolean),
    base64EncodedProduct: Schema.optional(Schema.String),
    offerId: Schema.optional(Schema.String),
    productAttributes: Schema.optional(ProductAttributes),
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductInput" });

export interface DestinationStatus {
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. */
  disapprovedCountries?: ReadonlyArray<string>;
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is approved. */
  approvedCountries?: ReadonlyArray<string>;
  /** The name of the reporting context. */
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
  /** List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. */
  pendingCountries?: ReadonlyArray<string>;
}

export const DestinationStatus: Schema.Schema<DestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disapprovedCountries: Schema.optional(Schema.Array(Schema.String)),
    approvedCountries: Schema.optional(Schema.Array(Schema.String)),
    reportingContext: Schema.optional(Schema.String),
    pendingCountries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DestinationStatus" });

export interface ProductStatus {
  /** The intended destinations for the product. */
  destinationStatuses?: ReadonlyArray<DestinationStatus>;
  /** Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  lastUpdateDate?: string;
  /** Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  creationDate?: string;
  /** Date on which the item expires, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  googleExpirationDate?: string;
  /** A list of all issues associated with the product. */
  itemLevelIssues?: ReadonlyArray<ItemLevelIssue>;
}

export const ProductStatus: Schema.Schema<ProductStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationStatuses: Schema.optional(Schema.Array(DestinationStatus)),
    lastUpdateDate: Schema.optional(Schema.String),
    creationDate: Schema.optional(Schema.String),
    googleExpirationDate: Schema.optional(Schema.String),
    itemLevelIssues: Schema.optional(Schema.Array(ItemLevelIssue)),
  }).annotate({ identifier: "ProductStatus" });

export interface Product {
  /** Output only. The status of a product, data validation issues, that is, information about a product computed asynchronously. */
  productStatus?: ProductStatus;
  /** Output only. The primary data source of the product. */
  dataSource?: string;
  /** Output only. The feed label lets you categorize and identify your products. The maximum allowed characters is 20 and the supported characters are`A-Z`, `0-9`, hyphen and underscore. The feed label must not include any spaces. For more information, see [Using feed labels](//support.google.com/merchants/answer/14994087) */
  feedLabel?: string;
  /** Output only. A list of custom (merchant-provided) attributes. It can also be used to submit any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
  /** Output only. Determines whether the product is **only** targeting local destinations and whether the product name should be distinguished with a `local~` prefix. For example, `accounts/123/products/local~en~US~sku123`. */
  legacyLocal?: boolean;
  /** The name of the product. Format: `accounts/{account}/products/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/products/en~US~sku123`. A legacy local product name would be `accounts/123/products/local~en~US~sku123`. Note: For calls to the v1beta version, the `product` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`. */
  name?: string;
  /** Output only. The **unpadded base64url encoded name** of the product. Format: `accounts/{account}/products/{product}` where the last section `product` is the unpadded base64url encoding of the `content_language~feed_label~offer_id` name. Example: `accounts/123/products/ZW5-VVN-c2t1LzEyMw` for the decoded product name `accounts/123/products/en~US~sku/123`. This field can be used directly as input to the API methods that require the product name to be encoded if it contains special characters, for example [`GetProduct`](https://developers.google.com/merchant/api/reference/rest/products_v1/accounts.products/get). */
  base64EncodedName?: string;
  /** Output only. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product. */
  contentLanguage?: string;
  /** Output only. Represents the existing version (freshness) of the product, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing product. Re-insertion (for example, product refresh after 30 days) can be performed with the current `version_number`. Only supported for insertions into primary data sources. If the operation is prevented, the aborted exception will be thrown. */
  versionNumber?: string;
  /** Output only. The automated discounts information for the product. */
  automatedDiscounts?: AutomatedDiscounts;
  /** Output only. Your unique identifier for the product. This is the same for the product input and processed product. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. See the [product data specification](https://support.google.com/merchants/answer/188494#id) for details. */
  offerId?: string;
  /** Output only. A list of strongly-typed product attributes. */
  productAttributes?: ProductAttributes;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productStatus: Schema.optional(ProductStatus),
    dataSource: Schema.optional(Schema.String),
    feedLabel: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
    legacyLocal: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    base64EncodedName: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.String),
    automatedDiscounts: Schema.optional(AutomatedDiscounts),
    offerId: Schema.optional(Schema.String),
    productAttributes: Schema.optional(ProductAttributes),
  }).annotate({ identifier: "Product" });

export interface ListProductsResponse {
  /** The processed products from the specified account. These are your processed products after applying rules and supplemental data sources. */
  products?: ReadonlyArray<Product>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListProductsResponse: Schema.Schema<ListProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    products: Schema.optional(Schema.Array(Product)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductsResponse" });

export interface ProductStatusChangeMessage {
  /** A message to describe the change that happened to the product */
  changes?: ReadonlyArray<ProductChange>;
  /** The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id}` */
  managingAccount?: string;
  /** The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications. */
  eventTime?: string;
  /** Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event. */
  expirationTime?: string;
  /** The resource that changed, in this case it will always be `Product`. */
  resourceType?: "RESOURCE_UNSPECIFIED" | "PRODUCT" | (string & {});
  /** The product name. Format: `accounts/{account}/products/{product}` */
  resource?: string;
  /** The attribute in the resource that changed, in this case it will be always `Status`. */
  attribute?: "ATTRIBUTE_UNSPECIFIED" | "STATUS" | (string & {});
  /** The target account that owns the entity that changed. Format : `accounts/{merchant_id}` */
  account?: string;
  /** The product id. */
  resourceId?: string;
}

export const ProductStatusChangeMessage: Schema.Schema<ProductStatusChangeMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(ProductChange)),
    managingAccount: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    account: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
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

export interface InsertAccountsProductInputsRequest {
  /** Required. The account where this product will be inserted. Format: `accounts/{account}` */
  parent: string;
  /** Required. The primary or supplemental product data source name. If the product already exists and data source provided is different, then the product will be moved to a new data source. For more information, see [Create a primary data source](/merchant/api/guides/data-sources/api-sources#create-primary-data-source). Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. */
  dataSource?: string;
  /** Request body */
  body?: ProductInput;
}

export const InsertAccountsProductInputsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataSource: Schema.optional(Schema.String).pipe(T.HttpQuery("dataSource")),
    body: Schema.optional(ProductInput).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "products/v1/{+parent}/productInputs:insert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAccountsProductInputsRequest>;

export type InsertAccountsProductInputsResponse = ProductInput;
export const InsertAccountsProductInputsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductInput;

export type InsertAccountsProductInputsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** [Uploads a product input to your Merchant Center account](/merchant/api/guides/products/add-manage#add_a_product). You must have a products [data source](/merchant/api/guides/data-sources/api-sources#create-primary-data-source) to be able to insert a product. The unique identifier of the data source is passed as a query parameter in the request URL. If a product input with the same contentLanguage, offerId, and dataSource already exists, then the product input inserted by this method replaces that entry. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved. */
export const insertAccountsProductInputs: API.OperationMethod<
  InsertAccountsProductInputsRequest,
  InsertAccountsProductInputsResponse,
  InsertAccountsProductInputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountsProductInputsRequest,
  output: InsertAccountsProductInputsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAccountsProductInputsRequest {
  /** Optional. The list of product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full product replacement is not supported. */
  updateMask?: string;
  /** Required. The primary or supplemental product data source where `data_source` name identifies the product input to be updated. Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. */
  dataSource?: string;
  /** Identifier. The name of the product. Format: `accounts/{account}/productInputs/{productinput}` The {productinput} segment is a unique identifier for the product. This identifier must be unique within a merchant account and generally follows the structure: `content_language~feed_label~offer_id`. Example: `en~US~sku123` For legacy local products, the structure is: `local~content_language~feed_label~offer_id`. Example: `local~en~US~sku123` The format of the {productinput} segment in the URL is automatically detected by the server, supporting two options: 1. **Encoded Format**: The `{productinput}` segment is an unpadded base64url encoded string (RFC 4648 Section 5). The decoded string must result in the `content_language~feed_label~offer_id` structure. This encoding MUST be used if any part of the product identifier (like `offer_id`) contains characters such as `/`, `%`, or `~`. * Example: To represent the product ID `en~US~sku/123`, the `{productinput}` segment must be the unpadded base64url encoding of this string, which is `ZW5-VVN-c2t1LzEyMw`. The full resource name for the product would be `accounts/123/productInputs/ZW5-VVN-c2t1LzEyMw`. 2. **Plain Format**: The `{productinput}` segment is the tilde-separated string `content_language~feed_label~offer_id`. This format is suitable only when `content_language`, `feed_label`, and `offer_id` do not contain URL-problematic characters like `/`, `%`, or `~`. We recommend using the **Encoded Format** for all product IDs to ensure correct parsing, especially those containing special characters. The presence of tilde (`~`) characters in the `{productinput}` segment is used to differentiate between the two formats. */
  name: string;
  /** Request body */
  body?: ProductInput;
}

export const PatchAccountsProductInputsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    dataSource: Schema.optional(Schema.String).pipe(T.HttpQuery("dataSource")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProductInput).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "products/v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsProductInputsRequest>;

export type PatchAccountsProductInputsResponse = ProductInput;
export const PatchAccountsProductInputsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductInput;

export type PatchAccountsProductInputsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the existing product input in your Merchant Center account. The name of the product input to update is taken from the `name` field within the `ProductInput` resource. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved. */
export const patchAccountsProductInputs: API.OperationMethod<
  PatchAccountsProductInputsRequest,
  PatchAccountsProductInputsResponse,
  PatchAccountsProductInputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsProductInputsRequest,
  output: PatchAccountsProductInputsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsProductInputsRequest {
  /** Required. The primary or supplemental data source from which the product input should be deleted. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. */
  dataSource?: string;
  /** Required. The name of the product input to delete. Format: `accounts/{account}/productInputs/{productInput}` The {productInput} segment is a unique identifier for the product. This identifier must be unique within a merchant account and generally follows the structure: `content_language~feed_label~offer_id`. Example: `en~US~sku123` For legacy local products, the structure is: `local~content_language~feed_label~offer_id`. Example: `local~en~US~sku123` The format of the {productInput} segment in the URL is automatically detected by the server, supporting two options: 1. **Encoded Format**: The `{productInput}` segment is an unpadded base64url encoded string (RFC 4648 Section 5). The decoded string must result in the `content_language~feed_label~offer_id` structure. This encoding MUST be used if any part of the product identifier (like `offer_id`) contains characters such as `/`, `%`, or `~`. * Example: To represent the product ID `en~US~sku/123`, the `{productInput}` segment must be the unpadded base64url encoding of this string, which is `ZW5-VVN-c2t1LzEyMw`. The full resource name for the product would be `accounts/123/productInputs/ZW5-VVN-c2t1LzEyMw`. 2. **Plain Format**: The `{productInput}` segment is the tilde-separated string `content_language~feed_label~offer_id`. This format is suitable only when `content_language`, `feed_label`, and `offer_id` do not contain URL-problematic characters like `/`, `%`, or `~`. We recommend using the **Encoded Format** for all product IDs to ensure correct parsing, especially those containing special characters. The presence of tilde (`~`) characters in the `{productInput}` segment is used to differentiate between the two formats. */
  name: string;
}

export const DeleteAccountsProductInputsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.optional(Schema.String).pipe(T.HttpQuery("dataSource")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "products/v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsProductInputsRequest>;

export type DeleteAccountsProductInputsResponse = Empty;
export const DeleteAccountsProductInputsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsProductInputsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a product input from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved. */
export const deleteAccountsProductInputs: API.OperationMethod<
  DeleteAccountsProductInputsRequest,
  DeleteAccountsProductInputsResponse,
  DeleteAccountsProductInputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsProductInputsRequest,
  output: DeleteAccountsProductInputsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsProductsRequest {
  /** Required. The name of the product. Format: `accounts/{account}/products/{product}` The `{product}` segment is a unique identifier for the product. This identifier must be unique within a merchant account and generally follows the structure: `content_language~feed_label~offer_id`. Example: `en~US~sku123` For legacy local products, the structure is: `local~content_language~feed_label~offer_id`. Example: `local~en~US~sku123` The format of the `{product}` segment in the URL is automatically detected by the server, supporting two options: 1. **Encoded Format**: The `{product}` segment is an unpadded base64url encoded string (RFC 4648 Section 5). The decoded string must result in the `content_language~feed_label~offer_id` structure. This encoding MUST be used if any part of the product identifier (like `offer_id`) contains characters such as `/`, `%`, or `~`. * Example: To represent the product ID `en~US~sku/123`, the `{product}` segment must be the unpadded base64url encoding of this string, which is `ZW5-VVN-c2t1LzEyMw`. The full resource name for the product would be `accounts/123/products/ZW5-VVN-c2t1LzEyMw`. 2. **Plain Format**: The `{product}` segment is the tilde-separated string `content_language~feed_label~offer_id`. This format is suitable only when `content_language`, `feed_label`, and `offer_id` do not contain URL-problematic characters like `/`, `%`, or `~`. We recommend using the **Encoded Format** for all product IDs to ensure correct parsing, especially those containing special characters. The presence of tilde (`~`) characters in the `{product}` segment is used to differentiate between the two formats. Note: For calls to the v1beta version, the plain format is `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`. */
  name: string;
}

export const GetAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "products/v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsProductsRequest>;

export type GetAccountsProductsResponse = Product;
export const GetAccountsProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type GetAccountsProductsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the processed product from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved. */
export const getAccountsProducts: API.OperationMethod<
  GetAccountsProductsRequest,
  GetAccountsProductsResponse,
  GetAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsProductsRequest,
  output: GetAccountsProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsProductsRequest {
  /** A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The account to list processed products for. Format: `accounts/{account}` */
  parent: string;
  /** The maximum number of products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the default page size of 25 products will be returned. */
  pageSize?: number;
}

export const ListAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "products/v1/{+parent}/products" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsProductsRequest>;

export type ListAccountsProductsResponse = ListProductsResponse;
export const ListAccountsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductsResponse;

export type ListAccountsProductsError = DefaultErrors | NotFound | Forbidden;

/** Lists the processed products in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved. */
export const listAccountsProducts: API.PaginatedOperationMethod<
  ListAccountsProductsRequest,
  ListAccountsProductsResponse,
  ListAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsProductsRequest,
  output: ListAccountsProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
