import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateOidcIssuerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/oidc/issuer" }));
export type CreateOidcIssuerInput = typeof CreateOidcIssuerInput.Type;

// Output Schema
export const CreateOidcIssuerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    issuer: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        uri: Schema.optional(Schema.String),
        kid: Schema.optional(Schema.String),
        kty: Schema.optional(Schema.String),
        n: Schema.optional(Schema.String),
        e: Schema.optional(Schema.String),
        alg: Schema.optional(Schema.String),
        use: Schema.optional(Schema.String),
        jwks_fetched_at: Schema.optional(Schema.String),
        jwks_expires_at: Schema.optional(Schema.String),
      }),
    ),
  },
);
export type CreateOidcIssuerOutput = typeof CreateOidcIssuerOutput.Type;

// The operation
/**
 * Create OIDC Issuer
 *
 * Create a new OIDC Issuer.
 */
export const createOidcIssuer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOidcIssuerInput,
  outputSchema: CreateOidcIssuerOutput,
  errors: [BadRequest, Forbidden] as const,
}));
