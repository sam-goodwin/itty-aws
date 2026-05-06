import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CheckoutLinkslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
    product_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
    page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
    limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
    sorting: Schema.optional(Schema.String).pipe(T.QueryParam()),
  },
).pipe(T.Http({ method: "GET", path: "/v1/checkout-links/" }));
export type CheckoutLinkslistInput = typeof CheckoutLinkslistInput.Type;

// Output Schema
export const CheckoutLinkslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CheckoutLinkslistOutput = typeof CheckoutLinkslistOutput.Type;

// The operation
/**
 * List Checkout Links
 *
 * List checkout links.
 * **Scopes**: `checkout_links:read` `checkout_links:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const checkoutLinkslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckoutLinkslistInput,
  outputSchema: CheckoutLinkslistOutput,
  errors: [UnprocessableEntity] as const,
}));
