import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SurveysQuestionLabelsInput {
  project_id: string;
}
export const SurveysQuestionLabelsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/question_labels/",
    }),
  ) as unknown as Schema.Codec<SurveysQuestionLabelsInput>;

// Output Schema
export interface SurveysQuestionLabelsOutput {
  labels: {
    question_id: string;
    question_text: string;
    question_index: number;
    survey_id: string;
    survey_name: string;
  }[];
}
export const SurveysQuestionLabelsOutput =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.Array(
      Schema.Struct({
        question_id: Schema.String,
        question_text: Schema.String,
        question_index: Schema.Number,
        survey_id: Schema.String,
        survey_name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<SurveysQuestionLabelsOutput>;

// The operation
/**
 * Return a slim list of question labels for the team's surveys. Used by the frontend to resolve `$survey_response_<question_id>` property keys into human-readable question text without loading the full survey payload.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysQuestionLabels = /*@__PURE__*/ API.make(() => ({
  inputSchema: SurveysQuestionLabelsInput,
  outputSchema: SurveysQuestionLabelsOutput,
}));
