import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InvitesBulkCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    target_email: Schema.optional(Schema.String),
    first_name: Schema.optional(Schema.String),
    emailing_attempt_made: Schema.optional(Schema.Boolean),
    level: Schema.optional(Schema.Literals([1, 8, 15])),
    is_expired: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    private_project_access: Schema.optional(Schema.NullOr(Schema.Unknown)),
    send_email: Schema.optional(Schema.Boolean),
    combine_pending_invites: Schema.optional(Schema.Boolean),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/api/organizations/{organization_id}/invites/bulk/",
  }),
);
export type InvitesBulkCreateInput = typeof InvitesBulkCreateInput.Type;

// Output Schema
export const InvitesBulkCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InvitesBulkCreateOutput = typeof InvitesBulkCreateOutput.Type;

// The operation
export const invitesBulkCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvitesBulkCreateInput,
  outputSchema: InvitesBulkCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
