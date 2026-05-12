import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteOidcProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/oidc/provider/{provider_id}" }),
  );
export type DeleteOidcProviderInput = typeof DeleteOidcProviderInput.Type;

// Output Schema
export const DeleteOidcProviderOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteOidcProviderOutput = typeof DeleteOidcProviderOutput.Type;

// The operation
/**
 * Delete OIDC Provider
 *
 * Delete an OIDC Provider.
 *
 * @param provider_id - The OIDC Provider ID.
 */
export const deleteOidcProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteOidcProviderInput,
  outputSchema: DeleteOidcProviderOutput,
  errors: [Forbidden, NotFound] as const,
}));
