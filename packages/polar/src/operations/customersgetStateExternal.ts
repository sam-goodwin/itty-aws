import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersgetStateExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/external/{external_id}/state",
    }),
  );
export type CustomersgetStateExternalInput =
  typeof CustomersgetStateExternalInput.Type;

// Output Schema
export const CustomersgetStateExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    email_verified: Schema.Boolean,
    type: Schema.Literals(["individual", "team"]),
    name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tax_id: Schema.NullOr(Schema.Unknown),
    locale: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.String,
    deleted_at: Schema.NullOr(Schema.String),
    active_subscriptions: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        custom_field_data: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        status: Schema.Literals(["active", "trialing"]),
        amount: Schema.Number,
        currency: Schema.String,
        recurring_interval: Schema.Literals(["day", "week", "month", "year"]),
        current_period_start: Schema.String,
        current_period_end: Schema.String,
        trial_start: Schema.NullOr(Schema.String),
        trial_end: Schema.NullOr(Schema.String),
        cancel_at_period_end: Schema.Boolean,
        canceled_at: Schema.NullOr(Schema.String),
        started_at: Schema.NullOr(Schema.String),
        ends_at: Schema.NullOr(Schema.String),
        product_id: Schema.String,
        discount_id: Schema.NullOr(Schema.String),
        meters: Schema.Array(
          Schema.Struct({
            created_at: Schema.String,
            modified_at: Schema.NullOr(Schema.String),
            id: Schema.String,
            consumed_units: Schema.Number,
            credited_units: Schema.Number,
            amount: Schema.Number,
            meter_id: Schema.String,
          }),
        ),
      }),
    ),
    granted_benefits: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        granted_at: Schema.String,
        benefit_id: Schema.String,
        benefit_type: Schema.Literals([
          "custom",
          "discord",
          "github_repository",
          "downloadables",
          "license_keys",
          "meter_credit",
          "feature_flag",
        ]),
        benefit_metadata: Schema.Record(Schema.String, Schema.Unknown),
        properties: Schema.Record(Schema.String, Schema.Unknown),
      }),
    ),
    active_meters: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        meter_id: Schema.String,
        consumed_units: Schema.Number,
        credited_units: Schema.Number,
        balance: Schema.Number,
      }),
    ),
    avatar_url: Schema.String,
  });
export type CustomersgetStateExternalOutput =
  typeof CustomersgetStateExternalOutput.Type;

// The operation
/**
 * Get Customer State by External ID
 *
 * Get a customer state by external ID.
 * The customer state includes information about
 * the customer's active subscriptions and benefits.
 * It's the ideal endpoint to use when you need to get a full overview
 * of a customer's status.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param external_id - The customer external ID.
 */
export const customersgetStateExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersgetStateExternalInput,
    outputSchema: CustomersgetStateExternalOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
