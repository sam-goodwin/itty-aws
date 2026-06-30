import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateProjectSigningKeyInput {
  ref: string;
  algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
  status?: "in_use" | "standby";
  private_jwk?:
    | {
        kid?: string;
        use?: "sig";
        key_ops?: ("sign" | "verify")[];
        ext?: true;
        kty: "RSA";
        alg?: "RS256";
        n: string;
        e: "AQAB";
        d: string;
        p: string;
        q: string;
        dp: string;
        dq: string;
        qi: string;
      }
    | {
        kid?: string;
        use?: "sig";
        key_ops?: ("sign" | "verify")[];
        ext?: true;
        kty: "EC";
        alg?: "ES256";
        crv: "P-256";
        x: string;
        y: string;
        d: string;
      }
    | {
        kid?: string;
        use?: "sig";
        key_ops?: ("sign" | "verify")[];
        ext?: true;
        kty: "OKP";
        alg?: "EdDSA";
        crv: "Ed25519";
        x: string;
        d: string;
      }
    | {
        kid?: string;
        use?: "sig";
        key_ops?: ("sign" | "verify")[];
        ext?: true;
        kty: "oct";
        alg?: "HS256";
        k: string;
      };
}
export const V1CreateProjectSigningKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    algorithm: Schema.Literals(["EdDSA", "ES256", "RS256", "HS256"]),
    status: Schema.optional(Schema.Literals(["in_use", "standby"])),
    private_jwk: Schema.optional(
      Schema.Union([
        Schema.Struct({
          kid: Schema.optional(Schema.String),
          use: Schema.optional(Schema.Literals(["sig"])),
          key_ops: Schema.optional(
            Schema.Array(Schema.Literals(["sign", "verify"])),
          ),
          ext: Schema.optional(Schema.Literals([true])),
          kty: Schema.Literals(["RSA"]),
          alg: Schema.optional(Schema.Literals(["RS256"])),
          n: Schema.String,
          e: Schema.Literals(["AQAB"]),
          d: Schema.String,
          p: Schema.String,
          q: Schema.String,
          dp: Schema.String,
          dq: Schema.String,
          qi: Schema.String,
        }),
        Schema.Struct({
          kid: Schema.optional(Schema.String),
          use: Schema.optional(Schema.Literals(["sig"])),
          key_ops: Schema.optional(
            Schema.Array(Schema.Literals(["sign", "verify"])),
          ),
          ext: Schema.optional(Schema.Literals([true])),
          kty: Schema.Literals(["EC"]),
          alg: Schema.optional(Schema.Literals(["ES256"])),
          crv: Schema.Literals(["P-256"]),
          x: Schema.String,
          y: Schema.String,
          d: Schema.String,
        }),
        Schema.Struct({
          kid: Schema.optional(Schema.String),
          use: Schema.optional(Schema.Literals(["sig"])),
          key_ops: Schema.optional(
            Schema.Array(Schema.Literals(["sign", "verify"])),
          ),
          ext: Schema.optional(Schema.Literals([true])),
          kty: Schema.Literals(["OKP"]),
          alg: Schema.optional(Schema.Literals(["EdDSA"])),
          crv: Schema.Literals(["Ed25519"]),
          x: Schema.String,
          d: Schema.String,
        }),
        Schema.Struct({
          kid: Schema.optional(Schema.String),
          use: Schema.optional(Schema.Literals(["sig"])),
          key_ops: Schema.optional(
            Schema.Array(Schema.Literals(["sign", "verify"])),
          ),
          ext: Schema.optional(Schema.Literals([true])),
          kty: Schema.Literals(["oct"]),
          alg: Schema.optional(Schema.Literals(["HS256"])),
          k: Schema.String,
        }),
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/config/auth/signing-keys",
    }),
  ) as unknown as Schema.Codec<V1CreateProjectSigningKeyInput>;

// Output Schema
export interface V1CreateProjectSigningKeyOutput {
  id: string;
  algorithm: "EdDSA" | "ES256" | "RS256" | "HS256";
  status: "in_use" | "previously_used" | "revoked" | "standby";
  public_jwk?: unknown | null;
  created_at: string;
  updated_at: string;
}
export const V1CreateProjectSigningKeyOutput =
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
  }) as unknown as Schema.Codec<V1CreateProjectSigningKeyOutput>;

// The operation
/**
 * Create a new signing key for the project in standby status
 *
 * @param ref - Project ref
 */
export const v1CreateProjectSigningKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1CreateProjectSigningKeyInput,
    outputSchema: V1CreateProjectSigningKeyOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
