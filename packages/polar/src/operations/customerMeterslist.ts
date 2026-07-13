import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerMeterslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  meter_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "modified_at"
    | "-modified_at"
    | "customer_id"
    | "-customer_id"
    | "customer_name"
    | "-customer_name"
    | "meter_id"
    | "-meter_id"
    | "meter_name"
    | "-meter_name"
    | "consumed_units"
    | "-consumed_units"
    | "credited_units"
    | "-credited_units"
    | "balance"
    | "-balance"
  > | null;
}
export const CustomerMeterslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    customer_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    external_customer_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    meter_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "created_at",
            "-created_at",
            "modified_at",
            "-modified_at",
            "customer_id",
            "-customer_id",
            "customer_name",
            "-customer_name",
            "meter_id",
            "-meter_id",
            "meter_name",
            "-meter_name",
            "consumed_units",
            "-consumed_units",
            "credited_units",
            "-credited_units",
            "balance",
            "-balance",
          ]),
        ),
      ),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-meters/" }),
  ) as unknown as Schema.Codec<CustomerMeterslistInput>;

// Output Schema
export interface CustomerMeterslistOutput {
  items: ReadonlyArray<{
    id: string;
    created_at: string;
    modified_at: string | null;
    customer_id: string;
    meter_id: string;
    consumed_units: number;
    credited_units: number;
    balance: number;
    customer: unknown;
    meter: {
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
    };
  }>;
  pagination: { total_count: number; max_page: number };
}
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
        customer: Schema.Unknown,
        meter: Schema.Struct({
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
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<CustomerMeterslistOutput>;

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
}));
