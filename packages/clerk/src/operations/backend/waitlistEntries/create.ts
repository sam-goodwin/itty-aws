import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address: Schema.String,
  notify: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "POST", path: "/waitlist_entries" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create a waitlist entry
 *
 * Creates a new waitlist entry for the given email address.
 * If the email address is already on the waitlist, no new entry will be created and the existing waitlist entry will be returned.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
