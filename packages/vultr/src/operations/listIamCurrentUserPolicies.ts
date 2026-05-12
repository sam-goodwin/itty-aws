import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListIamCurrentUserPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/users/me/policies" }));
export type ListIamCurrentUserPoliciesInput =
  typeof ListIamCurrentUserPoliciesInput.Type;

// Output Schema
export const ListIamCurrentUserPoliciesOutput =
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
export type ListIamCurrentUserPoliciesOutput =
  typeof ListIamCurrentUserPoliciesOutput.Type;

// The operation
/**
 * List My Policies
 *
 * List the Policies assigned to the current user.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamCurrentUserPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamCurrentUserPoliciesInput,
    outputSchema: ListIamCurrentUserPoliciesOutput,
    errors: [Forbidden] as const,
  }),
);
