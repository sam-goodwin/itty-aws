import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetEmailReceivingInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    email_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/emails/receiving/{email_id}" }));
export type GetEmailReceivingInput = typeof GetEmailReceivingInput.Type;

// Output Schema
export const GetEmailReceivingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    to: Schema.optional(Schema.Array(Schema.String)),
    from: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    message_id: Schema.optional(Schema.String),
    bcc: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    cc: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    reply_to: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    html: Schema.optional(Schema.NullOr(Schema.String)),
    text: Schema.optional(Schema.NullOr(Schema.String)),
    headers: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    attachments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          filename: Schema.optional(Schema.NullOr(Schema.String)),
          content_type: Schema.optional(Schema.String),
          content_id: Schema.optional(Schema.String),
          content_disposition: Schema.optional(
            Schema.NullOr(Schema.Literals(["inline", "attachment"])),
          ),
          size: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type GetEmailReceivingOutput = typeof GetEmailReceivingOutput.Type;

// The operation
/**
 * Retrieve a single received email
 *
 * @param email_id - The ID of the received email.
 */
export const getEmailReceiving = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEmailReceivingInput,
  outputSchema: GetEmailReceivingOutput,
  errors: [NotFound] as const,
}));
