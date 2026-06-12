import * as Schema from "effect/Schema";
import { InviteSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const InviteOrganizationMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/invites",
    }),
  );
export type InviteOrganizationMemberInput =
  typeof InviteOrganizationMemberInput.Type;

// Output Schema
export const InviteOrganizationMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invited: Schema.optional(Schema.suspend(() => InviteSchema)),
  });
export type InviteOrganizationMemberOutput =
  typeof InviteOrganizationMemberOutput.Type;

// The operation
/**
 * Invite Organization Member
 *
 * Invite a user (who isn't already a Turso user) to an organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const inviteOrganizationMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InviteOrganizationMemberInput,
    outputSchema: InviteOrganizationMemberOutput,
    errors: [BadRequest] as const,
  }),
);
