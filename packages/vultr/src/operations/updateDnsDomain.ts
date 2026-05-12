import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateDnsDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dnsDomain: Schema.String.pipe(T.PathParam()),
  dns_sec: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/domains/{dnsDomain}" }));
export type UpdateDnsDomainInput = typeof UpdateDnsDomainInput.Type;

// Output Schema
export const UpdateDnsDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDnsDomainOutput = typeof UpdateDnsDomainOutput.Type;

// The operation
/**
 * Update a DNS Domain
 *
 * Update the DNS Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const updateDnsDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDnsDomainInput,
  outputSchema: UpdateDnsDomainOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
