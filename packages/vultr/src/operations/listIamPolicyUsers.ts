import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamPolicyUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/policies/{policy_id}/users" }));
export type ListIamPolicyUsersInput = typeof ListIamPolicyUsersInput.Type;

// Output Schema
export const ListIamPolicyUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_user_relationships: Schema.optional(
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
export type ListIamPolicyUsersOutput = typeof ListIamPolicyUsersOutput.Type;

// The operation
/**
 * List Policy Users
 *
 * List the Users attached to a Policy.
 *
 * @param policy_id - The Policy ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamPolicyUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamPolicyUsersInput,
  outputSchema: ListIamPolicyUsersOutput,
  errors: [Forbidden, NotFound] as const,
}));
