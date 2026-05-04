import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerMetersgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/v1/customer-meters/{id}" }));
export type CustomerMetersgetInput = typeof CustomerMetersgetInput.Type;

// Output Schema
export const CustomerMetersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    customer_id: Schema.String,
    meter_id: Schema.String,
    consumed_units: Schema.Number,
    credited_units: Schema.Number,
    balance: Schema.Number,
    customer: Schema.Unknown,
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
  });
export type CustomerMetersgetOutput = typeof CustomerMetersgetOutput.Type;

// The operation
/**
 * Get Customer Meter
 *
 * Get a customer meter by ID.
 * **Scopes**: `customer_meters:read`
 *
 * @param id - The customer meter ID.
 */
export const customerMetersget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerMetersgetInput,
  outputSchema: CustomerMetersgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
