import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateMemberRoleInput {
  organizationSlug: string;
  username: string;
  role: "admin" | "member" | "viewer";
}
export const UpdateMemberRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
  role: Schema.Literals(["admin", "member", "viewer"]),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/v1/organizations/{organizationSlug}/members/{username}",
  }),
) as unknown as Schema.Codec<UpdateMemberRoleInput>;

// Output Schema
export interface UpdateMemberRoleOutput {
  member?: {
    username?: string;
    email?: string;
    role?: "admin" | "member" | "viewer";
  };
}
export const UpdateMemberRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    member: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
      }),
    ),
  },
) as unknown as Schema.Codec<UpdateMemberRoleOutput>;

// The operation
/**
 * Update Member Role
 *
 * Update the role of an organization member. Only organization admins or owners can perform this action.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param username - The username of a Turso user or organization member.
 */
export const updateMemberRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMemberRoleInput,
  outputSchema: UpdateMemberRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
