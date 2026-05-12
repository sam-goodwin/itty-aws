import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListIamUserGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    user_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v2/users/{user_id}/groups" }));
export type ListIamUserGroupsInput = typeof ListIamUserGroupsInput.Type;

// Output Schema
export const ListIamUserGroupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groups: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          display_name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Literals(["active", "deleted"])),
          date_created: Schema.optional(Schema.String),
          date_updated: Schema.optional(Schema.String),
          last_activity: Schema.optional(Schema.String),
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
export type ListIamUserGroupsOutput = typeof ListIamUserGroupsOutput.Type;

// The operation
/**
 * List User Groups
 *
 * List the Groups the specified user belongs to.
 *
 * @param user_id - The User ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamUserGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIamUserGroupsInput,
  outputSchema: ListIamUserGroupsOutput,
  errors: [Forbidden, NotFound] as const,
}));
