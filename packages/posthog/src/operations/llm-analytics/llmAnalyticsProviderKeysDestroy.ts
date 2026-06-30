import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsProviderKeysDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsProviderKeysDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/provider_keys/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsProviderKeysDestroyInput>;

// Output Schema
export type LlmAnalyticsProviderKeysDestroyOutput = void;
export const LlmAnalyticsProviderKeysDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsProviderKeysDestroyOutput>;

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
  }));
