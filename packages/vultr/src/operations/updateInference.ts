import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateInferenceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inferenceId: Schema.String.pipe(T.PathParam()),
  label: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/inference/{inferenceId}" }));
export type UpdateInferenceInput = typeof UpdateInferenceInput.Type;

// Output Schema
export const UpdateInferenceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateInferenceOutput = typeof UpdateInferenceOutput.Type;

// The operation
/**
 * Update Serverless Inference
 *
 * Update information for a Serverless Inference subscription.
 *
 * @param inferenceId - The [Inference ID](#operation/list-inference).
 */
export const updateInference = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInferenceInput,
  outputSchema: UpdateInferenceOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
