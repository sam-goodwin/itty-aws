import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InvitesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  target_email: Schema.String,
  first_name: Schema.optional(Schema.String),
  emailing_attempt_made: Schema.Boolean,
  level: Schema.optional(Schema.Literals([1, 8, 15])),
  is_expired: Schema.Boolean,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  created_at: Schema.String,
  updated_at: Schema.String,
  message: Schema.optional(Schema.NullOr(Schema.String)),
  private_project_access: Schema.optional(Schema.NullOr(Schema.Unknown)),
  send_email: Schema.optional(Schema.Boolean),
  combine_pending_invites: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/organizations/{organization_id}/invites/",
  }),
);
export type InvitesCreateInput = typeof InvitesCreateInput.Type;

// Output Schema
export const InvitesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  target_email: Schema.String,
  first_name: Schema.optional(Schema.String),
  emailing_attempt_made: Schema.Boolean,
  level: Schema.optional(Schema.Literals([1, 8, 15])),
  is_expired: Schema.Boolean,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  created_at: Schema.String,
  updated_at: Schema.String,
  message: Schema.optional(Schema.NullOr(Schema.String)),
  private_project_access: Schema.optional(Schema.NullOr(Schema.Unknown)),
  send_email: Schema.optional(Schema.Boolean),
  combine_pending_invites: Schema.optional(Schema.Boolean),
});
export type InvitesCreateOutput = typeof InvitesCreateOutput.Type;

// The operation
export const invitesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvitesCreateInput,
  outputSchema: InvitesCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
