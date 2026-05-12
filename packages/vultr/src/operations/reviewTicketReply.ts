import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ReviewTicketReplyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    reference: Schema.String.pipe(T.PathParam()),
    ticketReplyIndex: Schema.String.pipe(T.PathParam()),
    comment: Schema.String,
    rating: Schema.Number,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/tickets/{reference}/replies/{ticketReplyIndex}/review",
  }),
);
export type ReviewTicketReplyInput = typeof ReviewTicketReplyInput.Type;

// Output Schema
export const ReviewTicketReplyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReviewTicketReplyOutput = typeof ReviewTicketReplyOutput.Type;

// The operation
/**
 * Rate Ticket Reply
 *
 * Rate a ticket reply from Vultr.
 *
 * @param reference - The [reference](#operation/list-tickets).
 * @param ticketReplyIndex - The [index](#operation/list-ticket-replies).
 */
export const reviewTicketReply = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReviewTicketReplyInput,
  outputSchema: ReviewTicketReplyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
