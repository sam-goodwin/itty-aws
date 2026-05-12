import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamRoleTrustsByRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/role-trusts/by-role/{role_id}" }));
export type ListIamRoleTrustsByRoleInput =
  typeof ListIamRoleTrustsByRoleInput.Type;

// Output Schema
export const ListIamRoleTrustsByRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_trusts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          role_name: Schema.optional(Schema.String),
          role_id: Schema.optional(Schema.String),
          trust_type: Schema.optional(
            Schema.Literals(["user", "group", "oidc"]),
          ),
          trusted_oidc_issuer_id: Schema.optional(Schema.String),
          trusted_user_id: Schema.optional(Schema.String),
          trusted_group_id: Schema.optional(Schema.String),
          user_display: Schema.optional(Schema.String),
          group_display: Schema.optional(Schema.String),
          conditions: Schema.optional(Schema.Unknown),
          valid_until: Schema.optional(Schema.String),
          date_created: Schema.optional(Schema.String),
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
export type ListIamRoleTrustsByRoleOutput =
  typeof ListIamRoleTrustsByRoleOutput.Type;

// The operation
/**
 * List Role Trusts by Role
 *
 * List all Role Trusts for a specific Role.
 *
 * @param role_id - The Role ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamRoleTrustsByRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamRoleTrustsByRoleInput,
    outputSchema: ListIamRoleTrustsByRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
