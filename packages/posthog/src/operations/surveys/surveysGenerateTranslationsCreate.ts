import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SurveysGenerateTranslationsCreateInput {
  id: string;
  project_id: string;
  target_language: string;
  source_language?: string;
  overwrite?: boolean;
  survey?: Record<string, unknown>;
}
export const SurveysGenerateTranslationsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    target_language: Schema.String,
    source_language: Schema.optional(Schema.String),
    overwrite: Schema.optional(Schema.Boolean),
    survey: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/surveys/{id}/generate_translations/",
    }),
  ) as unknown as Schema.Codec<SurveysGenerateTranslationsCreateInput>;

// Output Schema
export interface SurveysGenerateTranslationsCreateOutput {
  translations: Record<
    string,
    {
      name?: string;
      thankYouMessageHeader?: string;
      thankYouMessageDescription?: string;
      thankYouMessageCloseButtonText?: string;
    }
  >;
  questions: {
    id: string;
    translations: Record<
      string,
      {
        question?: string;
        description?: string;
        buttonText?: string;
        choices?: string[];
        lowerBoundLabel?: string;
        upperBoundLabel?: string;
        link?: string;
      }
    >;
  }[];
  generated_field_paths: string[];
  trace_id: string;
}
export const SurveysGenerateTranslationsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    translations: Schema.Record(
      Schema.String,
      Schema.Struct({
        name: Schema.optional(Schema.String),
        thankYouMessageHeader: Schema.optional(Schema.String),
        thankYouMessageDescription: Schema.optional(Schema.String),
        thankYouMessageCloseButtonText: Schema.optional(Schema.String),
      }),
    ),
    questions: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        translations: Schema.Record(
          Schema.String,
          Schema.Struct({
            question: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            buttonText: Schema.optional(Schema.String),
            choices: Schema.optional(Schema.Array(Schema.String)),
            lowerBoundLabel: Schema.optional(Schema.String),
            upperBoundLabel: Schema.optional(Schema.String),
            link: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    generated_field_paths: Schema.Array(Schema.String),
    trace_id: Schema.String,
  }) as unknown as Schema.Codec<SurveysGenerateTranslationsCreateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysGenerateTranslationsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SurveysGenerateTranslationsCreateInput,
    outputSchema: SurveysGenerateTranslationsCreateOutput,
  }));
