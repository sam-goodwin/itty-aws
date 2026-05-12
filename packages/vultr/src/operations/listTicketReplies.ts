import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListTicketRepliesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    reference: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/tickets/{reference}/replies" }));
export type ListTicketRepliesInput = typeof ListTicketRepliesInput.Type;

// Output Schema
export const ListTicketRepliesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          index: Schema.optional(Schema.Number),
          age: Schema.optional(Schema.String),
          date: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          from_email: Schema.optional(Schema.String),
          from_name: Schema.optional(Schema.String),
          from_type: Schema.optional(Schema.String),
          review_comment: Schema.optional(Schema.String),
          review_date: Schema.optional(Schema.String),
          review_rating: Schema.optional(Schema.Number),
          reviewable: Schema.optional(Schema.Number),
          attachments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                index: Schema.optional(Schema.Number),
                context_type: Schema.optional(Schema.String),
                filename: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type ListTicketRepliesOutput = typeof ListTicketRepliesOutput.Type;

// The operation
/**
 * List Ticket Replies
 *
 * List all replies for a given ticket. If attachments exist, their metadata is included, but not the contents.
 *
 * @param reference - The [reference](#operation/list-tickets).
 */
export const listTicketReplies = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListTicketRepliesInput,
  outputSchema: ListTicketRepliesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
