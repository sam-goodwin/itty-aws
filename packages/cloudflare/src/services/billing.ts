/**
 * Cloudflare BILLING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service billing
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface UsageGetResponseItem {
  /** Public identifier of the Cloudflare account (account tag). */
  billingAccountId: string;
  /** Display name of the Cloudflare account. */
  billingAccountName: string;
  /** Highest-level classification of a charge based on the nature of how it gets billed. Currently only "Usage" is supported. */
  chargeCategory: "Usage";
  /** Self-contained summary of the charge's purpose and price. */
  chargeDescription: string;
  /** Indicates how often a charge occurs. Currently only "Usage-Based" is supported. */
  chargeFrequency: "Usage-Based";
  /** Exclusive end of the time interval during which the usage was consumed. */
  chargePeriodEnd: string;
  /** Inclusive start of the time interval during which the usage was consumed. */
  chargePeriodStart: string;
  /** Measured usage amount within the charge period. Reflects raw metered consumption before pricing transformations. */
  consumedQuantity: number;
  /** Unit of measure for the consumed quantity (e.g., "GB", "Requests", "vCPU-Hours"). */
  consumedUnit: string;
  /** Name of the entity providing the underlying infrastructure or platform. */
  hostProviderName: string;
  /** Name of the entity responsible for invoicing for the services consumed. */
  invoiceIssuerName: string;
  /** Name of the entity that made the services available for purchase. */
  serviceProviderName: string;
  /** The display name of the billable metric. Cloudflare extension; replaces FOCUS SkuMeter. */
  xBillableMetricName: string;
  /** A charge serving as the basis for invoicing, inclusive of all reduced rates and discounts while excluding the amortization of upfront charges (one-time or recurring). */
  billedCost?: number | null;
  /** Currency that a charge was billed in (ISO 4217). */
  billingCurrency?: string | null;
  /** Exclusive end of the billing cycle that contains this usage record. */
  billingPeriodEnd?: string | null;
  /** Inclusive start of the billing cycle that contains this usage record. */
  billingPeriodStart?: string | null;
  /** Indicates whether the row represents a correction to one or more charges invoiced in a previous billing period. */
  chargeClass?: "Correction" | null;
  /** Cost calculated by multiplying ContractedUnitPrice and the corresponding PricingQuantity. */
  contractedCost?: number | null;
  /** The agreed-upon unit price for a single PricingUnit of the associated billable metric, inclusive of negotiated discounts, if present, while excluding any other discounts. */
  contractedUnitPrice?: number | null;
  /** The amortized cost of the charge after applying all reduced rates, discounts, and the applicable portion of relevant, prepaid purchases (one-time or recurring) that covered the charge. */
  effectiveCost?: number | null;
  /** Cost calculated by multiplying ListUnitPrice and the corresponding PricingQuantity. */
  listCost?: number | null;
  /** Suggested provider-published unit price for a single PricingUnit of the associated billable metric, exclusive of any discounts. */
  listUnitPrice?: number | null;
  /** Volume of a given service used or purchased, based on the PricingUnit. */
  pricingQuantity?: number | null;
  /** Provider-specified measurement unit for determining unit prices, indicating how the provider rates measured usage after applying pricing rules like block pricing. */
  pricingUnit?: string | null;
  /** Provider-assigned identifier for an isolated geographic area where a service is provided. */
  regionId?: string | null;
  /** Name of an isolated geographic area where a service is provided. */
  regionName?: string | null;
  /** Unique identifier assigned to a grouping of services. For Cloudflare, this is the subscription or contract ID. */
  subAccountId?: string | null;
  /** Name assigned to a grouping of services. For Cloudflare, this is the subscription or contract display name. */
  subAccountName?: string | null;
  /** The unique identifier for the billable metric in the Cloudflare catalog. Cloudflare extension; replaces FOCUS SkuId. */
  xBillableMetricId?: string | null;
  /** The product family the charge belongs to (e.g., "R2", "Workers"). Cloudflare extension; replaces FOCUS ServiceName. */
  xProductFamilyName?: string | null;
  /** The identifier for the Cloudflare zone (zone tag). Cloudflare extension. */
  xZoneId?: string | null;
  /** The display name of the Cloudflare zone. Cloudflare extension. */
  xZoneName?: string | null;
}
const UsageGetResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    billingAccountId: Schema.String,
    billingAccountName: Schema.String,
    chargeCategory: Schema.Literal("Usage"),
    chargeDescription: Schema.String,
    chargeFrequency: Schema.Literal("Usage-Based"),
    chargePeriodEnd: Schema.String,
    chargePeriodStart: Schema.String,
    consumedQuantity: Schema.Number,
    consumedUnit: Schema.String,
    hostProviderName: Schema.String,
    invoiceIssuerName: Schema.String,
    serviceProviderName: Schema.String,
    xBillableMetricName: Schema.String,
    billedCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    billingCurrency: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingPeriodEnd: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingPeriodStart: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    chargeClass: Schema.optional(
      Schema.Union([Schema.Literal("Correction"), Schema.Null]),
    ),
    contractedCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    contractedUnitPrice: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    effectiveCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    listCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    listUnitPrice: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    pricingQuantity: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    pricingUnit: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    regionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    regionName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    subAccountId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    subAccountName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    xBillableMetricId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    xProductFamilyName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    xZoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    xZoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      billingAccountId: "BillingAccountId",
      billingAccountName: "BillingAccountName",
      chargeCategory: "ChargeCategory",
      chargeDescription: "ChargeDescription",
      chargeFrequency: "ChargeFrequency",
      chargePeriodEnd: "ChargePeriodEnd",
      chargePeriodStart: "ChargePeriodStart",
      consumedQuantity: "ConsumedQuantity",
      consumedUnit: "ConsumedUnit",
      hostProviderName: "HostProviderName",
      invoiceIssuerName: "InvoiceIssuerName",
      serviceProviderName: "ServiceProviderName",
      xBillableMetricName: "x_BillableMetricName",
      billedCost: "BilledCost",
      billingCurrency: "BillingCurrency",
      billingPeriodEnd: "BillingPeriodEnd",
      billingPeriodStart: "BillingPeriodStart",
      chargeClass: "ChargeClass",
      contractedCost: "ContractedCost",
      contractedUnitPrice: "ContractedUnitPrice",
      effectiveCost: "EffectiveCost",
      listCost: "ListCost",
      listUnitPrice: "ListUnitPrice",
      pricingQuantity: "PricingQuantity",
      pricingUnit: "PricingUnit",
      regionId: "RegionId",
      regionName: "RegionName",
      subAccountId: "SubAccountId",
      subAccountName: "SubAccountName",
      xBillableMetricId: "x_BillableMetricId",
      xProductFamilyName: "x_ProductFamilyName",
      xZoneId: "x_ZoneId",
      xZoneName: "x_ZoneName",
    }),
  ),
) as unknown as Schema.Codec<UsageGetResponseItem>;

