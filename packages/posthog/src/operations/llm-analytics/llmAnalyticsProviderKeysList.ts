import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const LlmAnalyticsProviderKeysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/provider_keys/",
    }),
  );
export type LlmAnalyticsProviderKeysListInput =
  typeof LlmAnalyticsProviderKeysListInput.Type;

// Output Schema
export const LlmAnalyticsProviderKeysListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        provider: Schema.Literals([
          "openai",
          "anthropic",
          "gemini",
          "openrouter",
          "fireworks",
          "azure_openai",
        ]),
        name: Schema.String,
        state: Schema.Literals(["unknown", "ok", "invalid", "error"]),
        error_message: Schema.NullOr(Schema.String),
        api_key: Schema.optional(SensitiveString),
        api_key_masked: Schema.String,
        azure_endpoint: Schema.optional(Schema.String),
        api_version: Schema.optional(Schema.String),
        azure_endpoint_display: Schema.NullOr(Schema.String),
        api_version_display: Schema.NullOr(Schema.String),
        set_as_active: Schema.optional(Schema.Boolean),
        created_at: Schema.String,
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        last_used_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type LlmAnalyticsProviderKeysListOutput =
  typeof LlmAnalyticsProviderKeysListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsProviderKeysList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsProviderKeysListInput,
    outputSchema: LlmAnalyticsProviderKeysListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
