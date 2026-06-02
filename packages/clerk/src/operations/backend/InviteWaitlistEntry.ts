import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const InviteWaitlistEntryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    waitlist_entry_id: Schema.String.pipe(T.PathParam()),
    ignore_existing: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/waitlist_entries/{waitlist_entry_id}/invite",
    }),
  );
export type InviteWaitlistEntryInput = typeof InviteWaitlistEntryInput.Type;

// Output Schema
export const InviteWaitlistEntryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["waitlist_entry"]),
    id: Schema.String,
    email_address: Schema.String,
    status: Schema.Literals(["pending", "invited", "rejected", "completed"]),
    is_locked: Schema.optional(Schema.Boolean),
    created_at: Schema.Number,
    updated_at: Schema.Number,
    invitation: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          object: Schema.Literals(["invitation"]),
          id: Schema.String,
          email_address: Schema.String,
          public_metadata: Schema.Record(Schema.String, Schema.Unknown),
          revoked: Schema.optional(Schema.Boolean),
          status: Schema.Literals([
            "pending",
            "accepted",
            "revoked",
            "expired",
          ]),
          url: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
          created_at: Schema.Number,
          updated_at: Schema.Number,
        }),
      ),
    ),
  });
export type InviteWaitlistEntryOutput = typeof InviteWaitlistEntryOutput.Type;

// The operation
/**
 * Invite a waitlist entry
 *
 * Send an invite to the email address in a waitlist entry.
 *
 * @param waitlist_entry_id - The ID of the waitlist entry to invite
 */
export const InviteWaitlistEntry = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InviteWaitlistEntryInput,
  outputSchema: InviteWaitlistEntryOutput,
  errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
}));
