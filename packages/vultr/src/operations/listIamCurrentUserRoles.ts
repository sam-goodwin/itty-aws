import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListIamCurrentUserRolesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/users/me/roles" }));
export type ListIamCurrentUserRolesInput =
  typeof ListIamCurrentUserRolesInput.Type;

// Output Schema
export const ListIamCurrentUserRolesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ListIamCurrentUserRolesOutput =
  typeof ListIamCurrentUserRolesOutput.Type;

// The operation
/**
 * List My Roles
 *
 * List the Roles assigned to the current user.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamCurrentUserRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamCurrentUserRolesInput,
    outputSchema: ListIamCurrentUserRolesOutput,
    errors: [Forbidden] as const,
  }),
);
