import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetInferenceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inferenceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/inference/{inferenceId}" }));
export type GetInferenceInput = typeof GetInferenceInput.Type;

// Output Schema
export const GetInferenceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscription: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      api_key: Schema.optional(SensitiveString),
    }),
  ),
});
export type GetInferenceOutput = typeof GetInferenceOutput.Type;

// The operation
/**
 * Get Serverless Inference
 *
 * Get information about a Serverless Inference subscription.
 *
 * @param inferenceId - The [Inference ID](#operation/list-inference).
 */
export const getInference = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInferenceInput,
  outputSchema: GetInferenceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
