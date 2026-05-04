import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetersupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.Unknown),
  unit: Schema.optional(Schema.Unknown),
  custom_label: Schema.optional(Schema.Unknown),
  custom_multiplier: Schema.optional(Schema.Unknown),
  filter: Schema.optional(Schema.Unknown),
  aggregation: Schema.optional(Schema.Unknown),
  is_archived: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/meters/{id}" }));
export type MetersupdateInput = typeof MetersupdateInput.Type;

// Output Schema
export const MetersupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type MetersupdateOutput = typeof MetersupdateOutput.Type;

// The operation
/**
 * Update Meter
 *
 * Update a meter.
 * **Scopes**: `meters:write`
 *
 * @param id - The meter ID.
 */
export const metersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetersupdateInput,
  outputSchema: MetersupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
