import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetEmailReceivingAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email_id: Schema.String.pipe(T.PathParam()),
    attachment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/emails/receiving/{email_id}/attachments/{attachment_id}",
    }),
  );
export type GetEmailReceivingAttachmentInput =
  typeof GetEmailReceivingAttachmentInput.Type;

// Output Schema
export const GetEmailReceivingAttachmentOutput =
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
export type GetEmailReceivingAttachmentOutput =
  typeof GetEmailReceivingAttachmentOutput.Type;

// The operation
/**
 * Retrieve a single attachment for a received email
 *
 * @param email_id - The ID of the received email.
 * @param attachment_id - The ID of the attachment.
 */
export const getEmailReceivingAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetEmailReceivingAttachmentInput,
    outputSchema: GetEmailReceivingAttachmentOutput,
    errors: [NotFound] as const,
  }),
);
