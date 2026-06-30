import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SurveysQuestionLabelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/question_labels/",
    }),
  );
export type SurveysQuestionLabelsInput = typeof SurveysQuestionLabelsInput.Type;

// Output Schema
export const SurveysQuestionLabelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.Array(
      Schema.Struct({
        question_id: Schema.String,
        question_text: Schema.String,
        question_index: Schema.Number,
        survey_id: Schema.String,
        survey_name: Schema.String,
      }),
    ),
  });
export type SurveysQuestionLabelsOutput =
  typeof SurveysQuestionLabelsOutput.Type;

// The operation
/**
 * Return a slim list of question labels for the team's surveys. Used by the frontend to resolve `$survey_response_<question_id>` property keys into human-readable question text without loading the full survey payload.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysQuestionLabels = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SurveysQuestionLabelsInput,
    outputSchema: SurveysQuestionLabelsOutput,
  }),
);
