import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteInferenceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inferenceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/inference/{inferenceId}" }));
export type DeleteInferenceInput = typeof DeleteInferenceInput.Type;

// Output Schema
export const DeleteInferenceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteInferenceOutput = typeof DeleteInferenceOutput.Type;

// The operation
/**
 * Delete Serverless Inference
 *
 * Delete a Serverless Inference subscription.
 *
 * @param inferenceId - The [Inference ID](#operation/list-inference).
 */
export const deleteInference = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInferenceInput,
  outputSchema: DeleteInferenceOutput,
  errors: [BadRequest, NotFound] as const,
}));
