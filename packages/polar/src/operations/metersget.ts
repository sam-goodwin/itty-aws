import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetersgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/meters/{id}" }));
export type MetersgetInput = typeof MetersgetInput.Type;

// Output Schema
export const MetersgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    func: Schema.Literals(["count", "sum", "max", "min", "avg", "unique"]),
    property: Schema.optional(Schema.String),
  }),
  organization_id: Schema.String,
  archived_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export type MetersgetOutput = typeof MetersgetOutput.Type;

// The operation
/**
 * Get Meter
 *
 * Get a meter by ID.
 * **Scopes**: `meters:read` `meters:write`
 *
 * @param id - The meter ID.
 */
export const metersget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetersgetInput,
  outputSchema: MetersgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
