import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface TokensRequestKmsInput {}
export const TokensRequestKmsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "POST", path: "/tokens/kms" }),
) as unknown as Schema.Codec<TokensRequestKmsInput>;

// Output Schema
export type TokensRequestKmsOutput = void;
export const TokensRequestKmsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TokensRequestKmsOutput>;

// The operation
/**
 * Request a Petsem token for accessing KMS
 *
 * This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/apps-resource/) for details about using the Apps resource.
 */
export const TokensRequestKms = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensRequestKmsInput,
  outputSchema: TokensRequestKmsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
