import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListContactTopicsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    contact_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/contacts/{contact_id}/topics" }));
export type ListContactTopicsInput = typeof ListContactTopicsInput.Type;

// Output Schema
export const ListContactTopicsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          subscription: Schema.optional(Schema.Literals(["opt_in", "opt_out"])),
        }),
      ),
    ),
  });
export type ListContactTopicsOutput = typeof ListContactTopicsOutput.Type;

// The operation
/**
 * Retrieve topics for a contact
 *
 * @param contact_id - The Contact ID or email address.
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listContactTopics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListContactTopicsInput,
  outputSchema: ListContactTopicsOutput,
}));
