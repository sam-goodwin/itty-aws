import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetTopicInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/topics/{id}" }));
export type GetTopicInput = typeof GetTopicInput.Type;

// Output Schema
export const GetTopicOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  default_subscription: Schema.optional(Schema.Literals(["opt_in", "opt_out"])),
  visibility: Schema.optional(Schema.Literals(["public", "private"])),
  created_at: Schema.optional(Schema.String),
});
export type GetTopicOutput = typeof GetTopicOutput.Type;

// The operation
/**
 * Retrieve a single topic
 *
 * @param id - The Topic ID.
 */
export const getTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTopicInput,
  outputSchema: GetTopicOutput,
  errors: [NotFound] as const,
}));
