import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteTopicInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/topics/{id}" }));
export type DeleteTopicInput = typeof DeleteTopicInput.Type;

// Output Schema
export const DeleteTopicOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteTopicOutput = typeof DeleteTopicOutput.Type;

// The operation
/**
 * Remove an existing topic
 *
 * @param id - The Topic ID.
 */
export const deleteTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTopicInput,
  outputSchema: DeleteTopicOutput,
  errors: [NotFound] as const,
}));
