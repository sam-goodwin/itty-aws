import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListEmailsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/emails" }));
export type ListEmailsInput = typeof ListEmailsInput.Type;

// Output Schema
export const ListEmailsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        to: Schema.optional(Schema.Array(Schema.String)),
        from: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        subject: Schema.optional(Schema.String),
        html: Schema.optional(Schema.String),
        text: Schema.optional(Schema.String),
        bcc: Schema.optional(Schema.Array(Schema.String)),
        cc: Schema.optional(Schema.Array(Schema.String)),
        reply_to: Schema.optional(Schema.Array(Schema.String)),
        last_event: Schema.optional(
          Schema.Literals([
            "bounced",
            "canceled",
            "clicked",
            "complained",
            "delivered",
            "delivery_delayed",
            "failed",
            "opened",
            "queued",
            "scheduled",
            "sent",
            "suppressed",
          ]),
        ),
      }),
    ),
  ),
});
export type ListEmailsOutput = typeof ListEmailsOutput.Type;

// The operation
/**
 * Retrieve a list of emails
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listEmails = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListEmailsInput,
  outputSchema: ListEmailsOutput,
}));
