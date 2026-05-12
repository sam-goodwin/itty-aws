import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamGroupPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/groups/{id}/policies" }));
export type ListIamGroupPoliciesInput = typeof ListIamGroupPoliciesInput.Type;

// Output Schema
export const ListIamGroupPoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_group_relationships: Schema.optional(
      Schema.Array(
        Schema.Struct({
          group_id: Schema.optional(Schema.String),
          group_name: Schema.optional(Schema.String),
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
export type ListIamGroupPoliciesOutput = typeof ListIamGroupPoliciesOutput.Type;

// The operation
/**
 * List Group Policies
 *
 * List the Policies assigned to a Group.
 *
 * @param id - The Group ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamGroupPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamGroupPoliciesInput,
    outputSchema: ListIamGroupPoliciesOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
