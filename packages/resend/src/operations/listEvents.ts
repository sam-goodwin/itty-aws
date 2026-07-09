import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListEventsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/events" }));
export type ListEventsInput = typeof ListEventsInput.Type;

// Output Schema
export const ListEventsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
});
export type ListEventsOutput = typeof ListEventsOutput.Type;

// The operation
/**
 * Retrieve a list of events
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListEventsInput,
  outputSchema: ListEventsOutput,
}));
