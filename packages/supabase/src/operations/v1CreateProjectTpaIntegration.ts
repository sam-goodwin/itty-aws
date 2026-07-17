import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateProjectTpaIntegrationInput {
  ref: string;
  oidc_issuer_url?: string;
  jwks_url?: string;
  custom_jwks?: unknown;
}
export const V1CreateProjectTpaIntegrationInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    oidc_issuer_url: Schema.optional(Schema.String),
    jwks_url: Schema.optional(Schema.String),
    custom_jwks: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/config/auth/third-party-auth",
    }),
  ) as unknown as Schema.Codec<V1CreateProjectTpaIntegrationInput>;

// Output Schema
export interface V1CreateProjectTpaIntegrationOutput {
  id: string;
  type: string;
  oidc_issuer_url?: string | null;
  jwks_url?: string | null;
  custom_jwks?: unknown | null;
  resolved_jwks?: unknown | null;
  inserted_at: string;
  updated_at: string;
  resolved_at?: string | null;
}
export const V1CreateProjectTpaIntegrationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    oidc_issuer_url: Schema.optional(Schema.NullOr(Schema.String)),
    jwks_url: Schema.optional(Schema.NullOr(Schema.String)),
    custom_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
    resolved_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
    inserted_at: Schema.String,
    updated_at: Schema.String,
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<V1CreateProjectTpaIntegrationOutput>;

// The operation
/**
 * Creates a new third-party auth integration
 *
 * @param ref - Project ref
 */
export const v1CreateProjectTpaIntegration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: V1CreateProjectTpaIntegrationInput,
    outputSchema: V1CreateProjectTpaIntegrationOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
