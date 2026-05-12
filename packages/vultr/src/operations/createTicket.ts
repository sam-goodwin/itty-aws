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
export const CreateTicketInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subject: Schema.String,
  description: Schema.String,
  "sub-uuid": Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/tickets" }));
export type CreateTicketInput = typeof CreateTicketInput.Type;

// Output Schema
export const CreateTicketOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ticket: Schema.optional(
    Schema.Array(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        date_last_entry: Schema.optional(Schema.String),
        linked_subscriptions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              uuid: Schema.optional(Schema.String),
            }),
          ),
        ),
        reference: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type CreateTicketOutput = typeof CreateTicketOutput.Type;

// The operation
/**
 * Create Ticket
 *
 * Create a new ticket.
 */
export const createTicket = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTicketInput,
  outputSchema: CreateTicketOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
