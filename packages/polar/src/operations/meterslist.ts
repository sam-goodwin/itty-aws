import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MeterslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  is_archived: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/meters/" }));
export type MeterslistInput = typeof MeterslistInput.Type;

// Output Schema
export const MeterslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
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
      aggregation: Schema.Unknown,
      organization_id: Schema.String,
      archived_at: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type MeterslistOutput = typeof MeterslistOutput.Type;

// The operation
/**
 * List Meters
 *
 * List meters.
 * **Scopes**: `meters:read` `meters:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param query - Filter by name.
 * @param is_archived - Filter on archived meters.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const meterslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MeterslistInput,
  outputSchema: MeterslistOutput,
  errors: [UnprocessableEntity] as const,
}));
