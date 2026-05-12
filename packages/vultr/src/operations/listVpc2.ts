import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/vpc2" }));
export type ListVpc2Input = typeof ListVpc2Input.Type;

// Output Schema
export const ListVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcs: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        region: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        ip_block: Schema.optional(Schema.String),
        prefix_length: Schema.optional(Schema.Number),
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
export type ListVpc2Output = typeof ListVpc2Output.Type;

// The operation
/**
 * List VPC 2.0 networks
 *
 * Get a list of all VPC 2.0 networks in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVpc2Input,
  outputSchema: ListVpc2Output,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
