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
}).pipe(T.Http({ method: "GET", path: "/role_sets" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["role_set"]),
      id: Schema.String,
      name: Schema.String,
      key: Schema.String,
      description: Schema.NullOr(Schema.String),
      roles: Schema.Array(
        Schema.Struct({
          object: Schema.Literals(["role_set_item"]),
          id: Schema.String,
          name: Schema.String,
          key: Schema.String,
          description: Schema.NullOr(Schema.String),
          members_count: Schema.optional(Schema.NullOr(Schema.Number)),
          has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
          created_at: Schema.Number,
          updated_at: Schema.Number,
        }),
      ),
      default_role: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            object: Schema.Literals(["role_set_item"]),
            id: Schema.String,
            name: Schema.String,
            key: Schema.String,
            description: Schema.NullOr(Schema.String),
            members_count: Schema.optional(Schema.NullOr(Schema.Number)),
            has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
            created_at: Schema.Number,
            updated_at: Schema.Number,
          }),
        ),
      ),
      creator_role: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            object: Schema.Literals(["role_set_item"]),
            id: Schema.String,
            name: Schema.String,
            key: Schema.String,
            description: Schema.NullOr(Schema.String),
            members_count: Schema.optional(Schema.NullOr(Schema.Number)),
            has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
            created_at: Schema.Number,
            updated_at: Schema.Number,
          }),
        ),
      ),
      type: Schema.Literals(["initial", "custom"]),
      role_set_migration: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            object: Schema.Literals(["role_set_migration"]),
            id: Schema.String,
            organization_id: Schema.optional(Schema.NullOr(Schema.String)),
            instance_id: Schema.String,
            source_role_set_id: Schema.String,
            dest_role_set_id: Schema.optional(Schema.NullOr(Schema.String)),
            trigger_type: Schema.String,
            status: Schema.String,
            migrated_members: Schema.Number,
            mappings: Schema.optional(
              Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
            ),
            started_at: Schema.optional(Schema.NullOr(Schema.Number)),
            completed_at: Schema.optional(Schema.NullOr(Schema.Number)),
            created_at: Schema.Number,
            updated_at: Schema.Number,
          }),
        ),
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
 * Get a list of role sets
 *
 * Returns a list of role sets for the instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * The role sets are ordered by descending creation date by default.
 *
 * @param query - Returns role sets with ID, name, or key that match the given query.
Uses exact match for role set ID and partial match for name and key.
 * @param order_by - Allows to return role sets in a particular order.
At the moment, you can order the returned role sets by their `created_at`, `name`, or `key`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want role sets to be returned in descending order according to their `created_at` property, you can use `-created_at`.
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
