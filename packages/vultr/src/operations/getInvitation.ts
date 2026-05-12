import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInvitationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/invitation/{id}" }));
export type GetInvitationInput = typeof GetInvitationInput.Type;

// Output Schema
export const GetInvitationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invitation: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      inviter_name: Schema.optional(Schema.String),
      inviter_email: Schema.optional(Schema.String),
      email_invited: Schema.optional(Schema.String),
      email_registered: Schema.optional(Schema.String),
      permissions: Schema.optional(Schema.String),
      org_id: Schema.optional(Schema.String),
      org_name: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      date_responded: Schema.optional(Schema.String),
      expiration_date: Schema.optional(Schema.String),
      invite_status: Schema.optional(Schema.String),
    }),
  ),
});
export type GetInvitationOutput = typeof GetInvitationOutput.Type;

// The operation
/**
 * Get Invitation
 *
 * Get information about an Invitation.
 *
 * @param id - The Invitation ID.
 */
export const getInvitation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInvitationInput,
  outputSchema: GetInvitationOutput,
  errors: [Forbidden, NotFound] as const,
}));
