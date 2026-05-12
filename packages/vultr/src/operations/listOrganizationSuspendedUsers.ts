import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListOrganizationSuspendedUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/organizations/{id}/suspended-users" }),
  );
export type ListOrganizationSuspendedUsersInput =
  typeof ListOrganizationSuspendedUsersInput.Type;

// Output Schema
export const ListOrganizationSuspendedUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    users: Schema.optional(
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
export type ListOrganizationSuspendedUsersOutput =
  typeof ListOrganizationSuspendedUsersOutput.Type;

// The operation
/**
 * List Suspended Organization Users
 *
 * List all suspended users in the Organization.
 *
 * @param id - The Organization ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listOrganizationSuspendedUsers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListOrganizationSuspendedUsersInput,
    outputSchema: ListOrganizationSuspendedUsersOutput,
    errors: [Forbidden, NotFound] as const,
  }));
