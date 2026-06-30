import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateOrganizationMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
    role: Schema.Literals([
      "admin",
      "member",
      "editor",
      "viewer",
      "collaborator",
    ]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{org_id}/members/{member_id}",
    }),
  );
export type UpdateOrganizationMemberInput =
  typeof UpdateOrganizationMemberInput.Type;

// Output Schema
export const UpdateOrganizationMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    user_id: Schema.String,
    org_id: Schema.String,
    role: Schema.Literals([
      "admin",
      "member",
      "editor",
      "viewer",
      "collaborator",
    ]),
    joined_at: Schema.optional(Schema.String),
  });
export type UpdateOrganizationMemberOutput =
  typeof UpdateOrganizationMemberOutput.Type;

// The operation
/**
 * Update role for organization member
 *
 * Updates the role of an existing member in the specified organization.
 * The requested role must be valid for the organization.
 * Only organization admins can call this endpoint.
 *
 * @param org_id - The Neon organization ID
 * @param member_id - The Neon organization member ID
 */
export const updateOrganizationMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateOrganizationMemberInput,
    outputSchema: UpdateOrganizationMemberOutput,
  }),
);
