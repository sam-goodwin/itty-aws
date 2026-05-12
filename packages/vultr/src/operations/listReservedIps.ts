import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListReservedIpsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/reserved-ips" }));
export type ListReservedIpsInput = typeof ListReservedIpsInput.Type;

// Output Schema
export const ListReservedIpsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reserved_ips: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        ip_type: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        subnet_size: Schema.optional(Schema.Number),
        label: Schema.optional(Schema.String),
        instance_id: Schema.optional(Schema.String),
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
export type ListReservedIpsOutput = typeof ListReservedIpsOutput.Type;

// The operation
/**
 * List Reserved IPs
 *
 * List all Reserved IPs in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listReservedIps = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListReservedIpsInput,
  outputSchema: ListReservedIpsOutput,
  errors: [BadRequest, NotFound] as const,
}));
