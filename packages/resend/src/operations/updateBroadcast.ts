import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateBroadcastInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  audience_id: Schema.optional(Schema.String),
  segment_id: Schema.optional(Schema.String),
  from: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  reply_to: Schema.optional(Schema.Array(Schema.String)),
  preview_text: Schema.optional(Schema.String),
  html: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  topic_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/broadcasts/{id}" }));
export type UpdateBroadcastInput = typeof UpdateBroadcastInput.Type;

// Output Schema
export const UpdateBroadcastOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type UpdateBroadcastOutput = typeof UpdateBroadcastOutput.Type;

// The operation
/**
 * Update an existing broadcast
 *
 * @param id - The Broadcast ID.
 */
export const updateBroadcast = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateBroadcastInput,
  outputSchema: UpdateBroadcastOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
