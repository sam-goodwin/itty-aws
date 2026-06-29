import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  query: Schema.optional(Schema.String),
  order_by: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/machines" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["machine"]),
      id: Schema.String,
      name: Schema.String,
      instance_id: Schema.String,
      created_at: Schema.Number,
      updated_at: Schema.Number,
      default_token_ttl: Schema.optional(Schema.Number),
      scoped_machines: Schema.Array(
        Schema.Struct({
          object: Schema.Literals(["machine"]),
          id: Schema.String,
          name: Schema.String,
          instance_id: Schema.String,
          created_at: Schema.Number,
          updated_at: Schema.Number,
          default_token_ttl: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  total_count: Schema.Number,
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 * Get a list of machines for an instance
 *
 * This request returns the list of machines for an instance. The machines are
 * ordered by descending creation date (i.e. most recent machines will be
 * returned first)
 *
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param query - Returns machines with ID or name that match the given query. Uses exact match for machine ID and partial match for name.
 * @param order_by - Allows to return machines in a particular order.
You can order the returned machines by their `name` or `created_at`.
To specify the direction, use the `+` or `-` symbols prepended to the property to order by.
For example, to return machines in descending order by `created_at`, use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
