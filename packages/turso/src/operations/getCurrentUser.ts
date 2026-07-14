import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCurrentUserInput {}
export const GetCurrentUserInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/user" }),
) as unknown as Schema.Codec<GetCurrentUserInput>;

// Output Schema
export interface GetCurrentUserOutput {
  user?: {
    username?: string;
    name?: string;
    email?: string;
    avatarUrl?: string;
    plan?: string;
    mfa?: boolean;
    has_pending_invites?: boolean;
  };
}
export const GetCurrentUserOutput = /*@__PURE__*/ Schema.Struct({
  user: Schema.optional(
    Schema.Struct({
      username: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      avatarUrl: Schema.optional(Schema.String),
      plan: Schema.optional(Schema.String),
      mfa: Schema.optional(Schema.Boolean),
      has_pending_invites: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<GetCurrentUserOutput>;

// The operation
/**
 * Get Current User
 *
 * Returns information about the currently authenticated user.
 */
export const getCurrentUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInput,
  outputSchema: GetCurrentUserOutput,
}));
