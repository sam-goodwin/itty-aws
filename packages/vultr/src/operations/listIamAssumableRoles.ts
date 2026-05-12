import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamAssumableRolesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/role-trusts/assumable/{user_id}" }),
  );
export type ListIamAssumableRolesInput = typeof ListIamAssumableRolesInput.Type;

// Output Schema
export const ListIamAssumableRolesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ListIamAssumableRolesOutput =
  typeof ListIamAssumableRolesOutput.Type;

// The operation
/**
 * List Assumable Roles for User
 *
 * List all Roles that a User can assume.
 *
 * @param user_id - The User ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamAssumableRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamAssumableRolesInput,
    outputSchema: ListIamAssumableRolesOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
