import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteOidcIssuerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuer_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/oidc/issuer/{issuer_id}" }));
export type DeleteOidcIssuerInput = typeof DeleteOidcIssuerInput.Type;

// Output Schema
export const DeleteOidcIssuerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteOidcIssuerOutput = typeof DeleteOidcIssuerOutput.Type;

// The operation
/**
 * Delete OIDC Issuer
 *
 * Delete an OIDC Issuer.
 *
 * @param issuer_id - The OIDC Issuer ID.
 */
export const deleteOidcIssuer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteOidcIssuerInput,
  outputSchema: DeleteOidcIssuerOutput,
  errors: [Forbidden, NotFound] as const,
}));
