import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateEventInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identifier: Schema.String.pipe(T.PathParam()),
  schema: Schema.NullOr(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/events/{identifier}" }));
export type UpdateEventInput = typeof UpdateEventInput.Type;

// Output Schema
export const UpdateEventOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type UpdateEventOutput = typeof UpdateEventOutput.Type;

// The operation
/**
 * Update an event
 *
 * @param identifier - The event ID (UUID) or event name.
 */
export const updateEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateEventInput,
  outputSchema: UpdateEventOutput,
}));
