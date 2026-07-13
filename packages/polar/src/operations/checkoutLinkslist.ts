import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CheckoutLinkslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  product_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "label"
    | "-label"
    | "success_url"
    | "-success_url"
    | "allow_discount_codes"
    | "-allow_discount_codes"
  > | null;
}
export const CheckoutLinkslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    product_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "created_at",
            "-created_at",
            "label",
            "-label",
            "success_url",
            "-success_url",
            "allow_discount_codes",
            "-allow_discount_codes",
          ]),
        ),
      ),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/checkout-links/" }),
) as unknown as Schema.Codec<CheckoutLinkslistInput>;

// Output Schema
export interface CheckoutLinkslistOutput {
  items: ReadonlyArray<{
    id: string;
    created_at: string;
    modified_at: string | null;
    trial_interval: "day" | "week" | "month" | "year" | null;
    trial_interval_count: number | null;
    metadata: Record<string, string | number | boolean>;
    payment_processor: "stripe";
    client_secret: Redacted.Redacted<string>;
    success_url: string | null;
    return_url: string | null;
    label: string | null;
    allow_discount_codes: boolean;
    require_billing_address: boolean;
    discount_id: string | null;
    seats: number | null;
    organization_id: string;
    products: ReadonlyArray<{
      metadata: Record<string, string | number | boolean>;
      id: string;
      created_at: string;
      modified_at: string | null;
      trial_interval: "day" | "week" | "month" | "year" | null;
      trial_interval_count: number | null;
      name: string;
      description: string | null;
      visibility: "draft" | "private" | "public";
      recurring_interval: "day" | "week" | "month" | "year" | null;
      recurring_interval_count: number | null;
      meter_interval: "day" | "week" | "month" | "year" | null;
      meter_interval_count: number | null;
      is_recurring: boolean;
      is_archived: boolean;
      organization_id: string;
      prices: ReadonlyArray<
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            price_amount: number;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            type: string;
            recurring_interval: "day" | "week" | "month" | "year";
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
            legacy: boolean;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            price_amount: number;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            minimum_amount: number;
            maximum_amount: number | null;
            preset_amount: number | null;
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            seat_tiers: {
              seat_tier_type?: "volume" | "graduated";
              tiers: ReadonlyArray<{
                min_seats: number;
                max_seats?: number | null;
                price_per_seat: number;
              }>;
              minimum_seats: number;
              maximum_seats: number | null;
            };
          }
        | {
            created_at: string;
            modified_at: string | null;
            id: string;
            source: "catalog" | "ad_hoc";
            amount_type: string;
            price_currency: string;
            tax_behavior: "location" | "inclusive" | "exclusive" | null;
            is_archived: boolean;
            product_id: string;
            unit_amount: string;
            cap_amount: number | null;
            meter_id: string;
            meter: {
              id: string;
              name: string;
              unit: "scalar" | "token" | "custom";
              custom_label: string | null;
              custom_multiplier: number | null;
            };
          }
      >;
      benefits: ReadonlyArray<{
        id: string;
        created_at: string;
        modified_at: string | null;
        type:
          | "custom"
          | "discord"
          | "github_repository"
          | "downloadables"
          | "license_keys"
          | "meter_credit"
          | "feature_flag"
          | "slack_shared_channel";
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
      }>;
      medias: ReadonlyArray<{
        id: string;
        organization_id: string;
        name: string;
        path: string;
        mime_type: string;
        size: number;
        storage_version: string | null;
        checksum_etag: string | null;
        checksum_sha256_base64: string | null;
        checksum_sha256_hex: string | null;
        last_modified_at: string | null;
        version: string | null;
        service: string;
        is_uploaded: boolean;
        created_at: string;
        size_readable: string;
        public_url: string;
      }>;
    }>;
    discount:
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          amount: number;
          currency: string;
          amounts: Record<string, number>;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          type: "fixed" | "percentage";
          basis_points: number;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | {
          duration: "once" | "forever" | "repeating";
          duration_in_months: number;
          type: "fixed" | "percentage";
          basis_points: number;
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          name: string;
          code: string | null;
          starts_at: string | null;
          ends_at: string | null;
          max_redemptions: number | null;
          redemptions_count: number;
          organization_id: string;
        }
      | null;
    url: string;
  }>;
  pagination: { total_count: number; max_page: number };
}
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
        metadata: Schema.Record(
          Schema.String,
          Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
        ),
        payment_processor: Schema.Literals(["stripe"]),
        client_secret: SensitiveOutputString,
        success_url: Schema.NullOr(Schema.String),
        return_url: Schema.NullOr(Schema.String),
        label: Schema.NullOr(Schema.String),
        allow_discount_codes: Schema.Boolean,
        require_billing_address: Schema.Boolean,
        discount_id: Schema.NullOr(Schema.String),
        seats: Schema.NullOr(Schema.Number),
        organization_id: Schema.String,
        products: Schema.Array(
          Schema.Struct({
            metadata: Schema.Record(
              Schema.String,
              Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
            ),
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
            meter_interval: Schema.NullOr(
              Schema.Literals(["day", "week", "month", "year"]),
            ),
            meter_interval_count: Schema.NullOr(Schema.Number),
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
                  "slack_shared_channel",
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
                service: Schema.String,
                is_uploaded: Schema.Boolean,
                created_at: Schema.String,
                size_readable: Schema.String,
                public_url: Schema.String,
              }),
            ),
          }),
        ),
        discount: Schema.NullOr(
          Schema.Union([
            Schema.Struct({
              duration: Schema.Literals(["once", "forever", "repeating"]),
              type: Schema.Literals(["fixed", "percentage"]),
              amount: Schema.Number,
              currency: Schema.String,
              amounts: Schema.Record(Schema.String, Schema.Number),
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              metadata: Schema.Record(
                Schema.String,
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
              name: Schema.String,
              code: Schema.NullOr(Schema.String),
              starts_at: Schema.NullOr(Schema.String),
              ends_at: Schema.NullOr(Schema.String),
              max_redemptions: Schema.NullOr(Schema.Number),
              redemptions_count: Schema.Number,
              organization_id: Schema.String,
            }),
            Schema.Struct({
              duration: Schema.Literals(["once", "forever", "repeating"]),
              duration_in_months: Schema.Number,
              type: Schema.Literals(["fixed", "percentage"]),
              amount: Schema.Number,
              currency: Schema.String,
              amounts: Schema.Record(Schema.String, Schema.Number),
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              metadata: Schema.Record(
                Schema.String,
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
              name: Schema.String,
              code: Schema.NullOr(Schema.String),
              starts_at: Schema.NullOr(Schema.String),
              ends_at: Schema.NullOr(Schema.String),
              max_redemptions: Schema.NullOr(Schema.Number),
              redemptions_count: Schema.Number,
              organization_id: Schema.String,
            }),
            Schema.Struct({
              duration: Schema.Literals(["once", "forever", "repeating"]),
              type: Schema.Literals(["fixed", "percentage"]),
              basis_points: Schema.Number,
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              metadata: Schema.Record(
                Schema.String,
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
              name: Schema.String,
              code: Schema.NullOr(Schema.String),
              starts_at: Schema.NullOr(Schema.String),
              ends_at: Schema.NullOr(Schema.String),
              max_redemptions: Schema.NullOr(Schema.Number),
              redemptions_count: Schema.Number,
              organization_id: Schema.String,
            }),
            Schema.Struct({
              duration: Schema.Literals(["once", "forever", "repeating"]),
              duration_in_months: Schema.Number,
              type: Schema.Literals(["fixed", "percentage"]),
              basis_points: Schema.Number,
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              id: Schema.String,
              metadata: Schema.Record(
                Schema.String,
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
              name: Schema.String,
              code: Schema.NullOr(Schema.String),
              starts_at: Schema.NullOr(Schema.String),
              ends_at: Schema.NullOr(Schema.String),
              max_redemptions: Schema.NullOr(Schema.Number),
              redemptions_count: Schema.Number,
              organization_id: Schema.String,
            }),
          ]),
        ),
        url: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<CheckoutLinkslistOutput>;

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
}));
