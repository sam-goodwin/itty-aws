import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListAutomationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/automations" }));
export type ListAutomationsInput = typeof ListAutomationsInput.Type;

// Output Schema
export const ListAutomationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListAutomationsOutput = typeof ListAutomationsOutput.Type;

// The operation
/**
 * Retrieve a list of automations
 *
 * @param status - Filter automations by status.
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listAutomations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListAutomationsInput,
  outputSchema: ListAutomationsOutput,
}));
