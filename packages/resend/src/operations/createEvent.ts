import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateEventInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
}).pipe(T.Http({ method: "POST", path: "/events" }));
export type CreateEventInput = typeof CreateEventInput.Type;

// Output Schema
export const CreateEventOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type CreateEventOutput = typeof CreateEventOutput.Type;

// The operation
/**
 * Create an event
 */
export const createEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEventInput,
  outputSchema: CreateEventOutput,
  errors: [UnprocessableEntity] as const,
}));
