import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListContactsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  segment_id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/contacts" }));
export type ListContactsInput = typeof ListContactsInput.Type;

// Output Schema
export const ListContactsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        unsubscribed: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
});
export type ListContactsOutput = typeof ListContactsOutput.Type;

// The operation
/**
 * Retrieve a list of contacts
 *
 * @param segment_id - Filter contacts by segment ID.
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listContacts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListContactsInput,
  outputSchema: ListContactsOutput,
}));
