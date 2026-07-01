import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsTranslateCreateInput {
  project_id: string;
  text?: string;
  target_language?: string;
}
export const LlmAnalyticsTranslateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    text: Schema.optional(Schema.String),
    target_language: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/translate/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsTranslateCreateInput>;

// Output Schema
export type LlmAnalyticsTranslateCreateOutput = Record<string, unknown>;
export const LlmAnalyticsTranslateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<LlmAnalyticsTranslateCreateOutput>;

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
  }),
);
