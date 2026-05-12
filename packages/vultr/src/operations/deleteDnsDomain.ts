import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDnsDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dnsDomain: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/domains/{dnsDomain}" }));
export type DeleteDnsDomainInput = typeof DeleteDnsDomainInput.Type;

// Output Schema
export const DeleteDnsDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDnsDomainOutput = typeof DeleteDnsDomainOutput.Type;

// The operation
/**
 * Delete Domain
 *
 * Delete the DNS Domain.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const deleteDnsDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDnsDomainInput,
  outputSchema: DeleteDnsDomainOutput,
  errors: [BadRequest, NotFound] as const,
}));
