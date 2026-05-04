import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CheckoutLinksupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    trial_interval: Schema.optional(Schema.Unknown),
    trial_interval_count: Schema.optional(Schema.Unknown),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    products: Schema.optional(Schema.Unknown),
    label: Schema.optional(Schema.Unknown),
    allow_discount_codes: Schema.optional(Schema.Unknown),
    require_billing_address: Schema.optional(Schema.Unknown),
    discount_id: Schema.optional(Schema.Unknown),
    success_url: Schema.optional(Schema.Unknown),
    return_url: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/checkout-links/{id}" }));
export type CheckoutLinksupdateInput = typeof CheckoutLinksupdateInput.Type;

// Output Schema
export const CheckoutLinksupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    trial_interval: Schema.Unknown,
    trial_interval_count: Schema.Unknown,
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    payment_processor: Schema.Literals(["stripe"]),
    client_secret: SensitiveString,
    success_url: Schema.Unknown,
    return_url: Schema.Unknown,
    label: Schema.Unknown,
    allow_discount_codes: Schema.Boolean,
    require_billing_address: Schema.Boolean,
    discount_id: Schema.Unknown,
    organization_id: Schema.String,
    products: Schema.Array(
      Schema.Struct({
        metadata: Schema.Record(Schema.String, Schema.Unknown),
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
            service: Schema.String,
            is_uploaded: Schema.Boolean,
            created_at: Schema.String,
            size_readable: Schema.String,
            public_url: Schema.String,
          }),
        ),
      }),
    ),
    discount: Schema.Unknown,
    url: Schema.String,
  });
export type CheckoutLinksupdateOutput = typeof CheckoutLinksupdateOutput.Type;

// The operation
/**
 * Update Checkout Link
 *
 * Update a checkout link.
 * **Scopes**: `checkout_links:write`
 *
 * @param id - The checkout link ID.
 */
export const checkoutLinksupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutLinksupdateInput,
  outputSchema: CheckoutLinksupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
