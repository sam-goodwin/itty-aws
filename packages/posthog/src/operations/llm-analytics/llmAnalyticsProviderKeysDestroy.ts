import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsProviderKeysDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_analytics/provider_keys/{id}/",
    }),
  );
export type LlmAnalyticsProviderKeysDestroyInput =
  typeof LlmAnalyticsProviderKeysDestroyInput.Type;

// Output Schema
export const LlmAnalyticsProviderKeysDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsProviderKeysDestroyOutput =
  typeof LlmAnalyticsProviderKeysDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this llm provider key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsProviderKeysDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsProviderKeysDestroyInput,
    outputSchema: LlmAnalyticsProviderKeysDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
