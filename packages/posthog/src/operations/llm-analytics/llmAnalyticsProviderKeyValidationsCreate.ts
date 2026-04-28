import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const LlmAnalyticsProviderKeyValidationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/provider_key_validations/",
    }),
  );
export type LlmAnalyticsProviderKeyValidationsCreateInput =
  typeof LlmAnalyticsProviderKeyValidationsCreateInput.Type;

// Output Schema
export const LlmAnalyticsProviderKeyValidationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LlmAnalyticsProviderKeyValidationsCreateOutput =
  typeof LlmAnalyticsProviderKeyValidationsCreateOutput.Type;

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
    errors: [Forbidden, NotFound] as const,
  }));
