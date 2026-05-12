import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListIamPoliciesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/policies" }));
export type ListIamPoliciesInput = typeof ListIamPoliciesInput.Type;

// Output Schema
export const ListIamPoliciesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        policy_document: Schema.optional(Schema.Unknown),
        version: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        is_system_policy: Schema.optional(Schema.Boolean),
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
export type ListIamPoliciesOutput = typeof ListIamPoliciesOutput.Type;

// The operation
/**
 * List Policies
 *
 * Get a list of all Policies in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamPoliciesInput,
  outputSchema: ListIamPoliciesOutput,
  errors: [Forbidden] as const,
}));
