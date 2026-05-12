import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/os" }));
export type ListOsInput = typeof ListOsInput.Type;

// Output Schema
export const ListOsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  os: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        arch: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
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
export type ListOsOutput = typeof ListOsOutput.Type;

// The operation
/**
 * List OS
 *
 * List the OS images available for installation at Vultr.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listOs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOsInput,
  outputSchema: ListOsOutput,
}));
