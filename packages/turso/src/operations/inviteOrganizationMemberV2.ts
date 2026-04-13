import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";

// Input Schema
export const InviteOrganizationMemberV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/organizations/{organizationSlug}/invites",
    }),
  );
export type InviteOrganizationMemberV2Input =
  typeof InviteOrganizationMemberV2Input.Type;

// Output Schema
export const InviteOrganizationMemberV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invited: Schema.optional(
      Schema.Struct({
        email: Schema.optional(Schema.String),
        role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
        organization: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
      }),
    ),
  });
export type InviteOrganizationMemberV2Output =
  typeof InviteOrganizationMemberV2Output.Type;

// The operation
/**
 * Invite Organization Member
 *
 * Invite a user to an organization. If the user isn't already registered with Turso, they will receive a signup link. If an existing pending invite exists for the same email, it will be replaced.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const inviteOrganizationMemberV2 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InviteOrganizationMemberV2Input,
    outputSchema: InviteOrganizationMemberV2Output,
  }),
);
