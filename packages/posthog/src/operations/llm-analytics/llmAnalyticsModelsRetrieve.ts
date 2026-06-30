import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsModelsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key_id: Schema.optional(Schema.String),
    provider: Schema.Literals([
      "anthropic",
      "azure_openai",
      "fireworks",
      "gemini",
      "openai",
      "openrouter",
      "together_ai",
    ]),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/models/",
    }),
  );
export type LlmAnalyticsModelsRetrieveInput =
  typeof LlmAnalyticsModelsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsModelsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    models: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        posthog_available: Schema.Boolean,
      }),
    ),
  });
export type LlmAnalyticsModelsRetrieveOutput =
  typeof LlmAnalyticsModelsRetrieveOutput.Type;

// The operation
/**
 * List available models for a provider.
 *
 * @param key_id - Optional provider key UUID. When supplied, models reachable with that specific key are returned (useful for Azure OpenAI, where the deployment list depends on the configured endpoint). Must belong to the same provider as the `provider` parameter.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param provider - LLM provider to list models for. Must be one of the supported providers.
 */
export const llmAnalyticsModelsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmAnalyticsModelsRetrieveInput,
    outputSchema: LlmAnalyticsModelsRetrieveOutput,
  }),
);
