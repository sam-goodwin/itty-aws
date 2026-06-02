import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetCurrentUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/user" }));
export type GetCurrentUserInput = typeof GetCurrentUserInput.Type;

// Output Schema
export const GetCurrentUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  display_name: Schema.String,
  name: Schema.optional(Schema.NullOr(Schema.String)),
  email: Schema.String,
  avatar_url: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  two_factor_auth_configured: Schema.Boolean,
  default_organization: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
    ),
  ),
  sso: Schema.optional(Schema.NullOr(Schema.Boolean)),
  managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
  directory_managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
  email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
});
export type GetCurrentUserOutput = typeof GetCurrentUserOutput.Type;

// The operation
/**
 * Get current user
 *
 * Get the user associated with this service token
 */
export const getCurrentUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInput,
  outputSchema: GetCurrentUserOutput,
  errors: [Forbidden, NotFound] as const,
}));
