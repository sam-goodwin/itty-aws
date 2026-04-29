import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTranslateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    text: Schema.String,
    target_language: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/translate/",
    }),
  );
export type LlmAnalyticsTranslateCreateInput =
  typeof LlmAnalyticsTranslateCreateInput.Type;

// Output Schema
export const LlmAnalyticsTranslateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LlmAnalyticsTranslateCreateOutput =
  typeof LlmAnalyticsTranslateCreateOutput.Type;

// The operation
/**
 * Translate text to target language.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTranslateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmAnalyticsTranslateCreateInput,
    outputSchema: LlmAnalyticsTranslateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
