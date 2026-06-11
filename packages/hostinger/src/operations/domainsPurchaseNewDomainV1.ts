import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DomainsPurchaseNewDomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    item_id: Schema.String,
    payment_method_id: Schema.optional(Schema.Number),
    domain_contacts: Schema.optional(
      Schema.Struct({
        owner_id: Schema.optional(Schema.Number),
        admin_id: Schema.optional(Schema.Number),
        billing_id: Schema.optional(Schema.Number),
        tech_id: Schema.optional(Schema.Number),
      }),
    ),
    additional_details: Schema.optional(Schema.Unknown),
    coupons: Schema.optional(Schema.Array(Schema.Unknown)),
  }).pipe(T.Http({ method: "POST", path: "/api/domains/v1/portfolio" }));
export type DomainsPurchaseNewDomainV1Input =
  typeof DomainsPurchaseNewDomainV1Input.Type;

// Output Schema
export const DomainsPurchaseNewDomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    subscription_id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "completed",
        "pending",
        "processing",
        "failed",
        "refunded",
        "cancelled",
        "awaiting_payment",
        "payment_initiated",
        "fraud_refund",
      ]),
    ),
    currency: Schema.optional(Schema.String),
    subtotal: Schema.optional(Schema.Number),
    total: Schema.optional(Schema.Number),
    billing_address: Schema.optional(
      Schema.Struct({
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        company: Schema.optional(Schema.NullOr(Schema.String)),
        address_1: Schema.optional(Schema.NullOr(Schema.String)),
        address_2: Schema.optional(Schema.NullOr(Schema.String)),
        city: Schema.optional(Schema.NullOr(Schema.String)),
        state: Schema.optional(Schema.NullOr(Schema.String)),
        zip: Schema.optional(Schema.NullOr(Schema.String)),
        country: Schema.optional(Schema.NullOr(Schema.String)),
        phone: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.String),
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type DomainsPurchaseNewDomainV1Output =
  typeof DomainsPurchaseNewDomainV1Output.Type;

// The operation
/**
 * Purchase new domain
 *
 * Purchase and register a new domain name.
 * If registration fails, login to [hPanel](https://hpanel.hostinger.com/) and check domain registration status.
 * If no payment method is provided, your default payment method will be used automatically.
 * If no WHOIS information is provided, default contact information for that TLD will be used.
 * Before making request, ensure WHOIS information for desired TLD exists in your account.
 * Some TLDs require `additional_details` to be provided and these will be validated before completing purchase.
 * Use this endpoint to register new domains for users.
 */
export const domainsPurchaseNewDomainV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsPurchaseNewDomainV1Input,
    outputSchema: DomainsPurchaseNewDomainV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
