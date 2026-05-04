import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const SubscriptionslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.optional(Schema.String),
    product_id: Schema.optional(Schema.String),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
    discount_id: Schema.optional(Schema.String),
    active: Schema.optional(Schema.String),
    cancel_at_period_end: Schema.optional(Schema.String),
    customer_cancellation_reason: Schema.optional(Schema.String),
    canceled_at_after: Schema.optional(Schema.String),
    canceled_at_before: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v1/subscriptions/" }));
export type SubscriptionslistInput = typeof SubscriptionslistInput.Type;

// Output Schema
export const SubscriptionslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        id: Schema.String,
        amount: Schema.Number,
        currency: Schema.String,
        recurring_interval: Schema.Literals(["day", "week", "month", "year"]),
        recurring_interval_count: Schema.Number,
        status: Schema.Literals([
          "incomplete",
          "incomplete_expired",
          "trialing",
          "active",
          "past_due",
          "canceled",
          "unpaid",
        ]),
        current_period_start: Schema.String,
        current_period_end: Schema.String,
        trial_start: Schema.Unknown,
        trial_end: Schema.Unknown,
        cancel_at_period_end: Schema.Boolean,
        canceled_at: Schema.Unknown,
        started_at: Schema.Unknown,
        ends_at: Schema.Unknown,
        ended_at: Schema.Unknown,
        customer_id: Schema.String,
        product_id: Schema.String,
        discount_id: Schema.Unknown,
        checkout_id: Schema.Unknown,
        seats: Schema.optional(Schema.Unknown),
        customer_cancellation_reason: Schema.Unknown,
        customer_cancellation_comment: Schema.Unknown,
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        custom_field_data: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        customer: Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.Unknown,
          metadata: Schema.Record(Schema.String, Schema.Unknown),
          external_id: Schema.optional(Schema.Unknown),
          email: Schema.optional(Schema.Unknown),
          email_verified: Schema.Boolean,
          type: Schema.Literals(["individual", "team"]),
          name: Schema.Unknown,
          billing_address: Schema.Unknown,
          tax_id: Schema.Unknown,
          locale: Schema.optional(Schema.Unknown),
          organization_id: Schema.String,
          deleted_at: Schema.Unknown,
          avatar_url: Schema.String,
        }),
        product: Schema.Struct({
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
          metadata: Schema.Record(Schema.String, Schema.Unknown),
          prices: Schema.Array(Schema.Unknown),
          benefits: Schema.Array(Schema.Unknown),
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
          attached_custom_fields: Schema.Array(
            Schema.Struct({
              custom_field_id: Schema.String,
              custom_field: Schema.Unknown,
              order: Schema.Number,
              required: Schema.Boolean,
            }),
          ),
        }),
        discount: Schema.Unknown,
        prices: Schema.Array(Schema.Unknown),
        meters: Schema.Array(
          Schema.Struct({
            created_at: Schema.String,
            modified_at: Schema.Unknown,
            id: Schema.String,
            consumed_units: Schema.Number,
            credited_units: Schema.Number,
            amount: Schema.Number,
            meter_id: Schema.String,
            meter: Schema.Struct({
              metadata: Schema.Record(Schema.String, Schema.Unknown),
              created_at: Schema.String,
              modified_at: Schema.Unknown,
              id: Schema.String,
              name: Schema.String,
              unit: Schema.Literals(["scalar", "token", "custom"]),
              custom_label: Schema.optional(Schema.Unknown),
              custom_multiplier: Schema.optional(Schema.Unknown),
              filter: Schema.Struct({
                conjunction: Schema.Literals(["and", "or"]),
                clauses: Schema.Array(Schema.Unknown),
              }),
              aggregation: Schema.Unknown,
              organization_id: Schema.String,
              archived_at: Schema.optional(Schema.Unknown),
            }),
          }),
        ),
        pending_update: Schema.Unknown,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type SubscriptionslistOutput = typeof SubscriptionslistOutput.Type;

// The operation
/**
 * List Subscriptions
 *
 * List subscriptions.
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param discount_id - Filter by discount ID.
 * @param active - Filter by active or inactive subscription.
 * @param cancel_at_period_end - Filter by subscriptions that are set to cancel at period end.
 * @param customer_cancellation_reason - Filter by customer cancellation reason.
 * @param canceled_at_after - Filter by cancellation date (after or equal to).
 * @param canceled_at_before - Filter by cancellation date (before or equal to).
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const subscriptionslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionslistInput,
  outputSchema: SubscriptionslistOutput,
  errors: [UnprocessableEntity] as const,
}));
