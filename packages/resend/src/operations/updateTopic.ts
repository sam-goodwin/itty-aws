import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateTopicInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  visibility: Schema.optional(Schema.Literals(["public", "private"])),
}).pipe(T.Http({ method: "PATCH", path: "/topics/{id}" }));
export type UpdateTopicInput = typeof UpdateTopicInput.Type;

// Output Schema
export const UpdateTopicOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type UpdateTopicOutput = typeof UpdateTopicOutput.Type;

// The operation
/**
 * Update an existing topic
 *
 * @param id - The Topic ID.
 */
export const updateTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateTopicInput,
  outputSchema: UpdateTopicOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
