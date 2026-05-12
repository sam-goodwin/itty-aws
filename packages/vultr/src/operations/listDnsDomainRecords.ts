import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListDnsDomainRecordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/domains/{dnsDomain}/records" }));
export type ListDnsDomainRecordsInput = typeof ListDnsDomainRecordsInput.Type;

// Output Schema
export const ListDnsDomainRecordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    records: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          data: Schema.optional(Schema.String),
          priority: Schema.optional(Schema.Number),
          ttl: Schema.optional(Schema.Number),
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
export type ListDnsDomainRecordsOutput = typeof ListDnsDomainRecordsOutput.Type;

// The operation
/**
 * List Records
 *
 * Get the DNS records for the Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listDnsDomainRecords = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListDnsDomainRecordsInput,
    outputSchema: ListDnsDomainRecordsOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
