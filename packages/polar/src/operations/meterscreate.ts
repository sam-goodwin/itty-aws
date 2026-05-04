import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MeterscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.String,
  unit: Schema.optional(Schema.Literals(["scalar", "token", "custom"])),
  custom_label: Schema.optional(Schema.Unknown),
  custom_multiplier: Schema.optional(Schema.Unknown),
  filter: Schema.Struct({
    conjunction: Schema.Literals(["and", "or"]),
    clauses: Schema.Array(Schema.Unknown),
  }),
  aggregation: Schema.Unknown,
  organization_id: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/v1/meters/" }));
export type MeterscreateInput = typeof MeterscreateInput.Type;

// Output Schema
export const MeterscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MeterscreateOutput = typeof MeterscreateOutput.Type;

// The operation
/**
 * Create Meter
 *
 * Create a meter.
 * **Scopes**: `meters:write`
 */
export const meterscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MeterscreateInput,
  outputSchema: MeterscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
