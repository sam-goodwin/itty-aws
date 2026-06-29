import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const BulkCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/waitlist_entries/bulk" }));
export type BulkCreateInput = typeof BulkCreateInput.Type;

// Output Schema
export const BulkCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
);
export type BulkCreateOutput = typeof BulkCreateOutput.Type;

// The operation
/**
 * Create multiple waitlist entries
 *
 * Creates multiple waitlist entries for the provided email addresses.
 * You can choose whether to send confirmation emails by setting the `notify` parameter to `true` or `false` for each entry.
 * If the `notify` parameter is omitted, it defaults to `true`.
 * If an email address is already on the waitlist, no new entry will be created and the existing waitlist entry will be returned.
 * Duplicate email addresses within the same request are not allowed.
 * This endpoint is limited to a maximum of 50 entries per API call. If you need to add more entries, please make multiple requests.
 */
export const bulkCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BulkCreateInput,
  outputSchema: BulkCreateOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
