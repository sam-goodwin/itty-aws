import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsSentimentCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.optional(Schema.Array(Schema.String)),
    analysis_level: Schema.optional(Schema.Literals(["trace", "generation"])),
    force_refresh: Schema.optional(Schema.Boolean),
    date_from: Schema.optional(Schema.NullOr(Schema.String)),
    date_to: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/sentiment/",
    }),
  );
export type LlmAnalyticsSentimentCreateInput =
  typeof LlmAnalyticsSentimentCreateInput.Type;

// Output Schema
export const LlmAnalyticsSentimentCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          label: Schema.optional(Schema.String),
          score: Schema.optional(Schema.Number),
          scores: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
          messages: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                label: Schema.optional(Schema.String),
                score: Schema.optional(Schema.Number),
                scores: Schema.optional(
                  Schema.Record(Schema.String, Schema.Number),
                ),
              }),
            ),
          ),
          message_count: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type LlmAnalyticsSentimentCreateOutput =
  typeof LlmAnalyticsSentimentCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsSentimentCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmAnalyticsSentimentCreateInput,
    outputSchema: LlmAnalyticsSentimentCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
