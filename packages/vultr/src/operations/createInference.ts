import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateInferenceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/inference" }));
export type CreateInferenceInput = typeof CreateInferenceInput.Type;

// Output Schema
export const CreateInferenceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscription: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      api_key: Schema.optional(SensitiveString),
    }),
  ),
});
export type CreateInferenceOutput = typeof CreateInferenceOutput.Type;

// The operation
/**
 * Create Serverless Inference
 *
 * Create a new Serverless Inference subscription.
 */
export const createInference = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInferenceInput,
  outputSchema: CreateInferenceOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
