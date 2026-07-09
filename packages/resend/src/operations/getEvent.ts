import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetEventInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identifier: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/events/{identifier}" }));
export type GetEventInput = typeof GetEventInput.Type;

// Output Schema
export const GetEventOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export type GetEventOutput = typeof GetEventOutput.Type;

// The operation
/**
 * Retrieve a single event
 *
 * @param identifier - The event ID (UUID) or event name.
 */
export const getEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEventInput,
  outputSchema: GetEventOutput,
  errors: [NotFound] as const,
}));