interface UsagePaygoResponseItem {
  /** Specifies the billing currency code (ISO 4217). */
  billingCurrency: string;
  /** Indicates the start of the billing period. */
  billingPeriodStart: string;
  /** Indicates the end of the charge period. */
  chargePeriodEnd: string;
  /** Indicates the start of the charge period. */
  chargePeriodStart: string;
  /** Specifies the quantity consumed during this charge period. */
  consumedQuantity: number;
  /** A display name for the unit of measurement used for the product (for example, "GB-months", "GB-seconds"). May be empty when the unit is implicit in the service name. */
  consumedUnit: string;
  /** Specifies the cost for this charge period in the billing currency. */
  contractedCost: number;
  /** Specifies the cumulated cost for the billing period in the billing currency. */
  cumulatedContractedCost: number;
  /** Specifies the cumulated pricing quantity for the billing period. */
  cumulatedPricingQuantity: number;
  /** Specifies the pricing quantity for this charge period. */
  pricingQuantity: number;
  /** Identifies the Cloudflare service. */
  serviceName: string;
  /** Identifies the product family for the Cloudflare service. */
  serviceFamilyName?: string | null;
  /** The identifier for the Cloudflare subscription. */
  subscriptionId?: string | null;
  /** The identifier for the Cloudflare zone (zone tag). */
  zoneId?: string | null;
  /** The display name of the Cloudflare zone. */
  zoneName?: string | null;
}
const UsagePaygoResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    billingCurrency: Schema.String,
    billingPeriodStart: Schema.String,
    chargePeriodEnd: Schema.String,
    chargePeriodStart: Schema.String,
    consumedQuantity: Schema.Number,
    consumedUnit: Schema.String,
    contractedCost: Schema.Number,
    cumulatedContractedCost: Schema.Number,
    cumulatedPricingQuantity: Schema.Number,
    pricingQuantity: Schema.Number,
    serviceName: Schema.String,
    serviceFamilyName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    subscriptionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    zoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      billingCurrency: "BillingCurrency",
      billingPeriodStart: "BillingPeriodStart",
      chargePeriodEnd: "ChargePeriodEnd",
      chargePeriodStart: "ChargePeriodStart",
      consumedQuantity: "ConsumedQuantity",
      consumedUnit: "ConsumedUnit",
      contractedCost: "ContractedCost",
      cumulatedContractedCost: "CumulatedContractedCost",
      cumulatedPricingQuantity: "CumulatedPricingQuantity",
      pricingQuantity: "PricingQuantity",
      serviceName: "ServiceName",
      serviceFamilyName: "ServiceFamilyName",
      subscriptionId: "SubscriptionId",
      zoneId: "ZoneId",
      zoneName: "ZoneName",
    }),
  ),
) as unknown as Schema.Codec<UsagePaygoResponseItem>;

