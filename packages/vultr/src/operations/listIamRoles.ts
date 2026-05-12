import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListIamRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/roles" }));
export type ListIamRolesInput = typeof ListIamRolesInput.Type;

// Output Schema
export const ListIamRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roles: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        role_type: Schema.optional(Schema.Literals(["user", "service"])),
        max_session_duration: Schema.optional(Schema.Number),
        date_created: Schema.optional(Schema.String),
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              policy_id: Schema.optional(Schema.String),
              policy_name: Schema.optional(Schema.String),
              role_id: Schema.optional(Schema.String),
              role_name: Schema.optional(Schema.String),
              role_description: Schema.optional(Schema.String),
              role_type: Schema.optional(Schema.String),
              date_assigned: Schema.optional(Schema.String),
              assigned_by: Schema.optional(Schema.String),
            }),
          ),
        ),
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
export type ListIamRolesOutput = typeof ListIamRolesOutput.Type;

// The operation
/**
 * List Roles
 *
 * Get a list of all Roles in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamRolesInput,
  outputSchema: ListIamRolesOutput,
  errors: [Forbidden] as const,
}));
