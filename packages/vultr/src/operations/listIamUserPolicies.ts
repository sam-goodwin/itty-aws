import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamUserPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/users/{user_id}/policies" }));
export type ListIamUserPoliciesInput = typeof ListIamUserPoliciesInput.Type;

// Output Schema
export const ListIamUserPoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          user_id: Schema.optional(Schema.String),
          policy_id: Schema.optional(Schema.String),
          policy_name: Schema.optional(Schema.String),
          policy_description: Schema.optional(Schema.String),
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
export type ListIamUserPoliciesOutput = typeof ListIamUserPoliciesOutput.Type;

// The operation
/**
 * List User Policies
 *
 * List the Policies assigned to the specified user.
 *
 * @param user_id - The User ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamUserPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamUserPoliciesInput,
  outputSchema: ListIamUserPoliciesOutput,
  errors: [Forbidden, NotFound] as const,
}));
