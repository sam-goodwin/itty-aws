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
export const EventsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  timestamp: Schema.String,
  organization_id: Schema.String,
  customer_id: Schema.NullOr(Schema.String),
  customer: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  external_customer_id: Schema.NullOr(Schema.String),
  member_id: Schema.optional(Schema.NullOr(Schema.String)),
  external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
  child_count: Schema.optional(Schema.Number),
  parent_id: Schema.optional(Schema.NullOr(Schema.String)),
  label: Schema.String,
  source: Schema.Literals(["system", "user"]),
  name: Schema.String,
  metadata: Schema.Record(Schema.String, Schema.Unknown),
});
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
