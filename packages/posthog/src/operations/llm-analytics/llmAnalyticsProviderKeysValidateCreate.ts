import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const LlmAnalyticsProviderKeysValidateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/provider_keys/{id}/validate/",
    }),
  );
export type LlmAnalyticsProviderKeysValidateCreateInput =
  typeof LlmAnalyticsProviderKeysValidateCreateInput.Type;

// Output Schema
export const LlmAnalyticsProviderKeysValidateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LlmAnalyticsProviderKeysValidateCreateOutput =
  typeof LlmAnalyticsProviderKeysValidateCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this llm provider key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsProviderKeysValidateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsProviderKeysValidateCreateInput,
    outputSchema: LlmAnalyticsProviderKeysValidateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
