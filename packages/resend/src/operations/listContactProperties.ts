import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListContactPropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/contact-properties" }));
export type ListContactPropertiesInput = typeof ListContactPropertiesInput.Type;

// Output Schema
export const ListContactPropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          fallback_value: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListContactPropertiesOutput =
  typeof ListContactPropertiesOutput.Type;

// The operation
/**
 * Retrieve a list of contact properties
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listContactProperties = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListContactPropertiesInput,
    outputSchema: ListContactPropertiesOutput,
  }),
);
