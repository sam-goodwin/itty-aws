/**
 * Cloudflare BILLING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service billing
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Profile
// =============================================================================

export interface GetProfileRequest {
  /** Identifier */
  accountId: string;
}

export const GetProfileRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/billing/profile" }),
) as unknown as Schema.Schema<GetProfileRequest>;

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

export const GetProfileResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  accountType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  address2: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  balance: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  cardExpiryMonth: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
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
  paymentAddress2: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentCountry: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentFirstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentGateway: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paymentLastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetProfileResponse>;

export type GetProfileError = DefaultErrors;

export const getProfile: API.OperationMethod<
  GetProfileRequest,
  GetProfileResponse,
  GetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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

export const GetUsageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  from: Schema.optional(Schema.String).pipe(T.HttpQuery("from")),
  metric: Schema.optional(Schema.String).pipe(T.HttpQuery("metric")),
  to: Schema.optional(Schema.String).pipe(T.HttpQuery("to")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/billable/usage" }),
) as unknown as Schema.Schema<GetUsageRequest>;

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

export const GetUsageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
).pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetUsageResponse>;

export type GetUsageError = DefaultErrors;

export const getUsage: API.OperationMethod<
  GetUsageRequest,
  GetUsageResponse,
  GetUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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

export const PaygoUsageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  from: Schema.optional(Schema.String).pipe(T.HttpQuery("from")),
  to: Schema.optional(Schema.String).pipe(T.HttpQuery("to")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/paygo-usage" }),
) as unknown as Schema.Schema<PaygoUsageRequest>;

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
}[];

export const PaygoUsageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
    }),
  ),
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<PaygoUsageResponse>;

export type PaygoUsageError = DefaultErrors;

export const paygoUsage: API.OperationMethod<
  PaygoUsageRequest,
  PaygoUsageResponse,
  PaygoUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PaygoUsageRequest,
  output: PaygoUsageResponse,
  errors: [],
}));
