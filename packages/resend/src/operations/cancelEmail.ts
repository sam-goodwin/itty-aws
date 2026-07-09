import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CancelEmailInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/emails/{email_id}/cancel" }));
export type CancelEmailInput = typeof CancelEmailInput.Type;

// Output Schema
export const CancelEmailOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type CancelEmailOutput = typeof CancelEmailOutput.Type;

// The operation
/**
 * Cancel the schedule of the e-mail.
 *
 * @param email_id - The ID of the email.
 */
export const cancelEmail = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CancelEmailInput,
  outputSchema: CancelEmailOutput,
  errors: [Forbidden, NotFound] as const,
}));
