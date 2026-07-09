import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateTopicInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  default_subscription: Schema.Literals(["opt_in", "opt_out"]),
  description: Schema.optional(Schema.String),
  visibility: Schema.optional(Schema.Literals(["public", "private"])),
}).pipe(T.Http({ method: "POST", path: "/topics" }));
export type CreateTopicInput = typeof CreateTopicInput.Type;

// Output Schema
export const CreateTopicOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type CreateTopicOutput = typeof CreateTopicOutput.Type;

// The operation
/**
 * Create a new topic
 */
export const createTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTopicInput,
  outputSchema: CreateTopicOutput,
  errors: [UnprocessableEntity] as const,
}));
