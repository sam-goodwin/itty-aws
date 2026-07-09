import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetEmailAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email_id: Schema.String.pipe(T.PathParam()),
    attachment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/emails/{email_id}/attachments/{attachment_id}",
    }),
  );
export type GetEmailAttachmentInput = typeof GetEmailAttachmentInput.Type;

// Output Schema
export const GetEmailAttachmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.NullOr(Schema.String)),
    content_type: Schema.optional(Schema.String),
    content_id: Schema.optional(Schema.String),
    content_disposition: Schema.optional(
      Schema.NullOr(Schema.Literals(["inline", "attachment"])),
    ),
    download_url: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
  });
export type GetEmailAttachmentOutput = typeof GetEmailAttachmentOutput.Type;

// The operation
/**
 * Retrieve a single attachment for a sent email
 *
 * @param email_id - The ID of the email.
 * @param attachment_id - The ID of the attachment.
 */
export const getEmailAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEmailAttachmentInput,
  outputSchema: GetEmailAttachmentOutput,
  errors: [NotFound] as const,
}));
