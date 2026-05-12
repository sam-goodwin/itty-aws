import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetTicketReplyAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.String.pipe(T.PathParam()),
    ticketReplyIndex: Schema.String.pipe(T.PathParam()),
    ticketAttachmentIndex: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/tickets/{reference}/replies/{ticketReplyIndex}/attachments/{ticketAttachmentIndex}",
    }),
  );
export type GetTicketReplyAttachmentInput =
  typeof GetTicketReplyAttachmentInput.Type;

// Output Schema
export const GetTicketReplyAttachmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachment: Schema.optional(
      Schema.Struct({
        context_type: Schema.optional(Schema.String),
        file: Schema.optional(Schema.String),
        filename: Schema.optional(Schema.String),
        filesize: Schema.optional(Schema.Number),
      }),
    ),
  });
export type GetTicketReplyAttachmentOutput =
  typeof GetTicketReplyAttachmentOutput.Type;

// The operation
/**
 * Get Ticket Reply Attachment
 *
 * Get a ticket reply attachment.
 *
 * @param reference - The [reference](#operation/list-tickets).
 * @param ticketReplyIndex - The [index](#operation/list-ticket-replies).
 * @param ticketAttachmentIndex - The [attachments index](#operation/list-ticket-replies).
 */
export const getTicketReplyAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTicketReplyAttachmentInput,
    outputSchema: GetTicketReplyAttachmentOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
