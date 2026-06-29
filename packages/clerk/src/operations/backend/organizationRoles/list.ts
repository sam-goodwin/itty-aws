import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.String),
  order_by: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/organization_roles" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["role"]),
      id: Schema.String,
      name: Schema.String,
      key: Schema.String,
      description: Schema.NullOr(Schema.String),
      is_creator_eligible: Schema.Boolean,
      permissions: Schema.Array(
        Schema.Struct({
          object: Schema.Literals(["permission"]),
          id: Schema.String,
          name: Schema.String,
          key: Schema.String,
          description: Schema.String,
          type: Schema.String,
          created_at: Schema.Number,
          updated_at: Schema.Number,
        }),
      ),
      created_at: Schema.Number,
      updated_at: Schema.Number,
    }),
  ),
  total_count: Schema.Number,
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 * Get a list of organization roles
 *
 * This request returns the list of organization roles for the instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * The organization roles are ordered by descending creation date.
 * Most recent roles will be returned first.
 *
 * @param query - Returns organization roles with ID, name, or key that match the given query.
Uses exact match for organization role ID and partial match for name and key.
 * @param order_by - Allows to return organization roles in a particular order.
At the moment, you can order the returned organization roles by their `created_at`, `name`, or `key`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want organization roles to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
