import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateBroadcastInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  segment_id: Schema.String,
  audience_id: Schema.optional(Schema.String),
  from: Schema.String,
  subject: Schema.String,
  reply_to: Schema.optional(Schema.Array(Schema.String)),
  preview_text: Schema.optional(Schema.String),
  html: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  topic_id: Schema.optional(Schema.String),
  send: Schema.optional(Schema.Boolean),
  scheduled_at: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/broadcasts" }));
export type CreateBroadcastInput = typeof CreateBroadcastInput.Type;

// Output Schema
export const CreateBroadcastOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type CreateBroadcastOutput = typeof CreateBroadcastOutput.Type;

// The operation
/**
 * Create a broadcast
 */
export const createBroadcast = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBroadcastInput,
  outputSchema: CreateBroadcastOutput,
  errors: [UnprocessableEntity] as const,
}));
