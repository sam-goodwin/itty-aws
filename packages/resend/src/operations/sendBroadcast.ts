import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const SendBroadcastInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  scheduled_at: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/broadcasts/{id}/send" }));
export type SendBroadcastInput = typeof SendBroadcastInput.Type;

// Output Schema
export const SendBroadcastOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
export type SendBroadcastOutput = typeof SendBroadcastOutput.Type;

// The operation
/**
 * Send or schedule a broadcast
 *
 * @param id - The Broadcast ID.
 */
export const sendBroadcast = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SendBroadcastInput,
  outputSchema: SendBroadcastOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
