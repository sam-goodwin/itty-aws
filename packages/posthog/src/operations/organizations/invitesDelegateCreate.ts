import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const InvitesDelegateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    target_email: Schema.String,
    message: Schema.optional(Schema.String),
    step_at_delegation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/invites/delegate/",
    }),
  );
export type InvitesDelegateCreateInput = typeof InvitesDelegateCreateInput.Type;

// Output Schema
export const InvitesDelegateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    private_project_access: Schema.optional(Schema.Unknown),
    send_email: Schema.optional(Schema.Boolean),
    combine_pending_invites: Schema.optional(Schema.Boolean),
  });
export type InvitesDelegateCreateOutput =
  typeof InvitesDelegateCreateOutput.Type;

// The operation
/**
 * Create an onboarding delegation invite: an admin-level invite flagged as a setup delegation.
 * Sends a single dedicated delegation email and records the inviting user as having delegated.
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const invitesDelegateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InvitesDelegateCreateInput,
    outputSchema: InvitesDelegateCreateOutput,
  }),
);
