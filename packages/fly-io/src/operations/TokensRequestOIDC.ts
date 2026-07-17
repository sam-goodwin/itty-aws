import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface TokensRequestOIDCInput {
  aud?: string;
  aws_principal_tags?: boolean;
}
export const TokensRequestOIDCInput = /*@__PURE__*/ Schema.Struct({
  aud: Schema.optional(Schema.String),
  aws_principal_tags: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/tokens/oidc" }),
) as unknown as Schema.Codec<TokensRequestOIDCInput>;

// Output Schema
export type TokensRequestOIDCOutput = void;
export const TokensRequestOIDCOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TokensRequestOIDCOutput>;

// The operation
/**
 * Request an OIDC token
 *
 * Request an Open ID Connect token for your machine. Customize the audience claim with the `aud` parameter. This returns a JWT token. Learn more about [using OpenID Connect](/docs/reference/openid-connect/) on Fly.io.
 */
export const TokensRequestOIDC = /*@__PURE__*/ API.make(() => ({
  inputSchema: TokensRequestOIDCInput,
  outputSchema: TokensRequestOIDCOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
