import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Unauthorized } from "../errors.ts";

// Input Schema
export interface RevokeOtherSessionsInput {}
export const RevokeOtherSessionsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/revoke-other-sessions" }),
) as unknown as Schema.Codec<RevokeOtherSessionsInput>;

// Output Schema
export interface RevokeOtherSessionsOutput {
  status: boolean;
}
export const RevokeOtherSessionsOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<RevokeOtherSessionsOutput>;

/**
 * Revoke every session except the current one.
 *
 * Requires a fresh authenticated session.
 */
export const revokeOtherSessions = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeOtherSessionsInput,
  outputSchema: RevokeOtherSessionsOutput,
  errors: [Unauthorized] as const,
}));
