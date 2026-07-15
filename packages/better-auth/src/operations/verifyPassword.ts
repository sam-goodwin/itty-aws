import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface VerifyPasswordInput {
  password: string;
}
export const VerifyPasswordInput = /*@__PURE__*/ Schema.Struct({
  password: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/verify-password" }),
) as unknown as Schema.Codec<VerifyPasswordInput>;

// Output Schema
export interface VerifyPasswordOutput {
  status: boolean;
}
export const VerifyPasswordOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<VerifyPasswordOutput>;

/**
 * Verify the current user's password (a re-authentication gate).
 *
 * Requires an authenticated session. Returns `{ status: true }` when the
 * supplied password matches.
 *
 * @param password - The password to verify against the current user.
 */
export const verifyPassword = /*@__PURE__*/ API.make(() => ({
  inputSchema: VerifyPasswordInput,
  outputSchema: VerifyPasswordOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
