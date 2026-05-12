import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateOidcProviderTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider_id: Schema.String.pipe(T.PathParam()),
    grant_type: Schema.optional(Schema.String),
    subject_token: Schema.optional(Schema.String),
    subject_token_type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/oidc/provider/{provider_id}/token" }),
  );
export type CreateOidcProviderTokenInput =
  typeof CreateOidcProviderTokenInput.Type;

// Output Schema
export const CreateOidcProviderTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access_token: Schema.optional(SensitiveString),
    token_type: Schema.optional(Schema.String),
    expires_in: Schema.optional(Schema.Number),
  });
export type CreateOidcProviderTokenOutput =
  typeof CreateOidcProviderTokenOutput.Type;

// The operation
/**
 * Create OIDC Provider Token
 *
 * Create an OIDC token via the specified provider.
 *
 * @param provider_id - The OIDC Provider ID.
 */
export const createOidcProviderToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateOidcProviderTokenInput,
    outputSchema: CreateOidcProviderTokenOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
