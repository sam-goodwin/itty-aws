import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListIsosInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/iso" }));
export type ListIsosInput = typeof ListIsosInput.Type;

// Output Schema
export const ListIsosOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isos: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        filename: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        md5sum: Schema.optional(Schema.String),
        sha512sum: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
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
export type ListIsosOutput = typeof ListIsosOutput.Type;

// The operation
/**
 * List ISOs
 *
 * Get the ISOs in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIsos = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListIsosInput,
  outputSchema: ListIsosOutput,
  errors: [BadRequest, NotFound] as const,
}));
