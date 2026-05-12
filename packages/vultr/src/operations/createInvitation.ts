import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateInvitationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_invited: Schema.optional(Schema.String),
  permissions: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/v2/invitation" }));
export type CreateInvitationInput = typeof CreateInvitationInput.Type;

// Output Schema
export const CreateInvitationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CreateInvitationOutput = typeof CreateInvitationOutput.Type;

// The operation
/**
 * Create Invitation
 *
 * Invite a user to your organization.
 */
export const createInvitation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInvitationInput,
  outputSchema: CreateInvitationOutput,
  errors: [BadRequest, Forbidden] as const,
}));
