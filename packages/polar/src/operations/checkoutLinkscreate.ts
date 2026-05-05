import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CheckoutLinkscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      trial_interval: Schema.optional(
        Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
      ),
      trial_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
      payment_processor: Schema.Literal("stripe"),
      label: Schema.optional(Schema.NullOr(Schema.String)),
      allow_discount_codes: Schema.optional(Schema.Boolean),
      require_billing_address: Schema.optional(Schema.Boolean),
      discount_id: Schema.optional(Schema.NullOr(Schema.String)),
      success_url: Schema.optional(Schema.NullOr(Schema.String)),
      return_url: Schema.optional(Schema.NullOr(Schema.String)),
      product_price_id: Schema.String,
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      trial_interval: Schema.optional(
        Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
      ),
      trial_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
      payment_processor: Schema.Literal("stripe"),
      label: Schema.optional(Schema.NullOr(Schema.String)),
      allow_discount_codes: Schema.optional(Schema.Boolean),
      require_billing_address: Schema.optional(Schema.Boolean),
      discount_id: Schema.optional(Schema.NullOr(Schema.String)),
      success_url: Schema.optional(Schema.NullOr(Schema.String)),
      return_url: Schema.optional(Schema.NullOr(Schema.String)),
      product_id: Schema.String,
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      trial_interval: Schema.optional(
        Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
      ),
      trial_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
      payment_processor: Schema.Literal("stripe"),
      label: Schema.optional(Schema.NullOr(Schema.String)),
      allow_discount_codes: Schema.optional(Schema.Boolean),
      require_billing_address: Schema.optional(Schema.Boolean),
      discount_id: Schema.optional(Schema.NullOr(Schema.String)),
      success_url: Schema.optional(Schema.NullOr(Schema.String)),
      return_url: Schema.optional(Schema.NullOr(Schema.String)),
      products: Schema.Array(Schema.String),
    }),
  ]).pipe(T.Http({ method: "POST", path: "/v1/checkout-links/" }));
export type CheckoutLinkscreateInput = typeof CheckoutLinkscreateInput.Type;

// Output Schema
export const CheckoutLinkscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    trial_interval: Schema.NullOr(
      Schema.Literals(["day", "week", "month", "year"]),
    ),
    trial_interval_count: Schema.NullOr(Schema.Number),
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    payment_processor: Schema.Literals(["stripe"]),
    client_secret: SensitiveString,
    success_url: Schema.NullOr(Schema.String),
    return_url: Schema.NullOr(Schema.String),
    label: Schema.NullOr(Schema.String),
    allow_discount_codes: Schema.Boolean,
    require_billing_address: Schema.Boolean,
    discount_id: Schema.NullOr(Schema.String),
    organization_id: Schema.String,
    products: Schema.Array(
      Schema.Struct({
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        trial_interval: Schema.NullOr(
          Schema.Literals(["day", "week", "month", "year"]),
        ),
        trial_interval_count: Schema.NullOr(Schema.Number),
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        visibility: Schema.Literals(["draft", "private", "public"]),
        recurring_interval: Schema.NullOr(
          Schema.Literals(["day", "week", "month", "year"]),
        ),
        recurring_interval_count: Schema.NullOr(Schema.Number),
        is_recurring: Schema.Boolean,
        is_archived: Schema.Boolean,
        organization_id: Schema.String,
        prices: Schema.Array(Schema.Unknown),
        benefits: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
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
            storage_version: Schema.NullOr(Schema.String),
            checksum_etag: Schema.NullOr(Schema.String),
            checksum_sha256_base64: Schema.NullOr(Schema.String),
            checksum_sha256_hex: Schema.NullOr(Schema.String),
            last_modified_at: Schema.NullOr(Schema.String),
            version: Schema.NullOr(Schema.String),
            service: Schema.Literal("product_media"),
            is_uploaded: Schema.Boolean,
            created_at: Schema.String,
            size_readable: Schema.String,
            public_url: Schema.String,
          }),
        ),
      }),
    ),
    discount: Schema.NullOr(Schema.Unknown),
    url: Schema.String,
  });
export type CheckoutLinkscreateOutput = typeof CheckoutLinkscreateOutput.Type;

// The operation
/**
 * Create Checkout Link
 *
 * Create a checkout link.
 * **Scopes**: `checkout_links:write`
 */
export const checkoutLinkscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutLinkscreateInput,
  outputSchema: CheckoutLinkscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