// =============================================================================
// Profile
// =============================================================================

export interface GetProfileRequest {
  /** Identifier */
  accountId: string;
}

export const GetProfileRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/billing/profile" }),
  ),
) as unknown as Schema.Codec<GetProfileRequest>;

export interface GetProfileResponse {
  /** Billing item identifier tag. */
  id?: string | null;
  accountType?: string | null;
  address?: string | null;
  address2?: string | null;
  balance?: string | null;
  cardExpiryMonth?: number | null;
  cardExpiryYear?: number | null;
  cardNumber?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  createdOn?: string | null;
  deviceData?: string | null;
  editedOn?: string | null;
  enterpriseBillingEmail?: string | null;
  enterprisePrimaryEmail?: string | null;
  firstName?: string | null;
  isPartner?: boolean | null;
  lastName?: string | null;
  nextBillDate?: string | null;
  paymentAddress?: string | null;
  paymentAddress2?: string | null;
  paymentCity?: string | null;
  paymentCountry?: string | null;
  paymentEmail?: string | null;
  paymentFirstName?: string | null;
  paymentGateway?: string | null;
  paymentLastName?: string | null;
  paymentNonce?: string | null;
  paymentState?: string | null;
  paymentZipcode?: string | null;
  primaryEmail?: string | null;
  state?: string | null;
  taxIdType?: string | null;
  telephone?: string | null;
  useLegacy?: boolean | null;
  validationCode?: string | null;
  vat?: string | null;
  zipcode?: string | null;
}

export const GetProfileResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    accountType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    address2: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    balance: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    cardExpiryMonth: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    cardExpiryYear: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    cardNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    city: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    company: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    deviceData: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    editedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enterpriseBillingEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    enterprisePrimaryEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    isPartner: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    nextBillDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentAddress: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentAddress2: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    paymentCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentCountry: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentFirstName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    paymentGateway: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentLastName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    paymentNonce: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentState: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paymentZipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    primaryEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    taxIdType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    telephone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    useLegacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    validationCode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    vat: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    zipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        accountType: "account_type",
        address: "address",
        address2: "address2",
        balance: "balance",
        cardExpiryMonth: "card_expiry_month",
        cardExpiryYear: "card_expiry_year",
        cardNumber: "card_number",
        city: "city",
        company: "company",
        country: "country",
        createdOn: "created_on",
        deviceData: "device_data",
        editedOn: "edited_on",
        enterpriseBillingEmail: "enterprise_billing_email",
        enterprisePrimaryEmail: "enterprise_primary_email",
        firstName: "first_name",
        isPartner: "is_partner",
        lastName: "last_name",
        nextBillDate: "next_bill_date",
        paymentAddress: "payment_address",
        paymentAddress2: "payment_address2",
        paymentCity: "payment_city",
        paymentCountry: "payment_country",
        paymentEmail: "payment_email",
        paymentFirstName: "payment_first_name",
        paymentGateway: "payment_gateway",
        paymentLastName: "payment_last_name",
        paymentNonce: "payment_nonce",
        paymentState: "payment_state",
        paymentZipcode: "payment_zipcode",
        primaryEmail: "primary_email",
        state: "state",
        taxIdType: "tax_id_type",
        telephone: "telephone",
        useLegacy: "use_legacy",
        validationCode: "validation_code",
        vat: "vat",
        zipcode: "zipcode",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetProfileResponse>;

