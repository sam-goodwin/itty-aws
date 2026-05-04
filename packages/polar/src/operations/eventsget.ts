import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/events/{id}" }));
export type EventsgetInput = typeof EventsgetInput.Type;

// Output Schema
export const EventsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type EventsgetOutput = typeof EventsgetOutput.Type;

// The operation
/**
 * Get Event
 *
 * Get an event by ID.
 * **Scopes**: `events:read` `events:write`
 *
 * @param id - The event ID.
 */
export const eventsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsgetInput,
  outputSchema: EventsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
