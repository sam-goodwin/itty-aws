import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateInvitationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address: Schema.String,
  public_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  redirect_url: Schema.optional(Schema.String),
  notify: Schema.optional(Schema.NullOr(Schema.Boolean)),
  ignore_existing: Schema.optional(Schema.NullOr(Schema.Boolean)),
  expires_in_days: Schema.optional(Schema.NullOr(Schema.Number)),
  template_slug: Schema.optional(
    Schema.Literals(["invitation", "waitlist_invitation"]),
  ),
}).pipe(T.Http({ method: "POST", path: "/invitations" }));
export type CreateInvitationInput = typeof CreateInvitationInput.Type;

// Output Schema
export const CreateInvitationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.Literals(["invitation"]),
    id: Schema.String,
    email_address: Schema.String,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    revoked: Schema.optional(Schema.Boolean),
    status: Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    url: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  },
);
export type CreateInvitationOutput = typeof CreateInvitationOutput.Type;

// The operation
/**
 * Create an invitation
 *
 * Creates a new invitation for the given email address and sends the invitation email.
 * Keep in mind that you cannot create an invitation if there is already one for the given email address.
 * Also, trying to create an invitation for an email address that already exists in your application will result to an error.
 */
export const CreateInvitation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInvitationInput,
  outputSchema: CreateInvitationOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
