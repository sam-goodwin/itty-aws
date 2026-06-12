import * as Schema from "effect/Schema";
import {
  customer_taxSchema,
  invoice_setting_customer_settingSchema,
  payment_sourceSchema,
  subscriptionSchema,
  tax_idSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostCustomersCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    address: Schema.optional(Schema.Unknown),
    balance: Schema.optional(Schema.Number),
    business_name: Schema.optional(Schema.Unknown),
    cash_balance: Schema.optional(
      Schema.Struct({
        settings: Schema.optional(
          Schema.Struct({
            reconciliation_mode: Schema.optional(
              Schema.Literals(["automatic", "manual", "merchant_default"]),
            ),
          }),
        ),
      }),
    ),
    default_source: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    individual_name: Schema.optional(Schema.Unknown),
    invoice_prefix: Schema.optional(Schema.String),
    invoice_settings: Schema.optional(
      Schema.Struct({
        custom_fields: Schema.optional(Schema.Unknown),
        default_payment_method: Schema.optional(Schema.String),
        footer: Schema.optional(Schema.String),
        rendering_options: Schema.optional(Schema.Unknown),
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.String),
    next_invoice_sequence: Schema.optional(Schema.Number),
    phone: Schema.optional(Schema.String),
    preferred_locales: Schema.optional(Schema.Array(Schema.String)),
    shipping: Schema.optional(Schema.Unknown),
    source: Schema.optional(Schema.String),
    tax: Schema.optional(
      Schema.Struct({
        ip_address: Schema.optional(Schema.Unknown),
        validate_location: Schema.optional(
          Schema.Literals(["auto", "deferred", "immediately"]),
        ),
      }),
    ),
    tax_exempt: Schema.optional(
      Schema.Literals(["", "exempt", "none", "reverse"]),
    ),
    validate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}",
      contentType: "form-urlencoded",
    }),
  );
export type PostCustomersCustomerInput = typeof PostCustomersCustomerInput.Type;

// Output Schema
export const PostCustomersCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.Unknown),
    balance: Schema.optional(Schema.Number),
    business_name: Schema.optional(Schema.String),
    cash_balance: Schema.optional(Schema.Unknown),
    created: Schema.Number,
    currency: Schema.optional(Schema.NullOr(Schema.String)),
    customer_account: Schema.optional(Schema.NullOr(Schema.String)),
    default_source: Schema.Unknown,
    delinquent: Schema.optional(Schema.NullOr(Schema.Boolean)),
    description: Schema.NullOr(Schema.String),
    discount: Schema.optional(Schema.Unknown),
    email: Schema.NullOr(Schema.String),
    id: Schema.String,
    individual_name: Schema.optional(Schema.String),
    invoice_credit_balance: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    invoice_prefix: Schema.optional(Schema.NullOr(Schema.String)),
    invoice_settings: Schema.optional(
      Schema.suspend(() => invoice_setting_customer_settingSchema),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    next_invoice_sequence: Schema.optional(Schema.Number),
    object: Schema.Literals(["customer"]),
    phone: Schema.optional(Schema.NullOr(Schema.String)),
    preferred_locales: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    shipping: Schema.Unknown,
    sources: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => payment_sourceSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    subscriptions: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => subscriptionSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    tax: Schema.optional(Schema.suspend(() => customer_taxSchema)),
    tax_exempt: Schema.optional(
      Schema.NullOr(Schema.Literals(["exempt", "none", "reverse"])),
    ),
    tax_ids: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => tax_idSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    test_clock: Schema.optional(Schema.Unknown),
  });
export type PostCustomersCustomerOutput =
  typeof PostCustomersCustomerOutput.Type;

// The operation
/**
 * Update a customer
 *
 * <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided are left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (such as a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled is retried. This retry doesn’t count as an automatic retry, and doesn’t affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer doesn’t trigger this behavior.</p>
 * <p>This request accepts mostly the same arguments as the customer creation call.</p>
 */
export const PostCustomersCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostCustomersCustomerInput,
    outputSchema: PostCustomersCustomerOutput,
  }),
);
