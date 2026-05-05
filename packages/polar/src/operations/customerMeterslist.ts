import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerMeterslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
    meter_id: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-meters/" }));
export type CustomerMeterslistInput = typeof CustomerMeterslistInput.Type;

// Output Schema
export const CustomerMeterslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        customer_id: Schema.String,
        meter_id: Schema.String,
        consumed_units: Schema.Number,
        credited_units: Schema.Number,
        balance: Schema.Number,
        customer: Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          metadata: Schema.Record(Schema.String, Schema.Unknown),
          external_id: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.NullOr(Schema.String),
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
          avatar_url: Schema.String,
        }),
        meter: Schema.Struct({
          metadata: Schema.Record(Schema.String, Schema.Unknown),
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          id: Schema.String,
          name: Schema.String,
          unit: Schema.Literals(["scalar", "token", "custom"]),
          custom_label: Schema.optional(Schema.NullOr(Schema.String)),
          custom_multiplier: Schema.optional(Schema.NullOr(Schema.Number)),
          filter: Schema.Struct({
            conjunction: Schema.Literals(["and", "or"]),
            clauses: Schema.Array(Schema.Unknown),
          }),
          aggregation: Schema.Struct({
            func: Schema.Literals([
              "count",
              "sum",
              "max",
              "min",
              "avg",
              "unique",
            ]),
            property: Schema.optional(Schema.String),
          }),
          organization_id: Schema.String,
          archived_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerMeterslistOutput = typeof CustomerMeterslistOutput.Type;

// The operation
/**
 * List Customer Meters
 *
 * List customer meters.
 * **Scopes**: `customer_meters:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by external customer ID.
 * @param meter_id - Filter by meter ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customerMeterslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerMeterslistInput,
  outputSchema: CustomerMeterslistOutput,
  errors: [UnprocessableEntity] as const,
}));
