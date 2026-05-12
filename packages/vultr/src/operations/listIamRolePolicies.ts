import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamRolePoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/roles/{role_id}/policies" }));
export type ListIamRolePoliciesInput = typeof ListIamRolePoliciesInput.Type;

// Output Schema
export const ListIamRolePoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_policy_relationships: Schema.optional(
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
export type ListIamRolePoliciesOutput = typeof ListIamRolePoliciesOutput.Type;

// The operation
/**
 * List Role Policies
 *
 * List the Policies assigned to a Role.
 *
 * @param role_id - The Role ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamRolePolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamRolePoliciesInput,
  outputSchema: ListIamRolePoliciesOutput,
  errors: [Forbidden, NotFound] as const,
}));
