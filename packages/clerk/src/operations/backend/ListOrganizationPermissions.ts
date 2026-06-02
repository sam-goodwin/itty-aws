import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOrganizationPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    order_by: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/organization_permissions" }));
export type ListOrganizationPermissionsInput =
  typeof ListOrganizationPermissionsInput.Type;

// Output Schema
export const ListOrganizationPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
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
    total_count: Schema.Number,
  });
export type ListOrganizationPermissionsOutput =
  typeof ListOrganizationPermissionsOutput.Type;

// The operation
/**
 * Get a list of all organization permissions
 *
 * Retrieves all organization permissions for the given instance.
 *
 * @param query - Returns organization permissions with ID, name, or key that match the given query.
Uses exact match for permission ID and partial match for name and key.
 * @param order_by - Allows to return organization permissions in a particular order.
At the moment, you can order the returned permissions by their `created_at`, `name`, or `key`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want permissions to be returned in descending order according to their `created_at` property, you can use `-created_at`.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListOrganizationPermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationPermissionsInput,
    outputSchema: ListOrganizationPermissionsOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
