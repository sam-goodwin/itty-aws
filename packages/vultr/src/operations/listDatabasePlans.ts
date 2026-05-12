import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDatabasePlansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    engine: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Number),
    region: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/databases/plans" }));
export type ListDatabasePlansInput = typeof ListDatabasePlansInput.Type;

// Output Schema
export const ListDatabasePlansOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plans: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          number_of_nodes: Schema.optional(Schema.Number),
          type: Schema.optional(Schema.String),
          vcpu_count: Schema.optional(Schema.Number),
          ram: Schema.optional(Schema.Number),
          disk: Schema.optional(Schema.Number),
          monthly_cost: Schema.optional(Schema.Number),
          supported_engines: Schema.optional(Schema.Unknown),
          max_connections: Schema.optional(Schema.Unknown),
          locations: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  });
export type ListDatabasePlansOutput = typeof ListDatabasePlansOutput.Type;

// The operation
/**
 * List Managed Database Plans
 *
 * List all Managed Databases plans.
 *
 * @param engine - Filter by engine type

* `mysql`
* `pg`
* `redis`.
 * @param nodes - Filter by number of nodes.
 * @param region - Filter by [Region id](#operation/list-regions).
 */
export const listDatabasePlans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabasePlansInput,
  outputSchema: ListDatabasePlansOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
