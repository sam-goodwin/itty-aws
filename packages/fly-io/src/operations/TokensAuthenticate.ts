import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface TokensAuthenticateInput {
  header?: string;
}
export const TokensAuthenticateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/tokens/authenticate" }),
  ) as unknown as Schema.Codec<TokensAuthenticateInput>;

// Output Schema
export type TokensAuthenticateOutput = {
  caveats?: { caveats?: unknown[] };
  header?: string;
  nonce?: { kid?: number[]; proof?: boolean; rnd?: number[] };
  permission_token?: number[];
}[];
export const TokensAuthenticateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      caveats: Schema.optional(
        Schema.Struct({
          caveats: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
      header: Schema.optional(Schema.String),
      nonce: Schema.optional(
        Schema.Struct({
          kid: Schema.optional(Schema.Array(Schema.Number)),
          proof: Schema.optional(Schema.Boolean),
          rnd: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
      permission_token: Schema.optional(Schema.Array(Schema.Number)),
    }),
  ) as unknown as Schema.Codec<TokensAuthenticateOutput>;

// The operation
/**
 * Authenticate token header
 *
 * Verify a token header without checking resource access.
 */
export const TokensAuthenticate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensAuthenticateInput,
  outputSchema: TokensAuthenticateOutput,
  errors: [BadRequest] as const,
}));
