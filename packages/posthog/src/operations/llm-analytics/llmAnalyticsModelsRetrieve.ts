import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsModelsRetrieveInput {
  project_id: string;
  key_id?: string;
  provider:
    | "anthropic"
    | "azure_openai"
    | "fireworks"
    | "gemini"
    | "openai"
    | "openrouter"
    | "together_ai";
}
export const LlmAnalyticsModelsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<LlmAnalyticsModelsRetrieveInput>;

// Output Schema
export interface LlmAnalyticsModelsRetrieveOutput {
  models: { id: string; posthog_available: boolean }[];
}
export const LlmAnalyticsModelsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    models: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        posthog_available: Schema.Boolean,
      }),
    ),
  }) as unknown as Schema.Codec<LlmAnalyticsModelsRetrieveOutput>;

// The operation
/**
 * List available models for a provider.
 *
 * @param key_id - Optional provider key UUID. When supplied, models reachable with that specific key are returned (useful for Azure OpenAI, where the deployment list depends on the configured endpoint). Must belong to the same provider as the `provider` parameter.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param provider - LLM provider to list models for. Must be one of the supported providers.
 */
export const llmAnalyticsModelsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LlmAnalyticsModelsRetrieveInput,
  outputSchema: LlmAnalyticsModelsRetrieveOutput,
}));
