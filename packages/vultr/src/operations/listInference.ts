import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListInferenceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/inference" }));
export type ListInferenceInput = typeof ListInferenceInput.Type;

// Output Schema
export const ListInferenceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        api_key: Schema.optional(SensitiveString),
      }),
    ),
  ),
});
export type ListInferenceOutput = typeof ListInferenceOutput.Type;

// The operation
/**
 * List Serverless Inference
 *
 * List all Serverless Inference subscriptions in your account.
 */
export const listInference = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInferenceInput,
  outputSchema: ListInferenceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
