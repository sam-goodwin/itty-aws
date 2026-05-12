import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamUserRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/users/{user_id}/roles" }));
export type ListIamUserRolesInput = typeof ListIamUserRolesInput.Type;

// Output Schema
export const ListIamUserRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    roles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          user_id: Schema.optional(Schema.String),
          role_id: Schema.optional(Schema.String),
          role_name: Schema.optional(Schema.String),
          role_description: Schema.optional(Schema.String),
          role_type: Schema.optional(Schema.String),
          date_assigned: Schema.optional(Schema.String),
          assigned_by: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  },
);
export type ListIamUserRolesOutput = typeof ListIamUserRolesOutput.Type;

// The operation
/**
 * List User Roles
 *
 * List the Roles assigned to the specified user.
 *
 * @param user_id - The User ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamUserRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamUserRolesInput,
  outputSchema: ListIamUserRolesOutput,
  errors: [Forbidden, NotFound] as const,
}));
