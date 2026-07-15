import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Unauthorized } from "../errors.ts";

// Input Schema
export interface SignOutInput {}
export const SignOutInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/sign-out" }),
) as unknown as Schema.Codec<SignOutInput>;

// Output Schema
export interface SignOutOutput {
  success: boolean;
}
export const SignOutOutput = /*@__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
}) as unknown as Schema.Codec<SignOutOutput>;

/**
 * Sign out the current session.
 *
 * Requires an authenticated session (send the session token as a bearer).
 * Clears the session server-side and returns `{ success: true }`.
 */
export const signOut = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignOutInput,
  outputSchema: SignOutOutput,
  errors: [Unauthorized] as const,
}));
