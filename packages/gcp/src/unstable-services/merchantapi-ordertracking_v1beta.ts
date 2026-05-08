// ==========================================================================
// Merchant API (merchantapi ordertracking_v1beta)
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
  version: "ordertracking_v1beta",
  rootUrl: "https://merchantapi.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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
  /** Time zone. */
  timeZone?: TimeZone;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
}

export const DateTime: Schema.Schema<DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(TimeZone),
    day: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    utcOffset: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DateTime" });

export interface ShippingInfo {
  /** Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin. */
  originRegionCode?: string;
  /** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
  shipmentId?: string;
  /** Required. The status of the shipment. */
  shippingStatus?:
    | "SHIPPING_STATE_UNSPECIFIED"
    | "SHIPPED"
    | "DELIVERED"
    | (string & {});
  /** Required. The origin postal code, as a continuous string without spaces or dashes, for example "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
  originPostalCode?: string;
  /** Optional. The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
  carrier?: string;
  /** Optional. The service type for fulfillment, such as GROUND, FIRST_CLASS, etc. */
  carrierService?: string;
  /** Optional. The latest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  latestDeliveryPromiseTime?: DateTime;
  /** Optional. The time when the shipment was shipped. Include the year and timezone string, if available. */
  shippedTime?: DateTime;
  /** Optional. The earliest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  earliestDeliveryPromiseTime?: DateTime;
  /** Optional. The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
  trackingId?: string;
  /** Optional. The time when the shipment was actually delivered. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name. */
  actualDeliveryTime?: DateTime;
}

export const ShippingInfo: Schema.Schema<ShippingInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originRegionCode: Schema.optional(Schema.String),
    shipmentId: Schema.optional(Schema.String),
    shippingStatus: Schema.optional(Schema.String),
    originPostalCode: Schema.optional(Schema.String),
    carrier: Schema.optional(Schema.String),
    carrierService: Schema.optional(Schema.String),
    latestDeliveryPromiseTime: Schema.optional(DateTime),
    shippedTime: Schema.optional(DateTime),
    earliestDeliveryPromiseTime: Schema.optional(DateTime),
    trackingId: Schema.optional(Schema.String),
    actualDeliveryTime: Schema.optional(DateTime),
  }).annotate({ identifier: "ShippingInfo" });

export interface ProductChange {
  /** The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  oldValue?: string;
  /** Countries that have the change (if applicable). Represented in the ISO 3166 format. */
  regionCode?: string;
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
  /** The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  newValue?: string;
}

export const ProductChange: Schema.Schema<ProductChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oldValue: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductChange" });

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

export interface LineItemDetails {
  /** Optional. The Global Trade Item Numbers. */
  gtins?: ReadonlyArray<string>;
  /** Optional. Plain text title of this product. */
  productTitle?: string;
  /** Optional. Brand of the product. */
  brand?: string;
  /** Required. The ID for this line item. */
  lineItemId?: string;
  /** Optional. The manufacturer part number. */
  mpn?: string;
  /** Required. The quantity of the line item in the order. */
  quantity?: string;
  /** Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId. */
  productId?: string;
  /** Optional. The Global Trade Item Number. */
  gtin?: string;
}

export const LineItemDetails: Schema.Schema<LineItemDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gtins: Schema.optional(Schema.Array(Schema.String)),
    productTitle: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    lineItemId: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    gtin: Schema.optional(Schema.String),
  }).annotate({ identifier: "LineItemDetails" });

export interface ShipmentLineItemMapping {
  /** Required. The line item ID. */
  lineItemId?: string;
  /** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
  shipmentId?: string;
  /** Required. The line item quantity in the shipment. */
  quantity?: string;
}

export const ShipmentLineItemMapping: Schema.Schema<ShipmentLineItemMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lineItemId: Schema.optional(Schema.String),
    shipmentId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShipmentLineItemMapping" });

