import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const RejectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  waitlist_entry_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/waitlist_entries/{waitlist_entry_id}/reject",
  }),
);
export type RejectInput = typeof RejectInput.Type;

// Output Schema
export const RejectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        status: Schema.Literals(["pending", "accepted", "revoked", "expired"]),
        url: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
  ),
});
export type RejectOutput = typeof RejectOutput.Type;

// The operation
/**
 * Reject a waitlist entry
 *
 * Reject a waitlist entry.
 *
 * @param waitlist_entry_id - The ID of the waitlist entry to reject
 */
export const reject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RejectInput,
  outputSchema: RejectOutput,
  errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
}));
