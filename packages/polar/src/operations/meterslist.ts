import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MeterslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  query?: string | null;
  is_archived?: boolean | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    "created_at" | "-created_at" | "name" | "-name"
  > | null;
  metadata?: Record<
    string,
    | string
    | number
    | boolean
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | ReadonlyArray<boolean>
  > | null;
}
export const MeterslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  is_archived: Schema.optional(Schema.NullOr(Schema.Boolean)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals(["created_at", "-created_at", "name", "-name"]),
      ),
    ),
  ),
  metadata: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.Array(Schema.String),
          Schema.Array(Schema.Number),
          Schema.Array(Schema.Boolean),
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/meters/" }),
) as unknown as Schema.Codec<MeterslistInput>;

// Output Schema
export interface MeterslistOutput {
  items: ReadonlyArray<{
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
  }>;
  pagination: { total_count: number; max_page: number };
}
export const MeterslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
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
              value: Schema.Union([
                Schema.String,
                Schema.Number,
                Schema.Boolean,
              ]),
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
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<MeterslistOutput>;

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
}));
