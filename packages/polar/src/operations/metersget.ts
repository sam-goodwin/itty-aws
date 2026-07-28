import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetersgetInput {
  id: string;
}
export const MetersgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/meters/{id}" }),
) as unknown as Schema.Codec<MetersgetInput>;

// Output Schema
export interface MetersgetOutput {
  metadata: Record<string, string | number | boolean>;
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  unit: "scalar" | "token" | "custom";
  custom_label?: string | null;
  custom_multiplier?: number | null;
  filter: {
    conjunction: "and" | "or";
    clauses: ReadonlyArray<
      | {
          property: string;
          operator:
            | "eq"
            | "ne"
            | "gt"
            | "gte"
            | "lt"
            | "lte"
            | "like"
            | "not_like";
          value: string | number | boolean;
        }
      | unknown
    >;
  };
  aggregation:
    | { func?: string }
    | { func: "sum" | "max" | "min" | "avg"; property: string }
    | { func?: string; property: string };
  organization_id: string;
  archived_at?: string | null;
}
export const MetersgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.Record(
    Schema.String,
    Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
  ),
  created_at: Schema.String,
  modified_at: Schema.NullOr(Schema.String),
  id: Schema.String,
  name: Schema.String,
  unit: Schema.Literals(["scalar", "token", "custom"]),
  custom_label: Schema.optional(Schema.NullOr(Schema.String)),
  custom_multiplier: Schema.optional(Schema.NullOr(Schema.Number)),
  filter: Schema.Struct({
    conjunction: Schema.Literals(["and", "or"]),
    clauses: Schema.Array(
      Schema.Union([
        Schema.Struct({
          property: Schema.String,
          operator: Schema.Literals([
            "eq",
            "ne",
            "gt",
            "gte",
            "lt",
            "lte",
            "like",
            "not_like",
          ]),
          value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
        }),
        Schema.Unknown,
      ]),
    ),
  }),
  aggregation: Schema.Union([
    Schema.Struct({
      func: Schema.optional(Schema.String),
    }),
    Schema.Struct({
      func: Schema.Literals(["sum", "max", "min", "avg"]),
      property: Schema.String,
    }),
    Schema.Struct({
      func: Schema.optional(Schema.String),
      property: Schema.String,
    }),
  ]),
  organization_id: Schema.String,
  archived_at: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<MetersgetOutput>;

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
}));
