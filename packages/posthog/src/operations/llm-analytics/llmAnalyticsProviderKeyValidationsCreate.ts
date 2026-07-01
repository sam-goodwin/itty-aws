import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsProviderKeyValidationsCreateInput {
  project_id: string;
}
export const LlmAnalyticsProviderKeyValidationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/provider_key_validations/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsProviderKeyValidationsCreateInput>;

// Output Schema
export type LlmAnalyticsProviderKeyValidationsCreateOutput = Record<
  string,
  unknown
>;
export const LlmAnalyticsProviderKeyValidationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<LlmAnalyticsProviderKeyValidationsCreateOutput>;

// The operation
/**
 * Validate LLM provider API keys without persisting them
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsProviderKeyValidationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsProviderKeyValidationsCreateInput,
    outputSchema: LlmAnalyticsProviderKeyValidationsCreateOutput,
  }));
