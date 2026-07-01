import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface SsoControllerJsonWebKeySetInput {
  clientId: string;
}
export const SsoControllerJsonWebKeySetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/sso/jwks/{clientId}" }),
  ) as unknown as Schema.Codec<SsoControllerJsonWebKeySetInput>;

// Output Schema
export interface SsoControllerJsonWebKeySetOutput {
  keys?: ReadonlyArray<{
    alg: string;
    kty: string;
    use: string;
    x5c: ReadonlyArray<string>;
    n: string;
    e: string;
    kid: string;
    "x5t#S256": string;
  }>;
}
export const SsoControllerJsonWebKeySetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(
        Schema.Struct({
          alg: Schema.String,
          kty: Schema.String,
          use: Schema.String,
          x5c: Schema.Array(Schema.String),
          n: Schema.String,
          e: Schema.String,
          kid: Schema.String,
          "x5t#S256": Schema.String,
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SsoControllerJsonWebKeySetOutput>;

// The operation
/**
 * Get JWKS
 *
 * Returns the JSON Web Key Set (JWKS) containing the public keys used for verifying access tokens.
 *
 * @param clientId - Identifies the application making the request to the WorkOS server. You can obtain your client ID from the [API Keys](https://dashboard.workos.com/api-keys) page in the dashboard.
 */
export const SsoControllerJsonWebKeySet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SsoControllerJsonWebKeySetInput,
    outputSchema: SsoControllerJsonWebKeySetOutput,
    errors: [NotFound] as const,
  }),
);
