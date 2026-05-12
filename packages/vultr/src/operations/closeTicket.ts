import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CloseTicketInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/tickets/{reference}" }));
export type CloseTicketInput = typeof CloseTicketInput.Type;

// Output Schema
export const CloseTicketOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloseTicketOutput = typeof CloseTicketOutput.Type;

// The operation
/**
 * Close Ticket
 *
 * Close an open ticket.
 *
 * @param reference - The [reference](#operation/list-tickets).
 */
export const closeTicket = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloseTicketInput,
  outputSchema: CloseTicketOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
