import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RevokeAPITokenInput {
  tokenName: string;
}
export const RevokeAPITokenInput = /*@__PURE__*/ Schema.Struct({
  tokenName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/auth/api-tokens/{tokenName}" }),
) as unknown as Schema.Codec<RevokeAPITokenInput>;

// Output Schema
export interface RevokeAPITokenOutput {
  token?: string;
}
export const RevokeAPITokenOutput = /*@__PURE__*/ Schema.Struct({
  token: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RevokeAPITokenOutput>;

// The operation
/**
 * Revoke API Token
 *
 * Revokes the provided API token belonging to a user.
 *
 * @param tokenName - The name of the api token.
 */
export const revokeAPIToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeAPITokenInput,
  outputSchema: RevokeAPITokenOutput,
  errors: [NotFound] as const,
}));
