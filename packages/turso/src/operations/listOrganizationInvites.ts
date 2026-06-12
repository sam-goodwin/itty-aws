import * as Schema from "effect/Schema";
import { InviteSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrganizationInvitesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/invites",
    }),
  );
export type ListOrganizationInvitesInput =
  typeof ListOrganizationInvitesInput.Type;

// Output Schema
export const ListOrganizationInvitesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invites: Schema.optional(Schema.Array(Schema.suspend(() => InviteSchema))),
  });
export type ListOrganizationInvitesOutput =
  typeof ListOrganizationInvitesOutput.Type;

// The operation
/**
 * List Invites
 *
 * Returns a list of invites for the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listOrganizationInvites = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationInvitesInput,
    outputSchema: ListOrganizationInvitesOutput,
  }),
);
