import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/api-keys" }));
export type ListApiKeysInput = typeof ListApiKeysInput.Type;

// Output Schema
export const ListApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
});
export type ListApiKeysOutput = typeof ListApiKeysOutput.Type;

// The operation
/**
 * Retrieve a list of API keys
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListApiKeysInput,
  outputSchema: ListApiKeysOutput,
}));
