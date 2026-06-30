import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectSigningKeysInput {
  ref: string;
}
export const V1GetProjectSigningKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/auth/signing-keys",
    }),
  ) as unknown as Schema.Codec<V1GetProjectSigningKeysInput>;

// Output Schema
export interface V1GetProjectSigningKeysOutput {
  keys: {
    id: string;
    algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
    status: "in_use" | "previously_used" | "revoked" | "standby";
    public_jwk?: unknown | null;
    created_at: string;
    updated_at: string;
  }[];
}
export const V1GetProjectSigningKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<V1GetProjectSigningKeysOutput>;

// The operation
/**
 * List all signing keys for the project
 *
 * @param ref - Project ref
 */
export const v1GetProjectSigningKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetProjectSigningKeysInput,
    outputSchema: V1GetProjectSigningKeysOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
