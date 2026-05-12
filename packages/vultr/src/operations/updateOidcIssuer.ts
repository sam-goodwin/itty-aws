import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateOidcIssuerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuer_id: Schema.String.pipe(T.PathParam()),
  source: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/v2/oidc/issuer/{issuer_id}" }));
export type UpdateOidcIssuerInput = typeof UpdateOidcIssuerInput.Type;

// Output Schema
export const UpdateOidcIssuerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateOidcIssuerOutput = typeof UpdateOidcIssuerOutput.Type;

// The operation
/**
 * Update OIDC Issuer
 *
 * Update an OIDC Issuer.
 *
 * @param issuer_id - The OIDC Issuer ID.
 */
export const updateOidcIssuer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateOidcIssuerInput,
  outputSchema: UpdateOidcIssuerOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
