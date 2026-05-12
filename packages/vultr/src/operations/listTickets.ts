import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListTicketsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tickets" }));
export type ListTicketsInput = typeof ListTicketsInput.Type;

// Output Schema
export const ListTicketsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tickets: Schema.optional(
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
export type ListTicketsOutput = typeof ListTicketsOutput.Type;

// The operation
/**
 * List Tickets
 *
 * List all open customer tickets on the account.
 */
export const listTickets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListTicketsInput,
  outputSchema: ListTicketsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
