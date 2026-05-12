import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/groups/{group_id}/members" }));
export type ListIamGroupMembersInput = typeof ListIamGroupMembersInput.Type;

// Output Schema
export const ListIamGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          display_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          active: Schema.optional(Schema.Boolean),
          service_user: Schema.optional(Schema.Boolean),
          date_created: Schema.optional(Schema.String),
          date_updated: Schema.optional(Schema.String),
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
export type ListIamGroupMembersOutput = typeof ListIamGroupMembersOutput.Type;

// The operation
/**
 * List Group Members
 *
 * List all Members in a Group.
 *
 * @param group_id - The Group ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamGroupMembers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamGroupMembersInput,
  outputSchema: ListIamGroupMembersOutput,
  errors: [Forbidden, NotFound] as const,
}));
