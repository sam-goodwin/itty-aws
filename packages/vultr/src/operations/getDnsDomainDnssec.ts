import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetDnsDomainDnssecInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/domains/{dnsDomain}/dnssec" }));
export type GetDnsDomainDnssecInput = typeof GetDnsDomainDnssecInput.Type;

// Output Schema
export const GetDnsDomainDnssecOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dns_sec: Schema.optional(Schema.Array(Schema.String)),
  });
export type GetDnsDomainDnssecOutput = typeof GetDnsDomainDnssecOutput.Type;

// The operation
/**
 * Get DNSSec Info
 *
 * Get the DNSSEC information for the DNS Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const getDnsDomainDnssec = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDnsDomainDnssecInput,
  outputSchema: GetDnsDomainDnssecOutput,
  errors: [BadRequest, NotFound] as const,
}));
