import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DeleteEventInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identifier: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/events/{identifier}" }));
export type DeleteEventInput = typeof DeleteEventInput.Type;

// Output Schema
export const DeleteEventOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteEventOutput = typeof DeleteEventOutput.Type;

// The operation
/**
 * Delete an event
 *
 * @param identifier - The event ID (UUID) or event name.
 */
export const deleteEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteEventInput,
  outputSchema: DeleteEventOutput,
}));
