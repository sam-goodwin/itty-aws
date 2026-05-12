import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetDnsDomainRecordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    recordId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/domains/{dnsDomain}/records/{recordId}" }),
  );
export type GetDnsDomainRecordInput = typeof GetDnsDomainRecordInput.Type;

// Output Schema
export const GetDnsDomainRecordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    record: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        data: Schema.optional(Schema.String),
        priority: Schema.optional(Schema.Number),
        ttl: Schema.optional(Schema.Number),
      }),
    ),
  });
export type GetDnsDomainRecordOutput = typeof GetDnsDomainRecordOutput.Type;

// The operation
/**
 * Get Record
 *
 * Get information for a DNS Record.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 * @param recordId - The [DNS Record id](#operation/list-dns-domain-records).
 */
export const getDnsDomainRecord = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDnsDomainRecordInput,
  outputSchema: GetDnsDomainRecordOutput,
  errors: [BadRequest, NotFound] as const,
}));
