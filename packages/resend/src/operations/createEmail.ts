import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  MethodNotAllowed,
  Conflict,
  UnprocessableEntity,
  UnavailableForLegalReasons,
} from "../errors.ts";

// Input Schema
export const CreateEmailInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  from: Schema.String,
  to: Schema.Unknown,
  subject: Schema.String,
  bcc: Schema.optional(Schema.Unknown),
  cc: Schema.optional(Schema.Unknown),
  reply_to: Schema.optional(Schema.Unknown),
  html: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  template: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ),
  headers: Schema.optional(Schema.Unknown),
  scheduled_at: Schema.optional(Schema.String),
  attachments: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        filename: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        content_type: Schema.optional(Schema.String),
        content_id: Schema.optional(Schema.String),
      }),
    ),
  ),
  tags: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  ),
  topic_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/emails" }));
export type CreateEmailInput = typeof CreateEmailInput.Type;

// Output Schema
export const CreateEmailOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
export type CreateEmailOutput = typeof CreateEmailOutput.Type;

// The operation
/**
 * Send an email
 *
 * @param Idempotency-Key - A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)
 */
export const createEmail = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEmailInput,
  outputSchema: CreateEmailOutput,
  errors: [
    BadRequest,
    Forbidden,
    MethodNotAllowed,
    Conflict,
    UnprocessableEntity,
    UnavailableForLegalReasons,
  ] as const,
}));
