import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const VerifyDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/domains/{domain_id}/verify" }));
export type VerifyDomainInput = typeof VerifyDomainInput.Type;

// Output Schema
export const VerifyDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type VerifyDomainOutput = typeof VerifyDomainOutput.Type;

// The operation
/**
 * Verify an existing domain
 *
 * Triggers verification of the domain's DNS records including DKIM, SPF, and the tracking CNAME (if a tracking subdomain is configured).
 *
 * @param domain_id - The ID of the domain.
 */
export const verifyDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyDomainInput,
  outputSchema: VerifyDomainOutput,
  errors: [NotFound] as const,
}));
