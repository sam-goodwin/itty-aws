import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetDnsDomainSoaInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dnsDomain: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/domains/{dnsDomain}/soa" }));
export type GetDnsDomainSoaInput = typeof GetDnsDomainSoaInput.Type;

// Output Schema
export const GetDnsDomainSoaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dns_soa: Schema.optional(
    Schema.Struct({
      nsprimary: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
    }),
  ),
});
export type GetDnsDomainSoaOutput = typeof GetDnsDomainSoaOutput.Type;

// The operation
/**
 * Get SOA information
 *
 * Get SOA information for the DNS Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const getDnsDomainSoa = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDnsDomainSoaInput,
  outputSchema: GetDnsDomainSoaOutput,
  errors: [BadRequest, NotFound] as const,
}));
