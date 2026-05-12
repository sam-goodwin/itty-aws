import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetTicketInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/tickets/{reference}" }));
export type GetTicketInput = typeof GetTicketInput.Type;

// Output Schema
export const GetTicketOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ticket: Schema.optional(
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
});
export type GetTicketOutput = typeof GetTicketOutput.Type;

// The operation
/**
 * Get Ticket
 *
 * Get information about a ticket.
 *
 * @param reference - The [reference](#operation/list-tickets).
 */
export const getTicket = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTicketInput,
  outputSchema: GetTicketOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