export interface ProductStatusChangeMessage {
  /** The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id}` */
  managingAccount?: string;
  /** Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event. */
  expirationTime?: string;
  /** A message to describe the change that happened to the product */
  changes?: ReadonlyArray<ProductChange>;
  /** The product id. */
  resourceId?: string;
  /** The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications. */
  eventTime?: string;
  /** The target account that owns the entity that changed. Format : `accounts/{merchant_id}` */
  account?: string;
  /** The attribute in the resource that changed, in this case it will be always `Status`. */
  attribute?: "ATTRIBUTE_UNSPECIFIED" | "STATUS" | (string & {});
  /** The product name. Format: `accounts/{account}/products/{product}` */
  resource?: string;
  /** The resource that changed, in this case it will always be `Product`. */
  resourceType?: "RESOURCE_UNSPECIFIED" | "PRODUCT" | (string & {});
}

export const ProductStatusChangeMessage: Schema.Schema<ProductStatusChangeMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managingAccount: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    changes: Schema.optional(Schema.Array(ProductChange)),
    resourceId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    account: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStatusChangeMessage" });

export interface OrderTrackingSignal {
  /** Output only. The ID that uniquely identifies this order tracking signal. */
  orderTrackingSignalId?: string;
  /** Required. The ID of the order on the businesses side. This field will be hashed in returned OrderTrackingSignal creation response. */
  orderId?: string;
  /** Required. Information about line items in the order. */
  lineItems?: ReadonlyArray<LineItemDetails>;
  /** Required. The shipping information for the order. */
  shippingInfo?: ReadonlyArray<ShippingInfo>;
  /** Required. The time when the order was created on the businesses side. Include the year and timezone string, if available. */
  orderCreatedTime?: DateTime;
  /** Optional. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination. */
  deliveryRegionCode?: string;
  /** Optional. The Google Merchant Center ID of this order tracking signal. This value is optional. If left unset, the caller's Merchant Center ID is used. You must request access in order to provide data on behalf of another business. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals). */
  merchantId?: string;
  /** Optional. The mapping of the line items to the shipment information. */
  shipmentLineItemMapping?: ReadonlyArray<ShipmentLineItemMapping>;
  /** Optional. The delivery postal code, as a continuous string without spaces or dashes, for example "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
  deliveryPostalCode?: string;
  /** Optional. The shipping fee of the order; this value should be set to zero in the case of free shipping. */
  customerShippingFee?: Price;
}

export const OrderTrackingSignal: Schema.Schema<OrderTrackingSignal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderTrackingSignalId: Schema.optional(Schema.String),
    orderId: Schema.optional(Schema.String),
    lineItems: Schema.optional(Schema.Array(LineItemDetails)),
    shippingInfo: Schema.optional(Schema.Array(ShippingInfo)),
    orderCreatedTime: Schema.optional(DateTime),
    deliveryRegionCode: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    shipmentLineItemMapping: Schema.optional(
      Schema.Array(ShipmentLineItemMapping),
    ),
    deliveryPostalCode: Schema.optional(Schema.String),
    customerShippingFee: Schema.optional(Price),
  }).annotate({ identifier: "OrderTrackingSignal" });

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

export interface CreateAccountsOrderTrackingSignalsRequest {
  /** Required. The account of the business for which the order signal is created. Format: accounts/{account} */
  parent: string;
  /** Output only. The ID that uniquely identifies this order tracking signal. */
  orderTrackingSignalId?: string;
  /** Request body */
  body?: OrderTrackingSignal;
}

export const CreateAccountsOrderTrackingSignalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderTrackingSignalId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("orderTrackingSignalId"),
    ),
    body: Schema.optional(OrderTrackingSignal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "ordertracking/v1beta/{+parent}/orderTrackingSignals",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsOrderTrackingSignalsRequest>;

export type CreateAccountsOrderTrackingSignalsResponse = OrderTrackingSignal;
export const CreateAccountsOrderTrackingSignalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrderTrackingSignal;

export type CreateAccountsOrderTrackingSignalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new order tracking signal. */
export const createAccountsOrderTrackingSignals: API.OperationMethod<
  CreateAccountsOrderTrackingSignalsRequest,
  CreateAccountsOrderTrackingSignalsResponse,
  CreateAccountsOrderTrackingSignalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsOrderTrackingSignalsRequest,
  output: CreateAccountsOrderTrackingSignalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
