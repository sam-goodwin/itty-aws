import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1RemoveProjectSigningKeyInput {
  id: string;
  ref: string;
}
export const V1RemoveProjectSigningKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/projects/{ref}/config/auth/signing-keys/{id}",
    }),
  ) as unknown as Schema.Codec<V1RemoveProjectSigningKeyInput>;

// Output Schema
export interface V1RemoveProjectSigningKeyOutput {
  id: string;
  algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
  status: "in_use" | "previously_used" | "revoked" | "standby";
  public_jwk?: unknown | null;
  created_at: string;
  updated_at: string;
}
export const V1RemoveProjectSigningKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<V1RemoveProjectSigningKeyOutput>;

// The operation
/**
 * Remove a signing key from a project. Only possible if the key has been in revoked status for a while.
 *
 * @param ref - Project ref
 */
export const v1RemoveProjectSigningKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1RemoveProjectSigningKeyInput,
    outputSchema: V1RemoveProjectSigningKeyOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
