import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const SendEventInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  event: Schema.String,
  contact_id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).pipe(T.Http({ method: "POST", path: "/events/send" }));
export type SendEventInput = typeof SendEventInput.Type;

// Output Schema
export const SendEventOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SendEventOutput = typeof SendEventOutput.Type;

// The operation
/**
 * Send an event
 */
export const sendEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SendEventInput,
  outputSchema: SendEventOutput,
  errors: [UnprocessableEntity] as const,
}));
