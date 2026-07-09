import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSegmentsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/segments" }));
export type ListSegmentsInput = typeof ListSegmentsInput.Type;

// Output Schema
export const ListSegmentsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        audience_id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListSegmentsOutput = typeof ListSegmentsOutput.Type;

// The operation
/**
 * Retrieve a list of segments
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listSegments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSegmentsInput,
  outputSchema: ListSegmentsOutput,
}));
