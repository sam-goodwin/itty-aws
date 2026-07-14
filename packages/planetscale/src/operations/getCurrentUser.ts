import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetCurrentUserInput {}
export const GetCurrentUserInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/user" }),
) as unknown as Schema.Codec<GetCurrentUserInput>;

// Output Schema
export interface GetCurrentUserOutput {
  id: string;
  display_name: string;
  name?: string | null;
  email: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  two_factor_auth_configured: boolean;
  default_organization?: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  } | null;
  sso?: boolean | null;
  managed?: boolean | null;
  directory_managed?: boolean | null;
  email_verified?: boolean | null;
}
export const GetCurrentUserOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetCurrentUserOutput>;

// The operation
/**
 * Get current user
 *
 * Get the user associated with this service token
 */
export const getCurrentUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInput,
  outputSchema: GetCurrentUserOutput,
  errors: [Forbidden, NotFound] as const,
}));
