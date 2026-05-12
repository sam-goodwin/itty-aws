import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListIamCurrentUserGroupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/users/me/groups" }));
export type ListIamCurrentUserGroupsInput =
  typeof ListIamCurrentUserGroupsInput.Type;

// Output Schema
export const ListIamCurrentUserGroupsOutput =
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
export type ListIamCurrentUserGroupsOutput =
  typeof ListIamCurrentUserGroupsOutput.Type;

// The operation
/**
 * List My Groups
 *
 * List the Groups the current user belongs to.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamCurrentUserGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamCurrentUserGroupsInput,
    outputSchema: ListIamCurrentUserGroupsOutput,
    errors: [Forbidden] as const,
  }),
);
