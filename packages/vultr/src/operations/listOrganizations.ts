import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListOrganizationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v2/organizations" }));
export type ListOrganizationsInput = typeof ListOrganizationsInput.Type;

// Output Schema
export const ListOrganizationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          date_created: Schema.optional(Schema.String),
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
export type ListOrganizationsOutput = typeof ListOrganizationsOutput.Type;

// The operation
/**
 * List Organizations
 *
 * Get a list of all Organizations in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listOrganizations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationsInput,
  outputSchema: ListOrganizationsOutput,
  errors: [Forbidden] as const,
}));
