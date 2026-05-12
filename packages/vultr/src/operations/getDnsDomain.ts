import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetDnsDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dnsDomain: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/domains/{dnsDomain}" }));
export type GetDnsDomainInput = typeof GetDnsDomainInput.Type;

// Output Schema
export const GetDnsDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(
    Schema.Struct({
      domain: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      dns_sec: Schema.optional(Schema.String),
    }),
  ),
});
export type GetDnsDomainOutput = typeof GetDnsDomainOutput.Type;

// The operation
/**
 * Get DNS Domain
 *
 * Get information for the DNS Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const getDnsDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDnsDomainInput,
  outputSchema: GetDnsDomainOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
