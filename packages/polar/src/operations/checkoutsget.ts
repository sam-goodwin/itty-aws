import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CheckoutsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/checkouts/{id}" }));
export type CheckoutsgetInput = typeof CheckoutsgetInput.Type;

// Output Schema
export const CheckoutsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.Unknown,
  custom_field_data: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  payment_processor: Schema.Literals(["stripe"]),
  status: Schema.Literals([
    "open",
    "expired",
    "confirmed",
    "succeeded",
    "failed",
  ]),
  client_secret: SensitiveString,
  url: Schema.String,
  expires_at: Schema.String,
  success_url: Schema.String,
  return_url: Schema.Unknown,
  embed_origin: Schema.Unknown,
  amount: Schema.Number,
  seats: Schema.optional(Schema.Unknown),
  min_seats: Schema.optional(Schema.Unknown),
  max_seats: Schema.optional(Schema.Unknown),
  discount_amount: Schema.Number,
  net_amount: Schema.Number,
  tax_amount: Schema.Unknown,
  tax_behavior: Schema.Unknown,
  total_amount: Schema.Number,
  currency: Schema.String,
  allow_trial: Schema.Unknown,
  active_trial_interval: Schema.Unknown,
  active_trial_interval_count: Schema.Unknown,
  trial_end: Schema.Unknown,
  organization_id: Schema.String,
  product_id: Schema.Unknown,
  product_price_id: Schema.Unknown,
  discount_id: Schema.Unknown,
  allow_discount_codes: Schema.Boolean,
  require_billing_address: Schema.Boolean,
  is_discount_applicable: Schema.Boolean,
  is_free_product_price: Schema.Boolean,
  is_payment_required: Schema.Boolean,
  is_payment_setup_required: Schema.Boolean,
  is_payment_form_required: Schema.Boolean,
  customer_id: Schema.Unknown,
  is_business_customer: Schema.Boolean,
  customer_name: Schema.Unknown,
  customer_email: Schema.Unknown,
  customer_ip_address: Schema.Unknown,
  customer_billing_name: Schema.Unknown,
  customer_billing_address: Schema.Unknown,
  customer_tax_id: Schema.Unknown,
  locale: Schema.optional(Schema.Unknown),
  payment_processor_metadata: Schema.Record(Schema.String, Schema.String),
  billing_address_fields: Schema.Struct({
    country: Schema.Literals(["required", "optional", "disabled"]),
    state: Schema.Literals(["required", "optional", "disabled"]),
    city: Schema.Literals(["required", "optional", "disabled"]),
    postal_code: Schema.Literals(["required", "optional", "disabled"]),
    line1: Schema.Literals(["required", "optional", "disabled"]),
    line2: Schema.Literals(["required", "optional", "disabled"]),
  }),
  trial_interval: Schema.Unknown,
  trial_interval_count: Schema.Unknown,
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  external_customer_id: Schema.Unknown,
  products: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      trial_interval: Schema.Unknown,
      trial_interval_count: Schema.Unknown,
      name: Schema.String,
      description: Schema.Unknown,
      visibility: Schema.Literals(["draft", "private", "public"]),
      recurring_interval: Schema.Unknown,
      recurring_interval_count: Schema.Unknown,
      is_recurring: Schema.Boolean,
      is_archived: Schema.Boolean,
      organization_id: Schema.String,
      prices: Schema.Array(Schema.Unknown),
      benefits: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.Unknown,
          type: Schema.Literals([
            "custom",
            "discord",
            "github_repository",
            "downloadables",
            "license_keys",
            "meter_credit",
            "feature_flag",
          ]),
          description: Schema.String,
          selectable: Schema.Boolean,
          deletable: Schema.Boolean,
          is_deleted: Schema.Boolean,
          organization_id: Schema.String,
        }),
      ),
      medias: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          organization_id: Schema.String,
          name: Schema.String,
          path: Schema.String,
          mime_type: Schema.String,
          size: Schema.Number,
          storage_version: Schema.Unknown,
          checksum_etag: Schema.Unknown,
          checksum_sha256_base64: Schema.Unknown,
          checksum_sha256_hex: Schema.Unknown,
          last_modified_at: Schema.Unknown,
          version: Schema.Unknown,
          service: Schema.Literal("product_media"),
          is_uploaded: Schema.Boolean,
          created_at: Schema.String,
          size_readable: Schema.String,
          public_url: Schema.String,
        }),
      ),
    }),
  ),
  product: Schema.Unknown,
  product_price: Schema.Unknown,
  prices: Schema.Unknown,
  discount: Schema.Unknown,
  subscription_id: Schema.Unknown,
  attached_custom_fields: Schema.Unknown,
  customer_metadata: Schema.Record(Schema.String, Schema.Unknown),
});
export type CheckoutsgetOutput = typeof CheckoutsgetOutput.Type;

// The operation
/**
 * Get Checkout Session
 *
 * Get a checkout session by ID.
 * **Scopes**: `checkouts:read` `checkouts:write`
 *
 * @param id - The checkout session ID.
 */
export const checkoutsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutsgetInput,
  outputSchema: CheckoutsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
