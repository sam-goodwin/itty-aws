import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const LlmAnalyticsModelsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/models/",
    }),
  );
export type LlmAnalyticsModelsRetrieveInput =
  typeof LlmAnalyticsModelsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsModelsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LlmAnalyticsModelsRetrieveOutput =
  typeof LlmAnalyticsModelsRetrieveOutput.Type;

// The operation
/**
 * List available models for a provider.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsModelsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmAnalyticsModelsRetrieveInput,
    outputSchema: LlmAnalyticsModelsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
