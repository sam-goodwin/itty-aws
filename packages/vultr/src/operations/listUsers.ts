import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/users" }));
export type ListUsersInput = typeof ListUsersInput.Type;

// Output Schema
export const ListUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  users: Schema.optional(
    Schema.Array(
      Schema.Struct({
        user: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            api_enabled: Schema.optional(Schema.Boolean),
            email: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            acls: Schema.optional(Schema.Array(Schema.String)),
          }),
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
export type ListUsersOutput = typeof ListUsersOutput.Type;

// The operation
/**
 * Get Users
 *
 * Get a list of all Users in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListUsersInput,
  outputSchema: ListUsersOutput,
  errors: [BadRequest, NotFound] as const,
}));
