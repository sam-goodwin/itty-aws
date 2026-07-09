import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListWebhooksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/webhooks" }));
export type ListWebhooksInput = typeof ListWebhooksInput.Type;

// Output Schema
export const ListWebhooksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        endpoint: Schema.optional(Schema.String),
        events: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
        status: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListWebhooksOutput = typeof ListWebhooksOutput.Type;

// The operation
/**
 * Retrieve a list of webhooks
 *
 * @param limit - Maximum number of webhooks to return.
 * @param after - Pagination cursor to fetch results after this webhook ID. Cannot be used with 'before'.
 * @param before - Pagination cursor to fetch results before this webhook ID. Cannot be used with 'after'.
 */
export const listWebhooks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListWebhooksInput,
  outputSchema: ListWebhooksOutput,
}));
