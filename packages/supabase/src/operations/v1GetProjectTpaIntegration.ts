import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetProjectTpaIntegrationInput {
  ref: string;
  tpa_id: string;
}
export const V1GetProjectTpaIntegrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    tpa_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}",
    }),
  ) as unknown as Schema.Codec<V1GetProjectTpaIntegrationInput>;

// Output Schema
export interface V1GetProjectTpaIntegrationOutput {
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
export const V1GetProjectTpaIntegrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    oidc_issuer_url: Schema.optional(Schema.NullOr(Schema.String)),
    jwks_url: Schema.optional(Schema.NullOr(Schema.String)),
    custom_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
    resolved_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
    inserted_at: Schema.String,
    updated_at: Schema.String,
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<V1GetProjectTpaIntegrationOutput>;

// The operation
/**
 * Get a third-party integration
 *
 * @param ref - Project ref
 */
export const v1GetProjectTpaIntegration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetProjectTpaIntegrationInput,
    outputSchema: V1GetProjectTpaIntegrationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
