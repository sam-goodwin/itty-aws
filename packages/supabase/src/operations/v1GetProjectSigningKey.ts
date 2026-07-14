import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetProjectSigningKeyInput {
  id: string;
  ref: string;
}
export const V1GetProjectSigningKeyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/auth/signing-keys/{id}",
    }),
  ) as unknown as Schema.Codec<V1GetProjectSigningKeyInput>;

// Output Schema
export interface V1GetProjectSigningKeyOutput {
  id: string;
  algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
  status: "in_use" | "previously_used" | "revoked" | "standby";
  public_jwk?: unknown | null;
  created_at: string;
  updated_at: string;
}
export const V1GetProjectSigningKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    algorithm: Schema.Literals(["EdDSA", "ES256", "RS256", "HS256"]),
    status: Schema.Literals([
      "in_use",
      "previously_used",
      "revoked",
      "standby",
    ]),
    public_jwk: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<V1GetProjectSigningKeyOutput>;

// The operation
/**
 * Get information about a signing key
 *
 * @param ref - Project ref
 */
export const v1GetProjectSigningKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectSigningKeyInput,
  outputSchema: V1GetProjectSigningKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
