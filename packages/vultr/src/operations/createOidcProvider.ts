import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateOidcProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    issuer_id: Schema.optional(Schema.String),
    private_key_b64: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/oidc/provider" }));
export type CreateOidcProviderInput = typeof CreateOidcProviderInput.Type;

// Output Schema
export const CreateOidcProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        issuer_id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
  });
export type CreateOidcProviderOutput = typeof CreateOidcProviderOutput.Type;

// The operation
/**
 * Create OIDC Provider
 *
 * Create a new OIDC Provider.
 */
export const createOidcProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOidcProviderInput,
  outputSchema: CreateOidcProviderOutput,
  errors: [BadRequest, Forbidden] as const,
}));
