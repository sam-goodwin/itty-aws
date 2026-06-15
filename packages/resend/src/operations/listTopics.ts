import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListTopicsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/topics" }));
export type ListTopicsInput = typeof ListTopicsInput.Type;

// Output Schema
export const ListTopicsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        default_subscription: Schema.optional(
          Schema.Literals(["opt_in", "opt_out"]),
        ),
        visibility: Schema.optional(Schema.Literals(["public", "private"])),
        created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListTopicsOutput = typeof ListTopicsOutput.Type;

// The operation
/**
 * Retrieve a list of topics
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listTopics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListTopicsInput,
  outputSchema: ListTopicsOutput,
}));
