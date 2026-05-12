import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInferenceUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    inferenceId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/inference/{inferenceId}/usage" }));
export type GetInferenceUsageInput = typeof GetInferenceUsageInput.Type;

// Output Schema
export const GetInferenceUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usage: Schema.optional(
      Schema.Struct({
        chat_by_model: Schema.optional(
          Schema.Struct({
            current_month: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  model: Schema.optional(Schema.String),
                  tokens: Schema.optional(Schema.Number),
                  input_tokens: Schema.optional(Schema.Number),
                  output_price: Schema.optional(Schema.Number),
                  input_price: Schema.optional(Schema.Number),
                }),
              ),
            ),
            previous_month: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  model: Schema.optional(Schema.String),
                  tokens: Schema.optional(Schema.Number),
                  input_tokens: Schema.optional(Schema.Number),
                  output_price: Schema.optional(Schema.Number),
                  input_price: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        audio: Schema.optional(
          Schema.Struct({
            tts_characters: Schema.optional(Schema.Number),
            tts_sm_characters: Schema.optional(Schema.Number),
          }),
        ),
        image: Schema.optional(
          Schema.Struct({
            megapixels: Schema.optional(Schema.Number),
            sm_megapixels: Schema.optional(Schema.Number),
          }),
        ),
        chat: Schema.optional(
          Schema.Struct({
            completion_tokens: Schema.optional(Schema.Number),
            cost: Schema.optional(Schema.Number),
            input_tokens: Schema.optional(Schema.Number),
            input_cost: Schema.optional(Schema.Number),
            current_tokens: Schema.optional(Schema.Number),
            monthly_allotment: Schema.optional(Schema.Number),
            overage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  });
export type GetInferenceUsageOutput = typeof GetInferenceUsageOutput.Type;

// The operation
/**
 * Get Serverless Inference Usage Information
 *
 * Get usage information for a Serverless Inference subscription.
 *
 * @param inferenceId - The [Inference ID](#operation/list-inference).
 */
export const getInferenceUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInferenceUsageInput,
  outputSchema: GetInferenceUsageOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
