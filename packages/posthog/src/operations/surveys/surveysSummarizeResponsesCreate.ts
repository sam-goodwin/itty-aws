import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SurveysSummarizeResponsesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    question_id: Schema.optional(Schema.String),
    question_index: Schema.optional(Schema.Number),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/surveys/{id}/summarize_responses/",
    }),
  );
export type SurveysSummarizeResponsesCreateInput =
  typeof SurveysSummarizeResponsesCreateInput.Type;

// Output Schema
export const SurveysSummarizeResponsesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysSummarizeResponsesCreateOutput =
  typeof SurveysSummarizeResponsesCreateOutput.Type;

// The operation
/**
 * Summarize survey responses. When `question_index` or `question_id` is provided, returns a per-question theme summary using cached `survey.question_summaries` when fresh. When neither is provided, returns the survey-wide headline summary (delegates to summary_headline). Pass `force_refresh=true` in the body to bypass caches.
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param question_id - Question UUID. Preferred over question_index — stable across question edits.
 * @param question_index - Zero-based question index. Omit to get the survey-wide headline instead.
 */
export const surveysSummarizeResponsesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SurveysSummarizeResponsesCreateInput,
    outputSchema: SurveysSummarizeResponsesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
