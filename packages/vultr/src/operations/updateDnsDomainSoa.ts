import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateDnsDomainSoaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    nsprimary: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PATCH", path: "/domains/{dnsDomain}/soa" }));
export type UpdateDnsDomainSoaInput = typeof UpdateDnsDomainSoaInput.Type;

// Output Schema
export const UpdateDnsDomainSoaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDnsDomainSoaOutput = typeof UpdateDnsDomainSoaOutput.Type;

// The operation
/**
 * Update SOA information
 *
 * Update the SOA information for the DNS Domain. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const updateDnsDomainSoa = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDnsDomainSoaInput,
  outputSchema: UpdateDnsDomainSoaOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