export type GetProfileError = DefaultErrors;

export const getProfile: API.OperationMethod<
  GetProfileRequest,
  GetProfileResponse,
  GetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileRequest,
  output: GetProfileResponse,
  errors: [],
}));

// =============================================================================
// Usage
// =============================================================================

export interface GetUsageRequest {
  /** Path param: Represents a Cloudflare resource identifier tag. */
  accountId: string;
  /** Query param: Start date for the usage query (ISO 8601). Required if `to` is set. When omitted along with `to`, defaults to the start of the current month. Filters by charge period (when consumption ha */
  from?: string;
  /** Query param: Filter results by billable metric id (e.g., workers_standard_requests). */
  metric?: string;
  /** Query param: End date for the usage query (ISO 8601). Required if `from` is set. When omitted along with `from`, defaults to today. Filters by charge period (when consumption happened), not billing pe */
  to?: string;
}

export const GetUsageRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    from: Schema.optional(Schema.String).pipe(T.HttpQuery("from")),
    metric: Schema.optional(Schema.String).pipe(T.HttpQuery("metric")),
    to: Schema.optional(Schema.String).pipe(T.HttpQuery("to")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/billable/usage" }),
  ),
) as unknown as Schema.Codec<GetUsageRequest>;

export type GetUsageResponse = {
  billingAccountId: string;
  billingAccountName: string;
  chargeCategory: "Usage";
  chargeDescription: string;
  chargeFrequency: "Usage-Based";
  chargePeriodEnd: string;
  chargePeriodStart: string;
  consumedQuantity: number;
  consumedUnit: string;
  hostProviderName: string;
  invoiceIssuerName: string;
  serviceProviderName: string;
  xBillableMetricName: string;
  billedCost?: number | null;
  billingCurrency?: string | null;
  billingPeriodEnd?: string | null;
  billingPeriodStart?: string | null;
  chargeClass?: "Correction" | null;
  contractedCost?: number | null;
  contractedUnitPrice?: number | null;
  effectiveCost?: number | null;
  listCost?: number | null;
  listUnitPrice?: number | null;
  pricingQuantity?: number | null;
  pricingUnit?: string | null;
  regionId?: string | null;
  regionName?: string | null;
  subAccountId?: string | null;
  subAccountName?: string | null;
  xBillableMetricId?: string | null;
  xProductFamilyName?: string | null;
  xZoneId?: string | null;
  xZoneName?: string | null;
}[];

export const GetUsageResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(UsageGetResponseItem).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetUsageResponse>;

export type GetUsageError = DefaultErrors;

export const getUsage: API.OperationMethod<
  GetUsageRequest,
  GetUsageResponse,
  GetUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsageRequest,
  output: GetUsageResponse,
  errors: [],
}));

export interface PaygoUsageRequest {
  /** Path param: Represents a Cloudflare resource identifier tag. */
  accountId: string;
  /** Query param: Start date for the usage query (ISO 8601). */
  from?: string;
  /** Query param: End date for the usage query (ISO 8601). */
  to?: string;
}

export const PaygoUsageRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    from: Schema.optional(Schema.String).pipe(T.HttpQuery("from")),
    to: Schema.optional(Schema.String).pipe(T.HttpQuery("to")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/paygo-usage" }),
  ),
) as unknown as Schema.Codec<PaygoUsageRequest>;

export type PaygoUsageResponse = {
  billingCurrency: string;
  billingPeriodStart: string;
  chargePeriodEnd: string;
  chargePeriodStart: string;
  consumedQuantity: number;
  consumedUnit: string;
  contractedCost: number;
  cumulatedContractedCost: number;
  cumulatedPricingQuantity: number;
  pricingQuantity: number;
  serviceName: string;
  serviceFamilyName?: string | null;
  subscriptionId?: string | null;
  zoneId?: string | null;
  zoneName?: string | null;
}[];

export const PaygoUsageResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(UsagePaygoResponseItem).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PaygoUsageResponse>;

export type PaygoUsageError = DefaultErrors;

export const paygoUsage: API.OperationMethod<
  PaygoUsageRequest,
  PaygoUsageResponse,
  PaygoUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PaygoUsageRequest,
  output: PaygoUsageResponse,
  errors: [],
}));
