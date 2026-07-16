import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1UpdateProjectSigningKeyInput {
  id: string;
  ref: string;
  status: "in_use" | "previously_used" | "revoked" | "standby";
}
export const V1UpdateProjectSigningKeyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    ref: Schema.String.pipe(T.PathParam()),
    status: Schema.Literals([
      "in_use",
      "previously_used",
      "revoked",
      "standby",
    ]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/projects/{ref}/config/auth/signing-keys/{id}",
    }),
  ) as unknown as Schema.Codec<V1UpdateProjectSigningKeyInput>;

// Output Schema
export interface V1UpdateProjectSigningKeyOutput {
  id: string;
  algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
  status: "in_use" | "previously_used" | "revoked" | "standby";
  public_jwk?: unknown | null;
  created_at: string;
  updated_at: string;
}
export const V1UpdateProjectSigningKeyOutput =
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
  }) as unknown as Schema.Codec<V1UpdateProjectSigningKeyOutput>;

// The operation
/**
 * Update a signing key, mainly its status
 *
 * @param ref - Project ref
 */
export const v1UpdateProjectSigningKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdateProjectSigningKeyInput,
  outputSchema: V1UpdateProjectSigningKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
