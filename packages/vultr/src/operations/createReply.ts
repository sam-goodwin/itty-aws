import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateReplyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.String.pipe(T.PathParam()),
  description: Schema.String,
  attachments: Schema.optional(
    Schema.Array(
      Schema.Struct({
        file: Schema.optional(Schema.String),
        filename: Schema.optional(Schema.String),
      }),
    ),
  ),
}).pipe(T.Http({ method: "POST", path: "/tickets/{reference}/replies" }));
export type CreateReplyInput = typeof CreateReplyInput.Type;

// Output Schema
export const CreateReplyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateReplyOutput = typeof CreateReplyOutput.Type;

// The operation
/**
 * Create Ticket Reply
 *
 * Create a new reply to an existing ticket.
 *
 * @param reference - The [reference](#operation/list-tickets).
 */
export const createReply = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateReplyInput,
  outputSchema: CreateReplyOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
