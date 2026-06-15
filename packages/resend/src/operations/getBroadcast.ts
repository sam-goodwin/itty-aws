import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetBroadcastInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/broadcasts/{id}" }));
export type GetBroadcastInput = typeof GetBroadcastInput.Type;

// Output Schema
export const GetBroadcastOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  audience_id: Schema.optional(Schema.NullOr(Schema.String)),
  segment_id: Schema.optional(Schema.NullOr(Schema.String)),
  from: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  reply_to: Schema.optional(Schema.Array(Schema.String)),
  preview_text: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  scheduled_at: Schema.optional(Schema.String),
  sent_at: Schema.optional(Schema.String),
  text: Schema.optional(Schema.NullOr(Schema.String)),
  html: Schema.optional(Schema.NullOr(Schema.String)),
  topic_id: Schema.optional(Schema.NullOr(Schema.String)),
});
export type GetBroadcastOutput = typeof GetBroadcastOutput.Type;

// The operation
/**
 * Retrieve a single broadcast
 *
 * @param id - The Broadcast ID.
 */
export const getBroadcast = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBroadcastInput,
  outputSchema: GetBroadcastOutput,
  errors: [NotFound] as const,
}));
