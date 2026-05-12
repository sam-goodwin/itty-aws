import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListVpcsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/vpcs" }));
export type ListVpcsInput = typeof ListVpcsInput.Type;

// Output Schema
export const ListVpcsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcs: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        region: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        v4_subnet: Schema.optional(Schema.String),
        v4_subnet_mask: Schema.optional(Schema.Number),
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
export type ListVpcsOutput = typeof ListVpcsOutput.Type;

// The operation
/**
 * List VPCs
 *
 * Get a list of all VPCs in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listVpcs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVpcsInput,
  outputSchema: ListVpcsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
