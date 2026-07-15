import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Unauthorized } from "../errors.ts";

// Input Schema
export interface RevokeSessionsInput {}
export const RevokeSessionsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/revoke-sessions" }),
) as unknown as Schema.Codec<RevokeSessionsInput>;

// Output Schema
export interface RevokeSessionsOutput {
  status: boolean;
}
export const RevokeSessionsOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<RevokeSessionsOutput>;

/**
 * Revoke all of the current user's sessions (including the current one).
 *
 * Requires a fresh authenticated session.
 */
export const revokeSessions = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeSessionsInput,
  outputSchema: RevokeSessionsOutput,
  errors: [Unauthorized] as const,
}));
