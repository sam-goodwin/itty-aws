import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDnsDomainsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/domains" }));
export type ListDnsDomainsInput = typeof ListDnsDomainsInput.Type;

// Output Schema
export const ListDnsDomainsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domains: Schema.optional(
    Schema.Array(
      Schema.Struct({
        domain: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        dns_sec: Schema.optional(Schema.String),
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
export type ListDnsDomainsOutput = typeof ListDnsDomainsOutput.Type;

// The operation
/**
 * List DNS Domains
 *
 * List all DNS Domains in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listDnsDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDnsDomainsInput,
  outputSchema: ListDnsDomainsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
