import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListRegionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/regions" }));
export type ListRegionsInput = typeof ListRegionsInput.Type;

// Output Schema
export const ListRegionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        options: Schema.optional(Schema.Array(Schema.String)),
        continent: Schema.optional(Schema.String),
        city: Schema.optional(Schema.String),
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
export type ListRegionsOutput = typeof ListRegionsOutput.Type;

// The operation
/**
 * List Regions
 *
 * List all Regions at Vultr.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegionsInput,
  outputSchema: ListRegionsOutput,
}));
