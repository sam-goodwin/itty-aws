import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface RevokeSessionInput {
  token: string;
}
export const RevokeSessionInput = /*@__PURE__*/ Schema.Struct({
  token: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/revoke-session" }),
) as unknown as Schema.Codec<RevokeSessionInput>;

// Output Schema
export interface RevokeSessionOutput {
  status: boolean;
}
export const RevokeSessionOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<RevokeSessionOutput>;

/**
 * Revoke a specific session by its token.
 *
 * Requires a fresh authenticated session.
 *
 * @param token - The session token to revoke.
 */
export const revokeSession = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeSessionInput,
  outputSchema: RevokeSessionOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
