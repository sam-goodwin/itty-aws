import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ProductsupdateInput {
  id: string;
  metadata?: Record<string, string | number | boolean>;
  trial_interval?: "day" | "week" | "month" | "year" | null;
  trial_interval_count?: number | null;
  name?: string | null;
  description?: string | null;
  recurring_interval?: "day" | "week" | "month" | "year" | null;
  recurring_interval_count?: number | null;
  is_archived?: boolean | null;
  visibility?: "draft" | "private" | "public" | null;
  prices?: ReadonlyArray<{ id: string } | unknown> | null;
  medias?: ReadonlyArray<string> | null;
  attached_custom_fields?: ReadonlyArray<{
    custom_field_id: string;
    required: boolean;
  }> | null;
}
export const ProductsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
  ),
  trial_interval: Schema.optional(
    Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
  ),
  trial_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  recurring_interval: Schema.optional(
    Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
  ),
  recurring_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
  is_archived: Schema.optional(Schema.NullOr(Schema.Boolean)),
  visibility: Schema.optional(
    Schema.NullOr(Schema.Literals(["draft", "private", "public"])),
  ),
  prices: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
          }),
          Schema.Unknown,
        ]),
      ),
    ),
  ),
  medias: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  attached_custom_fields: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          custom_field_id: Schema.String,
          required: Schema.Boolean,
        }),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "PATCH", path: "/v1/products/{id}" }),
) as unknown as Schema.Codec<ProductsupdateInput>;

// Output Schema
export interface ProductsupdateOutput {
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
  metadata: Record<string, string | number | boolean>;
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
  benefits: ReadonlyArray<
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: { note: string | null | null };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {
          guild_id: string;
          role_id: string;
          kick_member: boolean;
          guild_token: string;
        };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {
          repository_owner: string;
          repository_name: string;
          permission: "pull" | "triage" | "push" | "maintain" | "admin";
        };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {
          archived: Record<string, boolean>;
          files: ReadonlyArray<string>;
        };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {
          prefix: string | null;
          expires: { ttl: number; timeframe: "year" | "month" | "day" } | null;
          activations: { limit: number; enable_customer_admin: boolean } | null;
          limit_usage: number | null;
        };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: { units: number; rollover: boolean; meter_id: string };
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {};
        visibility_configurable: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        type: string;
        description: string;
        selectable: boolean;
        deletable: boolean;
        is_deleted: boolean;
        organization_id: string;
        metadata: Record<string, string | number | boolean>;
        visibility: "draft" | "private" | "public";
        properties: {
          slack_integration_id: string;
          channel_name_template: string;
          private?: boolean;
          welcome_message?: string | null;
          archive_on_revoke?: boolean;
          team_invitees?: ReadonlyArray<string>;
        };
        visibility_configurable: boolean;
      }
  >;
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
  attached_custom_fields: ReadonlyArray<{
    custom_field_id: string;
    custom_field:
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          type: string;
          slug: string;
          name: string;
          organization_id: string;
          properties: {
            form_label?: string;
            form_help_text?: string;
            form_placeholder?: string;
            textarea?: boolean;
            min_length?: number;
            max_length?: number;
          };
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          type: string;
          slug: string;
          name: string;
          organization_id: string;
          properties: {
            form_label?: string;
            form_help_text?: string;
            form_placeholder?: string;
            ge?: number;
            le?: number;
          };
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          type: string;
          slug: string;
          name: string;
          organization_id: string;
          properties: {
            form_label?: string;
            form_help_text?: string;
            form_placeholder?: string;
          };
        }
      | {
          created_at: string;
          modified_at: string | null;
          id: string;
          metadata: Record<string, string | number | boolean>;
          type: string;
          slug: string;
          name: string;
          organization_id: string;
          properties: {
            form_label?: string;
            form_help_text?: string;
            form_placeholder?: string;
            options: ReadonlyArray<{ value: string; label: string }>;
          };
        };
    order: number;
    required: boolean;
  }>;
}
export const ProductsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  metadata: Schema.Record(
    Schema.String,
    Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
  ),
  prices: Schema.Array(
    Schema.Union([
      Schema.Union([
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          type: Schema.String,
          recurring_interval: Schema.Literals(["day", "week", "month", "year"]),
          price_amount: Schema.Number,
          legacy: Schema.Boolean,
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          type: Schema.String,
          recurring_interval: Schema.Literals(["day", "week", "month", "year"]),
          minimum_amount: Schema.Number,
          maximum_amount: Schema.NullOr(Schema.Number),
          preset_amount: Schema.NullOr(Schema.Number),
          legacy: Schema.Boolean,
        }),
      ]),
      Schema.Union([
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          price_amount: Schema.Number,
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          minimum_amount: Schema.Number,
          maximum_amount: Schema.NullOr(Schema.Number),
          preset_amount: Schema.NullOr(Schema.Number),
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          seat_tiers: Schema.Struct({
            seat_tier_type: Schema.optional(
              Schema.Literals(["volume", "graduated"]),
            ),
            tiers: Schema.Array(
              Schema.Struct({
                min_seats: Schema.Number,
                max_seats: Schema.optional(Schema.NullOr(Schema.Number)),
                price_per_seat: Schema.Number,
              }),
            ),
            minimum_seats: Schema.Number,
            maximum_seats: Schema.NullOr(Schema.Number),
          }),
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          source: Schema.Literals(["catalog", "ad_hoc"]),
          amount_type: Schema.String,
          price_currency: Schema.String,
          tax_behavior: Schema.NullOr(
            Schema.Literals(["location", "inclusive", "exclusive"]),
          ),
          is_archived: Schema.Boolean,
          product_id: Schema.String,
          unit_amount: Schema.String,
          cap_amount: Schema.NullOr(Schema.Number),
          meter_id: Schema.String,
          meter: Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            unit: Schema.Literals(["scalar", "token", "custom"]),
            custom_label: Schema.NullOr(Schema.String),
            custom_multiplier: Schema.NullOr(Schema.Number),
          }),
        }),
      ]),
    ]),
  ),
  benefits: Schema.Array(Schema.Unknown),
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
  attached_custom_fields: Schema.Array(
    Schema.Struct({
      custom_field_id: Schema.String,
      custom_field: Schema.Union([
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          type: Schema.String,
          slug: Schema.String,
          name: Schema.String,
          organization_id: Schema.String,
          properties: Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            textarea: Schema.optional(Schema.Boolean),
            min_length: Schema.optional(Schema.Number),
            max_length: Schema.optional(Schema.Number),
          }),
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          type: Schema.String,
          slug: Schema.String,
          name: Schema.String,
          organization_id: Schema.String,
          properties: Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            ge: Schema.optional(Schema.Number),
            le: Schema.optional(Schema.Number),
          }),
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          type: Schema.String,
          slug: Schema.String,
          name: Schema.String,
          organization_id: Schema.String,
          properties: Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
          }),
        }),
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          metadata: Schema.Record(
            Schema.String,
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
          type: Schema.String,
          slug: Schema.String,
          name: Schema.String,
          organization_id: Schema.String,
          properties: Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            options: Schema.Array(
              Schema.Struct({
                value: Schema.String,
                label: Schema.String,
              }),
            ),
          }),
        }),
      ]),
      order: Schema.Number,
      required: Schema.Boolean,
    }),
  ),
}) as unknown as Schema.Codec<ProductsupdateOutput>;

// The operation
/**
 * Update Product
 *
 * Update a product.
 * **Scopes**: `products:write`
 */
export const productsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsupdateInput,
  outputSchema: ProductsupdateOutput,
}));
